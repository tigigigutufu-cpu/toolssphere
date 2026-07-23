// ============================================================
// TOOLSPHERE — API INTEGRATIONS
// ============================================================

// 🔑 ====== APIS (Replace with your keys) ======
const GEMINI_KEY = 'AIzaSy...'; // Google Gemini API Key
const HUGGINGFACE_TOKEN = 'hf_...'; // Hugging Face Access Token
const REMOVEBG_KEY = '...'; // Remove.bg API Key

// ============================================================
// 1. GEMINI AI — Chat Assistant / Grammar Checker
// ============================================================
async function callGemini(prompt) {
    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_KEY}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }]
                })
            }
        );
        const data = await response.json();
        return data.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, something went wrong.';
    } catch (error) {
        console.error('Gemini API Error:', error);
        return 'Error: Unable to reach AI assistant.';
    }
}

// ============================================================
// 2. HUGGING FACE — Image to Prompt / Image Enhancer
// ============================================================
async function imageToPrompt(imageFile) {
    try {
        const formData = new FormData();
        formData.append('image', imageFile);

        const response = await fetch(
            'https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-large',
            {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${HUGGINGFACE_TOKEN}` },
                body: formData
            }
        );
        const data = await response.json();
        return data[0]?.generated_text || 'No description generated.';
    } catch (error) {
        console.error('Hugging Face API Error:', error);
        return 'Error: Unable to generate prompt.';
    }
}

// Image Enhancer (Real-ESRGAN)
async function enhanceImage(imageFile) {
    try {
        const formData = new FormData();
        formData.append('image', imageFile);

        const response = await fetch(
            'https://api-inference.huggingface.co/models/taesiri/4x_real_esrgan',
            {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${HUGGINGFACE_TOKEN}` },
                body: formData
            }
        );
        const blob = await response.blob();
        return URL.createObjectURL(blob);
    } catch (error) {
        console.error('Image Enhancer Error:', error);
        return null;
    }
}

// ============================================================
// 3. REMOVE.BG — Background Remover
// ============================================================
async function removeBackground(imageFile) {
    try {
        const formData = new FormData();
        formData.append('image_file', imageFile);

        const response = await fetch('https://api.remove.bg/v1.0/removebg', {
            method: 'POST',
            headers: { 'X-Api-Key': REMOVEBG_KEY },
            body: formData
        });
        const blob = await response.blob();
        return URL.createObjectURL(blob);
    } catch (error) {
        console.error('Remove.bg Error:', error);
        return null;
    }
}

// ============================================================
// 4. WEATHER API (Free)
// ============================================================
async function getWeather(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_WEATHER_API_KEY&units=metric`
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Weather API Error:', error);
        return null;
    }
}

// ============================================================
// 5. CURRENCY CONVERTER (Free)
// ============================================================
async function convertCurrency(amount, from, to) {
    try {
        const response = await fetch(
            `https://api.exchangerate-api.com/v4/latest/${from}`
        );
        const data = await response.json();
        const rate = data.rates[to];
        return amount * rate;
    } catch (error) {
        console.error('Currency API Error:', error);
        return null;
    }
}

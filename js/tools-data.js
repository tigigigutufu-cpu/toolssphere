// ============================================================
// TOOLSPHERE — TOOLS DATA (50 Tools)
// ============================================================

window.toolsData = [
    // ===== TEXT TOOLS (6) =====
    { id: 'word-counter', name: 'Word Counter', icon: 'fa-solid fa-book', category: 'text', desc: 'Count words, characters & paragraphs' },
    { id: 'case-converter', name: 'Case Converter', icon: 'fa-solid fa-text-height', category: 'text', desc: 'UPPER, lower, Title, Sentence' },
    { id: 'text-repeater', name: 'Text Repeater', icon: 'fa-solid fa-repeat', category: 'text', desc: 'Repeat text N number of times' },
    { id: 'find-replace', name: 'Find & Replace', icon: 'fa-solid fa-magnifying-glass-plus', category: 'text', desc: 'Find and replace text easily' },
    { id: 'text-to-slug', name: 'Text to Slug', icon: 'fa-solid fa-link', category: 'text', desc: 'Convert text to URL-friendly slug' },
    { id: 'grammar-checker', name: 'Grammar Checker', icon: 'fa-solid fa-spell-check', category: 'text', desc: 'Check grammar with AI' },

    // ===== IMAGE TOOLS (8) =====
    { id: 'image-compressor', name: 'Image Compressor', icon: 'fa-solid fa-compress', category: 'image', desc: 'Compress images without quality loss' },
    { id: 'image-resizer', name: 'Image Resizer', icon: 'fa-solid fa-expand', category: 'image', desc: 'Resize images to any dimension' },
    { id: 'png-to-jpg', name: 'PNG to JPG', icon: 'fa-solid fa-image', category: 'image', desc: 'Convert PNG to JPG format' },
    { id: 'jpg-to-png', name: 'JPG to PNG', icon: 'fa-solid fa-file-image', category: 'image', desc: 'Convert JPG to PNG format' },
    { id: 'image-generator', name: 'Image Generator', icon: 'fa-solid fa-wand-magic-sparkles', category: 'image', desc: 'Generate images with AI (Pollinations)' },
    { id: 'bg-remover', name: 'BG Remover', icon: 'fa-solid fa-crop-simple', category: 'image', desc: 'Remove background from images' },
    { id: 'image-enhancer', name: 'Image Enhancer', icon: 'fa-solid fa-magic', category: 'image', desc: 'Enhance image quality with AI' },
    { id: 'image-to-prompt', name: 'Image to Prompt', icon: 'fa-solid fa-image', category: 'image', desc: 'Generate AI prompt from image' },

    // ===== SEO TOOLS (4) =====
    { id: 'meta-tag-generator', name: 'Meta Tag Generator', icon: 'fa-solid fa-tag', category: 'seo', desc: 'Generate meta tags for SEO' },
    { id: 'keyword-density', name: 'Keyword Density', icon: 'fa-solid fa-key', category: 'seo', desc: 'Check keyword density in text' },
    { id: 'title-generator', name: 'Title Generator', icon: 'fa-solid fa-heading', category: 'seo', desc: 'Generate catchy titles' },
    { id: 'reading-time', name: 'Reading Time', icon: 'fa-solid fa-clock', category: 'seo', desc: 'Calculate article reading time' },

    // ===== SOCIAL MEDIA TOOLS (3) =====
    { id: 'hashtag-generator', name: 'Hashtag Generator', icon: 'fa-solid fa-hashtag', category: 'social', desc: 'Generate trending hashtags' },
    { id: 'instagram-caption', name: 'Instagram Caption', icon: 'fa-brands fa-instagram', category: 'social', desc: 'Generate Instagram captions' },
    { id: 'social-bio-generator', name: 'Social Bio Generator', icon: 'fa-solid fa-user-pen', category: 'social', desc: 'Generate social media bios' },

    // ===== DESIGN TOOLS (3) =====
    { id: 'thumbnail-text-adder', name: 'Thumbnail Text Adder', icon: 'fa-solid fa-text', category: 'design', desc: 'Add text, fonts & effects to thumbnails' },
    { id: 'gradient-generator', name: 'Gradient Generator', icon: 'fa-solid fa-fill-drip', category: 'design', desc: 'Generate beautiful CSS gradients' },
    { id: 'box-shadow-generator', name: 'Box Shadow Generator', icon: 'fa-solid fa-cube', category: 'design', desc: 'Generate CSS box shadows' },

    // ===== VIDEO TOOLS (2) =====
    { id: 'video-generator', name: 'Video Generator', icon: 'fa-solid fa-video', category: 'video', desc: 'Create animated text videos' },
    { id: 'video-to-gif', name: 'Video to GIF', icon: 'fa-solid fa-film', category: 'video', desc: 'Convert video to GIF' },

    // ===== PDF TOOLS (3) =====
    { id: 'pdf-to-text-extractor', name: 'PDF to Text', icon: 'fa-solid fa-file-pdf', category: 'pdf', desc: 'Extract text from PDF' },
    { id: 'pdf-compressor', name: 'PDF Compressor', icon: 'fa-solid fa-file-zipper', category: 'pdf', desc: 'Compress PDF files' },
    { id: 'pdf-merger', name: 'PDF Merger', icon: 'fa-solid fa-object-group', category: 'pdf', desc: 'Merge multiple PDFs' },

    // ===== CODE TOOLS (4) =====
    { id: 'html-formatter', name: 'HTML Formatter', icon: 'fa-brands fa-html5', category: 'code', desc: 'Format and beautify HTML' },
    { id: 'json-formatter', name: 'JSON Formatter', icon: 'fa-solid fa-brackets-curly', category: 'code', desc: 'Format and validate JSON' },
    { id: 'css-minifier', name: 'CSS Minifier', icon: 'fa-brands fa-css3-alt', category: 'code', desc: 'Minify CSS code' },
    { id: 'regex-tester', name: 'Regex Tester', icon: 'fa-solid fa-code', category: 'code', desc: 'Test regular expressions' },

    // ===== MATH TOOLS (4) =====
    { id: 'percentage-calculator', name: 'Percentage Calculator', icon: 'fa-solid fa-percent', category: 'math', desc: 'Calculate percentages easily' },
    { id: 'bmi-calculator', name: 'BMI Calculator', icon: 'fa-solid fa-weight-scale', category: 'math', desc: 'Calculate BMI instantly' },
    { id: 'currency-converter', name: 'Currency Converter', icon: 'fa-solid fa-dollar-sign', category: 'math', desc: 'Convert currencies (Live rates)' },
    { id: 'unit-converter', name: 'Unit Converter', icon: 'fa-solid fa-ruler', category: 'math', desc: 'Length, Mass, Volume converter' },

    // ===== NETWORK TOOLS (2) =====
    { id: 'ip-lookup', name: 'IP Address Lookup', icon: 'fa-solid fa-network-wired', category: 'network', desc: 'Get your IP & location' },
    { id: 'ssl-checker', name: 'SSL Checker', icon: 'fa-solid fa-shield-halved', category: 'network', desc: 'Check SSL certificate validity' },

    // ===== SECURITY TOOLS (3) =====
    { id: 'password-generator', name: 'Password Generator', icon: 'fa-solid fa-key', category: 'security', desc: 'Generate strong passwords' },
    { id: 'password-strength', name: 'Password Strength Checker', icon: 'fa-solid fa-shield', category: 'security', desc: 'Check password strength' },
    { id: 'url-shortener', name: 'URL Shortener', icon: 'fa-solid fa-chain', category: 'security', desc: 'Shorten your URLs' },

    // ===== UTILITY TOOLS (4) =====
    { id: 'qr-code', name: 'QR Code Generator', icon: 'fa-solid fa-qrcode', category: 'utility', desc: 'Generate QR codes instantly' },
    { id: 'qr-scanner', name: 'QR Code Scanner', icon: 'fa-solid fa-qrcode', category: 'utility', desc: 'Scan QR codes with camera' },
    { id: 'weather-check', name: 'Weather Check', icon: 'fa-solid fa-cloud-sun', category: 'utility', desc: 'Check weather anywhere' },
    { id: 'countdown-timer', name: 'Countdown Timer', icon: 'fa-solid fa-clock', category: 'utility', desc: 'Set event countdown' },

    // ===== KIDS TOOLS (2) =====
    { id: 'abcd-learning', name: 'ABCD Learning', icon: 'fa-solid fa-font', category: 'kids', desc: 'Learn alphabets A to Z' },
    { id: 'numbers-learning', name: 'Numbers Learning', icon: 'fa-solid fa-list-ol', category: 'kids', desc: 'Learn numbers 1 to 20' },

    // ===== ISLAMIC TOOLS (2) =====
    { id: 'tasbeeh-counter', name: 'Tasbeeh Counter', icon: 'fa-solid fa-hands-praying', category: 'islamic', desc: 'Digital Dhikr counter' },
    { id: 'islamic-calendar', name: 'Islamic Calendar', icon: 'fa-solid fa-calendar', category: 'islamic', desc: 'Hijri calendar' }
];

console.log('✅ ToolSphere loaded with ' + window.toolsData.length + ' tools!');

// ============================================================
// TOOLSPHERE — MAIN.JS
// ============================================================

let currentCategory = 'all';
let toolsData = [];

function loadTools() {
    if (window.toolsData) {
        toolsData = window.toolsData;
        renderTools();
    }
}

function renderTools(category = 'all', search = '') {
    const grid = document.getElementById('toolsGrid');
    if (!grid) return;

    let filtered = [...toolsData];

    if (category !== 'all') {
        filtered = filtered.filter(t => t.category === category);
    }

    if (search.trim() !== '') {
        const s = search.toLowerCase();
        filtered = filtered.filter(t =>
            t.name.toLowerCase().includes(s) ||
            (t.desc && t.desc.toLowerCase().includes(s))
        );
    }

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column:1/-1; text-align:center; padding:60px 20px; color:rgba(255,255,255,0.3);">
                <i class="fas fa-search" style="font-size:48px; display:block; margin-bottom:16px;"></i>
                <p>No tools found. Try a different search!</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(tool => `
        <div class="tool-card" onclick="openTool('${tool.id}')">
            <i class="${tool.icon} icon"></i>
            <h3>${tool.name}</h3>
            <p>${tool.desc || ''}</p>
            <span class="free-tag">FREE</span>
        </div>
    `).join('');
}

function filterTools(search) {
    renderTools(currentCategory, search);
}

function openTool(id) {
    window.location.href = `tools/tool-${id}.html`;
}

function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const icon = document.querySelector('#themeToggle i');
    if (document.body.classList.contains('light-mode')) {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
    localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
}

if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    const icon = document.querySelector('#themeToggle i');
    if (icon) icon.className = 'fas fa-sun';
}

document.addEventListener('DOMContentLoaded', function() {
    const filters = document.getElementById('categoryFilters');
    if (filters) {
        filters.addEventListener('click', function(e) {
            if (e.target.tagName === 'BUTTON') {
                document.querySelectorAll('.category-filters button').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                currentCategory = e.target.dataset.category;
                const search = document.getElementById('miniSearch')?.value || '';
                renderTools(currentCategory, search);
            }
        });
    }
    loadTools();
});

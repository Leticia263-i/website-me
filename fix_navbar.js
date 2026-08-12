const fs = require('fs');
const files = ['index.html', 'profil.html', 'informatika.html', 'bahasa-indonesia.html'];
const routes = {
    'dashboard': 'index.html',
    'profil': 'profil.html',
    'informatika': 'informatika.html',
    'bahasa_indonesia': 'bahasa-indonesia.html'
};

for (const file of files) {
    if (!fs.existsSync(file)) continue;
    let content = fs.readFileSync(file, 'utf-8');

    // 1. Fix duplicate id nav-nav-bahasa_indonesia
    content = content.replace('id="nav-nav-bahasa_indonesia" id="nav-bahasa_indonesia"', 'id="nav-bahasa_indonesia"');

    // 2. Fix logo div -> a
    content = content.replace(
        /<div\s+onclick="switchTab\('dashboard'\)"\s+class="cursor-pointer/g,
        '<a href="index.html" onclick="switchTab(\'dashboard\'); return false;" class="cursor-pointer'
    );
    content = content.replace(
        /Profil & Kumpulan Tugas<\/span>\n              <\/div>\n            <\/div>/g,
        'Profil & Kumpulan Tugas</span>\n              </div>\n            </a>'
    );

    // 3. Fix nav buttons
    for (const [tabId, href] of Object.entries(routes)) {
        // Desktop
        let pattern = new RegExp(`<button\\s+onclick="switchTab\\('${tabId}'\\)"\\s+id="nav-${tabId}"([^>]+)>([\\s\\S]*?)<\\/button>`, 'g');
        content = content.replace(pattern, `<a href="${href}" id="nav-${tabId}"$1 onclick="switchTab('${tabId}'); return false;">$2</a>`);
        
        // Mobile
        pattern = new RegExp(`<button\\s+onclick="switchTab\\('${tabId}'\\)"\\s+id="mobile-nav-${tabId}"([^>]+)>([\\s\\S]*?)<\\/button>`, 'g');
        content = content.replace(pattern, `<a href="${href}" id="mobile-nav-${tabId}"$1 onclick="switchTab('${tabId}'); return false;">$2</a>`);

        // Dashboard body shortcuts (in index.html)
        pattern = new RegExp(`<button\\s+onclick="switchTab\\('${tabId}'\\)"([^>]*?class="flex flex-col[^>]+)>([\\s\\S]*?)<\\/button>`, 'g');
        content = content.replace(pattern, `<a href="${href}"$1 onclick="switchTab('${tabId}'); return false;">$2</a>`);

        // Profile avatar button (header-avatar-btn)
        pattern = new RegExp(`<button\\s+onclick="switchTab\\('${tabId}'\\)"([^>]*?id="header-avatar-btn"[^>]+)>([\\s\\S]*?)<\\/button>`, 'g');
        content = content.replace(pattern, `<a href="${href}"$1 onclick="switchTab('${tabId}'); return false;">$2</a>`);
    }

    fs.writeFileSync(file, content);
    console.log(`Fixed ${file}`);
}

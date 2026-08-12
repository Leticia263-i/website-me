import os
import re

files = ['index.html', 'profil.html', 'informatika.html', 'bahasa-indonesia.html']
routes = {
    'dashboard': 'index.html',
    'profil': 'profil.html',
    'informatika': 'informatika.html',
    'bahasa_indonesia': 'bahasa-indonesia.html'
}

for file in files:
    if not os.path.exists(file): continue
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Fix duplicate id nav-nav-bahasa_indonesia
    content = content.replace('id="nav-nav-bahasa_indonesia" id="nav-bahasa_indonesia"', 'id="nav-bahasa_indonesia"')

    # 2. Fix logo div -> a
    content = re.sub(
        r'<div\s+onclick="switchTab\(\'dashboard\'\)"\s+class="cursor-pointer',
        r'<a href="index.html" onclick="switchTab(\'dashboard\'); return false;" class="cursor-pointer',
        content
    )
    # The logo div closes exactly before </div>\n          </div>\n\n          <!-- Center: Desktop Navigation Bar Links -->'
    # Instead of guessing the closing tag, we just leave it if it's too complex. 
    # But wait, <a> tag must be closed. 
    # Since the logo is a block, it's:
    # </div>\n          </div>\n\n          <!-- Center: Desktop Navigation Bar Links -->
    content = re.sub(
        r'Profil & Kumpulan Tugas</span>\n              </div>\n            </div>',
        r'Profil & Kumpulan Tugas</span>\n              </div>\n            </a>',
        content
    )

    # 3. Fix nav buttons
    for tabId, href in routes.items():
        # Desktop
        pattern = r'<button\s+onclick="switchTab\(\'' + tabId + r'\'\)"\s+id="nav-' + tabId + r'"([^>]+)>(.*?)<\/button>'
        replacement = r'<a href="' + href + r'" id="nav-' + tabId + r'"\1 onclick="switchTab(\'' + tabId + r'\'); return false;">\2</a>'
        content = re.sub(pattern, replacement, content, flags=re.DOTALL)
        
        # Mobile
        pattern = r'<button\s+onclick="switchTab\(\'' + tabId + r'\'\)"\s+id="mobile-nav-' + tabId + r'"([^>]+)>(.*?)<\/button>'
        replacement = r'<a href="' + href + r'" id="mobile-nav-' + tabId + r'"\1 onclick="switchTab(\'' + tabId + r'\'); return false;">\2</a>'
        content = re.sub(pattern, replacement, content, flags=re.DOTALL)

        # Dashboard body shortcuts (in index.html)
        pattern = r'<button\s+onclick="switchTab\(\'' + tabId + r'\'\)"([^>]*?class="flex flex-col[^>]+)>(.*?)<\/button>'
        replacement = r'<a href="' + href + r'"\1 onclick="switchTab(\'' + tabId + r'\'); return false;">\2</a>'
        content = re.sub(pattern, replacement, content, flags=re.DOTALL)

        # Profile avatar button (header-avatar-btn)
        pattern = r'<button\s+onclick="switchTab\(\'' + tabId + r'\'\)"([^>]*?id="header-avatar-btn"[^>]+)>(.*?)<\/button>'
        replacement = r'<a href="' + href + r'"\1 onclick="switchTab(\'' + tabId + r'\'); return false;">\2</a>'
        content = re.sub(pattern, replacement, content, flags=re.DOTALL)

    # Write back
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Fixed {file}")


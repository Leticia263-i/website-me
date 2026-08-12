/* ========================================================= */
/* ==================== GLOBAL APP JS ==================== */
/* ========================================================= */

// Default configuration data
const DEFAULT_DATA = {
  profile: {
    name: "Leticia Cielo Kurniawan",
    school: "SMAN 1 Antigravity (Kelas 11 IPA)",
    bioHeadline: "Pelajar yang berfokus pada teknologi informatika dan kebahasaan. Gemar membuat hal interaktif.",
    fullBio: "Saya menyukai bidang desain UI/UX, pemrograman web dasar, dan linguistik. Proyek portfolio ini dibuat sebagai wadah pengarsipan tugas-tugas sekolah agar dapat ditinjau oleh guru dan rekan belajar secara praktis. Bermimpi untuk menjadi Software Engineer atau pakar bahasa digital di masa depan.",
    hobby: "Menulis Kode, Membaca",
    interest: "Web Dev, Desain UI/UX",
    avatar: "avatar1",
    pin: "1234",
    socials: {
      instagram: "https://instagram.com/_ccsiell",
      github: "https://github.com/leticiacielokurniawan",
      linkedin: "https://linkedin.com",
      youtube: "https://youtube.com",
      email: "leticiacielokurniawan@example.com"
    },
    skills: [
      { name: "Informatika (Pemrograman)", value: 85 },
      { name: "Desain UI/UX", value: 80 },
      { name: "Bahasa Indonesia (Karya Tulis)", value: 90 },
      { name: "HTML5 & Tailwind CSS", value: 88 },
      { name: "Pemikiran Logis / Logika", value: 92 }
    ]
  },
  assignments: [
    {
      id: "task-info-1",
      subject: "Informatika",
      title: "Membuat Kalkulator Sederhana dengan Javascript",
      category: "Coding & Algoritma",
      date: "2026-07-15",
      score: 95,
      link: "https://github.com/leticiacielokurniawan/js-calculator-school",
      description: "Tugas praktikum bab algoritma dasar untuk merancang kalkulator berbasis website. Kalkulator ini memiliki fungsi dasar matematika (penjumlahan, pengurangan, perkalian, pembagian) dan didesain interaktif dengan input UI berbasis grid CSS."
    },
    {
      id: "task-info-2",
      subject: "Informatika",
      title: "Instalasi Jaringan LAN dan Konfigurasi IP Address",
      category: "Jaringan Komputer",
      date: "2026-06-10",
      score: 88,
      link: "",
      description: "Laporan praktikum cara mengkoneksikan antar komputer dalam jaringan lokal (LAN) menggunakan topologi Star, pemasangan kabel UTP tipe Straight/Cross, konfigurasi Static IP Address v4, serta uji konektivitas via Terminal CMD dengan perintah PING."
    },
    {
      id: "task-info-3",
      subject: "Informatika",
      title: "Analisis Data Statistik Nilai Menggunakan Microsoft Excel",
      category: "Analisis Data",
      date: "2026-05-18",
      score: 92,
      link: "",
      description: "Menganalisis rata-rata nilai, standar deviasi, pencarian nilai maksimum dan minimum, serta visualisasi grafik batang menggunakan fungsi-fungsi Excel (AVERAGE, STDEV, VLOOKUP, IF) untuk menyelesaikan kasus data dummy sekolah."
    },
    {
      id: "task-new-jaringan",
      subject: "Informatika",
      title: "Analisis Protokol Jaringan dan Konfigurasi Subnetting IP Address",
      category: "Jaringan Komputer",
      date: "2026-07-28",
      score: 90,
      link: "https://github.com/leticiacielokurniawan/jaringan-komputer",
      description: "Sebuah artikel komprehensif mengenai arsitektur jaringan komputer lokal (LAN). Pembahasan meliputi perbandingan model referensi OSI dan TCP/IP, peran penting DNS Server, DHCP Server, serta panduan praktis melakukan subnetting IPv4 kelas C menggunakan metode VLSM (Variable Length Subnet Mask) untuk efisiensi alokasi host di laboratorium sekolah."
    },
    {
      id: "task-new-ite",
      subject: "Informatika",
      title: "Etika Digital dan Tinjauan Hukum UU ITE di Indonesia",
      category: "Teori Komputer",
      date: "2026-07-27",
      score: 92,
      link: "",
      description: "Artikel analisis kritis tentang dampak sosial informatika di Indonesia, khususnya mengenai implementasi Undang-Undang Informasi dan Transaksi Elektronik (UU ITE). Artikel ini membedah pasal-pasal krusial seperti pencemaran nama baik, penyebaran berita bohong (hoax), perlindungan hak cipta digital, serta bagaimana menerapkan konsep kewarganegaraan digital (digital citizenship) yang beretika."
    },
    {
      id: "task-new-kriptografi",
      subject: "Informatika",
      title: "Keamanan Data dengan Metode Kriptografi Caesar Cipher dan Vigenere Cipher",
      category: "Coding & Algoritma",
      date: "2026-07-26",
      score: 95,
      link: "https://github.com/leticiacielokurniawan/kriptografi-klasik",
      description: "Artikel praktis disertai demo coding sederhana mengenai dasar-dasar kriptografi klasik. Proyek ini mempraktikkan proses enkripsi (mengubah teks biasa/plaintext menjadi ciphertext) dan dekripsi menggunakan algoritma Caesar Cipher (pergeseran alfabet konstan) dan Vigenere Cipher (pergeseran berbasis kata kunci), guna mengamankan pesan teks rahasia dari pihak ketiga."
    },
    {
      id: "task-indo-1",
      subject: "Bahasa Indonesia",
      title: "Analisis Unsur Intrinsik Novel Laskar Pelangi",
      category: "Analisis Sastra",
      date: "2026-07-10",
      score: 96,
      link: "https://drive.google.com",
      description: "Karya tulis analisis yang mendalam tentang unsur intrinsik novel Laskar Pelangi karya Andrea Hirata. Analisis mencakup identifikasi tema perjuangan pendidikan, penokohan (Ikal, Lintang, Mahar), latar tempat (Belitung), alur maju-mundur, serta amanat moral novel."
    },
    {
      id: "task-indo-2",
      subject: "Bahasa Indonesia",
      title: "Menulis Artikel Opini tentang Dampak AI bagi Pendidikan Menengah",
      category: "Karya Tulis & Opini",
      date: "2026-06-25",
      score: 90,
      link: "",
      description: "Tugas menyusun teks artikel opini argumentatif yang membahas pisau bermata dua dari integrasi Artificial Intelligence (AI) seperti ChatGPT bagi pelajar SMA. Menekankan aspek etika akademik dan pentingnya berpikir kritis."
    },
    {
      id: "task-indo-3",
      subject: "Bahasa Indonesia",
      title: "Menyusun Teks Pidato Persuasif Menjaga Kelestarian Lingkungan",
      category: "Retorika & Pidato",
      date: "2026-05-30",
      score: 94,
      link: "",
      description: "Teks pidato persuasif yang ditujukan untuk dibacakan pada upacara bendera hari Senin. Berisi ajakan praktis mengurangi penggunaan plastik sekali pakai di lingkungan sekolah dan cara pengelolaan sampah mandiri."
    }
  ]
};

// SVG Preset Avatars
const AVATARS = {
  avatar1: `<svg class="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="16" fill="#E0F2FE"/><circle cx="50" cy="40" r="22" fill="#BAE6FD"/><path d="M50 18C42 18 36 24 36 32C36 34 38 38 41 38C44 38 45 34 50 34C55 34 56 38 59 38C62 38 64 34 64 32C64 24 58 18 50 18Z" fill="#0369A1"/><circle cx="43" cy="42" r="2.5" fill="#334155"/><circle cx="57" cy="42" r="2.5" fill="#334155"/><path d="M46 52C48 54 52 54 54 52" stroke="#334155" stroke-width="2" stroke-linecap="round"/><path d="M22 84C22 72 34 64 50 64C66 64 78 72 78 84" fill="#38BDF8"/><path d="M42 64L50 72L58 64" fill="#E0F2FE"/></svg>`,
  avatar2: `<svg class="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="16" fill="#EEF2FF"/><circle cx="50" cy="40" r="22" fill="#C7D2FE"/><path d="M50 18C38 18 32 25 32 35C32 37 36 37 38 35C40 33 44 31 50 31C56 31 60 33 62 35C64 37 68 37 68 35C68 25 62 18 50 18Z" fill="#4F46E5"/><circle cx="42" cy="42" r="2.5" fill="#1E293B"/><circle cx="58" cy="42" r="2.5" fill="#1E293B"/><path d="M47 51C49 53 51 53 53 51" stroke="#1E293B" stroke-width="2" stroke-linecap="round"/><path d="M20 85C20 73 32 65 50 65C68 65 80 73 80 85" fill="#818CF8"/><path d="M44 65L50 73L56 65" fill="#EEF2FF"/></svg>`,
  avatar3: `<svg class="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="16" fill="#ECFDF5"/><circle cx="50" cy="40" r="22" fill="#A7F3D0"/><path d="M50 18C40 18 34 22 34 32C34 39 42 35 50 35C58 35 66 39 66 32C66 22 60 18 50 18Z" fill="#059669"/><circle cx="42" cy="43" r="2" fill="#1E293B"/><circle cx="58" cy="43" r="2" fill="#1E293B"/><path d="M45 52C48 55 52 55 55 52" stroke="#1E293B" stroke-width="2" stroke-linecap="round"/><path d="M18 86C18 74 30 66 50 66C70 66 82 74 82 86" fill="#34D399"/><path d="M45 66L50 72L55 66" fill="#ECFDF5"/></svg>`,
  avatar4: `<svg class="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="16" fill="#FFF1F2"/><circle cx="50" cy="40" r="22" fill="#FECDD3"/><path d="M50 18C38 18 35 24 35 34C35 37 39 37 40 34C41 31 44 32 50 32C56 32 59 31 60 34C61 37 65 37 65 34C65 24 62 18 50 18Z" fill="#E11D48"/><circle cx="43" cy="41" r="2.5" fill="#334155"/><circle cx="57" cy="41" r="2.5" fill="#334155"/><path d="M46 51C48 53 52 53 54 51" stroke="#334155" stroke-width="2" stroke-linecap="round"/><path d="M22 84C22 72 34 64 50 64C66 64 78 72 78 84" fill="#FB7185"/><path d="M43 64L50 71L57 64" fill="#FFF1F2"/></svg>`
};

// Subject Category mappings
const CATEGORIES = {
  "Informatika": ["Coding & Algoritma", "Jaringan Komputer", "Analisis Data", "Teori Komputer", "Lainnya"],
  "Bahasa Indonesia": ["Analisis Sastra", "Karya Tulis & Opini", "Retorika & Pidato", "Tata Bahasa & Kebahasaan", "Lainnya"]
};

// Quotes Database
const MOTIVATIONAL_QUOTES = [
  { text: "Teknologi membuat hal-hal yang dulu mustahil menjadi mungkin. Teruslah berkarya di dunia Informatika!", author: "EduFolio" },
  { text: "Bahasa menunjukkan bangsa. Melalui bahasa, kita menata pikiran dan mengekspresikan peradaban.", author: "Sutan Takdir Alisjahbana" },
  { text: "Satu-satunya batasan untuk meraih mimpi kita adalah keragu-raguan kita hari ini.", author: "Franklin D. Roosevelt" },
  { text: "Pendidikan adalah senjata paling mematikan di dunia, karena dengan itu Anda bisa mengubah dunia.", author: "Nelson Mandela" },
  { text: "Coding adalah seni memecahkan masalah. Jangan menyerah ketika menemui error; di situlah Anda belajar.", author: "Pakar IT" },
  { text: "Membaca adalah jembatan ilmu. Menulis adalah cara mengabadikan pikiran Anda dalam sejarah.", author: "Pramoedya Ananta Toer" }
];

// Global State Variables
let profile = {};
let assignments = [];
let isOwnerUnlocked = false;
let pinAuthCallback = null;
let customAvatarData = null;

// Determine current tab from URL filename
function getCurrentTabName() {
  const path = window.location.pathname;
  const page = path.substring(path.lastIndexOf('/') + 1);
  if (page === 'profil.html') return 'profil';
  if (page === 'informatika.html') return 'informatika';
  if (page === 'bahasa-indonesia.html') return 'bahasa_indonesia';
  return 'dashboard';
}

// Load data from LocalStorage
function loadData() {
  const savedProfile = localStorage.getItem('edufolio_profile');
  const savedAssignments = localStorage.getItem('edufolio_assignments');
  const savedLock = localStorage.getItem('edufolio_owner_unlocked');

  if (savedProfile) {
    profile = JSON.parse(savedProfile);
    if (!profile.pin) profile.pin = "1234";
  } else {
    profile = JSON.parse(JSON.stringify(DEFAULT_DATA.profile));
  }

  if (savedAssignments) {
    assignments = JSON.parse(savedAssignments);
    // Ensure the new 3 informatics articles exist in the user's assignments database
    const newTasks = DEFAULT_DATA.assignments.filter(task =>
      ["task-new-jaringan", "task-new-ite", "task-new-kriptografi"].includes(task.id)
    );
    let databaseUpdated = false;
    newTasks.forEach(newTask => {
      if (!assignments.some(t => t.id === newTask.id)) {
        assignments.push(newTask);
        databaseUpdated = true;
      }
    });
    if (databaseUpdated) {
      saveData();
    }
  } else {
    assignments = JSON.parse(JSON.stringify(DEFAULT_DATA.assignments));
  }

  isOwnerUnlocked = savedLock === 'true';
}

// Save state to LocalStorage
function saveData() {
  localStorage.setItem('edufolio_profile', JSON.stringify(profile));
  localStorage.setItem('edufolio_assignments', JSON.stringify(assignments));
  localStorage.setItem('edufolio_owner_unlocked', isOwnerUnlocked);
}

// Initialize theme checking LocalStorage
function initTheme() {
  const theme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (theme === 'dark' || (!theme && prefersDark)) {
    document.documentElement.classList.add('dark');
    updateThemeUI(true);
  } else {
    document.documentElement.classList.remove('dark');
    updateThemeUI(false);
  }
}

// Toggle Dark/Light Mode
function toggleDarkMode() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateThemeUI(isDark);
}

// Update Theme UI toggles
function updateThemeUI(isDark) {
  const icon = document.getElementById('theme-btn-icon');
  if (icon) {
    if (isDark) {
      icon.setAttribute('data-lucide', 'moon');
      icon.className = "w-4.5 h-4.5 text-brand-400";
    } else {
      icon.setAttribute('data-lucide', 'sun');
      icon.className = "w-4.5 h-4.5 text-brand-600";
    }
    if (window.lucide) window.lucide.createIcons();
  }
}

// Setup Clock
function setupLiveClock() {
  const clockEl = document.getElementById('live-clock');
  if (clockEl) {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' WIB';
      clockEl.textContent = timeStr;
    };
    updateTime();
    setInterval(updateTime, 1000);
  }
}

// Redirect switcher simulating original switchTab call
function switchTab(tabId) {
  const routes = {
    dashboard: 'index.html',
    profil: 'profil.html',
    informatika: 'informatika.html',
    bahasa_indonesia: 'bahasa-indonesia.html'
  };
  if (routes[tabId]) {
    // Add page transition before redirect
    const mainArea = document.querySelector('main');
    if (mainArea) {
      mainArea.classList.remove('page-transition');
      mainArea.style.opacity = '0';
      mainArea.style.transform = 'translateY(-10px)';
      mainArea.style.transition = 'all 0.3s ease';
    }
    setTimeout(() => {
      window.location.href = routes[tabId];
    }, 200);
  }
}

// Mobile Navbar Toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const icon = document.getElementById('mobile-menu-icon');
  if (!menu) return;

  const isHidden = menu.classList.toggle('hidden');
  if (isHidden) {
    icon.setAttribute('data-lucide', 'menu');
  } else {
    icon.setAttribute('data-lucide', 'x');
  }
  if (window.lucide) window.lucide.createIcons();
}

// PIN Access Authentication
function checkOwnerAccess(callback) {
  if (isOwnerUnlocked) {
    if (callback) callback();
  } else {
    pinAuthCallback = callback;
    const modal = document.getElementById('auth-pin-modal');
    const pinInput = document.getElementById('owner-pin-input');
    if (pinInput) pinInput.value = '';
    if (modal) modal.showModal();
  }
}

// PIN Submit validation
function handlePinSubmit(e) {
  e.preventDefault();
  const enteredPin = document.getElementById('owner-pin-input').value;
  if (enteredPin === profile.pin) {
    isOwnerUnlocked = true;
    saveData();
    updateLockUI();
    closeModal('auth-pin-modal');
    showToast("Mode Pemilik Aktif 🔓");
    if (pinAuthCallback) {
      const cb = pinAuthCallback;
      pinAuthCallback = null;
      cb();
    }
  } else {
    showToast("PIN Keamanan salah! ❌");
  }
}

// Update lock status icons in Header
function updateLockUI() {
  const lockIcon = document.getElementById('lock-icon');
  const lockLabel = document.getElementById('lock-label');
  const lockBtn = document.getElementById('lock-btn');

  if (!lockIcon || !lockLabel || !lockBtn) return;

  if (isOwnerUnlocked) {
    lockIcon.setAttribute('data-lucide', 'unlock');
    lockIcon.className = "w-4.5 h-4.5 text-emerald-500";
    lockLabel.textContent = "Mode Pemilik";
    lockBtn.classList.remove('bg-slate-100', 'dark:bg-slate-800', 'text-slate-655', 'dark:text-slate-300');
    lockBtn.classList.add('bg-emerald-50/50', 'dark:bg-emerald-950/20', 'border-emerald-200/50', 'text-emerald-700', 'dark:text-emerald-400');
  } else {
    lockIcon.setAttribute('data-lucide', 'lock');
    lockIcon.className = "w-4.5 h-4.5 text-slate-450";
    lockLabel.textContent = "Mode Pengunjung";
    lockBtn.classList.remove('bg-emerald-50/50', 'dark:bg-emerald-950/20', 'border-emerald-200/50', 'text-emerald-700', 'dark:text-emerald-400');
    lockBtn.classList.add('bg-slate-100', 'dark:bg-slate-800', 'text-slate-655', 'dark:text-slate-300');
  }
  if (window.lucide) window.lucide.createIcons();
}

// Toggle PIN unlock state
function toggleLockState() {
  if (isOwnerUnlocked) {
    isOwnerUnlocked = false;
    saveData();
    updateLockUI();
    showToast("Halaman Dikunci (Mode Pengunjung) 🔒");
  } else {
    checkOwnerAccess(null);
  }
}

// Shared layouts updater (Header card, active navigation highlights)
function updateHeaderUserCard() {
  const headerAvatarBtn = document.getElementById('header-avatar-btn');
  if (headerAvatarBtn) {
    if (profile.avatar && (profile.avatar.startsWith('data:') || profile.avatar.startsWith('http'))) {
      headerAvatarBtn.innerHTML = `<img src="${profile.avatar}" class="w-full h-full object-cover rounded-xl" alt="Avatar">`;
    } else {
      headerAvatarBtn.innerHTML = AVATARS[profile.avatar] || AVATARS.avatar1;
    }
  }

  const heroUserName = document.getElementById('hero-user-name');
  if (heroUserName) {
    heroUserName.textContent = profile.name;
  }
}

// Update dynamic footer values
function renderFooter() {
  const footerYear = document.getElementById('footer-year');
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }
}

// Modal handling utilities
function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.close();
}

// Toast System pipeline
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = "flex items-center gap-2.5 px-4.5 py-3 rounded-2xl bg-slate-900/90 dark:bg-white/95 text-white dark:text-slate-900 text-xs font-semibold shadow-premium dark:shadow-premium-dark border border-white/10 dark:border-slate-800/10 backdrop-blur-sm pointer-events-auto transition-all duration-300 transform translate-y-2 opacity-0";
  toast.innerHTML = `
      <i data-lucide="sparkles" class="w-4.5 h-4.5 text-brand-400 dark:text-brand-500"></i>
      <span>${message}</span>
    `;

  container.appendChild(toast);
  if (window.lucide) window.lucide.createIcons();

  setTimeout(() => {
    toast.classList.remove('translate-y-2', 'opacity-0');
  }, 50);

  setTimeout(() => {
    toast.classList.add('translate-y-2', 'opacity-0');
    setTimeout(() => {
      container.removeChild(toast);
    }, 300);
  }, 3500);
}

// Export Modals triggers
function openExportModal() {
  const modal = document.getElementById('export-modal');
  if (modal) modal.showModal();
}

// HTML static DB serialization downloader
function exportAndDownloadHTML() {
  let currentHTML = document.documentElement.outerHTML;

  const serializedData = {
    profile: profile,
    assignments: assignments
  };

  const regexMatch = /const\s+DEFAULT_DATA\s*=\s*\{[\s\S]*?\};/;
  const replacementString = `const DEFAULT_DATA = ${JSON.stringify(serializedData, null, 2)};`;

  let outputHTML = `<!DOCTYPE html>\n` + currentHTML.replace(regexMatch, replacementString);
  outputHTML = outputHTML.replace(/<dialog\s+([^>]*)\open\b/gi, '<dialog $1');

  const blob = new Blob([outputHTML], { type: 'text/html' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'index.html';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  closeModal('export-modal');
  showToast("Berhasil mengekspor HTML! Siap di-upload ke Hosting! ☁️");
}

/* ========================================================= */
/* ==================== DASHBOARD SECTION ================== */
/* ========================================================= */

function renderDashboard() {
  const totalEl = document.getElementById('stat-total-assignments');
  if (!totalEl) return;

  const infoTasks = assignments.filter(t => t.subject === 'Informatika');
  const indoTasks = assignments.filter(t => t.subject === 'Bahasa Indonesia');

  totalEl.textContent = assignments.length;
  document.getElementById('stat-informatics-assignments').textContent = infoTasks.length;
  document.getElementById('stat-indonesian-assignments').textContent = indoTasks.length;

  const scores = assignments.filter(t => t.score !== null && t.score !== undefined && t.score !== '').map(t => Number(t.score));
  const avg = scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : '-';
  document.getElementById('stat-avg-score').textContent = avg;

  drawDashboardChart();
  renderRecentDashboardTable(assignments);
}

function drawDashboardChart() {
  const pathInfo = document.getElementById('chart-path-info');
  const areaInfo = document.getElementById('chart-area-info');
  const pathIndo = document.getElementById('chart-path-indo');
  const areaIndo = document.getElementById('chart-area-indo');
  const dotsGroup = document.getElementById('chart-dots');
  const xLabelsGroup = document.getElementById('chart-x-labels');

  if (!pathInfo) return;

  dotsGroup.innerHTML = '';
  xLabelsGroup.innerHTML = '';

  const last5 = [...assignments]
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(-5);

  if (last5.length === 0) {
    pathInfo.setAttribute('d', '');
    areaInfo.setAttribute('d', '');
    pathIndo.setAttribute('d', '');
    areaIndo.setAttribute('d', '');
    return;
  }

  const width = 440;
  const height = 160;
  const startX = 40;
  const startY = 180;

  const pointsInfo = [];
  const pointsIndo = [];

  last5.forEach((task, index) => {
    const x = startX + (width / (Math.max(1, last5.length - 1))) * index;
    const scoreVal = Number(task.score) || 0;
    const y = startY - (scoreVal / 100) * height;

    const dateObj = new Date(task.date);
    const dayMonth = dateObj.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });

    const txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    txt.setAttribute('x', x);
    txt.setAttribute('y', '196');
    txt.setAttribute('fill', 'currentColor');
    txt.setAttribute('text-anchor', 'middle');
    txt.setAttribute('class', 'text-[8.5px] font-semibold font-sans fill-slate-400 dark:fill-slate-500');
    txt.textContent = dayMonth;
    xLabelsGroup.appendChild(txt);

    if (task.subject === 'Informatika') {
      pointsInfo.push({ x, y, score: scoreVal, title: task.title });
    } else {
      pointsIndo.push({ x, y, score: scoreVal, title: task.title });
    }

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', x);
    circle.setAttribute('cy', y);
    circle.setAttribute('r', '5');
    circle.setAttribute('class', `cursor-pointer transition-all duration-200 hover:r-7 ${task.subject === 'Informatika' ? 'fill-brand-500 stroke-white dark:stroke-slate-900 stroke-2' : 'fill-violet-500 stroke-white dark:stroke-slate-900 stroke-2'}`);

    const titleTip = document.createElementNS('http://www.w3.org/2000/svg', 'title');
    titleTip.textContent = `${task.title} (${task.subject}): ${scoreVal}`;
    circle.appendChild(titleTip);
    dotsGroup.appendChild(circle);
  });

  if (pointsInfo.length > 0) {
    pointsInfo.sort((a, b) => a.x - b.x);
    let d = `M ${pointsInfo[0].x} ${pointsInfo[0].y}`;
    for (let i = 1; i < pointsInfo.length; i++) {
      d += ` L ${pointsInfo[i].x} ${pointsInfo[i].y}`;
    }
    pathInfo.setAttribute('d', d);

    let areaD = `${d} L ${pointsInfo[pointsInfo.length - 1].x} 180 L ${pointsInfo[0].x} 180 Z`;
    areaInfo.setAttribute('d', areaD);
  } else {
    pathInfo.setAttribute('d', '');
    areaInfo.setAttribute('d', '');
  }

  if (pointsIndo.length > 0) {
    pointsIndo.sort((a, b) => a.x - b.x);
    let d = `M ${pointsIndo[0].x} ${pointsIndo[0].y}`;
    for (let i = 1; i < pointsIndo.length; i++) {
      d += ` L ${pointsIndo[i].x} ${pointsIndo[i].y}`;
    }
    pathIndo.setAttribute('d', d);

    let areaD = `${d} L ${pointsIndo[pointsIndo.length - 1].x} 180 L ${pointsIndo[0].x} 180 Z`;
    areaIndo.setAttribute('d', areaD);
  } else {
    pathIndo.setAttribute('d', '');
    areaIndo.setAttribute('d', '');
  }
}

function refreshQuote() {
  const textEl = document.getElementById('quote-text');
  const authorEl = document.getElementById('quote-author');
  if (!textEl || !authorEl) return;

  const randomIdx = Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length);
  const quote = MOTIVATIONAL_QUOTES[randomIdx];

  textEl.classList.add('opacity-0');
  authorEl.classList.add('opacity-0');

  setTimeout(() => {
    textEl.textContent = `"${quote.text}"`;
    authorEl.textContent = `— ${quote.author}`;
    textEl.classList.remove('opacity-0');
    authorEl.classList.remove('opacity-0');
  }, 200);
}

function renderRecentDashboardTable(list) {
  const tbody = document.getElementById('dashboard-recent-tbody');
  const emptyState = document.getElementById('dashboard-empty-state');
  if (!tbody) return;

  tbody.innerHTML = '';
  const sorted = [...list].sort((a, b) => new Date(b.date) - new Date(a.date));

  if (sorted.length === 0) {
    if (emptyState) emptyState.classList.remove('hidden');
    return;
  } else {
    if (emptyState) emptyState.classList.add('hidden');
  }

  sorted.forEach(task => {
    const tr = document.createElement('tr');
    tr.className = "hover:bg-slate-50/70 dark:hover:bg-slate-800/20 transition-colors";

    const isInfo = task.subject === 'Informatika';
    const tagBg = isInfo ? 'bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-350' : 'bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-350';
    const formattedDate = new Date(task.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    const scoreDisplay = task.score ? `<span class="inline-flex items-center justify-center font-bold px-2 py-0.5 rounded-lg bg-amber-50 dark:bg-amber-950/20 text-amber-700 dark:text-amber-400 border border-amber-200/50">${task.score}</span>` : '<span class="text-slate-400">-</span>';

    tr.innerHTML = `
        <td class="py-3 px-4 font-semibold text-slate-800 dark:text-slate-100 max-w-[280px] truncate">${task.title}</td>
        <td class="py-3 px-4">
          <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-lg text-xs font-semibold ${tagBg}">
            <i data-lucide="${isInfo ? 'binary' : 'book-open'}" class="w-3.5 h-3.5"></i>
            ${task.category}
          </span>
        </td>
        <td class="py-3 px-4 text-xs text-slate-500 dark:text-slate-400 font-medium">${formattedDate}</td>
        <td class="py-3 px-4 text-center">${scoreDisplay}</td>
        <td class="py-3 px-4 text-right">
          <button onclick="openAssignmentDetail('${task.id}')" class="p-1 px-3 rounded-lg bg-brand-50 hover:bg-brand-100 dark:bg-brand-950/40 dark:hover:bg-brand-950 text-brand-700 dark:text-brand-300 font-semibold text-xs transition-colors">
            Detail
          </button>
        </td>
      `;
    tbody.appendChild(tr);
  });
  if (window.lucide) window.lucide.createIcons();
}

function filterDashboardRecent() {
  const q = document.getElementById('dashboard-search').value.toLowerCase();
  const filtered = assignments.filter(t => t.title.toLowerCase().includes(q));
  renderRecentDashboardTable(filtered);
}

/* ========================================================= */
/* ==================== ASSIGNMENT CRUD LOGIC ============== */
/* ========================================================= */

function openAssignmentDetail(id) {
  const task = assignments.find(t => t.id === id);
  if (!task) return;

  const modal = document.getElementById('assignment-detail-modal');
  if (!modal) return;

  document.getElementById('detail-modal-subject').textContent = task.subject;
  document.getElementById('detail-modal-category').textContent = task.category;
  document.getElementById('detail-modal-title').textContent = task.title;
  document.getElementById('detail-modal-description').textContent = task.description;
  document.getElementById('detail-modal-score').textContent = task.score || '-';

  const isInfo = task.subject === 'Informatika';
  const subjTag = document.getElementById('detail-modal-subject');
  if (isInfo) {
    subjTag.className = "px-2.5 py-1 rounded-lg text-xs font-bold bg-brand-100 dark:bg-brand-900/60 text-brand-700 dark:text-brand-300";
  } else {
    subjTag.className = "px-2.5 py-1 rounded-lg text-xs font-bold bg-violet-100 dark:bg-violet-900/60 text-violet-700 dark:text-violet-350";
  }

  const formattedDate = new Date(task.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
  document.getElementById('detail-modal-date').textContent = formattedDate;

  const linkContainer = document.getElementById('detail-modal-links-container');
  if (task.link) {
    linkContainer.innerHTML = `
        <a href="${task.link}" target="_blank" class="flex items-center gap-1.5 px-4 py-2 bg-brand-50 hover:bg-brand-100 dark:bg-brand-950/60 dark:hover:bg-brand-950 text-brand-700 dark:text-brand-300 text-xs font-bold border border-brand-200/50 dark:border-brand-900/30 rounded-xl transition-all shadow-sm">
          <i data-lucide="external-link" class="w-4 h-4"></i>
          <span>Buka Tautan Tugas</span>
        </a>
      `;
  } else {
    linkContainer.innerHTML = `
        <span class="text-xs text-slate-400 dark:text-slate-500 font-semibold italic flex items-center gap-1">
          <i data-lucide="info" class="w-3.5 h-3.5"></i> Tidak ada tautan luar yang dilampirkan
        </span>
      `;
  }


  document.getElementById('detail-modal-edit-btn').onclick = () => {
    checkOwnerAccess(() => {
      closeModal('assignment-detail-modal');
      openEditAssignmentModal(task);
    });
  };

  document.getElementById('detail-modal-delete-btn').onclick = () => {
    checkOwnerAccess(() => {
      if (confirm("Apakah Anda yakin ingin menghapus tugas ini?")) {
        deleteAssignment(task.id);
        closeModal('assignment-detail-modal');
      }
    });
  };

  modal.showModal();
  if (window.lucide) window.lucide.createIcons();
}

function openAddAssignmentModal(defaultSubject = "Informatika") {
  const modal = document.getElementById('assignment-form-modal');
  if (!modal) return;

  document.getElementById('assignment-form-title').textContent = "Tambah Tugas Baru";
  document.getElementById('assignment-id').value = "";

  const subjInput = document.getElementById('assignment-subject');
  subjInput.value = defaultSubject;
  subjInput.disabled = false; // Enabled for creating

  document.getElementById('assignment-title').value = "";
  document.getElementById('assignment-date').value = new Date().toISOString().substring(0, 10);
  document.getElementById('assignment-score').value = "";
  document.getElementById('assignment-link').value = "";
  document.getElementById('assignment-description').value = "";

  updateFormCategories(defaultSubject);
  modal.showModal();
}

function openEditAssignmentModal(task) {
  const modal = document.getElementById('assignment-form-modal');
  if (!modal) return;

  document.getElementById('assignment-form-title').textContent = "Sunting Informasi Tugas";
  document.getElementById('assignment-id').value = task.id;

  const subjInput = document.getElementById('assignment-subject');
  subjInput.value = task.subject;
  subjInput.disabled = true; // Fix subject during edit

  document.getElementById('assignment-title').value = task.title;
  document.getElementById('assignment-date').value = task.date;
  document.getElementById('assignment-score').value = task.score || "";
  document.getElementById('assignment-link').value = task.link || "";
  document.getElementById('assignment-description').value = task.description || "";

  updateFormCategories(task.subject);
  document.getElementById('assignment-category').value = task.category;

  modal.showModal();
}

function updateFormCategories(subject) {
  const catInput = document.getElementById('assignment-category');
  if (!catInput) return;
  catInput.innerHTML = '';

  const list = CATEGORIES[subject] || [];
  list.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = cat;
    catInput.appendChild(opt);
  });
}

function saveAssignment(e) {
  e.preventDefault();

  const id = document.getElementById('assignment-id').value;
  const subject = document.getElementById('assignment-subject').value;
  const category = document.getElementById('assignment-category').value;
  const title = document.getElementById('assignment-title').value.trim();
  const date = document.getElementById('assignment-date').value;
  const scoreVal = document.getElementById('assignment-score').value;
  const link = document.getElementById('assignment-link').value.trim();
  const description = document.getElementById('assignment-description').value.trim();

  // Better Form Validations
  if (!title) {
    showToast("Gagal: Judul tugas tidak boleh kosong! ⚠️");
    return;
  }
  if (scoreVal !== "") {
    const numericScore = Number(scoreVal);
    if (isNaN(numericScore) || numericScore < 0 || numericScore > 100) {
      showToast("Gagal: Nilai harus berupa angka antara 0 - 100! ⚠️");
      return;
    }
  }

  const score = scoreVal !== "" ? Number(scoreVal) : "";

  if (id) {
    // Update existing task
    const taskIdx = assignments.findIndex(t => t.id === id);
    if (taskIdx > -1) {
      assignments[taskIdx] = { ...assignments[taskIdx], category, title, date, score, link, description };
      showToast("Tugas berhasil diperbarui! 📝");
    }
  } else {
    // Create new task
    const newId = 'task-' + Math.random().toString(36).substr(2, 9);
    const newTask = { id: newId, subject, category, title, date, score, link, description };
    assignments.push(newTask);
    showToast("Tugas baru berhasil diterbitkan! 🚀");
  }

  saveData();
  closeModal('assignment-form-modal');
  renderAll();
}

function deleteAssignment(id) {
  assignments = assignments.filter(t => t.id !== id);
  saveData();
  showToast("Tugas berhasil dihapus! 🗑️");
  renderAll();
}

// Global page rendering pipeline router
function renderAll() {
  updateHeaderUserCard();
  renderFooter();

  // Route page renders based on DOM existence
  const activeTab = getCurrentTabName();

  // Highlight active menu tab
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.classList.remove('bg-brand-100', 'text-brand-900', 'dark:bg-brand-900/40', 'dark:text-brand-300', 'shadow-sm');
    btn.classList.add('text-slate-655', 'dark:text-slate-450', 'hover:bg-slate-100/50', 'dark:hover:bg-slate-800/40');
  });

  const activeBtn = document.getElementById(`nav-${activeTab}`);
  if (activeBtn) {
    activeBtn.classList.remove('text-slate-655', 'dark:text-slate-450', 'hover:bg-slate-100/50', 'dark:hover:bg-slate-800/40');
    activeBtn.classList.add('bg-brand-100', 'text-brand-900', 'dark:bg-brand-900/40', 'dark:text-brand-300', 'shadow-sm');
  }

  // Highlight active mobile menu tab
  document.querySelectorAll('.mobile-nav-item').forEach(btn => {
    btn.classList.remove('bg-brand-100', 'text-brand-900', 'dark:bg-brand-900/40', 'dark:text-brand-300', 'font-bold');
    btn.classList.add('text-slate-650', 'dark:text-slate-400');
  });

  const activeMobileBtn = document.getElementById(`mobile-nav-${activeTab}`);
  if (activeMobileBtn) {
    activeMobileBtn.classList.remove('text-slate-650', 'dark:text-slate-400');
    activeMobileBtn.classList.add('bg-brand-100', 'text-brand-900', 'dark:bg-brand-900/40', 'dark:text-brand-300', 'font-bold');
  }

  // Page Render Inits
  if (document.getElementById('stat-total-assignments')) {
    renderDashboard();
  }

  // Profile, Informatika, and Bahasa Indonesia page inits will hook via window callbacks
  if (window.renderProfile && document.getElementById('profile-name')) {
    window.renderProfile();
  }
  if (window.initCategoryFilters) {
    window.initCategoryFilters();
  }
  if (window.renderAssignmentsTab) {
    if (document.getElementById('info-assignments-grid')) {
      window.renderAssignmentsTab('Informatika');
    }
    if (document.getElementById('indo-assignments-grid')) {
      window.renderAssignmentsTab('Bahasa Indonesia');
    }
  }
}

// Window load init hooks
window.addEventListener('DOMContentLoaded', () => {
  // Loading screen logic
  const loader = document.getElementById('loading-screen');
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = '0';
      loader.style.visibility = 'hidden';
    }, 450); // Fades loading screen out nicely
  }

  loadData();
  initTheme();
  renderAll();
  setupLiveClock();
  updateLockUI();

  // Create back to top button handler
  const topBtn = document.getElementById('back-to-top-btn');
  if (topBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        topBtn.classList.add('show');
      } else {
        topBtn.classList.remove('show');
      }
    });

    topBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (window.lucide) window.lucide.createIcons();

  // Initialize the persistent music player widget
  initMusicPlayer();
});

// Expose key UI operations to global window object
window.switchTab = switchTab;
window.toggleDarkMode = toggleDarkMode;
window.toggleMobileMenu = toggleMobileMenu;
window.toggleLockState = toggleLockState;
window.handlePinSubmit = handlePinSubmit;
window.openExportModal = openExportModal;
window.exportAndDownloadHTML = exportAndDownloadHTML;
window.closeModal = closeModal;
window.openAssignmentDetail = openAssignmentDetail;
window.openAddAssignmentModal = openAddAssignmentModal;
window.openEditAssignmentModal = openEditAssignmentModal;
window.updateFormCategories = updateFormCategories;
window.saveAssignment = saveAssignment;
window.filterDashboardRecent = filterDashboardRecent;
window.refreshQuote = refreshQuote;
window.renderAll = renderAll;
window.saveData = saveData;
window.checkOwnerAccess = checkOwnerAccess;
window.showToast = showToast;

/* ========================================================= */
/* ==================== MUSIC PLAYER JS ==================== */
/* ========================================================= */

const MUSIC_PLAYLIST = [
  {
    title: "Drop Dead",
    artist: "Olivia Rodrigo",
    file: "Artis Tidak Diketahui - Olivia Rodrigo - drop dead Official Music Video.mp3"
  },
  {
    title: "Less",
    artist: "Olivia Rodrigo",
    file: "Artis Tidak Diketahui - Olivia Rodrigo - less Lyric Video.mp3"
  },
  {
    title: "The Cure",
    artist: "Olivia Rodrigo",
    file: "Artis Tidak Diketahui - Olivia Rodrigo - the cure Official Music Video.mp3"
  }
];

let currentTrackIndex = 0;
let isPlaying = false;
let audioEl = null;

function initMusicPlayer() {
  const playerHTML = `
    <div id="floating-music-player" class="fixed bottom-6 right-6 z-[100] flex flex-col bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 shadow-glass dark:shadow-glass-dark rounded-2xl overflow-hidden transition-all duration-300 w-72 transform hover:scale-[1.02]">
      <div class="p-4 flex items-center justify-between border-b border-slate-100/50 dark:border-slate-800/50 cursor-pointer" onclick="toggleMusicPlayerControls()">
        <div class="flex items-center gap-3 overflow-hidden">
          <div class="w-10 h-10 rounded-full bg-brand-100 dark:bg-brand-900/50 flex items-center justify-center flex-shrink-0" id="player-disk">
            <i data-lucide="music" class="w-5 h-5 text-brand-500"></i>
          </div>
          <div class="truncate text-left">
            <p class="text-xs font-bold text-slate-800 dark:text-white truncate" id="player-title">Track</p>
            <p class="text-[10px] text-slate-500 dark:text-slate-400 truncate" id="player-artist">Artist</p>
          </div>
        </div>
        <button class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
          <i data-lucide="chevron-down" id="player-toggle-icon" class="w-4 h-4 transition-transform duration-300"></i>
        </button>
      </div>
      
      <div id="player-controls" class="p-4 space-y-3 block">
        <div class="flex items-center gap-2 text-[10px] text-slate-500 font-medium">
          <span id="player-time-current">0:00</span>
          <div class="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-full cursor-pointer relative" id="player-progress-container" onclick="seekAudio(event)">
            <div id="player-progress-bar" class="absolute top-0 left-0 h-full bg-brand-500 rounded-full pointer-events-none" style="width: 0%"></div>
          </div>
          <span id="player-time-total">0:00</span>
        </div>
        
        <div class="flex items-center justify-center gap-4">
          <button onclick="prevTrack()" class="text-slate-500 hover:text-brand-500 transition-colors focus:outline-none">
            <i data-lucide="skip-back" class="w-5 h-5"></i>
          </button>
          <button onclick="togglePlay()" class="w-10 h-10 rounded-full bg-brand-500 text-white flex items-center justify-center hover:bg-brand-600 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none">
            <i data-lucide="play" id="player-play-icon" class="w-5 h-5 translate-x-0.5"></i>
          </button>
          <button onclick="nextTrack()" class="text-slate-500 hover:text-brand-500 transition-colors focus:outline-none">
            <i data-lucide="skip-forward" class="w-5 h-5"></i>
          </button>
        </div>
      </div>
      <audio id="global-audio-player" class="hidden"></audio>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', playerHTML);
  if (window.lucide) window.lucide.createIcons();

  audioEl = document.getElementById('global-audio-player');

  const savedState = localStorage.getItem('edufolio_music_state');
  let startTime = 0;
  let wasPlaying = false;

  if (savedState) {
    const state = JSON.parse(savedState);
    currentTrackIndex = state.trackIndex || 0;
    startTime = state.currentTime || 0;
    wasPlaying = state.isPlaying || false;
  }

  loadTrack(currentTrackIndex);

  if (startTime > 0) {
    audioEl.currentTime = startTime;
  }

  if (wasPlaying) {
    const playPromise = audioEl.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        isPlaying = true;
        updatePlayState();
      }).catch(err => {
        console.warn("Autoplay prevented by browser.");
        isPlaying = false;
        updatePlayState();
      });
    }
  } else {
    updatePlayState();
  }

  audioEl.addEventListener('timeupdate', updateProgress);
  audioEl.addEventListener('ended', nextTrack);

  window.addEventListener('beforeunload', saveMusicState);
  setInterval(saveMusicState, 1000);
}

function saveMusicState() {
  if (!audioEl) return;
  const state = {
    trackIndex: currentTrackIndex,
    currentTime: audioEl.currentTime,
    isPlaying: isPlaying
  };
  localStorage.setItem('edufolio_music_state', JSON.stringify(state));
}

function loadTrack(index) {
  if (index < 0) index = MUSIC_PLAYLIST.length - 1;
  if (index >= MUSIC_PLAYLIST.length) index = 0;

  currentTrackIndex = index;
  const track = MUSIC_PLAYLIST[index];

  document.getElementById('player-title').textContent = track.title;
  document.getElementById('player-artist').textContent = track.artist;
  audioEl.src = track.file;
  audioEl.load();
}

function togglePlay() {
  if (isPlaying) {
    audioEl.pause();
  } else {
    audioEl.play();
  }
  isPlaying = !isPlaying;
  updatePlayState();
  saveMusicState();
}

function updatePlayState() {
  const icon = document.getElementById('player-play-icon');
  const disk = document.getElementById('player-disk');

  if (isPlaying) {
    icon.setAttribute('data-lucide', 'pause');
    icon.classList.remove('translate-x-0.5');
    disk.classList.add('animate-[spin_4s_linear_infinite]');
  } else {
    icon.setAttribute('data-lucide', 'play');
    icon.classList.add('translate-x-0.5');
    disk.classList.remove('animate-[spin_4s_linear_infinite]');
  }
  if (window.lucide) window.lucide.createIcons();
}

function nextTrack() {
  loadTrack(currentTrackIndex + 1);
  if (isPlaying) audioEl.play();
}

function prevTrack() {
  loadTrack(currentTrackIndex - 1);
  if (isPlaying) audioEl.play();
}

function updateProgress() {
  const currentEl = document.getElementById('player-time-current');
  const totalEl = document.getElementById('player-time-total');
  const progressBar = document.getElementById('player-progress-bar');

  if (audioEl.duration) {
    const currentMins = Math.floor(audioEl.currentTime / 60);
    const currentSecs = Math.floor(audioEl.currentTime % 60).toString().padStart(2, '0');
    currentEl.textContent = `${currentMins}:${currentSecs}`;

    const totalMins = Math.floor(audioEl.duration / 60);
    const totalSecs = Math.floor(audioEl.duration % 60).toString().padStart(2, '0');
    totalEl.textContent = `${totalMins}:${totalSecs}`;

    const progressPercent = (audioEl.currentTime / audioEl.duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
  }
}

function seekAudio(e) {
  const container = document.getElementById('player-progress-container');
  const rect = container.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const width = rect.width;
  const seekTime = (clickX / width) * audioEl.duration;
  audioEl.currentTime = seekTime;
}

function toggleMusicPlayerControls() {
  const controls = document.getElementById('player-controls');
  const icon = document.getElementById('player-toggle-icon');

  if (controls.classList.contains('hidden')) {
    controls.classList.remove('hidden');
    icon.style.transform = 'rotate(0deg)';
  } else {
    controls.classList.add('hidden');
    icon.style.transform = 'rotate(180deg)';
  }
}


/*
window.togglePlay = togglePlay;
window.nextTrack = nextTrack;
window.prevTrack = prevTrack;
window.seekAudio = seekAudio;
window.toggleMusicPlayerControls = toggleMusicPlayerControls;
*/

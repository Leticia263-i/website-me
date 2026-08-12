/* ========================================================= */
/* ==================== PROFILE SECTION JS ================= */
/* ========================================================= */

// Render profile contents onto the DOM
function renderProfile() {
  const nameEl = document.getElementById('profile-name');
  if (!nameEl) return;

  nameEl.textContent = profile.name;
  document.getElementById('profile-bio-headline').textContent = profile.bioHeadline;
  document.getElementById('profile-school-details').textContent = profile.school;
  document.getElementById('profile-full-bio').textContent = profile.fullBio || "Belum ada biografi.";
  document.getElementById('profile-hobby').textContent = profile.hobby || "-";
  document.getElementById('profile-interest').textContent = profile.interest || "-";

  // Render photo
  const profileAvatarBig = document.getElementById('profile-avatar-big');
  if (profileAvatarBig) {
    if (profile.avatar && (profile.avatar.startsWith('data:') || profile.avatar.startsWith('http'))) {
      profileAvatarBig.innerHTML = `<img src="${profile.avatar}" class="w-full h-full object-cover rounded-xl" alt="Profile Photo" loading="lazy">`;
    } else {
      profileAvatarBig.innerHTML = AVATARS[profile.avatar] || AVATARS.avatar1;
    }
  }

  // Render socials
  const grid = document.getElementById('profile-social-grid');
  grid.innerHTML = '';

  const soc = profile.socials;
  const socialConfigs = [
    { key: 'instagram', icon: 'instagram', label: 'Instagram', color: 'hover:bg-pink-50 hover:text-pink-600 dark:hover:bg-pink-950/20' },
    { key: 'github', icon: 'github', label: 'GitHub', color: 'hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-slate-800/40' },
    { key: 'linkedin', icon: 'linkedin', label: 'LinkedIn', color: 'hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-950/20' },
    { key: 'youtube', icon: 'youtube', label: 'YouTube', color: 'hover:bg-red-50 hover:text-red-650 dark:hover:bg-red-950/20' },
    { key: 'email', icon: 'mail', label: 'Surel / Email', color: 'hover:bg-sky-50 hover:text-sky-655 dark:hover:bg-sky-950/20', isMail: true }
  ];

  socialConfigs.forEach(cfg => {
    const linkVal = soc[cfg.key];
    if (linkVal) {
      const href = cfg.isMail ? `mailto:${linkVal}` : linkVal;
      const a = document.createElement('a');
      a.href = href;
      a.target = "_blank";
      a.className = `flex items-center gap-2.5 p-3 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/40 text-xs font-semibold text-slate-650 dark:text-slate-350 shadow-sm transition-all hover:scale-102 hover:shadow ${cfg.color}`;
      a.innerHTML = `
          <i data-lucide="${cfg.icon}" class="w-4.5 h-4.5"></i>
          <span class="truncate">${cfg.label}</span>
        `;
      grid.appendChild(a);
    }
  });

  // Render skills progress bars
  const skillsContainer = document.getElementById('profile-skills-container');
  skillsContainer.innerHTML = '';

  profile.skills.forEach(skill => {
    const skillDiv = document.createElement('div');
    skillDiv.className = "space-y-1.5";

    const accentColors = ['bg-brand-500', 'bg-violet-500', 'bg-emerald-500', 'bg-amber-500', 'bg-rose-500'];
    const randomIdx = Math.floor(Math.random() * accentColors.length);
    const colorClass = accentColors[randomIdx];

    skillDiv.innerHTML = `
        <div class="flex items-center justify-between text-xs font-semibold">
          <span class="text-slate-700 dark:text-slate-300">${skill.name}</span>
          <span class="text-slate-900 dark:text-white">${skill.value}%</span>
        </div>
        <div class="h-2 w-full bg-slate-100 dark:bg-slate-800/80 rounded-full overflow-hidden">
          <div class="skill-bar-fill h-full ${colorClass} rounded-full" style="width: 0%"></div>
        </div>
      `;
    skillsContainer.appendChild(skillDiv);

    // Smooth micro-animation for progress filling
    setTimeout(() => {
      const fillBar = skillDiv.querySelector('.skill-bar-fill');
      if (fillBar) fillBar.style.width = `${skill.value}%`;
    }, 150);
  });

  if (window.lucide) window.lucide.createIcons();
}

// Open modal and load existing parameters
function openProfileEditorModal() {
  const modal = document.getElementById('profile-editor-modal');
  if (!modal) return;

  document.getElementById('edit-name').value = profile.name;
  document.getElementById('edit-school').value = profile.school;
  document.getElementById('edit-bio-headline').value = profile.bioHeadline;
  document.getElementById('edit-full-bio').value = profile.fullBio || "";
  document.getElementById('edit-hobbies').value = profile.hobby || "";
  document.getElementById('edit-interests').value = profile.interest || "";

  // Presets select states
  const avatarVal = profile.avatar || "avatar1";
  const checkedRadio = document.querySelector(`input[name="profile-avatar"][value="${avatarVal}"]`);
  if (checkedRadio) {
    checkedRadio.checked = true;
  }

  // Load preview
  const preview = document.getElementById('edit-avatar-preview');
  if (preview) {
    if (avatarVal.startsWith('data:') || avatarVal.startsWith('http')) {
      preview.innerHTML = `<img src="${avatarVal}" class="w-full h-full object-cover rounded-xl" alt="Preview">`;
      customAvatarData = avatarVal;
      // Show clear photo button
      const clearBtn = document.getElementById('clear-photo-btn');
      if (clearBtn) clearBtn.classList.remove('hidden');
    } else {
      preview.innerHTML = AVATARS[avatarVal] || AVATARS.avatar1;
      customAvatarData = null;
      const clearBtn = document.getElementById('clear-photo-btn');
      if (clearBtn) clearBtn.classList.add('hidden');
    }
  }

  // Social fields
  document.getElementById('edit-social-instagram').value = profile.socials.instagram || "";
  document.getElementById('edit-social-github').value = profile.socials.github || "";
  document.getElementById('edit-social-linkedin').value = profile.socials.linkedin || "";
  document.getElementById('edit-social-youtube').value = profile.socials.youtube || "";
  document.getElementById('edit-social-email').value = profile.socials.email || "";

  // Skills
  const container = document.getElementById('edit-skills-form-grid');
  container.innerHTML = '';
  profile.skills.forEach((skill, index) => {
    const div = document.createElement('div');
    div.className = "flex items-center gap-3 justify-between bg-slate-50 dark:bg-slate-800/40 p-3 rounded-xl border border-slate-100 dark:border-slate-800";
    div.innerHTML = `
        <span class="text-xs font-semibold text-slate-700 dark:text-slate-350 truncate max-w-[200px]">${skill.name}</span>
        <div class="flex items-center gap-1.5 w-24 shrink-0">
          <input type="number" id="edit-skill-val-${index}" value="${skill.value}" min="0" max="100" class="w-full px-2 py-1 bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-750 text-xs text-center rounded-lg focus:outline-none focus:border-brand-500 font-bold">
          <span class="text-xs text-slate-400 font-semibold">%</span>
        </div>
      `;
    container.appendChild(div);
  });

  // PIN security load
  document.getElementById('edit-pin').value = profile.pin || "1234";

  modal.showModal();
}

// Preset selections
function handlePresetSelect(value) {
  customAvatarData = null;
  const clearBtn = document.getElementById('clear-photo-btn');
  if (clearBtn) clearBtn.classList.add('hidden');

  const preview = document.getElementById('edit-avatar-preview');
  if (preview) {
    preview.innerHTML = AVATARS[value];
  }
}

// Custom photo uploads with validation
function handleProfilePhotoUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  // Validation: Size < 2MB
  if (file.size > 2 * 1024 * 1024) {
    showToast("Gagal: Ukuran foto harus kurang dari 2MB! ⚠️");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    customAvatarData = e.target.result;

    // Highlight preview
    const preview = document.getElementById('edit-avatar-preview');
    if (preview) {
      preview.innerHTML = `<img src="${customAvatarData}" class="w-full h-full object-cover rounded-xl" alt="Preview Photo">`;
    }

    // Uncheck preset radios
    const presetRadios = document.querySelectorAll('input[name="profile-avatar"]');
    presetRadios.forEach(r => r.checked = false);

    // Show clear photo button
    const clearBtn = document.getElementById('clear-photo-btn');
    if (clearBtn) clearBtn.classList.remove('hidden');

    showToast("Foto kustom berhasil diunggah! 📸");
  };

  reader.onerror = function () {
    showToast("Gagal mengunggah foto! ❌");
  };

  reader.readAsDataURL(file);
}

// Remove uploaded custom photos
function clearCustomPhoto() {
  customAvatarData = null;

  const clearBtn = document.getElementById('clear-photo-btn');
  if (clearBtn) clearBtn.classList.add('hidden');

  const presetRadios = document.querySelectorAll('input[name="profile-avatar"]');
  if (presetRadios.length > 0) {
    presetRadios[0].checked = true;
    const preview = document.getElementById('edit-avatar-preview');
    if (preview) {
      preview.innerHTML = AVATARS[presetRadios[0].value];
    }
  }

  const fileInput = document.getElementById('edit-profile-photo-file');
  if (fileInput) fileInput.value = '';

  showToast("Foto kustom dihapus. Menggunakan preset. 🗑️");
}

// Save inputs to LocalStorage database
function saveProfile(e) {
  e.preventDefault();

  const nameVal = document.getElementById('edit-name').value.trim();
  const schoolVal = document.getElementById('edit-school').value.trim();

  // Validate form details
  if (!nameVal || !schoolVal) {
    showToast("Gagal: Nama dan Sekolah tidak boleh kosong! ⚠️");
    return;
  }

  profile.name = nameVal;
  profile.school = schoolVal;
  profile.bioHeadline = document.getElementById('edit-bio-headline').value.trim();
  profile.fullBio = document.getElementById('edit-full-bio').value.trim();
  profile.hobby = document.getElementById('edit-hobbies').value.trim();
  profile.interest = document.getElementById('edit-interests').value.trim();

  const checkedRadio = document.querySelector('input[name="profile-avatar"]:checked');
  if (customAvatarData) {
    profile.avatar = customAvatarData;
  } else if (checkedRadio) {
    profile.avatar = checkedRadio.value;
  } else {
    profile.avatar = 'avatar1';
  }

  profile.socials = {
    instagram: document.getElementById('edit-social-instagram').value.trim(),
    github: document.getElementById('edit-social-github').value.trim(),
    linkedin: document.getElementById('edit-social-linkedin').value.trim(),
    youtube: document.getElementById('edit-social-youtube').value.trim(),
    email: document.getElementById('edit-social-email').value.trim()
  };

  profile.skills.forEach((skill, index) => {
    const valInput = document.getElementById(`edit-skill-val-${index}`);
    if (valInput) {
      skill.value = Math.min(100, Math.max(0, Number(valInput.value)));
    }
  });

  const pinVal = document.getElementById('edit-pin').value;
  profile.pin = pinVal || '1234';

  saveData();
  renderProfile();
  closeModal('profile-editor-modal');
  showToast("Profil Anda berhasil disunting! 🌟");
}

/* ======================================================
                GALLERY JAVASCRIPT
====================================================== */

const galleryImages = [

  "assets/Gallery/Foto1.jpg",
  "assets/Gallery/Foto2.jpg",
  "assets/Gallery/Foto3.jpg",
  "assets/Gallery/Foto4.jpg",
  "assets/Gallery/Foto5.jpg",
  "assets/Gallery/Foto6.jpg",
  "assets/Gallery/Foto7.jpg",
  "assets/Gallery/Foto8.jpg",
  "assets/Gallery/Foto9.jpg",
  "assets/Gallery/Foto10.jpg",
  "assets/Gallery/Foto11.jpg",
  "assets/Gallery/Foto12.jpg",
  "assets/Gallery/Foto13.jpg",
  "assets/Gallery/Foto14.jpg",
  "assets/Gallery/Foto15.jpg",
  "assets/Gallery/Foto16.jpg",
  "assets/Gallery/Foto17.jpg",
  "assets/Gallery/Foto18.jpg",
  "assets/Gallery/Foto19.jpg",
  "assets/Gallery/Foto20.jpg",
  "assets/Gallery/Foto21.jpg",
  "assets/Gallery/Foto22.jpg",
  "assets/Gallery/Foto23.jpg",
  "assets/Gallery/Foto24.jpg",
  "assets/Gallery/Foto25.jpg"

];

let currentImage = 0;

const modal = document.getElementById("galleryModal");
const preview = document.getElementById("galleryPreview");
const counter = document.getElementById("imageCounter");

/* ===============================
   OPEN
================================= */

function openGallery(index) {

  currentImage = index;

  preview.src = galleryImages[currentImage];

  counter.innerHTML = `${currentImage + 1} / ${galleryImages.length}`;

  modal.classList.remove("hidden");

  document.body.style.overflow = "hidden";

}

/* ===============================
   CLOSE
================================= */

function closeGallery() {

  modal.classList.add("hidden");

  document.body.style.overflow = "auto";

}

/* ===============================
   NEXT
================================= */

function nextImage() {

  currentImage++;

  if (currentImage >= galleryImages.length) {

    currentImage = 0;

  }

  preview.src = galleryImages[currentImage];

  counter.innerHTML = `${currentImage + 1} / ${galleryImages.length}`;

}

/* ===============================
   PREVIOUS
================================= */

function prevImage() {

  currentImage--;

  if (currentImage < 0) {

    currentImage = galleryImages.length - 1;

  }

  preview.src = galleryImages[currentImage];

  counter.innerHTML = `${currentImage + 1} / ${galleryImages.length}`;

}

/* ===============================
   ESC
================================= */

document.addEventListener("keydown", (e) => {

  if (modal.classList.contains("hidden")) return;

  if (e.key === "Escape") {

    closeGallery();

  }

  if (e.key === "ArrowRight") {

    nextImage();

  }

  if (e.key === "ArrowLeft") {

    prevImage();

  }

});

/* ===============================
   CLICK BACKGROUND
================================= */

modal.addEventListener("click", (e) => {

  if (e.target === modal) {

    closeGallery();

  }

});

/* ===============================
   SWIPE HP
================================= */

let touchStartX = 0;

let touchEndX = 0;

preview.addEventListener("touchstart", (e) => {

  touchStartX = e.changedTouches[0].screenX;

});

preview.addEventListener("touchend", (e) => {

  touchEndX = e.changedTouches[0].screenX;

  if (touchEndX < touchStartX - 50) {

    nextImage();

  }

  if (touchEndX > touchStartX + 50) {

    prevImage();

  }

});

/* ===============================
   AUTO PLAY
================================= */

let slideShow;

function startSlideShow() {

  slideShow = setInterval(() => {

    nextImage();

  }, 4000);

}

function stopSlideShow() {

  clearInterval(slideShow);

}

modal.addEventListener("mouseenter", stopSlideShow);

modal.addEventListener("mouseleave", startSlideShow);

/* ===============================
   START
================================= */

startSlideShow();

// Register on load/inject functions to window object
window.renderProfile = renderProfile;
window.openProfileEditorModal = openProfileEditorModal;
window.handlePresetSelect = handlePresetSelect;
window.handleProfilePhotoUpload = handleProfilePhotoUpload;
window.clearCustomPhoto = clearCustomPhoto;
window.saveProfile = saveProfile;

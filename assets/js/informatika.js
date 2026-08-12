/* ========================================================= */
/* ==================== INFORMATIKA SECTION JS ============= */
/* ========================================================= */

let activeFilter = "Semua";

// Initialize filter category pills for Informatika
function initCategoryFilters() {
  const container = document.getElementById('info-category-pills');
  if (!container) return;

  container.innerHTML = '';
  const cats = ["Semua", ...CATEGORIES["Informatika"]];

  cats.forEach(cat => {
    const button = document.createElement('button');
    button.onclick = () => setAssignmentFilter(cat);
    button.id = `pill-info-${cat.replace(/\s+/g, '-')}`;
    button.className = "px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all";
    button.textContent = cat;
    container.appendChild(button);
  });

  updateActivePillStyle(cats);
}

// Change current active category filter
function setAssignmentFilter(category) {
  activeFilter = category;
  renderAssignmentsTab();
}

// Update categories pill UI styles dynamically
function updateActivePillStyle(cats) {
  cats.forEach(cat => {
    const el = document.getElementById(`pill-info-${cat.replace(/\s+/g, '-')}`);
    if (!el) return;

    if (cat === activeFilter) {
      el.className = "px-3 py-1.5 rounded-lg text-xs font-bold bg-brand-500 border-brand-500 text-white shadow-sm";
    } else {
      el.className = "px-3 py-1.5 rounded-lg text-xs font-semibold border-slate-200 dark:border-slate-800 text-slate-655 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 bg-white dark:bg-slate-900/30";
    }
  });
}

// Render Informatika assignments
function renderAssignmentsTab() {
  const grid = document.getElementById('info-assignments-grid');
  const emptyState = document.getElementById('info-empty-state');
  if (!grid) return;

  const searchInput = document.getElementById('info-search');
  const searchVal = searchInput ? searchInput.value.toLowerCase() : "";

  // Update pills UI
  const cats = ["Semua", ...CATEGORIES["Informatika"]];
  updateActivePillStyle(cats);

  // Filter tasks list
  let filtered = assignments.filter(t => t.subject === 'Informatika');

  if (activeFilter !== 'Semua') {
    filtered = filtered.filter(t => t.category === activeFilter);
  }

  if (searchVal.trim() !== '') {
    filtered = filtered.filter(t => t.title.toLowerCase().includes(searchVal) || t.description.toLowerCase().includes(searchVal));
  }

  grid.innerHTML = '';

  if (filtered.length === 0) {
    if (emptyState) emptyState.classList.remove('hidden');
    return;
  } else {
    if (emptyState) emptyState.classList.add('hidden');
  }

  filtered.forEach((task, index) => {
    const card = document.createElement('div');
    card.style.animationDelay = `${index * 50}ms`;
    card.className = "bg-white dark:bg-slate-900 rounded-2.5xl border border-slate-200/80 dark:border-slate-800/80 p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between group animate-fade-in-up duration-300";

    const cardColor = 'bg-brand-50 dark:bg-brand-950/30 text-brand-600 dark:text-brand-400 border-brand-100 dark:border-brand-900/30';
    const cardIcon = 'binary';

    const dateObj = new Date(task.date);
    const dayMonth = dateObj.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });

    const scoreBadge = task.score
      ? `<span class="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-lg bg-amber-50 dark:bg-amber-950/20 text-amber-700 dark:text-amber-400 border border-amber-200/50"><i data-lucide="award" class="w-3.5 h-3.5"></i> ${task.score}</span>`
      : '';

    card.innerHTML = `
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold ${cardColor} border">
              <i data-lucide="${cardIcon}" class="w-3.5 h-3.5"></i>
              ${task.category}
            </span>
            ${scoreBadge}
          </div>
          
          <div class="space-y-1.5">
            <h4 class="font-heading font-extrabold text-base leading-snug group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors text-slate-800 dark:text-slate-100 line-clamp-2">${task.title}</h4>
            <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed font-medium">${task.description}</p>
          </div>
        </div>

        <div class="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <span class="text-[10px] text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider flex items-center gap-1">
            <i data-lucide="calendar" class="w-3 h-3"></i>
            ${dayMonth}
          </span>
          <button onclick="openAssignmentDetail('${task.id}')" class="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/40 dark:hover:bg-slate-800 border border-slate-150 dark:border-slate-700 text-xs font-bold text-slate-655 dark:text-slate-300 transition-all">
            Detail &rarr;
          </button>
        </div>
      `;
    grid.appendChild(card);
  });

  if (window.lucide) window.lucide.createIcons();
}

// Expose functions to global context
window.initCategoryFilters = initCategoryFilters;
window.setAssignmentFilter = setAssignmentFilter;
window.renderAssignmentsTab = renderAssignmentsTab;

import { features, categories, audiences, statuses } from './features-data.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initExplorer();
});

// ===== Theme Toggle Logic (Dark Mode vs Light Blue Theme) =====
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  // Read saved theme or default to dark
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    updateThemeToggleUI(true);
  } else {
    document.body.classList.remove('light-theme');
    updateThemeToggleUI(false);
  }

  toggleBtn.addEventListener('click', () => {
    const isLightNow = document.body.classList.toggle('light-theme');
    localStorage.setItem('theme', isLightNow ? 'light' : 'dark');
    updateThemeToggleUI(isLightNow);
  });
}

function updateThemeToggleUI(isLight) {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;
  
  if (isLight) {
    toggleBtn.innerHTML = `
      <svg class="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
      <span class="theme-text">Mörkt tema</span>
    `;
    toggleBtn.setAttribute('aria-label', 'Växla till mörkt tema');
  } else {
    toggleBtn.innerHTML = `
      <svg class="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="18.36" x2="5.64" y2="19.78"></line>
        <line x1="18.36" y1="4.22" x2="19.78" y2="5.64"></line>
      </svg>
      <span class="theme-text">Ljust tema</span>
    `;
    toggleBtn.setAttribute('aria-label', 'Växla till ljust blått tema');
  }
}

// ===== Mobile Navigation Menu =====
function initNavigation() {
  const toggleBtn = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.classList.toggle('nav-open', isOpen);
  });

  // Close menu on navigation link clicks
  const navLinks = navMenu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
    });
  });
}

// ===== Interactive Feature Explorer =====
function initExplorer() {
  const catalogGrid = document.getElementById('uc-catalog-grid');
  const countDisplay = document.getElementById('uc-matching-count');
  const searchInput = document.getElementById('uc-search-input');
  const resetBtn = document.getElementById('uc-reset-filters');
  
  const categoryFilters = document.getElementById('category-filters');
  const audienceFilters = document.getElementById('audience-filters');
  const statusFilters = document.getElementById('status-filters');

  if (!catalogGrid) return;

  // Filter state
  let activeFilters = {
    category: 'all',
    audience: 'all',
    status: 'all',
    query: ''
  };

  // Build filter buttons dynamically to avoid hardcoded UI mismatches
  buildFilterButtons();

  // Initial render
  renderFeatures();

  // Event Listeners
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      activeFilters.query = e.target.value.toLowerCase().trim();
      renderFeatures();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      activeFilters = { category: 'all', audience: 'all', status: 'all', query: '' };
      if (searchInput) searchInput.value = '';
      
      // Reset active states
      resetButtonActiveStates();
      renderFeatures();
    });
  }

  function buildFilterButtons() {
    // 1. Categories
    if (categoryFilters) {
      categoryFilters.innerHTML = `<button class="filter-chip is-active" data-filter="all">Alla områden</button>` + 
        categories.map(c => `<button class="filter-chip" data-filter="${c.id}">${c.label}</button>`).join('');
      
      categoryFilters.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
          categoryFilters.querySelectorAll('button').forEach(b => b.classList.remove('is-active'));
          btn.classList.add('is-active');
          activeFilters.category = btn.getAttribute('data-filter');
          renderFeatures();
        });
      });
    }

    // 2. Audiences
    if (audienceFilters) {
      audienceFilters.innerHTML = `<button class="filter-chip is-active" data-filter="all">Alla målgrupper</button>` + 
        audiences.map(a => `<button class="filter-chip" data-filter="${a.id}">${a.label}</button>`).join('');

      audienceFilters.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
          audienceFilters.querySelectorAll('button').forEach(b => b.classList.remove('is-active'));
          btn.classList.add('is-active');
          activeFilters.audience = btn.getAttribute('data-filter');
          renderFeatures();
        });
      });
    }

    // 3. Statuses
    if (statusFilters) {
      statusFilters.innerHTML = `<button class="filter-chip is-active" data-filter="all">Alla faser</button>` + 
        statuses.map(s => `<button class="filter-chip" data-filter="${s.id}">${s.label}</button>`).join('');

      statusFilters.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
          statusFilters.querySelectorAll('button').forEach(b => b.classList.remove('is-active'));
          btn.classList.add('is-active');
          activeFilters.status = btn.getAttribute('data-filter');
          renderFeatures();
        });
      });
    }
  }

  function resetButtonActiveStates() {
    [categoryFilters, audienceFilters, statusFilters].forEach(container => {
      if (container) {
        container.querySelectorAll('button').forEach(btn => {
          if (btn.getAttribute('data-filter') === 'all') {
            btn.classList.add('is-active');
          } else {
            btn.classList.remove('is-active');
          }
        });
      }
    });
  }

  function renderFeatures() {
    // Filter logic
    const filtered = features.filter(item => {
      // Category filter
      if (activeFilters.category !== 'all' && item.category !== activeFilters.category) {
        return false;
      }
      // Audience filter
      if (activeFilters.audience !== 'all' && !item.audiences.includes(activeFilters.audience)) {
        return false;
      }
      // Status filter
      if (activeFilters.status !== 'all' && item.status !== activeFilters.status) {
        return false;
      }
      // Text search query
      if (activeFilters.query) {
        const text = (item.title + ' ' + item.description + ' ' + item.concreteExample + ' ' + item.valueCreated.join(' ')).toLowerCase();
        if (!text.includes(activeFilters.query)) {
          return false;
        }
      }
      return true;
    });

    // Update count
    if (countDisplay) {
      countDisplay.textContent = `${filtered.length} funktioner matchar`;
    }

    // Render cards
    if (filtered.length === 0) {
      catalogGrid.innerHTML = `
        <div class="uc-empty" style="grid-column: 1 / -1; padding: 3rem 1rem;">
          <p>Hittade inga funktioner som matchar dina filterval. Prova att ändra sökningen eller rensa filtren.</p>
        </div>
      `;
      return;
    }

    catalogGrid.innerHTML = filtered.map(item => {
      const statusClass = item.status === 'current' ? 'uc-status--current' : 'uc-status--potential';
      const statusText = item.status === 'current' ? 'Befintlig prototyp' : 'Planerad tillämpning';
      
      // Render Category Icons (SVGs matching RoboDog aesthetic)
      let categoryIcon = '';
      if (item.category === 'social') {
        categoryIcon = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        `;
      } else if (item.category === 'vardighet') {
        categoryIcon = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <circle cx="12" cy="11" r="3"></circle>
          </svg>
        `;
      } else if (item.category === 'trygghet') {
        categoryIcon = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        `;
      } else if (item.category === 'formfaktor') {
        categoryIcon = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
            <polyline points="2 17 12 22 22 17"></polyline>
            <polyline points="2 12 12 17 22 12"></polyline>
          </svg>
        `;
      }

      return `
        <article class="uc-card glass" id="card-${item.id}">
          <div class="uc-status ${statusClass}">${statusText}</div>
          <div class="uc-icon">${categoryIcon}</div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          
          <div class="uc-example">
            <strong>Konkret scenario:</strong>
            <em>"${item.concreteExample}"</em>
          </div>

          <div style="margin-top: 1rem; width: 100%;">
            <strong style="font-size: 0.8rem; color: var(--text); display: block; margin-bottom: 0.4rem;">Värdeskapande:</strong>
            <ul class="uc-card__value">
              ${item.valueCreated.map(v => `<li>✓ ${v}</li>`).join('')}
            </ul>
          </div>

          <div class="uc-card__meta" style="margin-top: auto; padding-top: 1rem; width: 100%; border-top: 1px solid var(--border);">
            <span class="uc-chip">${item.categoryLabel}</span>
            ${item.audienceLabels.map(al => `<span class="uc-chip">${al}</span>`).join('')}
          </div>
        </article>
      `;
    }).join('');
  }
}

/**
 * 5th Semester Notes - Premium UI/UX Features
 * Complete implementation with all enhancements
 * Updated: Added Scheme of Evaluation (SOE) subject
 */

// ============================================================================
// DATA STRUCTURE
// ============================================================================

const subjectsData = {
  CN: {
    name: "Computer Networks",
    code: "CN",
    slug: "cn",
    icon: "🌐",
    subtitle: "Network protocols and architecture",
    color: "#2563eb",
    resources: {
      "Best Notes": ["CN/CN-Best.pdf"],
      "Module 1": ["CN/CN-NOTES-M1.pdf"],
      "Module 2": ["CN/CN-NOTES-M2.pdf"],
      "Module 3": ["CN/CN-NOTES-M3.pdf"],
      "Module 4": ["CN/CN-NOTES-M4.pdf"],
      "Module 5": ["CN/CN-NOTES-M5.pdf"],
      "Question Bank": [
        "CN/CN-Q_BANK/CN-QB-M1.pdf",
        "CN/CN-Q_BANK/CN-QB-M2.pdf",
        "CN/CN-Q_BANK/CN-QB-M3.pdf",
        "CN/CN-Q_BANK/CN-QB-M4.pdf",
        "CN/CN-Q_BANK/CN-QB-M5.pdf"
      ],
      "Previous Year Questions": [
        "CN/CN-Q_BANK/CN-PYQ.pdf",
        "CN/CN-Q_BANK/CN-PYQ2.pdf"
      ],
      "Model Question Paper": ["CN/CN-Q_BANK/CN-MQP.pdf"]
    }
  },
  TOC: {
    name: "Theory of Computation",
    code: "TOC",
    slug: "toc",
    icon: "🧮",
    subtitle: "Automata, languages, and complexity",
    color: "#9333ea",
    resources: {
      "Module 1": ["TOC/TOC-M1.pdf"],
      "Module 2": ["TOC/TOC-M2.pdf"],
      "Module 3": ["TOC/TOC-M3.pdf"],
      "Module 4": ["TOC/TOC-M4.pdf"],
      "Module 5": ["TOC/TOC-M5.pdf"],
      "Question Bank": [
        "TOC/TOC-QB.pdf",
        "TOC/TOC-QB2.pdf"
      ],
      "Previous Year Questions": ["TOC/TOC-PYQ.pdf"],
      "Model Question Paper": ["TOC/TOC-MQP.pdf"]
    }
  },
  UNIX: {
    name: "UNIX & Shell Programming",
    code: "UNIX",
    slug: "unix",
    icon: "💻",
    subtitle: "Command line and scripting",
    color: "#059669",
    resources: {
      "Module 1": ["UNIX/unix-M1.pdf"],
      "Module 2": ["UNIX/unix-M2.pdf"],
      "Module 3": ["UNIX/unix-M3.pdf"],
      "Module 4": ["UNIX/unix-M4.pdf"],
      "Module 5": ["UNIX/unix-M5.pdf"],
      "Question Bank": [
        "UNIX/unix-QB.pdf",
        "UNIX/unix-QB2.pdf"
      ],
      "Model Question Paper": ["UNIX/unix-MQP.pdf"]
    }
  },
  "SE-&-MP": {
    name: "Software Engineering & Project Management",
    code: "SE & MP",
    slug: "se",
    icon: "📋",
    subtitle: "SDLC and project methodologies",
    color: "#ea580c",
    resources: {
      "Best Notes": ["SE-&-MP/SE-best.pdf"],
      "Module 1": ["SE-&-MP/SE&PM-M1-Notes.pdf"],
      "Module 2": ["SE-&-MP/SE&PM-M2-Notes.pdf"],
      "Module 3": ["SE-&-MP/SE&PM-M3-Notes.pdf"],
      "Module 4": ["SE-&-MP/SE&PM-M4-Notes.pdf"],
      "Module 5": ["SE-&-MP/SE&PM-M5-Notes.pdf"],
      "Question Bank": [
        "SE-&-MP/Q-bank/SE_M1_IMP.pdf",
        "SE-&-MP/Q-bank/SE_M2_IMP.pdf",
        "SE-&-MP/Q-bank/IMP-Q-&-ANSWERS.pdf"
      ],
      "Previous Year Questions": ["SE-&-MP/Q-bank/SE-PYQ.pdf"],
      "Model Question Paper": ["SE-&-MP/Q-bank/SE-MQP.pdf"]
    }
  },
  "RM-&-IPR": {
    name: "Research Methodology & IPR",
    code: "RM & IPR",
    slug: "rm-ipr",
    icon: "🔬",
    subtitle: "Research methods and intellectual property",
    color: "#0891b2",
    resources: {
      "Module 1": ["RM-&-IPR/RM-M1.pdf"],
      "Module 2": ["RM-&-IPR/RM-M2.pdf"],
      "Module 3": ["RM-&-IPR/RM-M3.pdf"],
      "Module 4": ["RM-&-IPR/RM-M4.pdf"],
      "Module 5": ["RM-&-IPR/RM-M5.pdf"],
      "Model Question Paper": ["RM-&-IPR/RM-MQP.pdf"]
    }
  },
  EVS: {
    name: "Environmental Studies",
    code: "EVS",
    slug: "evs",
    icon: "🌱",
    subtitle: "Environmental science and sustainability",
    color: "#16a34a",
    resources: {
      "Module 1": [
        "EVS/EVS-M1.pdf",
        "EVS/EVS-M1.2.pdf"
      ],
      "Module 2": [
        "EVS/EVS-M2.pdf",
        "EVS/EVS-M2.2.pdf"
      ],
      "Module 3": [
        "EVS/EVS-M3.2.pdf",
        "EVS/EVS-M3&M4.pdf"
      ],
      "Module 4": [
        "EVS/EVS-M4.2.pdf",
        "EVS/EVS-M3&M4.pdf"
      ],
      "Module 5": ["EVS/EVS-M5.pdf"],
      "Question Bank": ["EVS/EVS-QB.pdf"],
      "Previous Year Questions": ["EVS/EVS-PYQ.pdf"]
    }
  },
  SOE: {
    name: "Scheme of Evaluation",
    code: "SOE",
    slug: "soe",
    icon: "📊",
    subtitle: "Evaluation schemes and course structure",
    color: "#dc2626",
    resources: {
      "Scheme of Evaluation": [
        "SOE/SCH_BCS501.pdf",
        "SOE/SCH_BCS502.pdf",
        "SOE/SCH_BCS503.pdf",
        "SOE/SCH_BCS515C.pdf",
        "SOE/SCH_BRMK557 modified.pdf"
      ]
    }
  }
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function getSubjectBySlug(slug) {
  return Object.values(subjectsData).find(subject => subject.slug === slug);
}

function formatFileName(file) {
  const fileName = file.split("/").pop().replace(/.pdf$/i, "");
  return fileName
    .replace(/-/g, " ")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase())
    .replace(/Cn /g, "CN ")
    .replace(/Toc /g, "TOC ")
    .replace(/Unix /g, "Unix ")
    .replace(/Se /g, "SE ")
    .replace(/Rm /g, "RM ")
    .replace(/Evs /g, "EVS ")
    .replace(/Soe /g, "SOE ")
    .replace(/Qb /g, "QB ")
    .replace(/Pyq/g, "PYQ")
    .replace(/Mqp/g, "MQP");
}

function getFileTypeIcon(file) {
  const fileName = file.toLowerCase();
  if (fileName.includes('best') || fileName.includes('notes')) return '📖';
  if (fileName.includes('module') || fileName.includes('m1') || fileName.includes('m2') || 
      fileName.includes('m3') || fileName.includes('m4') || fileName.includes('m5')) return '📚';
  if (fileName.includes('qb') || fileName.includes('question bank') || fileName.includes('imp')) return '❓';
  if (fileName.includes('pyq') || fileName.includes('previous')) return '📝';
  if (fileName.includes('mqp') || fileName.includes('model')) return '📄';
  return '📄';
}

function getFileTypeLabel(file) {
  const fileName = file.toLowerCase();
  if (fileName.includes('best')) return 'Handwritten Important Questions';
  if (fileName.includes('module') || fileName.includes('m1') || fileName.includes('m2') || 
      fileName.includes('m3') || fileName.includes('m4') || fileName.includes('m5')) return 'Module Notes';
  if (fileName.includes('qb') || fileName.includes('question bank') || fileName.includes('imp')) return 'Question Bank';
  if (fileName.includes('pyq') || fileName.includes('previous')) return 'Previous Year';
  if (fileName.includes('mqp') || fileName.includes('model')) return 'Model Paper';
  return 'PDF Document';
}

function getTotalFileCount(subject) {
  return Object.values(subject.resources).flat().length;
}

function getModuleCount(subject) {
  return Object.keys(subject.resources).filter(k => k.toLowerCase().includes('module')).length;
}

// ============================================================================
// TOAST NOTIFICATIONS
// ============================================================================

function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.setAttribute('role', 'alert');
  toast.setAttribute('aria-live', 'polite');
  toast.innerHTML = `
    <span class="toast-icon">${type === 'success' ? '✓' : '⚠'}</span>
    <span class="toast-message">${message}</span>
  `;
  
  document.body.appendChild(toast);
  
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ============================================================================
// DOWNLOAD TRACKING
// ============================================================================

function trackDownload(file) {
  const recentDownloads = JSON.parse(localStorage.getItem('recentDownloads') || '[]');
  const downloadEntry = {
    file: file,
    name: formatFileName(file),
    timestamp: Date.now()
  };
  
  // Remove if already exists
  const index = recentDownloads.findIndex(d => d.file === file);
  if (index > -1) recentDownloads.splice(index, 1);
  
  // Add to beginning
  recentDownloads.unshift(downloadEntry);
  
  // Keep only last 10
  if (recentDownloads.length > 10) recentDownloads.pop();
  
  localStorage.setItem('recentDownloads', JSON.stringify(recentDownloads));
  showToast(`Downloading ${formatFileName(file)}...`, 'success');
}

// ============================================================================
// SEARCH FUNCTIONALITY
// ============================================================================

function createSearchBar(container, searchCallback) {
  const searchHTML = `
    <div class="search-container">
      <input 
        type="search" 
        id="search-input" 
        class="search-input" 
        placeholder="Search subjects or files..."
        aria-label="Search"
        autocomplete="off"
      />
      <span class="search-icon">🔍</span>
    </div>
  `;
  
  const searchWrapper = document.createElement('div');
  searchWrapper.innerHTML = searchHTML;
  container.insertBefore(searchWrapper.firstElementChild, container.firstChild);
  
  const searchInput = document.getElementById('search-input');
  let searchTimeout;
  
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      searchCallback(e.target.value.toLowerCase().trim());
    }, 200);
  });
  
  // Keyboard shortcut: Cmd/Ctrl + K
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      searchInput.focus();
    }
  });
  
  return searchInput;
}

function filterSubjects(searchTerm) {
  const cards = document.querySelectorAll('.subject-card');
  let visibleCount = 0;
  
  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    const isVisible = !searchTerm || text.includes(searchTerm);
    card.style.display = isVisible ? '' : 'none';
    if (isVisible) visibleCount++;
  });
  
  // Show empty state if no results
  const container = document.getElementById('subjects-container');
  let emptyState = container.querySelector('.empty-state');
  
  if (visibleCount === 0 && searchTerm) {
    if (!emptyState) {
      emptyState = document.createElement('div');
      emptyState.className = 'empty-state';
      emptyState.innerHTML = `
        <div class="empty-state-icon">🔍</div>
        <h3>No subjects found</h3>
        <p>Try a different search term</p>
      `;
      container.appendChild(emptyState);
    }
  } else if (emptyState) {
    emptyState.remove();
  }
}

function filterFiles(searchTerm) {
  const cards = document.querySelectorAll('.resource-card');
  let visibleCount = 0;
  
  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    const isVisible = !searchTerm || text.includes(searchTerm);
    card.style.display = isVisible ? '' : 'none';
    if (isVisible) visibleCount++;
  });
  
  // Show empty state
  const container = document.querySelector('.tab-content.active');
  if (!container) return;
  
  let emptyState = container.querySelector('.empty-state');
  
  if (visibleCount === 0 && searchTerm) {
    if (!emptyState) {
      emptyState = document.createElement('div');
      emptyState.className = 'empty-state';
      emptyState.innerHTML = `
        <div class="empty-state-icon">🔍</div>
        <h3>No files found</h3>
        <p>Try a different search term</p>
      `;
      container.appendChild(emptyState);
    }
  } else if (emptyState) {
    emptyState.remove();
  }
}

// ============================================================================
// KEYBOARD NAVIGATION
// ============================================================================

function setupKeyboardNavigation() {
  // Tab navigation for subject cards
  const cards = document.querySelectorAll('.subject-card');
  cards.forEach((card, index) => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Navigate to ${card.querySelector('h3').textContent}`);
    
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        const next = cards[index + 1] || cards[0];
        next.focus();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        const prev = cards[index - 1] || cards[cards.length - 1];
        prev.focus();
      }
    });
  });
  
  // Tab navigation for tabs
  const tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach((button, index) => {
    button.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        const next = tabButtons[index + 1] || tabButtons[0];
        next.focus();
        next.click();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const prev = tabButtons[index - 1] || tabButtons[tabButtons.length - 1];
        prev.focus();
        prev.click();
      } else if (e.key >= '1' && e.key <= '5') {
        const num = parseInt(e.key) - 1;
        if (tabButtons[num]) {
          e.preventDefault();
          tabButtons[num].focus();
          tabButtons[num].click();
        }
      }
    });
  });
  
  // Resource card navigation
  const resourceCards = document.querySelectorAll('.resource-card');
  resourceCards.forEach((card, index) => {
    card.setAttribute('tabindex', '0');
    
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        card.click();
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        const next = resourceCards[index + 1] || resourceCards[0];
        next.focus();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        const prev = resourceCards[index - 1] || resourceCards[resourceCards.length - 1];
        prev.focus();
      }
    });
  });
}

// ============================================================================
// MOBILE GESTURES
// ============================================================================

function setupSwipeGestures() {
  const tabsNav = document.querySelector('.tabs-nav');
  if (!tabsNav || !('ontouchstart' in window)) return;
  
  let startX = 0;
  let startY = 0;
  let distX = 0;
  let distY = 0;
  const threshold = 50;
  const restraint = 100;
  const allowedTime = 300;
  let startTime = 0;
  
  tabsNav.addEventListener('touchstart', (e) => {
    const touch = e.changedTouches[0];
    startX = touch.pageX;
    startY = touch.pageY;
    startTime = new Date().getTime();
  });
  
  tabsNav.addEventListener('touchend', (e) => {
    const touch = e.changedTouches[0];
    distX = touch.pageX - startX;
    distY = touch.pageY - startY;
    const elapsedTime = new Date().getTime() - startTime;
    
    if (elapsedTime <= allowedTime && Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
      const activeTab = document.querySelector('.tab-button.active');
      const tabs = Array.from(document.querySelectorAll('.tab-button'));
      const currentIndex = tabs.indexOf(activeTab);
      
      if (distX > 0 && currentIndex > 0) {
        // Swipe right - previous tab
        tabs[currentIndex - 1].click();
      } else if (distX < 0 && currentIndex < tabs.length - 1) {
        // Swipe left - next tab
        tabs[currentIndex + 1].click();
      }
    }
  });
}

// ============================================================================
// SCROLL ANIMATIONS
// ============================================================================

function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.subject-card, .resource-card, .resource-category').forEach(el => {
    observer.observe(el);
  });
}

// ============================================================================
// RENDER FUNCTIONS
// ============================================================================

function renderSubjectCards() {
  const container = document.getElementById("subjects-container");
  if (!container) return;

  // Show skeleton loader
  container.innerHTML = '<div class="skeleton-loader"></div>'.repeat(7);
  
  setTimeout(() => {
    container.innerHTML = "";
    
    Object.values(subjectsData).forEach((subject, index) => {
      const card = document.createElement("div");
      card.className = "subject-card";
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `Navigate to ${subject.name}`);
      
      const gradients = {
        'CN': 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
        'TOC': 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)',
        'UNIX': 'linear-gradient(135deg, #34d399 0%, #10b981 100%)',
        'SE-&-MP': 'linear-gradient(135deg, #fb923c 0%, #f97316 100%)',
        'RM-&-IPR': 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
        'EVS': 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
        'SOE': 'linear-gradient(135deg, #f87171 0%, #dc2626 100%)'
      };
      
      const softGradients = {
        'CN': 'rgba(96, 165, 250, 0.15)',
        'TOC': 'rgba(167, 139, 250, 0.15)',
        'UNIX': 'rgba(52, 211, 153, 0.15)',
        'SE-&-MP': 'rgba(251, 146, 60, 0.15)',
        'RM-&-IPR': 'rgba(34, 211, 238, 0.15)',
        'EVS': 'rgba(74, 222, 128, 0.15)',
        'SOE': 'rgba(248, 113, 113, 0.15)'
      };
      
      const glows = {
        'CN': '0 0 20px rgba(96, 165, 250, 0.3)',
        'TOC': '0 0 20px rgba(167, 139, 250, 0.3)',
        'UNIX': '0 0 20px rgba(52, 211, 153, 0.3)',
        'SE-&-MP': '0 0 20px rgba(251, 146, 60, 0.3)',
        'RM-&-IPR': '0 0 20px rgba(34, 211, 238, 0.3)',
        'EVS': '0 0 20px rgba(74, 222, 128, 0.3)',
        'SOE': '0 0 20px rgba(248, 113, 113, 0.3)'
      };
      
      card.style.setProperty("--card-accent", gradients[subject.code] || subject.color);
      card.style.setProperty("--card-gradient", softGradients[subject.code] || 'rgba(0, 0, 0, 0.05)');
      card.style.setProperty("--card-glow", glows[subject.code] || 'none');
      
      const fileCount = getTotalFileCount(subject);
      const moduleCount = getModuleCount(subject);
      
      card.onclick = () => {
        window.location.href = `${subject.slug}.html`;
      };
      
      // Click feedback
      card.addEventListener('mousedown', () => {
        card.style.transform = 'scale(0.98)';
      });
      card.addEventListener('mouseup', () => {
        card.style.transform = '';
      });

      card.innerHTML = `
        <span class="subject-card-icon">${subject.icon}</span>
        <h3>${subject.name}</h3>
        <p class="subject-code">${subject.code}</p>
        ${subject.subtitle ? `<p class="subject-subtitle">${subject.subtitle}</p>` : ''}
        <div class="subject-stats">
          <span class="stat-badge">${fileCount} files</span>
          ${moduleCount > 0 ? `<span class="stat-badge">${moduleCount} modules</span>` : ''}
        </div>
      `;

      container.appendChild(card);
    });
    
    // Add search bar
    createSearchBar(container.parentElement, filterSubjects);
    
    // Setup keyboard navigation
    setupKeyboardNavigation();
    setupScrollAnimations();
  }, 300);
}

function organizeResourcesIntoTabs(subject) {
  const tabs = {
    'best-notes': [],
    'modules': [],
    'question-bank': [],
    'pyqs': [],
    'model-papers': []
  };

  Object.entries(subject.resources).forEach(([category, files]) => {
    const categoryLower = category.toLowerCase();
    
    if (categoryLower.includes('best')) {
      tabs['best-notes'] = files;
    } else if (categoryLower.includes('module')) {
      tabs['modules'].push(...files);
    } else if (categoryLower.includes('question bank') || categoryLower.includes('qb')) {
      tabs['question-bank'].push(...files);
    } else if (categoryLower.includes('previous year') || categoryLower.includes('pyq')) {
      tabs['pyqs'].push(...files);
    } else if (categoryLower.includes('model') || categoryLower.includes('mqp')) {
      tabs['model-papers'].push(...files);
    }
  });

  return tabs;
}

function renderResourceCard(file, isProminent = false, isQB = false) {
  const displayName = formatFileName(file);
  const icon = getFileTypeIcon(file);
  const typeLabel = getFileTypeLabel(file);
  const classes = ['resource-card'];
  if (isProminent) classes.push('prominent');
  if (isQB) classes.push('qb-style');
  
  return `
    <a 
      href="${file}" 
      download 
      class="${classes.join(' ')}"
      tabindex="0"
      aria-label="Download ${displayName}"
      data-file="${file}"
      data-type="${typeLabel}"
    >
      <span class="resource-card-icon">${icon}</span>
      <span class="resource-card-title">${displayName}</span>
      <span class="resource-card-type">${typeLabel}</span>
    </a>
  `;
}

function renderSubjectPage() {
  let slug = window.location.pathname.split('/').pop().replace('.html', '');
  if (!slug || slug === '') {
    slug = document.body.getAttribute('data-subject') || '';
  }
  const subject = getSubjectBySlug(slug);

  if (!subject) {
    console.error('Subject not found:', slug);
    return;
  }

  // Set theme
  document.documentElement.setAttribute('data-subject', subject.slug);
  document.body.setAttribute('data-subject', subject.slug);

  // Update header
  const header = document.querySelector('header');
  if (header) {
    header.className = 'subject-header';
    header.innerHTML = `
      <h1>${subject.name}</h1>
      <p>${subject.code} • 5th Semester</p>
    `;
  }

  // Update page title
  document.title = `${subject.name} – 5th Semester Notes`;

  // Add breadcrumbs
  const main = document.querySelector('main');
  const breadcrumbs = main.querySelector('.breadcrumbs') || document.createElement('nav');
  breadcrumbs.className = 'breadcrumbs';
  breadcrumbs.setAttribute('aria-label', 'Breadcrumb');
  breadcrumbs.innerHTML = `
    <a href="index.html">Home</a>
    <span class="breadcrumb-separator">›</span>
    <span>${subject.name}</span>
  `;
  if (!main.querySelector('.breadcrumbs')) {
    main.insertBefore(breadcrumbs, main.firstChild);
  }

  // Render tabbed layout
  const container = document.getElementById("resources-container");
  if (!container) return;

  // Show skeleton
  container.innerHTML = '<div class="skeleton-loader"></div>'.repeat(3);
  
  setTimeout(() => {
    const tabs = organizeResourcesIntoTabs(subject);
    const availableTabs = Object.entries(tabs).filter(([_, files]) => files.length > 0);

    if (availableTabs.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">📭</div>
          <h3>No resources available</h3>
          <p>Check back later for updates</p>
        </div>
      `;
      return;
    }

    // Build tab navigation
    const tabLabels = {
      'best-notes': 'Handwritten Important Questions',
      'modules': 'Modules',
      'question-bank': 'Question Bank',
      'pyqs': 'PYQs',
      'model-papers': 'Model Papers'
    };

    let tabsNavHTML = '<div class="tabs-container"><div class="tabs-nav" role="tablist">';
    availableTabs.forEach(([tabId, files], index) => {
      tabsNavHTML += `
        <button 
          class="tab-button ${index === 0 ? 'active' : ''}" 
          data-tab="${tabId}"
          role="tab"
          aria-selected="${index === 0}"
          aria-controls="tab-${tabId}"
          id="tab-button-${tabId}"
        >
          ${tabLabels[tabId] || tabId}
          <span class="tab-badge">${files.length}</span>
        </button>
      `;
    });
    tabsNavHTML += '</div>';

    // Build tab content
    let tabsContentHTML = '';
    availableTabs.forEach(([tabId, files], index) => {
      let contentHTML = '';
      
      if (tabId === 'best-notes' && files.length > 0) {
        contentHTML = `<div class="resource-grid">${renderResourceCard(files[0], true)}</div>`;
      } else if (tabId === 'modules') {
        const cardsHTML = files.map(file => renderResourceCard(file)).join('');
        contentHTML = `<div class="resource-grid compact">${cardsHTML}</div>`;
      } else if (tabId === 'question-bank') {
        const cardsHTML = files.map(file => renderResourceCard(file, false, true)).join('');
        contentHTML = `<div class="resource-grid compact">${cardsHTML}</div>`;
      } else {
        const cardsHTML = files.map(file => renderResourceCard(file)).join('');
        contentHTML = `<div class="resource-grid compact">${cardsHTML}</div>`;
      }

      tabsContentHTML += `
        <div 
          class="tab-content ${index === 0 ? 'active' : ''}" 
          data-tab-content="${tabId}"
          role="tabpanel"
          aria-labelledby="tab-button-${tabId}"
          id="tab-${tabId}"
        >
          ${contentHTML}
        </div>
      `;
    });

    tabsNavHTML += '</div>';
    container.innerHTML = tabsNavHTML + tabsContentHTML;

    // Add search for files
    const activeTabContent = container.querySelector('.tab-content.active');
    if (activeTabContent) {
      createSearchBar(container, filterFiles);
    }

    // Tab switching
    const tabButtons = container.querySelectorAll('.tab-button');
    const tabContents = container.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');

        // Update active states
        tabButtons.forEach((btn, idx) => {
          btn.classList.remove('active');
          btn.setAttribute('aria-selected', 'false');
        });
        tabContents.forEach(content => content.classList.remove('active'));

        button.classList.add('active');
        button.setAttribute('aria-selected', 'true');
        const targetContent = container.querySelector(`[data-tab-content="${targetTab}"]`);
        if (targetContent) {
          targetContent.classList.add('active');
          // Update search to filter new tab
          const searchInput = document.getElementById('search-input');
          if (searchInput) {
            searchInput.value = '';
            filterFiles('');
          }
        }
      });
    });

    // Download tracking
    container.querySelectorAll('.resource-card').forEach(card => {
      card.addEventListener('click', (e) => {
        const file = card.getAttribute('data-file');
        if (file) trackDownload(file);
        
        // Click feedback
        card.style.transform = 'scale(0.95)';
        setTimeout(() => {
          card.style.transform = '';
        }, 150);
      });
    });

    // Setup keyboard navigation and gestures
    setupKeyboardNavigation();
    setupSwipeGestures();
    setupScrollAnimations();
    setupCopyLink();
  }, 300);
}

// ============================================================================
// COPY LINK FUNCTIONALITY
// ============================================================================

function setupCopyLink() {
  const copyButton = document.querySelector('.copy-link-button');
  if (!copyButton) return;
  
  copyButton.addEventListener('click', async () => {
    const url = window.location.href;
    
    try {
      await navigator.clipboard.writeText(url);
      copyButton.innerHTML = '<span class="copy-link-icon">✓</span><span class="copy-link-text">Copied!</span>';
      copyButton.classList.add('copied');
      showToast('Link copied to clipboard!', 'success');
      
      setTimeout(() => {
        copyButton.innerHTML = '<span class="copy-link-icon">🔗</span><span class="copy-link-text">Copy Link</span>';
        copyButton.classList.remove('copied');
      }, 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = url;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        showToast('Link copied to clipboard!', 'success');
      } catch (e) {
        showToast('Failed to copy link', 'error');
      }
      document.body.removeChild(textArea);
    }
  });
}

// ============================================================================
// RECENT DOWNLOADS WIDGET
// ============================================================================

function renderRecentDownloads() {
  const recentDownloads = JSON.parse(localStorage.getItem('recentDownloads') || '[]');
  
  if (recentDownloads.length === 0) return;
  
  const container = document.getElementById('subjects-container');
  if (!container) return;
  
  const widget = document.createElement('div');
  widget.className = 'recent-downloads-widget';
  widget.innerHTML = `
    <div class="recent-downloads-header">
      <h3>📥 Recent Downloads</h3>
      <button class="clear-recent-btn" aria-label="Clear recent downloads" title="Clear all">Clear</button>
    </div>
    <div class="recent-downloads-list">
      ${recentDownloads.slice(0, 5).map(item => `
        <a href="${item.file}" download class="recent-download-item" title="${item.name}">
          <span class="recent-download-icon">${getFileTypeIcon(item.file)}</span>
          <span class="recent-download-name">${item.name}</span>
          <span class="recent-download-time">${formatTimeAgo(item.timestamp)}</span>
        </a>
      `).join('')}
    </div>
  `;
  
  container.parentElement.insertBefore(widget, container);
  
  // Clear button functionality
  const clearBtn = widget.querySelector('.clear-recent-btn');
  clearBtn.addEventListener('click', () => {
    localStorage.removeItem('recentDownloads');
    widget.remove();
    showToast('Recent downloads cleared', 'success');
  });
}

function formatTimeAgo(timestamp) {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  
  if (seconds < 60) return 'Just now';
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  return `${Math.floor(seconds / 86400)}d ago`;
}

// ============================================================================
// DARK MODE FUNCTIONALITY
// ============================================================================

function initDarkMode() {
  // Check for saved theme preference or default to light mode
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  // Update all toggle button icons
  updateDarkModeIcon(savedTheme);
  
  // Setup all toggle buttons (in case there are multiple on the page)
  const toggles = document.querySelectorAll('.dark-mode-toggle');
  toggles.forEach(toggle => {
    // Remove existing listeners by cloning
    const newToggle = toggle.cloneNode(true);
    toggle.parentNode.replaceChild(newToggle, toggle);
    
    newToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateDarkModeIcon(newTheme);
    });
  });
}

function updateDarkModeIcon(theme) {
  const icons = document.querySelectorAll('.dark-mode-icon');
  icons.forEach(icon => {
    icon.textContent = theme === 'dark' ? '☀️' : '🌙';
  });
}

// ============================================================================
// INITIALIZATION
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
  // Initialize dark mode first
  initDarkMode();
  
  if (document.getElementById("subjects-container")) {
    renderSubjectCards();
    renderRecentDownloads();
  }
  if (document.getElementById("resources-container")) {
    renderSubjectPage();
    setupCopyLink();
  }
  
  // Update last updated date
  const lastUpdated = document.getElementById('last-updated');
  if (lastUpdated) {
    lastUpdated.textContent = new Date().getFullYear();
  }
});

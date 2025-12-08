/**
 * 5th Semester Notes - Data Structure & Rendering
 * This object contains all subjects and their resources
 * Easy to update when new PDFs are added
 */

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
  }
};

/**
 * Get subject by slug
 */
function getSubjectBySlug(slug) {
  return Object.values(subjectsData).find(subject => subject.slug === slug);
}

/**
 * Render subject cards on homepage
 */
function renderSubjectCards() {
  const container = document.getElementById("subjects-container");
  if (!container) return;

  container.innerHTML = "";

  Object.values(subjectsData).forEach((subject) => {
    const card = document.createElement("div");
    card.className = "subject-card";
    card.style.setProperty("--card-accent", subject.color);
    card.onclick = () => {
      window.location.href = `${subject.slug}.html`;
    };

    card.innerHTML = `
      <span class="subject-card-icon">${subject.icon}</span>
      <h3>${subject.name}</h3>
      <p class="subject-code">${subject.code}</p>
      ${subject.subtitle ? `<p style="font-size: 0.875rem; color: var(--text-light); margin-top: 0.5rem;">${subject.subtitle}</p>` : ''}
    `;

    container.appendChild(card);
  });
}

/**
 * Render subject page with resources
 */
function renderSubjectPage() {
  // Get slug from URL - handle both full paths and simple filenames
  let slug = window.location.pathname.split('/').pop().replace('.html', '');
  // Fallback: try to get from body data attribute if path parsing fails
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

  // Render resources
  const container = document.getElementById("resources-container");
  if (!container) return;

  container.innerHTML = "";

  Object.entries(subject.resources).forEach(([category, files]) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "resource-category";

    let filesHTML = "";

    files.forEach((file) => {
      const fileName = file.split("/").pop().replace(/.pdf$/i, "");
      const displayName = fileName
        .replace(/-/g, " ")
        .replace(/_/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase())
        .replace(/Cn /g, "CN ")
        .replace(/Toc /g, "TOC ")
        .replace(/Unix /g, "Unix ")
        .replace(/Se /g, "SE ")
        .replace(/Rm /g, "RM ")
        .replace(/Evs /g, "EVS ")
        .replace(/Qb /g, "QB ")
        .replace(/Pyq/g, "PYQ")
        .replace(/Mqp/g, "MQP");

      filesHTML += `
        <li>
          <a href="${file}" download class="resource-link">
            <span class="file-icon">📄</span>
            <span class="resource-link-text">${displayName}</span>
          </a>
        </li>
      `;
    });

    categoryDiv.innerHTML = `
      <h3>${category}</h3>
      <ul class="resource-list">
        ${filesHTML}
      </ul>
    `;

    container.appendChild(categoryDiv);
  });
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("subjects-container")) {
    renderSubjectCards();
  }
  if (document.getElementById("resources-container")) {
    renderSubjectPage();
  }
});

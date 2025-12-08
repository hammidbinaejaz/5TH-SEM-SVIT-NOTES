/**
 * 5th Semester Notes - Data Structure
 * This object contains all subjects and their resources
 * Easy to update when new PDFs are added
 */

const subjectsData = {
  CN: {
    name: "Computer Networks",
    code: "CN",
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
    name: "UNIX / Shell Programming",
    code: "UNIX",
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
    code: "SE-&-MP",
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
    code: "RM-&-IPR",
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
 * Render subject cards on homepage
 */
function renderSubjectCards() {
  const container = document.getElementById("subjects-container");
  if (!container) return;

  container.innerHTML = "";

  Object.values(subjectsData).forEach((subject) => {
    const card = document.createElement("div");
    card.className = "subject-card";
    card.onclick = () => {
      window.location.href = `downloads.html#${subject.code}`;
    };

    card.innerHTML = `
      <h3>${subject.name}</h3>
      <p class="subject-code">${subject.code}</p>
    `;

    container.appendChild(card);
  });
}

/**
 * Render all subjects and their resources on downloads page
 */
function renderDownloads() {
  const container = document.getElementById("downloads-container");
  if (!container) return;

  container.innerHTML = "";

  Object.values(subjectsData).forEach((subject) => {
    const section = document.createElement("section");
    section.className = "subject-section";
    section.id = subject.code;

    let resourcesHTML = "";

    Object.entries(subject.resources).forEach(([category, files]) => {
      resourcesHTML += `
        <div class="resource-category">
          <h4>${category}</h4>
          <ul class="resource-list">
      `;

      files.forEach((file) => {
        const fileName = file.split("/").pop().replace(/.pdf$/i, "");
        const displayName = fileName
          .replace(/-/g, " ")
          .replace(/_/g, " ")
          .replace(/\b\w/g, (l) => l.toUpperCase());

        resourcesHTML += `
          <li>
            <a href="${file}" download class="resource-link">
              <span class="file-icon">📄</span>
              ${displayName}
            </a>
          </li>
        `;
      });

      resourcesHTML += `
          </ul>
        </div>
      `;
    });

    section.innerHTML = `
      <h2>${subject.name}</h2>
      <p class="subject-code">${subject.code}</p>
      ${resourcesHTML}
    `;

    container.appendChild(section);
  });

  // Scroll to subject if hash is present
  const hash = window.location.hash.substring(1);
  if (hash) {
    setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  }
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("subjects-container")) {
    renderSubjectCards();
  }
  if (document.getElementById("downloads-container")) {
    renderDownloads();
  }
});


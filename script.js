// Security family — amber/orange so they read as alerts
const SECURITY_GRADIENT = "linear-gradient(135deg, rgba(255,130,50,.82), rgba(255,190,70,.5))";
// AI/ML family — purple to cyan
const AI_GRADIENT       = "linear-gradient(135deg, rgba(122,92,255,.85), rgba(55,208,255,.5))";
// Data/analytics — gold
const DATA_GRADIENT     = "linear-gradient(135deg, rgba(255,160,0,.85), rgba(255,210,50,.5))";
// Enterprise/web — deep indigo
const ENTERPRISE_GRADIENT = "linear-gradient(135deg, rgba(40,80,200,.85), rgba(100,140,255,.4))";
// Fintech — teal/green
const FINTECH_GRADIENT  = "linear-gradient(135deg, rgba(0,190,150,.82), rgba(55,208,180,.45))";
// Culture/personal — warm rose
const CULTURE_GRADIENT  = "linear-gradient(135deg, rgba(255,94,160,.82), rgba(255,160,100,.45))";
// Business — amber to pink
const BIZ_GRADIENT      = "linear-gradient(135deg, rgba(255,150,40,.85), rgba(255,94,201,.5))";
// Creative — magenta
const CREATIVE_GRADIENT = "linear-gradient(135deg, rgba(200,60,220,.82), rgba(122,92,255,.5))";

const CATEGORY_COLORS = {
  "AI / Computer Vision":          AI_GRADIENT,
  "AI / Productivity":             AI_GRADIENT,
  "Legal Tech":                    AI_GRADIENT,
  "Data Science / Sports Analytics": DATA_GRADIENT,
  "Women's Safety / Mobile Web":   SECURITY_GRADIENT,
  "IoT / Security":                SECURITY_GRADIENT,
  "Enterprise / Full-Stack":       ENTERPRISE_GRADIENT,
  "Fintech":                       FINTECH_GRADIENT,
  "Culture / Web":                 CULTURE_GRADIENT,
  "Business Simulation":           BIZ_GRADIENT,
  "Creative Direction":            CREATIVE_GRADIENT,
};

const DEFAULT_GRADIENT =
  "linear-gradient(135deg, rgba(122,92,255,.72), rgba(55,208,255,.45))";

// ─── PROFILE DATA ─────────────────────────────────────────────────────────────
// Add GitHub repo URLs and live demo URLs below (leave as "" if none yet).

const profile = {
  name: "Jainam Jain",
  title: "B.Tech IT Student — TCET Mumbai",
  social: [
    {
      label: "GitHub",
      handle: "github.com/jain44",
      url: "https://github.com/jain44",
    },
    {
      label: "LinkedIn",
      handle: "linkedin.com/in/jainam-jain",
      url: "https://linkedin.com/in/jainam-jain-746188263",
    },
    {
      label: "Email",
      handle: "jainamjain1116@gmail.com",
      url: "mailto:jainamjain1116@gmail.com",
    },
  ],
  projects: [
    {
      id: "kavach",
      title: "Kavach: MSME Default Predictor",
      category: "Fintech",
      featured: true,
      preview: "assets/preview-kavach.png",
      github: "https://github.com/jain44/kavach",
      demo: "",
      summary:
        "Comprehensive early warning system for predicting defaults in Micro, Small, and Medium Enterprises (MSMEs), developed for IDBI Innovate 2026. Combines a calibrated Machine Learning backend with a React dashboard.",
      challenge:
        "Financial default risk scoring requires highly accurate probability calibration, as raw model outputs don't reflect actual default rates. To solve this, the system integrates XGBoost with Isotonic Calibration to align risk scores and leverages SHAP to explain feature impacts to risk officers.",
      impact:
        "Designed a modular, decoupled full-stack architecture with FastAPI, React, and PostgreSQL. Created role-based dashboards with automated audit logs, interactive what-if simulation sandboxes, and a model governance layer tracking performance and demographic fairness.",
      stack: ["React", "FastAPI", "Python", "XGBoost", "PostgreSQL", "SHAP", "TailwindCSS", "Docker"],
      learnings: [
        "Calibrated scoring is crucial in fintech to align model predictions with empirical default rates.",
        "Explainable AI (XAI) is vital for high-stakes decision-making, helping risk officers understand the 'why' behind each score.",
        "Containerized orchestration using Docker Compose ensures consistent environments across multi-service deployments."
      ]
    },
    {
      id: "fracture",
      title: "AI Fracture Detection",
      category: "AI / Computer Vision",
      featured: false,
      preview: "assets/preview-fracture.png",
      github: "",
      demo: "",
      summary:
        "Deep-learning model that classifies bone fractures from X-ray images. Built to explore where computer vision intersects with clinical diagnostic support.",
      challenge:
        "Standard accuracy metrics don't capture clinical risk. A missed fracture is categorically more costly than a false positive — which forced careful thinking about precision-recall tradeoffs and what 'good performance' actually means in a high-stakes context.",
      impact:
        "Demonstrated how ML pipelines work in a domain where the stakes are real: data preprocessing, augmentation, model training, and evaluation — all shaped by what failure actually costs.",
      stack: ["Python", "Deep Learning", "CNN", "NumPy", "Pandas", "Image Processing"],
      learnings: [
        "Preprocessing quality determines model ceiling more than architecture choice — especially in medical imaging.",
        "Domain-specific evaluation metrics matter more than benchmark accuracy in applied ML.",
        "Documenting the pipeline for reproducibility is as important as the model's performance.",
      ],
    },
    {
      id: "justice-ai",
      title: "JusticeAI",
      category: "Legal Tech",
      featured: true,
      preview: "assets/preview-justice.png",
      github: "",
      demo: "",
      summary:
        "Multilingual web app that gives Indian citizens plain-language guidance on their legal rights — in Hindi, Tamil, and other regional languages. Built to reduce the gap between legal literacy and legal access.",
      challenge:
        "Indian legal information is doubly inaccessible: dense in language and siloed behind English. The challenge wasn't just building an LLM wrapper — it was designing output that's factually safe, locally contextualised, and understood by users with limited digital literacy.",
      impact:
        "Proves that LLMs can serve equity goals in a developing-world context — but only when the output design is as carefully considered as the underlying model.",
      stack: ["Python", "LLM APIs", "HTML/CSS/JS", "Multilingual NLP"],
      learnings: [
        "Localisation is not just translation — legal framing and cultural context differ significantly by region.",
        "Responsible AI output design is non-negotiable when users make real decisions from AI responses.",
        "Language accessibility expands reach far more than UI polish alone.",
      ],
    },
    {
      id: "rupee-reality",
      title: "RupeeReality",
      category: "Fintech",
      preview: "assets/preview-rupee.png",
      github: "",
      demo: "",
      summary:
        "Single-page tool that shows the 20-year compounding cost of daily micro-spending — Zomato orders, Netflix subscriptions, Uber rides — converted into SIP opportunity loss.",
      challenge:
        "Financial data only becomes meaningful when it's personal. The challenge was designing an interface that converts abstract compound interest into an immediate 'wait, that much?' moment — without oversimplifying the maths.",
      impact:
        "People understand compounding when they see it in terms of their own Zomato bill. That's a better financial education outcome than any textbook chart — and a better product framing than 'budgeting app'.",
      stack: ["JavaScript", "HTML/CSS", "Data Visualisation", "Financial Modelling"],
      learnings: [
        "Emotional framing drives behaviour change more reliably than numerical precision.",
        "Simple, fast single-purpose tools consistently outperform feature-heavy apps in consumer fintech.",
        "Personalisation — even at the level of a named brand — is the most effective engagement mechanic.",
      ],
    },
    {
      id: "agentic-biz-sim",
      title: "Business Strategy Simulator",
      category: "Business Simulation",
      preview: "assets/preview-biz-sim.png",
      github: "",
      demo: "",
      summary:
        "LLM-orchestrated platform where users input business decisions and receive AI-generated strategic analysis, market diagnostics, and executive-style reports — making strategy interactive rather than theoretical.",
      challenge:
        "Getting reliable LLM output across multiple simulation stages required structured prompting and output validation at each step. Keeping the model 'in role' as a business analyst across a multi-turn simulation was the core engineering problem.",
      impact:
        "An end-to-end demonstration of practical LLM orchestration — state management across turns, structured output parsing, and domain-specific prompt engineering working together as a product.",
      stack: ["Python", "LLM APIs", "Agentic Workflows", "Structured Output", "Reporting"],
      learnings: [
        "Agentic systems need carefully defined failure modes — they break in ways that are hard to reproduce.",
        "Structured output schemas improve LLM response reliability far more than prompt length.",
        "Simulation design requires deep domain understanding before encoding any logic into prompts.",
      ],
    },
    {
      id: "samyak",
      title: "Samyak",
      category: "Culture / Web",
      preview: "assets/preview-samyak.png",
      github: "",
      demo: "",
      summary:
        "Personal project — an accessible digital archive of Jain spiritual teachings, built to make traditional knowledge navigable without requiring prior familiarity with the source texts.",
      challenge:
        "Digitising religious and cultural content involves more than structuring data — every design decision carries responsibility not to distort or decontextualise the source material.",
      impact:
        "A reminder that the most purposeful projects come from genuine connection to the subject matter, not from market research. Software can serve cultural preservation goals.",
      stack: ["HTML/CSS", "JavaScript", "Content Architecture", "Interactive UX"],
      learnings: [
        "The most meaningful work tends to come from projects where you're also a genuine user.",
        "Digital accessibility can preserve cultural knowledge more durably than physical archives.",
        "Design restraint is intentional — warmth and clarity are real design values.",
      ],
    },
    {
      id: "saferoute",
      title: "SafeRoute — OneJourney",
      category: "Women's Safety / Mobile Web",
      featured: true,
      preview: "assets/preview-saferoute.png",
      github: "",
      demo: "",
      summary:
        "Mobile web app for women navigating Chennai. Routes are scored by safety data, live location can be shared as a trackable link with trusted contacts, and a one-tap SOS triggers emergency alerts — no app store install required.",
      challenge:
        "Combining real-time location tracking, route scoring, and SOS logic in a single web app — without requiring a native app install — demanded a lean architecture. The app's value depends entirely on speed under stress; a slow emergency tool is a useless one.",
      impact:
        "Addresses a real urban mobility problem with a web-first approach that removes the installation barrier that often prevents adoption in safety-critical moments.",
      stack: ["Node.js", "Vanilla JS", "HTML/CSS", "Maps API", "Geolocation API"],
      learnings: [
        "Safety-critical product design starts with the failure scenario, not the happy path.",
        "Live tracking requires consent and privacy architecture before any technical implementation.",
        "Single-stack, minimal-dependency architecture ships faster and fails more gracefully.",
      ],
    },
    {
      id: "ai-presentation",
      title: "AI Slide Generator",
      category: "AI / Productivity",
      preview: "assets/preview-presentation.png",
      github: "",
      demo: "",
      summary:
        "Full-stack tool that generates structured, styled slide decks from plain-text prompts. React + Vite frontend consumes a Node.js + Express API that handles LLM generation, content structuring, and slide formatting.",
      challenge:
        "LLMs generate prose well — but slides have strict structural constraints. The main problem was mapping unstructured LLM output to slide-ready structured JSON without losing coherence across sections or introducing hallucinated transitions.",
      impact:
        "A functional full-stack product with real frontend/backend separation, API design, and LLM post-processing challenges that don't appear in tutorial builds.",
      stack: ["React", "Vite", "Node.js", "Express", "LLM APIs", "REST API"],
      learnings: [
        "AI-generated content needs post-processing layers to reach presentation-quality output.",
        "React + Vite iteration cycles are meaningfully faster than traditional setups for UI-intensive tools.",
        "Architecture decisions in full-stack products propagate — early choices affect both DX and performance.",
      ],
    },
    {
      id: "padmavati",
      title: "Padmavati",
      category: "Enterprise / Full-Stack",
      featured: true,
      preview: "",
      github: "",
      demo: "",
      summary:
        "Next.js + TypeScript enterprise frontend with three distinct interfaces — operator dashboard, retailer portal, and admin panel — each with its own navigation, component set, and access scope, maintained as one codebase.",
      challenge:
        "Role-based UI in a single Next.js app requires permission logic at the component level, not just at the route level. A component that renders fully for one role, partially for another, and is hidden from a third — reliably — is harder than it sounds.",
      impact:
        "The most architecturally significant project in my portfolio — real role separation, TypeScript across every layer, and modular component systems built for maintainability, not speed of delivery.",
      stack: ["Next.js", "TypeScript", "React", "Role-Based Access Control", "Mock Services"],
      learnings: [
        "Role-based UI is a permissions architecture problem, not just a routing problem.",
        "TypeScript's upfront investment compounds positively — especially in multi-contributor codebases.",
        "Mock services are essential infrastructure for frontend teams that cannot wait on backend readiness.",
      ],
    },
    {
      id: "ipl-predictor",
      title: "IPL Match Predictor",
      category: "Data Science / Sports Analytics",
      github: "",
      demo: "",
      summary:
        "ML project predicting IPL match outcomes using historical match data, player statistics, and venue features. Built Pandas pipelines, compared multiple model families, and visualised prediction confidence.",
      challenge:
        "Cricket has enormous confounding variables — pitch conditions, player form, chasing vs. setting. The real problem was deciding which features signal genuine outcome patterns versus which ones overfit to historical noise.",
      impact:
        "Applied data science methodology to a domain followed by hundreds of millions — which forced precision about when the model is confident versus when it's guessing.",
      stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
      learnings: [
        "Domain understanding improves feature engineering more than raw data volume.",
        "Sports prediction forces appropriate model humility — uncertainty must be quantified, not hidden.",
        "Visualisation is critical for communicating model confidence alongside its predictions.",
      ],
    },
    {
      id: "door-alarm",
      title: "IoT Intrusion Detection",
      category: "IoT / Security",
      github: "",
      demo: "",
      summary:
        "Arduino-based door intrusion detection system using PIR sensors. Detects motion, triggers an audible alert, and logs events in real time — built as a physical prototype.",
      challenge:
        "Reliable embedded systems are built from simplicity. Every component had to earn its place — and debugging embedded systems is slower than software, with no stack trace when a sensor misfires.",
      impact:
        "Extended my engineering thinking from software into physical systems. Security isn't just a software problem — understanding the hardware layer changes how you reason about the full attack surface.",
      stack: ["Arduino", "C++", "PIR Sensors", "Embedded Systems"],
      learnings: [
        "Simplicity is an engineering constraint in embedded systems, not just a preference.",
        "Security starts with detection and real-time awareness — not just access prevention.",
        "Hardware limitations sharpen systems-level thinking in ways that software development doesn't.",
      ],
    },
    {
      id: "design-systems",
      title: "Design Direction — TCET ACM",
      category: "Creative Direction",
      github: "",
      demo: "",
      summary:
        "Led design for TCET ACM Student Chapter — visual systems, event branding, and digital communication for one of Mumbai's largest student engineering communities. Managed a team across multiple concurrent events.",
      challenge:
        "Producing visually consistent output across dozens of events, with different contributors involved each time, required building a design system rather than executing individual assets. Consistency at scale is an organisational problem.",
      impact:
        "Real design leadership: setting standards, coordinating a team, and delivering high-volume creative output under live event deadlines — not a portfolio piece, but a production system.",
      stack: ["Figma", "Adobe Illustrator", "Brand Systems", "Team Direction"],
      learnings: [
        "Design leadership means establishing standards that others can execute consistently — not doing everything yourself.",
        "Strong visual systems reduce decision fatigue and make collaboration faster for everyone.",
        "Consistency builds recognition over time — it's a strategic choice, not an aesthetic one.",
      ],
    },
  ],
};

// ─── DOM REFERENCES ───────────────────────────────────────────────────────────

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

const outerCursor    = document.querySelector(".cursor--outer");
const innerCursor    = document.querySelector(".cursor--inner");
const progressBar    = document.getElementById("scrollProgressBar");
const particleCanvas = document.getElementById("particleCanvas");
const projectGrid    = document.getElementById("projectGrid");
const modal          = document.getElementById("projectModal");
const modalContent   = document.getElementById("modalContent");
const socialLinks    = document.getElementById("socialLinks");
const contactForm    = document.getElementById("contactForm");
const formNote       = document.getElementById("formNote");
const formSubmitBtn  = document.getElementById("formSubmitBtn");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let cursorX = mouseX;
let cursorY = mouseY;
let lastOpenedTrigger = null; // tracks which button opened the modal for focus return

// ─── RENDER: SOCIAL LINKS ────────────────────────────────────────────────────

function renderSocialLinks() {
  if (!socialLinks) return;
  socialLinks.innerHTML = profile.social
    .map(
      (item) => `
      <a
        class="social-card magnetic"
        href="${item.url}"
        ${item.url.startsWith("mailto") ? "" : 'target="_blank" rel="noreferrer"'}
        aria-label="${item.label}: ${item.handle}"
      >
        <strong>${item.label}</strong>
        <small>${item.handle}</small>
      </a>
    `
    )
    .join("");
}

// ─── RENDER: PROJECTS ────────────────────────────────────────────────────────

function getCategoryGradient(category) {
  return CATEGORY_COLORS[category] || DEFAULT_GRADIENT;
}

function renderProjects() {
  if (!projectGrid) return;
  projectGrid.innerHTML = profile.projects
    .map(
      (project) => `
      <article
        class="project-card reveal tilt-card${project.featured ? " project-card--featured" : ""}"
        data-strength="14"
        data-project-id="${project.id}"
      >
        <div
          class="project-card__visual"
          style="${project.preview
            ? `background: url('${project.preview}') center/cover no-repeat, ${getCategoryGradient(project.category)}`
            : `background: ${getCategoryGradient(project.category)}`}"
        >
          <span class="project-card__label">${project.category}</span>
        </div>
        <div class="project-card__body">
          <h3>${project.title}</h3>
          <p>${project.summary}</p>
        </div>
        <div class="project-card__actions">
          <button
            class="button button--ghost magnetic"
            type="button"
            data-open-project="${project.id}"
            aria-label="View ${project.title} on GitHub"
          >
            View on GitHub
          </button>
          ${project.github ? `<a class="project-card__icon-link" href="${project.github}" target="_blank" rel="noreferrer" aria-label="${project.title} source on GitHub" title="GitHub">&#128279;</a>` : ""}
          ${project.demo ? `<a class="project-card__icon-link" href="${project.demo}" target="_blank" rel="noreferrer" aria-label="${project.title} live demo" title="Live demo">&#9654;</a>` : ""}
        </div>
      </article>
    `
    )
    .join("");
}

// ─── MODAL: OPEN ─────────────────────────────────────────────────────────────

function openProjectModal(projectId) {
  const project = profile.projects.find((p) => p.id === projectId);
  if (!project) return;

  const gradient = getCategoryGradient(project.category);
  const hasLinks = project.github || project.demo;

  modalContent.innerHTML = `
    <div class="modal__visual" style="background: ${gradient}"></div>
    <p class="eyebrow">${project.category}</p>
    <h3 id="modalHeading">${project.title}</h3>
    ${
      hasLinks
        ? `<div class="modal__links">
            ${project.github ? `<a href="${project.github}" class="button button--ghost" target="_blank" rel="noreferrer" aria-label="View ${project.title} source code on GitHub">↗ GitHub</a>` : ""}
            ${project.demo ? `<a href="${project.demo}" class="button button--primary" target="_blank" rel="noreferrer" aria-label="Open live demo for ${project.title}">↗ Live Demo</a>` : ""}
          </div>`
        : ""
    }
    <p>${project.summary}</p>
    <div class="modal__meta">
      <span>Problem-driven</span>
      <span>Student-built</span>
      <span>Production intent</span>
    </div>
    <h4>The challenge</h4>
    <p>${project.challenge}</p>
    <h4>Impact</h4>
    <p>${project.impact}</p>
    <h4>Tech stack</h4>
    <div class="modal__stack">
      ${project.stack.map((item) => `<span>${item}</span>`).join("")}
    </div>
    <h4>Key learnings</h4>
    <div class="modal__stack">
      ${project.learnings.map((item) => `<span>${item}</span>`).join("")}
    </div>
  `;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  requestAnimationFrame(() => {
    const closeBtn = modal.querySelector(".modal__close");
    if (closeBtn) closeBtn.focus();
  });
}

// ─── MODAL: CLOSE ────────────────────────────────────────────────────────────

function closeProjectModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  if (lastOpenedTrigger) {
    lastOpenedTrigger.focus();
    lastOpenedTrigger = null;
  }
}

// ─── REVEAL ANIMATIONS ───────────────────────────────────────────────────────

function setupRevealAnimations() {
  if (!("IntersectionObserver" in window) || prefersReducedMotion) {
    document.querySelectorAll(".reveal").forEach((el) =>
      el.classList.add("is-visible")
    );
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -6% 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

// ─── MAGNETIC ELEMENTS ───────────────────────────────────────────────────────

function setupMagneticElements() {
  document.querySelectorAll(".magnetic").forEach((el) => {
    if (el.dataset.magneticBound === "true") return;
    el.dataset.magneticBound = "true";

    el.addEventListener("mouseenter", () =>
      outerCursor?.classList.add("is-active")
    );
    el.addEventListener("mouseleave", () => {
      outerCursor?.classList.remove("is-active");
      el.style.transform = "";
    });
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
    });
  });
}

// ─── CUSTOM CURSOR ───────────────────────────────────────────────────────────

function setupCursor() {
  if (window.innerWidth <= 760 || prefersReducedMotion) return;
  if (!outerCursor || !innerCursor) return;

  const tick = () => {
    cursorX += (mouseX - cursorX) * 0.18;
    cursorY += (mouseY - cursorY) * 0.18;
    outerCursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
    innerCursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    requestAnimationFrame(tick);
  };

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    outerCursor.classList.remove("is-hidden");
    innerCursor.classList.remove("is-hidden");
  });

  document.addEventListener("mouseleave", () => {
    outerCursor.classList.add("is-hidden");
    innerCursor.classList.add("is-hidden");
  });

  setupMagneticElements();
  requestAnimationFrame(tick);
}

// ─── SCROLL PROGRESS + PARALLAX ─────────────────────────────────────────────

function setupScrollProgress() {
  if (!progressBar) return;

  const update = () => {
    const scrollTop = window.scrollY;
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = `${
      maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0
    }%`;

    document.querySelectorAll("[data-parallax]").forEach((el) => {
      const speed = Number(el.dataset.parallax || 0.08);
      const rect = el.getBoundingClientRect();
      const offset = (window.innerHeight / 2 - rect.top) * speed;
      el.style.transform = `translateY(${offset}px)`;
    });
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update, { passive: true });
}

// ─── TILT CARDS (PERFORMANCE-OPTIMISED) ──────────────────────────────────────
// Cards are cached once rather than queried on every mousemove.
// Throttled via requestAnimationFrame to one update per frame maximum.

function setupTiltCards() {
  if (prefersReducedMotion) return;

  let tiltCards = [];
  let tiltRafId = null;

  requestAnimationFrame(() => {
    tiltCards = [...document.querySelectorAll(".tilt-card")];
  });

  document.addEventListener("mousemove", (e) => {
    if (tiltRafId) return;
    tiltRafId = requestAnimationFrame(() => {
      tiltRafId = null;
      tiltCards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const inBounds =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom;

        if (!inBounds) {
          card.style.transform = "";
          return;
        }

        const strength = Number(card.dataset.strength || 12);
        const rotateY =
          ((e.clientX - rect.left) / rect.width - 0.5) * strength;
        const rotateX =
          ((e.clientY - rect.top) / rect.height - 0.5) * -strength;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });
    });
  });
}

// ─── PARTICLE CANVAS ─────────────────────────────────────────────────────────
// Runs at 30fps (not 60) and draws only dots — no O(n²) connection lines.
// Pauses automatically when the browser tab is hidden.

function setupParticleCanvas() {
  if (!particleCanvas) return;
  const ctx = particleCanvas.getContext("2d");
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let particles = [];
  let isVisible = !document.hidden;
  let lastFrame = 0;
  const FRAME_INTERVAL = 1000 / 30; // 30fps cap

  const resize = () => {
    width = particleCanvas.width = window.innerWidth;
    height = particleCanvas.height = window.innerHeight;
    const count = width < 760 ? 16 : 30;
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.4 + 0.4,
    }));
  };

  const render = (timestamp) => {
    if (!isVisible || prefersReducedMotion) return;
    if (timestamp - lastFrame < FRAME_INTERVAL) {
      requestAnimationFrame(render);
      return;
    }
    lastFrame = timestamp;

    ctx.clearRect(0, 0, width, height);
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      const dist = Math.hypot(mouseX - p.x, mouseY - p.y);
      const alpha = dist < 140 ? 0.55 : 0.18;

      ctx.beginPath();
      ctx.fillStyle = `rgba(122,92,255,${alpha})`;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(render);
  };

  document.addEventListener("visibilitychange", () => {
    isVisible = !document.hidden;
    if (isVisible) requestAnimationFrame(render);
  });

  resize();
  requestAnimationFrame(render);
  window.addEventListener("resize", resize, { passive: true });
}

// ─── RENDER: FEATURED SPOTLIGHT ─────────────────────────────────────────────
// Shows the top 2 featured projects (those with preview images) in large
// editorial cards above the full project grid.

function renderFeaturedSpotlight() {
  const grid = document.getElementById("spotlightGrid");
  if (!grid) return;

  const featured = profile.projects
    .filter((p) => p.featured && p.preview)
    .slice(0, 2);

  if (featured.length === 0) {
    grid.closest(".featured-spotlight")?.remove();
    return;
  }

  grid.innerHTML = featured
    .map((project, i) => {
      const gradient  = getCategoryGradient(project.category);
      const imgStyle  = `background-image: url('${project.preview}'); background-size: cover; background-position: center top;`;
      const isReverse = i % 2 === 1;

      return `
        <article
          class="spotlight-card reveal${isReverse ? " spotlight-card--reverse" : ""}"
          data-strength="12"
        >
          <div
            class="spotlight-card__image"
            style="${imgStyle}"
            role="img"
            aria-label="${project.title} preview"
          ></div>
          <div class="spotlight-card__body">
            <span class="spotlight-card__category">${project.category}</span>
            <h3>${project.title}</h3>
            <p class="spotlight-card__summary">${project.summary}</p>
            <div class="spotlight-card__stack">
              ${project.stack.slice(0, 4).map((s) => `<span>${s}</span>`).join("")}
            </div>
            <button
              class="button button--primary magnetic spotlight-card__cta"
              type="button"
              data-open-project="${project.id}"
              aria-label="View ${project.title} on GitHub"
            >
              View on GitHub &rarr;
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}

// ─── ROLE ROTATOR ────────────────────────────────────────────────────────────
// Fades out the current role label, swaps the text, fades back in.
// Degrades gracefully when prefersReducedMotion is on (no animation, no loop).

function setupRoleRotator() {
  const el = document.getElementById("roleRotator");
  if (!el || prefersReducedMotion) return;

  const roles = [
    "AI &amp; Machine Learning",
    "Full-Stack Web",
    "Cybersecurity",
    "Design Systems",
  ];
  let index = 0;

  const rotate = () => {
    el.classList.add("is-fading");
    setTimeout(() => {
      index = (index + 1) % roles.length;
      el.innerHTML = roles[index];
      el.classList.remove("is-fading");
    }, 340);
  };

  setInterval(rotate, 2800);
}

// ─── MODAL EVENTS ────────────────────────────────────────────────────────────

function setupModalEvents() {
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-open-project]");
    if (trigger) {
      const projectId = trigger.dataset.openProject;
      const project = profile.projects.find((p) => p.id === projectId);
      if (project) {
        const url = project.github || "https://github.com/jain44";
        window.open(url, "_blank", "noopener,noreferrer");
      }
      return;
    }
    if (e.target.closest("[data-close-modal='true']")) {
      closeProjectModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("is-open")) return;

    if (e.key === "Escape") {
      closeProjectModal();
      return;
    }

    // Focus trap — keep Tab within the modal
    if (e.key === "Tab") {
      const sel =
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
      const focusable = [...modal.querySelectorAll(sel)].filter(
        (el) => !el.closest("[aria-hidden='true']")
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last  = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
}

// ─── CONTACT FORM ────────────────────────────────────────────────────────────
// Submits via EmailJS when configured. Falls back to mailto: otherwise.
// Sign up free at emailjs.com, then fill in the three placeholders in index.html.

function setupContactForm() {
  if (!contactForm) return;

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const serviceId  = contactForm.dataset.emailjsService  || "";
    const templateId = contactForm.dataset.emailjsTemplate || "";
    const isEmailJsConfigured =
      serviceId  && !serviceId.includes("REPLACE") &&
      templateId && !templateId.includes("REPLACE") &&
      typeof emailjs !== "undefined";

    const formData = new FormData(contactForm);
    const name    = String(formData.get("name")    || "").trim();
    const email   = String(formData.get("email")   || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (formSubmitBtn) {
      formSubmitBtn.disabled = true;
      formSubmitBtn.textContent = "Sending…";
    }
    if (formNote) formNote.classList.remove("form-note--success", "form-note--error");

    if (isEmailJsConfigured) {
      try {
        await emailjs.send(serviceId, templateId, { name, email, message });
        if (formNote) {
          formNote.textContent = "Message sent — I'll get back to you soon! 🎉";
          formNote.classList.add("form-note--success");
        }
        contactForm.reset();
      } catch (err) {
        console.error("EmailJS error:", err);
        if (formNote) {
          formNote.textContent =
            "Something went wrong. Email me directly at jainamjain1116@gmail.com";
          formNote.classList.add("form-note--error");
        }
      }
    } else {
      // EmailJS not configured yet — fall back to mailto:
      const encodedName    = encodeURIComponent(name);
      const encodedEmail   = encodeURIComponent(email);
      const encodedMessage = encodeURIComponent(message);
      const mailtoHref =
        `mailto:jainamjain1116@gmail.com` +
        `?subject=${encodeURIComponent("Portfolio contact from " + name)}` +
        `&body=${encodedMessage}%0A%0AFrom%3A ${encodedName} (${encodedEmail})`;

      const a = document.createElement("a");
      a.href = mailtoHref;
      a.click(); // Trigger without window.open to avoid popup blockers

      if (formNote) {
        formNote.textContent = "Opening your email client…";
        formNote.classList.add("form-note--success");
      }
    }

    if (formSubmitBtn) {
      formSubmitBtn.disabled = false;
      formSubmitBtn.textContent = "Send Message";
    }
  });
}


// ─── INIT ─────────────────────────────────────────────────────────────────────
// renderFeaturedSpotlight must come before setupRevealAnimations so the
// IntersectionObserver picks up the dynamically injected .reveal elements.

renderSocialLinks();
renderProjects();
renderFeaturedSpotlight();  // ← new: injects spotlight cards before observer runs
setupRevealAnimations();
setupMagneticElements();
setupCursor();
setupRoleRotator();          // ← new: starts the hero subtitle cycle
setupScrollProgress();
setupTiltCards();
setupParticleCanvas();
setupModalEvents();
setupContactForm();

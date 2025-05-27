document.addEventListener("DOMContentLoaded", () => {
  generateParticles();
  setupNavigation();
  highlightActiveSectionOnScroll();
  setupForm();
  fetchQuantumData();
  setupScrollAnimations();
});

// 🎇 Particle System
function generateParticles() {
  const particlesContainer = document.getElementById("particles");
  for (let i = 0; i < 100; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.width = particle.style.height = `${Math.random() * 5 + 2}px`;
    particle.style.top = `${Math.random() * 100}vh`;
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    particle.style.background = `radial-gradient(circle, rgba(${r}, ${g}, ${b}, 0.8), transparent 70%)`;
    particlesContainer.appendChild(particle);
  }
}

// 📍 Navigation Scroll
function setupNavigation() {
  document.querySelectorAll(".nav-dot").forEach((dot) => {
    dot.addEventListener("click", () => {
      document
        .querySelectorAll(".nav-dot")
        .forEach((d) => d.classList.remove("active"));
      dot.classList.add("active");
      const target = dot.getAttribute("data-section");
      document.getElementById(target).scrollIntoView({ behavior: "smooth" });
    });
  });
}

// 🔍 Highlight Active Section On Scroll
function highlightActiveSectionOnScroll() {
  const sections = ["hero", "about", "contact", "api"];
  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY + 100;
    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (
        scrollPos >= section.offsetTop &&
        scrollPos < section.offsetTop + section.offsetHeight
      ) {
        document.querySelectorAll(".nav-dot").forEach((dot) => {
          dot.classList.remove("active");
          if (dot.dataset.section === id) dot.classList.add("active");
        });
      }
    });
  });
}

// 🧠 Interactive Buttons
function vibrateDevice(duration = 20) {
  if ("vibrate" in navigator) {
    navigator.vibrate(duration);
  }
}

function transformReality() {
  vibrateDevice();
  alert("⚡ Reality Transformation Initiated!");
}

function exploreMatrix() {
  vibrateDevice(50);
  alert("🧬 Entering The Matrix...");
}

window.transformReality = transformReality;
window.exploreMatrix = exploreMatrix;

// 📬 Form Handling & Validation
function setupForm() {
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = validateRequired("name", "Identity Code is required.");
    const email = validateEmail(
      "email",
      "Valid Neural Link Address is required."
    );
    const phone = validatePhone("phone", "Enter a valid Quantum Frequency.");
    const message = validateRequired(
      "message",
      "Transmission Data cannot be empty."
    );

    if (name && email && phone && message) {
      successMessage.innerHTML = `<i class="fas fa-check-circle me-2"></i> Quantum transmission successful! We'll contact you through the neural link.`;
      successMessage.classList.add("success-pulse");
      successMessage.style.display = "block";
      form.reset();
      setTimeout(() => {
        successMessage.style.display = "none";
        successMessage.classList.remove("success-pulse");
      }, 5000);
    }
  });
}

function validateRequired(id, message) {
  const input = document.getElementById(id);
  const error = document.getElementById(`${id}Error`);
  if (!input.value.trim()) {
    error.textContent = message;
    error.style.display = "block";
    return false;
  }
  error.style.display = "none";
  return true;
}

function validateEmail(id, message) {
  const input = document.getElementById(id);
  const error = document.getElementById(`${id}Error`);
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(input.value)) {
    error.textContent = message;
    error.style.display = "block";
    return false;
  }
  error.style.display = "none";
  return true;
}

function validatePhone(id, message) {
  const input = document.getElementById(id);
  const error = document.getElementById(`${id}Error`);
  if (input.value && !/^[+]?[\d\s\-()]{7,}$/.test(input.value)) {
    error.textContent = message;
    error.style.display = "block";
    return false;
  }
  error.style.display = "none";
  return true;
}

// 🌐 API Section
function fetchQuantumData() {
  const container = document.getElementById("dataContainer");
  container.innerHTML = `
    <div class="text-center">
      <div class="cyber-loading"></div>
      <p class="mt-3" style="color: var(--cyber-blue);">Fetching quantum data...</p>
    </div>
  `;

  setTimeout(() => {
    container.innerHTML = `
      <div class="holo-card fade-in">
        <h5>Data Stream Sample</h5>
        <pre style="color: #fff;">{
  "quantum-state": "entangled",
  "ai-thought": "processing reality",
  "timestamp": "${new Date().toISOString()}"
}</pre>
      </div>
      <div class="holo-card fade-in">
        <h5>Neural Network Stats</h5>
        <ul class="list-unstyled text-light">
          <li><i class="fas fa-brain me-2"></i> Synapses: 1.2 Trillion</li>
          <li><i class="fas fa-network-wired me-2"></i> Connections: 4.8 Billion</li>
          <li><i class="fas fa-clock me-2"></i> Uptime: Infinite</li>
        </ul>
      </div>
    `;
    setupScrollAnimations(); // Rebind animations
  }, 2000);
}

window.fetchQuantumData = fetchQuantumData;

// 🎯 Scroll Fade In Animation
function setupScrollAnimations() {
  const fadeEls = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeEls.forEach((el) => observer.observe(el));
}

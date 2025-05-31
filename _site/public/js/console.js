
document.addEventListener("DOMContentLoaded", function () {
  const consoleEl = document.getElementById("console");

  fetch("/public/docs/about.txt")
    .then(response => response.text())
    .then(data => {
      const lines = data.split("\n");
      lines.forEach((line, i) => {
        const lineEl = document.createElement("p");
        lineEl.textContent = line;
        lineEl.classList.add("fade-in-line");
        lineEl.style.transitionDelay = `${i * 0.2}s`;
        consoleEl.appendChild(lineEl);
      });

      function handleScroll() {
        const fadeInElements = document.querySelectorAll(".fade-in-line");
        fadeInElements.forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight - 50) {
            el.classList.add("visible");
          }
        });
      }

      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Trigger on load
    });
});

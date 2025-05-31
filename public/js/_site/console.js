
// Scroll observer to handle fade-in effect
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

const consoleElement = document.getElementById('console');
const lines = [
    "Hi, I'm Pankaj Malhotra, a seasoned software leader and entrepreneur.",
    "With over a decade of experience, I've worked on cloud infrastructure, scalable systems, and business ventures.",
    "I enjoy mentoring developers, optimizing performance, and building impactful tech solutions."
];

let index = 0;

function writeLine(line, index) {
    const lineElem = document.createElement('div');
    lineElem.textContent = line;
    lineElem.className = 'fade-in-line';  // Add fade-in class
    consoleElement.appendChild(lineElem);

    // Observe the line for fade-in on scroll
    observer.observe(lineElem);
}

function writeConsoleLines() {
    if (index < lines.length) {
        writeLine(lines[index], index);
        index++;
        setTimeout(writeConsoleLines, 800);
    }
}

writeConsoleLines();

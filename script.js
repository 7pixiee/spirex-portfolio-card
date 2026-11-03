
window.addEventListener("load", () => {
    console.log("Welcome to Sumayya's Portfolio!");
});


const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    const isLight = document.body.classList.contains("light-mode");

    themeToggle.textContent = isLight
        ? "🌙"
        : "☀";
});

const contactLinks = document.querySelectorAll(".contact a");

contactLinks.forEach(link => {
    link.addEventListener("click", () => {
        console.log(`Opening ${link.textContent} profile...`);
    });
});


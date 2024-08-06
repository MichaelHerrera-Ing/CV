document.addEventListener("DOMContentLoaded", () => {
    // Contact Form Submission
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        // Handle form submission
        alert("Formulario enviado!");
        // Aquí podrías agregar la lógica para enviar el formulario a un servidor
    });

    // Fetch and display news
    const newsContainer = document.getElementById("newsContainer");
    const newsArticles = [
        { title: "Artículo 1", content: "Contenido del artículo 1..." },
        { title: "Artículo 2", content: "Contenido del artículo 2..." }
    ];
    newsArticles.forEach(article => {
        const articleElement = document.createElement("div");
        articleElement.innerHTML = `<h3>${article.title}</h3><p>${article.content}</p>`;
        newsContainer.appendChild(articleElement);
    });

    // Simple Game
    const canvas = document.getElementById("gameCanvas");
    const context = canvas.getContext("2d");
    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let dx = 2;
    let dy = 2;

    function drawGame() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.arc(x, y, 10, 0, Math.PI * 2);
        context.fillStyle = 'blue';
        context.fill();
        context.closePath();

        x += dx;
        y += dy;

        if (x + dx > canvas.width || x + dx < 0) dx = -dx;
        if (y + dy > canvas.height || y + dy < 0) dy = -dy;

        requestAnimationFrame(drawGame);
    }

    drawGame();
});

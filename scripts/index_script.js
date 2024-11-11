const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let currentSlide = 0;

function showNextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    const offset = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

// Intervalo de 3 segundos entre cada slide
setInterval(showNextSlide, 4000);

// Função para trocar o tema e salvar no localStorage
function trocarEstilo() {
    const tema = document.getElementById("themeStylesheet");
    const botao = document.getElementById("toggleButton");
    const checkbox = document.getElementById("toggleSwitch");

    if (tema.getAttribute("href") === "styles/index_style.css") {
        tema.setAttribute("href", "styles/index_style_dark.css");
        botao.textContent = "Modo Claro";

        // Salva o tema escuro no localStorage
        localStorage.setItem("tema", "dark");
    } else {
        tema.setAttribute("href", "styles/index_style.css");
        botao.textContent = "Modo Escuro";

        // Salva o tema claro no localStorage
        localStorage.setItem("tema", "light");
    }
    
    if (checkbox.checked) {
        console.log("Switch Ativado");
        // Adicione ações para o estado "ativado"
    } 
    else {
        console.log("Switch Desativado");
        // Adicione ações para o estado "desativado"
    }

    console.log("Novo tema:", tema.getAttribute("href"));
}

// Verifica o tema salvo no localStorage ao carregar a página
window.addEventListener("load", () => {
    const temaSalvo = localStorage.getItem("tema");
    const tema = document.getElementById("themeStylesheet");
    const botao = document.getElementById("toggleButton");

    if (temaSalvo === "dark") {
        tema.setAttribute("href", "styles/index_style_dark.css");
        botao.textContent = "Modo Claro";
    } else {
        tema.setAttribute("href", "styles/index_style.css");
        botao.textContent = "Modo Escuro";
    }
});
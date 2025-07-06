window.onload = function () {
    alert("Bem-vindo ao site da Nutrição Poli!");
};


// faz a imagem aparecer ao  rolar a tela

window.onscroll = function() {
    const span = document.getElementById("mensagem-scroll");
    span.style.display = "block";

    // Oculta o span depois de 3 segundos
    clearTimeout(window.scrollTimeout);
    window.scrollTimeout = setTimeout(() => {
        span.style.display = "none";
    }, 3000);
};

window.onscroll = function () {
    const aviso = document.getElementById("mensagem-scroll");
    aviso.style.display = "block";

    clearTimeout(window.scrollTimeout);
    window.scrollTimeout = setTimeout(() => {
        aviso.style.display = "none";
    }, 3000);
};

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-theme");

    // musa o tema 
    if (localStorage.getItem("tema") === "escuro") {
        document.body.classList.add("dark-mode");
        if (toggleButton) toggleButton.textContent = "Modo claro";
    }

    // para alternar em  escuro e claro
    if (toggleButton) {
        toggleButton.addEventListener("click", function (e) {
            e.preventDefault();

            document.body.classList.toggle("dark-mode");

            const temaAtual = document.body.classList.contains("dark-mode") ? "escuro" : "claro";
            localStorage.setItem("tema", temaAtual);

            toggleButton.textContent = temaAtual === "escuro" ? "Modo claro" : "Modo escuro";
        });
    }

    // quando vai para o cardapio abre uma pagina sobre alimentação saudavel
    const cardapioLink = document.getElementById("abrir-cardapios");
    if (cardapioLink) {
        cardapioLink.addEventListener("click", function (e) {
            e.preventDefault();
            window.open("https://www.tuasaude.com/alimentacao-e-saude/", "_blank");
            setTimeout(() => {
                window.location.href = "Cardapio.html";
            }, 100);
        });
    }
});

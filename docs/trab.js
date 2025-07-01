window.onload = function () {
    alert("Bem-vindo ao site da Nutrição Poli!");
};

function mudarCorDeFundo() {
    document.body.style.backgroundColor = "black";
}

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

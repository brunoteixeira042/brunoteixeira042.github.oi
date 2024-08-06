document.addEventListener("DOMContentLoaded", function() {
    const elementoTitulo = document.getElementById('titulo-h1');
    const elementoParagrafo = document.getElementById('paragrafo');
    const textoTitulo = "Olá 👋 meu nome é Bruno!";
    const textoParagrafo = "Full Stack Developer";
    const intervalo = 150;
    function TextoEmMovimento(elemento, texto, intervalo, callback) {
        const charArray = texto.split('');
        const type = setInterval(() => {
            if (!charArray.length) {
                clearInterval(type);
                if (callback) callback();
                return;
            }

            const next = charArray.shift();
            elemento.innerHTML += next;
        }, intervalo);
    }
    TextoEmMovimento(elementoTitulo, textoTitulo, intervalo, () => {
        // Após o título terminar, iniciar a animação do parágrafo
        TextoEmMovimento(elementoParagrafo, textoParagrafo, intervalo);
    });
}
);

//Como acionar um evento
//Removendo eventos
//Objeto do evento
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");

function message(e) {
    console.log(e);
}

btn1.addEventListener("click", message("O botão foi clicado"));
btn2.addEventListener("click", message("O botão foi clicado"));
btn3.addEventListener("click", () => {
    btn2.removeEventListener("click", message("O botão foi clicado"));
});

//Ações default
let a = document.querySelector("a");
a.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Não vai mudar de link !");
})

//Eventos de tecla (Key event)
window.addEventListener("keydown", function (event) {
    if (event.key == "q") {
        console.log("Apertou a letra q");
    } else if (event.key == "Enter") {
        console.log("Apertou o Enter");
    }
});

window.addEventListener("keyup", function (event) {
    if (event.key == "w") {
        console.log("Apertou a letra w");
    } else if (event.key == "o") {
        console.log("Apertou o o");
    }
});

//Eventos de Mouse
btn4 = document.querySelector("#btn4");
btn4.addEventListener("mousedown", () => {
    console.log("Apertou o botão");
});
btn4.addEventListener("mouseup", () => {
    console.log("Soltou o botão");
});
btn4.addEventListener("dblclick", () => {
    console.log("Dois clicks");
});
btn4.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    console.log("Clicou com o botão direito do mouse");
});

//Movimento do mouse
window.addEventListener("mousemove", (event) => {
    console.log(event.x)
    console.log(event.y);
});

//Eventos por Scroll
window.addEventListener("scroll", (event) => {
    if (window.scrollY > 1000) {
        console.log("Ativou");
    }
})

//Eventos por foco
let input = document.querySelector("input");
input.addEventListener("focus", () => {
    console.log("Entrou no input.")
});
input.addEventListener("blur", () => {
    console.log("Saiu do input.")
});

//Evento de carregamento
window.addEventListener("load", function () {
    alert("Assine os nossos termos de uso");
})

window.addEventListener("beforeunload", function (event) {
    event.preventDefault();
});

//Debounce
let timeout;
window.addEventListener("mousemove", function (event) {
    this.clearTimeout(timeout);
    timeout = this.setTimeout(function () {
        console.log(event.x);
    }, 500);
});
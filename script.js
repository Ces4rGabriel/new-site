//pegar o html do site
//let scrollVertical = document.querySelector('#scroll');
let body = document.querySelector('body');
let posAntiga = 0;


/*function scrollFunction() {
    let div = document.getElementById('to-top');

    window.alert("Posição scrol bar: " + html.scrollTop);

    if(html.scrollTop > 0)  
    {
        div.setAttribute('class', 'scrolled');
    }else
    {
        div.setAttribute('class', 'noscrolled');
    }

    
};

html.onscroll = scrollFunction();*/

//fazer a barra crescer semopre que o botão crecer
function highWidth(){
    let scrolVertical = document.querySelector('.scroll-vertical');
    scrolVertical.style.height = "5px";
    scrolVertical.style.backgroundColor = "#603F97";

    let html = document.documentElement;
    let body = document.body;
    let tamanhoScroll = ((html.scrollTop || body.scrollTop) / ((html.scrollHeight || body.scrollHeight) - html.clientHeight)) * 100 + "%";

    scrolVertical.style.width = tamanhoScroll;
}

function fechaTelaLogin(){
    let telaLogin = document.querySelector('#logar');
    telaLogin.style.display = "none";
    telaLogin.style.transition = "0.7s";
}

function telaLogin(){
    let telaLogin = document.querySelector('#logar');
    telaLogin.style.display = "flex";
    telaLogin.style.transition = "0.7s";
}


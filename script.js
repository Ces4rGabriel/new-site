//pegar o html do site
//let scrollVertical = document.querySelector('#scroll');
let body = document.querySelector('body');
let posAntiga = 0;

//fazer a barra crescer semopre que o botão crecer
function highWidth(){
    let scrolVertical = document.querySelector('.scroll-vertical');
    scrolVertical.style.height = "5px";
    scrolVertical.style.backgroundColor = "#603F97";
    buttonClose();

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

function menuNavMobile(){
    let nav = document.querySelector('nav');
    let tresBarras = document.querySelector('#menu-mobile');
    let closeMobile = document.querySelector('#close-mobile');
    let logar = document.querySelector('#logar');
    logar.style.display = "none";
    nav.style.display = "flex";
    nav.style.transition = "0.9s";
    tresBarras.style.display = "none";
    closeMobile.style.display = "flex";
}


function buttonClose(){
    let tresBarras = document.querySelector('#menu-mobile');
    let closeMobile = document.querySelector('#close-mobile');
    let nav = document.querySelector('nav');
    let logar = document.querySelector('#logar');
    logar.style.display = "none";
    nav.style.display = "none";
    tresBarras.style.display = "flex";
    closeMobile.style.display = "none";
}

function enviarDados(){
    let login = document.querySelector('#logar');
    login.style.display = "none";
}
/*seleção de tema*/
const setaEsquerda= document.getElementById('seta-esquerda')
const setaDireita= document.getElementById('seta-direita')
const temaAzul=document.querySelector('.azul')
const temaAmarelo=document.querySelector('.amarelo')
const temaVermelho=document.querySelector('.vermelho')
const temaVerde=document.querySelector('.verde')
const temaRosa=document.querySelector('.rosa')
const temaRoxo=document.querySelector('.roxo')
const telaDeEscolha=document.querySelector('.slide-screen')
const themas= document.querySelector('.conteiner-hidden')
const html=document.querySelector('html')
const buttonTelaDeSelecao=document.querySelector('.btn-slide-screen')
/*componentes da animacao*/
const conteiner= document.querySelector('[data-conteiner]')
const symbols= document.querySelectorAll('.symbols')
const palavraCentral= document.querySelector('[data-palavracentral]')
const giro= document.querySelector('[data-girar]')
const shadowinside=document.querySelectorAll('[data-shadowinside]')
const shadowout=document.querySelectorAll('[data-shadowout]')
/*codigo do slide*/
function init(){
  themas.style=`position:relative;left:0px`
  perspective(0)
}
setaEsquerda.addEventListener('click',forRight)
setaDireita.addEventListener('click',forLeft)
buttonTelaDeSelecao.addEventListener('click',()=>{
  telaDeEscolha.style.display='block';
  conteiner.style.display='none';
  html.classList.remove('cor-azul','cor-vermelha','cor-verde','cor-amarela','cor-rosa','cor-roxa')
})

function forLeft(){
  let pos=parseInt(themas.style.left)
  pos-=300
  themas.style.left=`${pos}px`;
  perspective(pos)
}
function forRight(){
  
  let pos=parseInt(themas.style.left)
  pos+=300
  themas.style.left=`${pos}px`;
  perspective(pos)
}

function perspective(pos){
  if(pos == 0 & pos > -300){
    setaEsquerda.style.display='none'
    temaAzul.classList.add('esquerdo');
    temaVerde.classList.add('central');
    temaAmarelo.classList.add('direito');
  }else if(pos == -300 & pos > -600){
    setaEsquerda.style.display='block'
    temaVerde.classList.remove('central');
    temaAmarelo.classList.remove('direito');
    temaVerde.classList.add('esquerdo');
    temaAmarelo.classList.add('central');
    temaVermelho.classList.add('direito');
  } else if(pos == -600 & pos > -900){
    setaDireita.style.display='block'
    temaAmarelo.classList.remove('central');
    temaVermelho.classList.remove('direito');
    temaAmarelo.classList.add('esquerdo');
    temaVermelho.classList.add('central');
    temaRosa.classList.add('direito')
  } else{
    setaDireita.style.display='none'
    temaVermelho.classList.remove('central');
    temaRosa.classList.remove('direito')
    temaVermelho.classList.add('esquerdo');
    temaRosa.classList.add('central')
    temaRoxo.classList.add('direito')
  }
}

/*selecionar a cor*/
temaAzul.addEventListener('click',()=>{
    html.classList.add('cor-azul')
  telaDeEscolha.style.display='none';
  conteiner.style.display='flex'
});
temaVermelho.addEventListener('click', ()=>{
    html.classList.add('cor-vermelha')
  telaDeEscolha.style.display='none';
  conteiner.style.display='flex'
});
temaVerde.addEventListener('click',()=>{
    html.classList.add('cor-verde')
  telaDeEscolha.style.display='none';
  conteiner.style.display='flex'
});
temaAmarelo.addEventListener('click',()=>{
    html.classList.add('cor-amarela')
  telaDeEscolha.style.display='none';
  conteiner.style.display='flex'
});
temaRosa.addEventListener('click',()=>{
    html.classList.add('cor-rosa')
  telaDeEscolha.style.display='none';
  conteiner.style.display='flex'
});
temaRoxo.addEventListener('click',()=>{
    html.classList.add('cor-roxa')
  telaDeEscolha.style.display='none';
  conteiner.style.display='flex'
});

/*Animação*/ 
let isActive = false;

function itsOn(){
    isActive=true;
    if(isActive){
        animationOn();
    }
}

function animationOn(){
   palavraCentral.classList.add('animationchangecolor')
   giro.classList.add('animationrotate')
   for (symbol of symbols){
    symbol.classList.add('animationchangecolor')
   }
   for (const out of shadowout){
    out.classList.add('animationchangeshadowoutside')
   }
   for (const inside of shadowinside){
    inside.classList.add('animationchangeshadowinside')
   }
}

function itsOff(){
    isActive = false;
    if(!isActive){
        animationOff();
    }
}

function animationOff(){
    palavraCentral.classList.remove('animationchangecolor');
   giro.classList.remove('animationrotate')
   for (symbol of symbols){
    symbol.classList.remove('animationchangecolor')
   }
   for (const out of shadowout){
    out.classList.remove('animationchangeshadowoutside')
   }
   for (const inside of shadowinside){
    inside.classList.remove('animationchangeshadowinside')
   }
}

conteiner.addEventListener('mouseenter',itsOn)
conteiner.addEventListener('mouseleave',itsOff)
window.onload=init


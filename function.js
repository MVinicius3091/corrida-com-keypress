var car1 = document.getElementById('carro1');
var car2 = document.getElementById('carro2');
var fundo = document.getElementsByClassName('inicio')[0];
var body = document.getElementById('body');
var instucoes = document.querySelector(".instrucoes");
var proBar = document.querySelector('.progress');
console.log(instucoes);

var botao = document.getElementById('botao').addEventListener('click', function(){
  instucoes.style.display = 'none';
  proBar.style.display = 'block';
  progressBar();
});

var restarte = document.getElementById('novo').addEventListener('click', function(){novo()});




var primeiro = 0;
var segundo = 0;
var velocidade = 30;

function progressBar(){
  var value = 0;
  let bar = document.querySelector('.progress-bar');
  let progress = document.querySelector('.progress');

  bar.innerHTML = '0%';
  bar.style.width = '0%';

  setInterval(()=>{
    if(value > 100){
      value = 100;
    }
  
    bar.innerHTML = value + '%';
    bar.style.width = value + '%';
    value++;

    if(value == 100){
      setTimeout(()=>{
        fundo.style.display = 'none';
        bar.style.display = 'none';
        progress.style.display = 'none';
      }, 1000);
    }
  },80);
}

body.addEventListener('keydown', function(e){ 

  let correr = e.key;

  if(correr == 'z'){
    primeiro += velocidade;
    car1.style.marginLeft = primeiro + 'px';   
    vitoria(primeiro, 'Jogador 1');
    console.log(primeiro);
  }

  if(correr == 'm'){
    segundo += velocidade;
    car2.style.marginLeft = segundo + 'px';
    vitoria(segundo, 'Jogador 2');
  }
});




function vitoria(final, vencedor){

  if(final > 1080){
   alert('O vencedor foi o ' + vencedor);
  }

}

function novo(){

  primeiro = 0;
  segundo = 0;
 
  car2.style.marginLeft = segundo + 'px';
  car1.style.marginLeft = primeiro + 'px';  
} 

  




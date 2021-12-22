var car1 = document.getElementById('carro1');
var car2 = document.getElementById('carro2');
var fundo = document.getElementsByClassName('inicio')[0];
var body = document.getElementById('body');

var botao = document.getElementById('botao').addEventListener('click', function(){fundo.style.display = 'none';});

var restarte = document.getElementById('novo').addEventListener('click', function(){novo()});




var primeiro = 0;
var segundo = 0;
var velocidade = 30;

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

  




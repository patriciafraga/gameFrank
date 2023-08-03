let grama;
const tamanho = 64;
const velocidade = 64;
let andarX = 0;
let andarY = 0;
let botao; 
let person;

let img;
function preload() {
  img = loadImage("img/lab.png");
  
}

//executa uma vez
function setup() {
  //cria uma área de trabalho
  createCanvas(768, 768);
  grama = loadImage ("img/campo.jpg");
  person = loadImage ("img/frank1.png");
  
}
//executa até encerrar o programa
function draw() {
   image(img, 0, 0, width, height, 0, 0, img.width, img.height, COVER); 
  background(img);
  
  image(person, andarX, andarY, tamanho, tamanho);
  

  if (andarX < 0 ) {
    andarX = 0;    
  }
  if (andarY < 0) {
    andarY = 0;
  }
  if (andarX > tamanho * 11) {
    andarX = tamanho * 11; //ou 704 limite da tela
  }
  if (andarY > tamanho * 11) {
    andarY = tamanho * 11;
  }
     
//   for (let x = 0; x < 9; x++ ){ 
    
//      for (let y = 0; y < 9; y++){
       
//        image( grama, x * tamanho,y * tamanho, tamanho, tamanho);
//      }    
// }
  
 
  
  
  if (andarX >= tamanho * 10 && andarY >=  tamanho * 10)  {
     //criar um retângulo do vencendor!
     rect(150, 150, 384, 384);
     textSize (35);
    textAlign(CENTER, CENTER);
     text("  Ganhou!", 340, 360);
     
     //resetar o jogo
     
     botao = createButton("Reiniciar");
     botao.mousePressed(reset);
     //parar o jogo (loop)
     noLoop();
   }
     
}
function reset () {
  andarX = 0;
  andarY = 0;
  botao.remove();
  loop();
}
//chamado quando a tecla é pressionada
function keyPressed () {
  if(keyIsDown(DOWN_ARROW)) {
    andarY += velocidade;
  }
  if(keyIsDown(UP_ARROW)) {
    andarY -= velocidade;
  }
  if(keyIsDown(RIGHT_ARROW)) {
    andarX += velocidade;        
  }
  if(keyIsDown(LEFT_ARROW)) {
    andarX -= velocidade;
  }
  
}


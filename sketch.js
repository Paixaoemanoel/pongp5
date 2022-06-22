 //variaves da bolinha
 let xBolinha = 300;
 let yBolinha = 200;
 let diametro = 33
 let raio = diametro / 2;

 //velocidade da bolinha
 let velocidadeXBolinha = 8;
 let velocidadeYBolinha = 8;

 function setup() {
  createCanvas(600, 400);
 }
 function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
    rect(5, 150, 10, 90);
}

function mostraBolinha() {
    circle(xBolinha, yBolinha, diametro)
}

function movimentaBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
    if (xBolinha + raio > width || xBolinha - raio < 0) {
        velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio > height || yBolinha - raio < 0) {
        velocidadeYBolinha *= -1;
    }
}

 function mostrarBolinha(){
  circle(xBolinha, yBolinha, diametro);
 }

   
    if (xBolinha > width ||   
       XBolinha < 0){
    velocidadeXBolinha *= -1;  
      
    } if (yBolinha > height || yBolinha < 0) {
        velocidadeYBolinha *= -1;
    }


 function movimentarBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  
 }





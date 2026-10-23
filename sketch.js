function setup() {
  createCanvas(800, 800); 
  noLoop(); 
}

function draw() {
  background(255); //
  
  let white = color(245, 245, 240);
  let red = color(238, 36, 0);      
  let yellow = color(253, 219, 0);  
  let blue = color(32, 27, 113);    

  // Aqui fiz os blocos, e usei o noStroke para não desenhar a borda de cada bloco.
  // Fill é usado para preencher a cor do bloco, e rect é para construir o bloco e a posição.
  noStroke(); 
  
  fill(red);
  rect(0, 0, 360, 320); 
  // Afastado 0px da esquerda, afastado 0px do teto, com 360px de largura e 320px de altura
  
  fill(white);
  rect(360, 0, 440, 320);
  
  fill(white);
  rect(0, 320, 360, 200);
  
  fill(white);
  rect(360, 320, 440, 200);
  
  fill(yellow);
  rect(0, 520, 80, 280);
  
  fill(white);
  rect(80, 520, 280, 280);
  
  fill(blue);
  rect(360, 520, 240, 220);
  
  fill(white);
  rect(360, 740, 240, 60);
  
  fill(white);
  rect(600, 520, 200, 280);

  stroke(0);            
  strokeWeight(15);     
  strokeCap(SQUARE);    

  // linhas horizontais
  line(0, 320, 800, 320);   
  line(0, 520, 800, 520);   
  line(360, 740, 600, 740); 

  // linhas verticais
  line(360, 0, 360, 800);   
  line(80, 520, 80, 800);   
  line(600, 520, 600, 800); 
}

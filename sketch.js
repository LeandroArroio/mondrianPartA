function setup() {
  createCanvas(800, 800);
  noLoop(); // Como é uma pintura estática, evita renderizar continuamente
}

function draw() {
  // Fundo preto (funciona como as linhas pretas da grelha)
  background(0);
  
  noStroke();
  
  // Cores
  let white = color(245, 245, 240); // Branco off-white
  let red = color(211, 47, 47);     // Vermelho
  let yellow = color(251, 192, 45); // Amarelo
  let blue = color(25, 50, 100);    // Azul

  // 1. Bloco Vermelho (Superior Esquerdo)
  fill(red);
  rect(0, 0, 363, 312);
  
  // 2. Bloco Branco (Superior Direito)
  fill(white);
  rect(375, 0, 425, 312);
  
  // 3. Bloco Branco (Médio Esquerdo)
  rect(0, 318, 352, 190);
  
  // 4. Bloco Branco (Médio Direito)
  rect(360, 318, 440, 190);
  
  // 5. Bloco Amarelo (Inferior Esquerdo)
  fill(yellow);
  rect(0, 516, 80, 268);
  
  // 6. Bloco Branco (Inferior Centro-Esquerdo)
  fill(white);
  rect(88, 516, 272, 268);
  
  // 7. Bloco Azul (Inferior Centro-Direito)
  fill(blue);
  rect(368, 516, 232, 220);
  
  // Faixa branca por baixo do bloco azul
  fill(white);
  rect(368, 744, 232, 40);
  
  // 8. Bloco Branco (Inferior Direito)
  rect(608, 516, 192, 268);
}
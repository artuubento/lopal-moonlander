 // Moonlander. Um jogo de alunissagem
 // Arthur Bento (artuuub)
 // 28/03/25
 // Versão 0.1.0
 
 
 /** @type {HTMLCanvasElement} */

let canvas = document.querySelector("#jogo");
let contexto = canvas.getContext("2d");


 let moduloLunar = {
        posicao: {
            x: 100,
            y: 100
        },
        angulo: 0,
        largura: 20,
        altura: 20,
        cor: "lightgray",
        motorLigado: false,
        velocidade:  {
            x: 0,
            y: 0

        },
        combustivel: 1000
 }

function desenharModuloLunar(){
        
        contexto.save();
        contexto.beginPath();
        contexto.translate(moduloLunar.posicao.x, moduloLunar.posicao.y);
        contexto.rotate(moduloLunar.angulo);
        contexto.rect(moduloLunar.largura * -0.5, moduloLunar.altura * -0.5, 
            moduloLunar.largura, moduloLunar.altura);
        contexto.fillStyle = moduloLunar.cor
        contexto.fill();
        contexto.closePath();
            if(moduloLunar.motorLigado){
                desenharChama();
                
            }

        contexto.restore();
        
}
function desenharChama(){

    contexto.beginPath();
    contexto.moveTo(moduloLunar.largura * -0.5, moduloLunar.altura * 0.5);
    contexto.lineTo(moduloLunar.largura * 0.5, moduloLunar.altura * 0.5);
    contexto.lineTo(0, moduloLunar.altura * 0.5 + Math.random() * 10);
    contexto.lineTo(moduloLunar.largura * -0.5,   moduloLunar.altura * 0.5);
    contexto.closePath();
    contexto.fillStyle = "orange";
    contexto.fill();
}

function mostrarVelocidade(){
    contexto.font = "bold 18px Arial";
    contexto.textAlign = "center";
    contexto.textBaseline = "middle";
    contexto.fillStyle = "lightgray";
    let velocidade = `Velocidade: ${10 * (moduloLunar.velocidade.y).toFixed(1)}`;
    contexto.fillText(velocidade, 100, 60);
}

function mostrarCombustivel(){
    contexto.font = "bold 18px Arial";
    contexto.textAlign = "center";
    contexto.textBaseline = "middle";
    contexto.fillStyle = "lightgray";
    let combustivel = `Combustível: ${(moduloLunar.combustivel).toFixed(0)}`;
    contexto.fillText(combustivel, 100, 80);
}

function desenhar(){
    //limpar a tela
    contexto.clearRect(0, 0, canvas.width, canvas.height);

    atracaoGravitacional();
    desenharModuloLunar();
    mostrarVelocidade();
    mostrarCombustivel();
    if(moduloLunar.posicao.y >= canvas.height){
        return alert("O jogo acabou!");
    }
    requestAnimationFrame(desenhar);
    

}
    
    document.addEventListener("keydown", teclaPressionada);
    function teclaPressionada(evento){
        if (evento.keyCode == 38){
            moduloLunar.motorLigado = true;
        }

    }

    document.addEventListener("keyup" , teclaSolta);
    function teclaSolta(evento){
        if(evento.keyCode == 38){
             moduloLunar.motorLigado = false;
        }
    }

let gravidade = 0.030;
function atracaoGravitacional(){
    moduloLunar.velocidade.y += gravidade;
    moduloLunar.posicao.x += moduloLunar.velocidade.x;
    moduloLunar.posicao.y += moduloLunar.velocidade.y;
        
    if(moduloLunar.motorLigado){
        if(moduloLunar.combustivel > 0) {
            moduloLunar.velocidade.y -= 0.070;
            moduloLunar.combustivel -= 1;
        } else {
            moduloLunar.motorLigado = false;
            moduloLunar.combustivel = 0;
        }
   
    }
}
    desenhar();

  


let canvas = document.querySelector("#jogo");
let contexto = canvas.getContext("2d");

/*contexto.rect(0,0, 100, 100);
contexto.fillStyle = "purple";
contexto.fill();
contexto.strokeStyle = "black";
contexto.stroke();

contexto.beginPath();
contexto.moveTo(100,100)
contexto.lineTo(200,100)
contexto.lineTo(100,200)
contexto.lineTo(100,100)
contexto.fillStyle = "purple";
contexto.fill();*/

let x = 0

 let moduloLunar = {
    posicao: {
        x: 100,
        y: 100
    },
    angulo: 0,
    largura: 20,
    altura: 20,
    cor: "purple",
    motorLigado: false,
    velocidade:  {
        x: 0,
        y: 0

    }

 }

function desenharModuloLunar(){
        
        contexto.save();
        contexto.beginPath();
        contexto.translate(moduloLunar.posicao.x, moduloLunar.posicao.y);
        contexto.rotate(moduloLunar.angulo);
        contexto.rect(moduloLunar.largura * -0.5, moduloLunar.altura * -0.5, moduloLunar.largura, moduloLunar.altura);
        contexto.fillStyle = moduloLunar.cor
        contexto.fill();
        contexto.closePath();
        contexto.restore();
        
    }
function desenharChama(){

    contexto.beginPath();
    contexto.moveTo(moduloLunar.largura * -0.5, moduloLunar.altura * 0.5);
    contexto.lineTo(moduloLunar.largura * -0.5, moduloLunar.altura * 0.5);
    contexto.lineTo(0, moduloLunar.altura * 0.5 + Math.random() * 10);
    contexto.lineTo(moduloLunar.largura * -0.5,   moduloLunar.altura * 0.5);
    contexto.closePath();
    contexti.fillStyle = "purple";
    contexto.fill();
}

function desenhar(){
    //limpar a tela
    contexto.clearRect(0, 0, canvas.widht, canvas.height)

    contexto.save();
    contexto.translate(canvas.width / 2, canvas.height / 2);
    contexto.beginPath();
    contexto.rotate(Math.PI/4);
    contexto.rect(x, 100, 25, 10);
    contexto.fill();
    contexto.restore();

    x = x + 5;
requestAnimationFrame(desenhar);
desenharModuloLunar(); 

}
    document.addEventListener("keydown",)
function teclaPressionada(evento){

    if (evento.keyCode == 38){
        moduloLunar.altura.motorLigado = true;
    }

}

    document.addEventListener("keyup" , teclaSolta);

function teclaSolta(evento){
    if(evento.keyCode == 38){
        moduloLunar.motorLigado = false;
    }
}

    

desenhar();

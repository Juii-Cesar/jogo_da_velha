const celulas = document.querySelectorAll(".celula");
const vencedor = document.querySelector (".resultado");
const reiniciarJogo = document.querySelector(".botao-reinicio");
let vez = 0;
let jogoAtivo = true;

function verificarVitoria(){
    const combinacoes=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    const tabuleiro = Array.from(celulas).map(celula=>celula.textContent);

    for(combinacao of combinacoes){
        if(combinacao.every(i=>tabuleiro[i]==="X")){
            return'X venceu!';
        }
        if(combinacao.every(i=>tabuleiro[i]==="O")){
            return'O venceu!';
        }
    }
    if(tabuleiro.every(c => c !== "")){
        return 'Empate';
    }
    return null;
}

function iniciarJogo(){
    celulas.forEach(celula =>{
         celula.textContent = "";
    })
    vez = 0;
    vencedor.textContent= 'Jogo da Velha.';
    jogoAtivo=true;
    
    celulas.forEach(celula=>{
        celula.addEventListener("click",()=>{
            if(celula.textContent==="" && jogoAtivo ){
                celula.textContent = vez%2===0 ? "X" : "O";
                vez++;
            
                const resultado = verificarVitoria();
                if(resultado){
                    vencedor.textContent = resultado;
                    jogoAtivo = false
            }
        }
    });      
});
}

reiniciarJogo.addEventListener("click",() =>{
    iniciarJogo();
})


iniciarJogo();





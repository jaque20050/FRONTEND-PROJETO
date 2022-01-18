/*
Quando clicar na seta para avançar temos que esconder 
todas as imagens e mostrar a proxima imagem.

A imagem atual começa com 0, adicionar contador

 */

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;


setaAvancar.addEventListener('click', function() { 

    // Testa se o contador de imagemAtual é igual ao total de imagem
    const totalDeImagens = imagensPainel.length -1;
    if(imagemAtual === totalDeImagens){
        console.log('não pode mais avançar');
        return;
    }
    
    imagemAtual++;

    
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });


    imagensPainel[imagemAtual].classList.add('mostrar');
    
})
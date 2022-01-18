/*
Quando clicar na seta para avançar temos que esconder 
todas as imagens e mostrar a proxima imagem.

A imagem atual começa com 0, adicionar contador

 */

const imagens = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;
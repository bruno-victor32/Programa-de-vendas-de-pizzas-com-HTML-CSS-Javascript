'use strict';

/*Variaveis que serão manipulados pelas funções*/
let somaMussarela = 0;
let somaMista = 0;
let somaCalabresa = 0;
let vendaMussarela = 0.00;
let vendaMista = 0.00;
let vendaCalabresa = 0.00;

/*Variavel que vai receber a instrução do botão vendas do Html*/
let btnVendas = document.getElementById('vendas');/*Estou pegando o id do botão*/

/*Variavel que vai receber a instrução do botão de estorno do Html */
let btnEstorno = document.getElementById('estorno');

/*Variavel que vai receber a instrução do botão de Planilha do Html */
let btnPlanilha = document.getElementById('export');

//Eventos

//Capturar o clique do botão do Html
btnVendas.addEventListener('click',venda,false);/*"venda" e o nome da função*/
btnEstorno.addEventListener('click',estorno,false);/*"estorno" e o nome da função*/
btnPlanilha.addEventListener('click',planilha,false);/*"planilha" e o nome da função*/

//Criando as funções

/*Função de venda */
function venda(e){//Essa função recebeu um "e" que seria o evento, e um evento de venda
    if(document.getElementById('mussarela').checked){
        somaMussarela = somaMussarela + 1;
        vendaMussarela = vendaMussarela + 25.00;/*Valor da pizza 25 reais*/
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela; /*Aqui estamos enviando a informação/resultado do somaMussarela para o Html*/
        document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2); /*Aqui estamos enviando a informação/resultado do somaMussarela para o Html*/
    
    }else if(document.getElementById('mista').checked){
        somaMista = somaMista + 1;
        vendaMista = vendaMista + 25.00;
        document.getElementById('resultadoMista').innerHTML = somaMista;
        document.getElementById('vendaMista').innerHTML = vendaMista.toFixed(2);
    
    }else if(document.getElementById('calabresa').checked){
        somaCalabresa = somaCalabresa + 1;
        vendaCalabresa = vendaCalabresa + 25.00;
        document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa;
        document.getElementById('vendaCalabresa').innerHTML = vendaCalabresa.toFixed(2);
    }
} 

/*Função de estorno */
function estorno(e){//Essa função recebeu um "e" que seria o evento, e um evento de estorno
    if(document.getElementById('mussarela').checked){
        somaMussarela = somaMussarela -1;
        vendaMussarela = vendaMussarela - 25.00;/*Valor da pizza 25 reais*/
        if(somaMussarela < 0){
            somaMussarela = 0;
            vendaMussarela = 0.00;
        }
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela; /*Aqui estamos enviando a informação/resultado do somaMussarela para o Html*/
        document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2); /*Aqui estamos enviando a informação/resultado do somaMussarela para o Html*/
    
    }else if(document.getElementById('mista').checked){
        somaMista = somaMista - 1;
        vendaMista = vendaMista - 25.00;
        if(somaMista < 0){
            somaMista = 0;
            vendaMista = 0.00;
        }
        document.getElementById('resultadoMista').innerHTML = somaMista;
        document.getElementById('vendaMista').innerHTML = vendaMista.toFixed(2);
    
    }else if(document.getElementById('calabresa').checked){
        somaCalabresa = somaCalabresa - 1;
        vendaCalabresa = vendaCalabresa - 25.00;
        if(somaCalabresa < 0){
            somaCalabresa = 0;
            vendaCalabresa = 0.00;
        }
        document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa;
        document.getElementById('vendaCalabresa').innerHTML = vendaCalabresa.toFixed(2);
    }
}


/*Função Planilha*/
function planilha(e){
    TableToExcel.convert(document.getElementById('table'));
}
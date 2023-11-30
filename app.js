//sections
const dificuldadeSection = document.querySelector('#dificuldade-section');
const desafioSection = document.querySelector('#desafio-section');
const btnSection = document.querySelector('#btn-section');

const resposta = document.querySelector('#input');
const btnEnviar = document.querySelector('#btnEnviar');
const btnReset = document.querySelector('#resetBtn');
const tentativas = document.querySelector('#tentativas');
const result = document.querySelector('#result');
const dificuldadeSelect = document.querySelector('#dificuldade');


let maxTentativas;
let numAleatorio;
let quantTentativas;


//Logica para quando escolherem a dificuldade
dificuldadeSelect.addEventListener('change', function() {

    const dificuldade = parseInt(dificuldadeSelect.value)

    switch (dificuldade) {
        case 1:
            maxTentativas = 10;
            break;
        case 2:
            maxTentativas = 7;
            break;
        case 3:
            maxTentativas = 5;
            break;
        default:
            maxTentativas = 10;
            break;
    }

    quantTentativas = maxTentativas;
    tentativas.textContent = maxTentativas;

    numAleatorio = Math.floor(Math.random() * 100) + 1;

    dificuldadeSection.style.display = 'none';
    desafioSection.style.display = 'block';
    
});

//Logica para quando escolherem a resposta
btnEnviar.addEventListener('click', function() {

    const chute = parseInt(resposta.value);

    //Se não houver numero, ou for menor que 1 ou maior que 100
    if(isNaN(chute) || chute < 1 || chute > 100) {
        result.textContent = 'Por favor, insira um número de 1 a 100.'
    } else {
        if (chute === numAleatorio) {
            result.textContent = `Parabéns, você acertou em ${maxTentativas - quantTentativas + 1} tentativa(s).`;
            btnSection.style.display = 'none';
            btnReset.style.display = 'block';
        } else if (chute > numAleatorio){
            result.textContent = 'Muito alto. Tente novamente!';
            quantTentativas--;
        } else{
            result.textContent = 'Muito baixo. Tente novamente!';
            quantTentativas--;
        }

        //Logica para quando as tentativas acabarem 
        if (quantTentativas === 0) {
            result.textContent = `Suas tentativas acabaram! O número correto era ${numAleatorio}.`;
            btnSection.style.display = 'none';
            btnReset.style.display = 'block';
        }

        tentativas.textContent = quantTentativas;

        resposta.value = ''; //logica para que quando clicar em enviar, sumir o numero do input, para não cometer o erro de repeti-lo
    }
});

btnReset.addEventListener('click', function(){

    dificuldadeSelect.value = '';
    result.textContent = '';

    dificuldadeSection.style.display = 'block';
    desafioSection.style.display = 'none';
    btnSection.style.display = ''
    btnReset.style.display = 'none';
})
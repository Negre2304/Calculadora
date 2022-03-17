function insert(num) {
    
    document.getElementById('resultado');
    resultado.innerHTML += num;
}

function limpar(){

    document.getElementById('resultado');
    resultado.innerHTML = '';
    
}

function back() {

    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular() {

    var resultado = document.getElementById('resultado').innerHTML;

    if(resultado) {

        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else {

        alert(`[ERRO] Não há números para realizar o calculo!`)
    }
}
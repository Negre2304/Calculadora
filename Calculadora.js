function valor(numero) {

    var res = document.getElementById('resultado');
    res.innerHTML += numero; 
}

function clean() {

    var res = document.getElementById('resultado');
    res.innerHTML = ''
}

function calculo() {

    var resultado = document.getElementById('resultado').innerHTML;

    if(resultado) {

        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else {

        alert(`[ERRO] Não há números para realizar o calculo!`)
    }
}

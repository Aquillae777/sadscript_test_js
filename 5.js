var banco = []
banco[0] = banco1()
banco[1] = banco2()
banco[2] = banco3()
banco[3] = banco4()
var resultadoDivisão = divida(banco);
var resultadosoma = soma(banco)

alert("alert resultado é " +resultadosoma)
alert("resultado é:" + resultadoDivisão);

function banco1(){
    var numero1 = prompt("insira o primeiro número: ");

    if(numero1 < 0 ){
        alert("insira um número maior que 0");

        return banco1()
    }else{
       return numero1
    }
}

function banco2(){
    var numero2 = prompt("insira o segundo número: ");

    if(numero2 < 0){
        alert("como divide em 0 ? ");
        alert("tenta mais uma vez burro");
        
        return banco2()
    }else{
        return numero2;
    }
}

function banco3(){
    var numero3 = prompt("insira o segundo número: ");

    if(numero3 < 0){
        alert("como divide em 0 ? ");
        alert("tenta mais uma vez burro");
        
        return banco3()
    }else{
        return numero3;
    }
}
function banco4(){
    var numero4 = prompt("insira o segundo número: ");

    if(numero4 < 0){
        alert("como divide em 0 ? ");
        alert("tenta mais uma vez burro");
        
        return banco4()
    }else{
        return numero4;
    }
}


function soma(banco){
    var resultado = 0;

    resultado = banco[2] + banco[3] ;

    return resultado ;
}


function divida(banco){

    var resultado = 0;

    resultado = banco[0]/banco[1]

    return resultado;
}

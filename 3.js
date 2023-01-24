function banco2(){
    var numero2 = prompt("insira o seu segundo numero:");
   
    if(numero2 < 0 ){
        alert("insira novamente: ");
        
        return banco2();
    }else{
        return numero2;
    }
}



 function divida(banco){
   
    var resultado = 0;

    resultado = banco[0] / banco[1];

    return resultado;

 }
list = [5, 2, 4, 6, 1, 3];

listItens = (list) => {
    document.getElementById("valor").innerHTML = "";
    let text = "<ul>";
    list.map((valor) =>{
    const itens = document.getElementById("valor");
       itens.innerHTML += valor + "<ul>";
    }
)
}

adicionar = () => {
  const value = document.getElementById("adc").value;
    if(value != ""){
        list.push(value);
        listItens(list);
    }else{
        alert("adicione um valor");
    }
}
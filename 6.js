var num_dia = new Date().getDay();
if(num_dia == 0){
  dia = "domingo" ;
}else if(num_dia == 1){
  dia = "segunda";
}else if(num_dia == 2){
  dia = "terça";
}else if(num_dia == 3){
  dia = "quarta";
}else if(num_dia == 4){
  dia = "quinta";
}else if(num_dia == 5){
  dia = "sexta";
}else if(num_dia == 6){
  dia = "sabado";
}

console.log(" hoje é ", dia)
alert(dia)
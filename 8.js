   
    selection_sort = () =>{

        var n = 0;
  
        for( i = 0; i < list.length; i++)
         if(list[i] < list[n]){
           var n = i
         }
         var aux = list[0];
           list[0] = list[n];
           list[n] = aux;
  
         
    
        listItens(list)
      }
  
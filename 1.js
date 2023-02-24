quick_sort = () => {
    showListItens(recursive(listNumbers));
  
    function recursive(list) {
      if (list.length <= 1) {
        return list;
      }
  
      const pivot = list[list.length - 1];
      const left = [];
      const right = [];
  
      for (let x = 0; x < list.length - 1; x++) {
        list[x] < pivot ? left.push(list[x]) : right.push(list[x]);
      }
  
      return [...recursive(left), pivot, ...recursive(right)]; //Desistrurando para que seja gerados separadamente os itens no array
    }
  }; 
  bubble_sort = () => {
    var size = lista.length;
    for (var x = 0; x < size; x++) {
      for (var y = 0; y < size - x - 1; y++) {
        if (list[y] > list[y + 1]) {
          var aux = list[y];
          list[y] = list[y + 1];
          list[y+ 1] = aux;
        }
      }
    }
    ListItens(list);
  };
  
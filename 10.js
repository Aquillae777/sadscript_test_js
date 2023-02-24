shuffle = () => {
    const newList = list.sort(() => Math.random() - 0.5);
    listItens(newList);
  };
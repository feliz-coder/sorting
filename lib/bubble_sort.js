class BubbleSort {
  sort(list) {
    for (let i = 0; i < list.length; i++) {
      for (let j = 0; j < list.length; j++)
        if (list[j + 1] < list[j]) {
          let min = list[j];
          list[j] = list[j + 1];
          list[j + 1] = min;
        }
    }
    return list;
  }
}

export default BubbleSort;

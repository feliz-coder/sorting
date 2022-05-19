class SelectionSort {
  sort(list) {
    for (let i = 0; i < list.length; i++) {
      let min = i;
      for (let j = i + 1; j < list.length; j++) {
        if (list[j] < list[min]) {
          min = j;
        }
      }
      if (min != i) {
        let temp = list[i];
        list[i] = list[min];
        list[min] = temp
      }
    }
    return list;
  }
}

export default SelectionSort;

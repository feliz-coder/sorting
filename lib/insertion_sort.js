class InsertionSort {
  sort(list) {
    for (let i = 1; i < list.length; i++) {
      let j = i - 1;
      let key = list[i];
      while (j >= 0 && list[j] > key) {
        list[j + 1] = list[j];
        list[j] = key;
        j--;
      }
    }
    return list
  }
}

export default InsertionSort;

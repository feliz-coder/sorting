class MergeSort {
  sort(list) {
    return this.mergeSort(list)
  }

  mergeSort(list) {
    if (list.length <= 1) return list;
    let mid = Math.ceil(list.length / 2);
    let list_l = list.slice(0, mid);
    let list_r = list.slice(mid);
    let sort_l = this.mergeSort(list_l);
    let sort_r = this.mergeSort(list_r);
    return this.sortList(sort_l, sort_r)
  }

  sortList(a, b) {
    let c = [];
    while (a.length && b.length) {
      c.push(a[0] < b[0] ? a.shift() : b.shift())
    }
    while (a.length) {
      c.push(a.shift())
    }
    while (b.length) {
      c.push(b.shift())
    }
    return c
  }
}

export default MergeSort;

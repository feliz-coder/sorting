import chai from 'chai';
import SelectionSort from '../lib/selection_sort.js';
chai.should();

describe('SelectionSort', function () {
  describe('#sort([7,3,9,1,8,5,6,2,4])', function () {
    it('should return [1,2,3,4,5,6,7,8,9]', function () {
      const selectionSort = new SelectionSort();

      selectionSort.sort([7,3,9,1,8,5,6,2,4]).should.eql([1,2,3,4,5,6,7,8,9])
    });
  });
});

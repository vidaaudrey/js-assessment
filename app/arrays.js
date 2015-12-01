exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf: function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },

  sum: function(arr) {
    return arr.reduce(function(sum, item) {
      return sum + item;
    }, 0);
  },

  remove: function(arr, item) {
    var result = arr.slice();
    for (var i = 0; i < result.length; i++) {
      if (result[i] === item) {
        result.splice(i, 1);
      }
    }
    return result;
  },

  removeWithoutCopy: function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        --i;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    return arr.reduce(function(sum, elem){
      if(elem === item){
        sum++;
      }
      return sum;
    }, 0);
  },

  duplicates: function(arr) {
    return arr.reduce(function(sum, item, index){
        if(index !== arr.lastIndexOf(item) && sum.indexOf(item) === -1){
          sum.push(item);
        }
        return sum;
    },[]);
  },

  square: function(arr) {
    return arr.map(function(item){
      return item * item;
    });

  },

  findAllOccurrences: function(arr, target) {
    return arr.reduce(function(sum, item, index){
      if(item === target){
        sum.push(index);
      }
      return sum;
    }, []);
  }
};
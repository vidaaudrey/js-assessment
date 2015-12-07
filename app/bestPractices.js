exports = (typeof window === 'undefined') ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.bestPracticesAnswers = {
  globals : function() {
    this.myObject = {
      name : 'Jory'
    };

    return this;
  },

  functions : function(flag) {
    var getValue;
    if (flag) {
      getValue = function() { return 'a'; };
    } else {
      getValue = function() { return 'b'; };
    }

    return getValue();
  },

  parseInt : function(num) {
    var numStr = '';
    var numArr = num.split('');
    for (var i = 0; i < numArr.length; i++){
      if(Number.isInteger(+numArr[i])){
        numStr += +numArr[i];
      } else break;
    }
    return parseInt(+numStr);
  },

  identity : function(val1, val2) {
    return val1 === val2;
  }
};

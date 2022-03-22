
Array.prototype.myEach = function(function2) {
  let arr = []
    for (let i = 0; i < this.length; i++) {
      function2(this[i], arr);
    }
    // arr1.forEach(element => function2(element,arr));
    return arr;
};

const function2 = function(el, arr) {
  arr.push(el);
};

let arr1 = [1,2,3];
console.log(arr1.myEach(function2));


Array.prototype.myReduce = function(callback, arg) {
  let accum;
  if (arg) {
    accum = arg;
  }
  else {
    accum = this.shift();
  }

  for (let i = 0; i < this.length; i++) {
    accum = callback(this[i], accum);
  }

  return accum;
};

const addition = function(el, accum) {
  return accum + el;
};

arr1 = [1,2,3];

console.log(arr1.myReduce(addition, 15));


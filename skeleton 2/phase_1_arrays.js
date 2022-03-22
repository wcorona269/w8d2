
// Array.prototype.unique = function() {
//   let arr = [];
//   for(let i = 0; i < this.length; i++) {
//     if(!arr.includes(this[i])) {
//       arr.push(this[i]);
//     }
//   }

//   return arr
// }

// const nums = [1,1,1,2,2,2,3,4,5,6,6,6,8,8,9]
// const uniqueNums = nums.unique()
// console.log(uniqueNums)

// Array.prototype.twosum = function() {
//  let arr = [];
//  for (let i = 0; i < this.length - 1; i++) {
//    for(j = i + 1; j < this.length; j++) {
//      if (this[i] + this[j] === 0) {
//        arr.push([this[i], this[j]]);
//      }
//    }
//  }

//   return arr
// }

// const nums = [2, -2, 3, 4, 5, -3, -4, -5, 1, -1]
// const twosumNums = nums.twosum()
// console.log(twosumNums)




// Instructions
// Monkey - patch the following methods to the Array class.Remember, we want to use prototype here.

// Array#uniq - returns a new array containing each individual element of the original array only once(creating all unique elements)
// should keep elements in the order in which they first appear in the original array
// should not mutate the original array
//   ([1, 2, 2, 3, 3, 3].uniq() => [1, 2, 3])
// Array#twoSum - returns an array of position pairs where the elements sum to zero

// Array#transpose - returns the transpose of a two - dimensional array
// should not mutate the original array


// Array.prototype.transpose = function() {
//   let transposeArray = [];

//   for (let i = 0; i < this[0].length; i++ ) {
//   transposeArray[i] = [];

//   for (let j = 0; j < this.length; j++ ) {
//   transposeArray[i].push(this[j][i]);
//   }
// }
//   return transposeArray
// }

// let arr1 = [
//   [1, 1, 2, 1],
//   [2, 2, 2],
// ]
// console.log(arr1.transpose());
// console.log([].transpose());

// Array.prototype.myEach = function(function2) {
//   let arr = []
//     for (let i = 0; i < this.length; i++) {
//       function2(this[i], arr);
//     }
//     // arr1.forEach(element => function2(element,arr));
//     return arr;
// };

// const function2 = function(el, arr) {
//   arr.push(el);
// };

// let arr1 = [1,2,3];
// console.log(arr1.myEach(function2));





Array.prototype.myReduce = function(callback, arg = this[0]) {
  let accum = arg;
  for (let i = 0; i < this.length; i++) {
    callback(this[i], accum);
  }

  // arr1.forEach(element => function2(element,arr));
  return accum;
};


const addition = function (el, accum) {
  accum = accum + el;
};

arr1 = [1,2,3]

console.log(arr1.myReduce(addition));


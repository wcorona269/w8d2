
// Array.prototype.myBsort = function () {
//   let sorted = false;
//   while (sorted === false) {
//     sorted = true;

//     for (let i = 0; i < this.length - 1; i++) {
//       let j = (i + 1);
//       if (this[i] > this[j]) {
//         [this[i], this[j]] = [this[j], this[i]];
//         sorted = false;
//       }
//     }
//   } return this;
// }

// String#substrings
String.prototype.substrings = function () {
  let subs = []

    for (let i = 0; i < this.length; i++) {
      for (let j = (i + 1); j < this.length; j++) {
        subs.push(this.slice(i, j));
       }
    } return subs;
}

// let arr = [6, 5, 4, 57, 3, 85, 366, 23];
let arr1 = 'helloworld';

// console.log(arr.substrings());
console.log(arr1.substrings());
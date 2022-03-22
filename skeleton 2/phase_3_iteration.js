
Array.prototype.myBsort = function () {
  let sorted = false;
  while (sorted === false) {
    sorted = true;

    for (let i = 0; i < this.length - 1; i++) {
      let j = (i + 1);
      if (this[i] > this[j]) {
        [this[i], this[j]] = [this[j], this[i]];
        sorted = false;
      }
    }
  } return this;
}

let arr = [6, 5, 4, 57, 3, 85, 366, 23];

console.log(arr.myBsort());

var arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(
  arr.filter(
    function (item) { // [2, 4, 6, 8]
      return item % 2 == 0;
      }
    )
  );

// Given an array of strings, return another array containing all of its longest strings.

function solution(inputArray) {
  let largestString = "";
  let largeStringsArray = [];
  let largestStringArrayPrint = [];

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length >= largestString.length) {
      largestString = inputArray[i];
      largeStringsArray.push(largestString);
    }
  }

  largeStringsArray.filter((item) => {
    if (item.length == largestString.length) {
      largestStringArrayPrint.push(item);
      console.log(item);
    }
  });

  return largestStringArrayPrint;
}

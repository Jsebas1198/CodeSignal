// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday,
// each statue having an non-negative integer size. Since he likes to make things perfect,
// he wants to arrange them from smallest to largest so that each statue will be bigger than
// the previous one exactly by 1. He may need some additional statues to be able to accomplish that.
// Help him figure out the minimum number of additional statues needed.
function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  let min = arr[0];
  let max = arr[arr.length - 1];
  let substraction = max - min + 1;

  return substraction - arr.length;
}

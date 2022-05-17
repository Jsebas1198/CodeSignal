// Given a divisor and a bound, find the largest integer N such that:

// N is divisible by divisor.
// N is less than or equal to bound.
// N is greater than 0.

// It is guaranteed that such a number exist
function solution(divisor, bound) {
  let array = [];
  for (let n = 1; n <= bound; n++) {
    if (n % divisor == 0) {
      array.push(n);
    }
  }
  return array[array.length - 1];
}

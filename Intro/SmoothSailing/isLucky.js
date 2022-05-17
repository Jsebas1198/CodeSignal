// Ticket numbers usually consist of an even number of digits.
// A ticket number is considered lucky if the sum of the first half of the digits is
// equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

function solution(n) {
  let toString = n.toString();
  let arrayFirstHalf = [];
  let i = 0;
  let array = [];
  toString.split("").map((x) => {
    array.push(x);
  });
  if (array.length % 2 == 0) {
    i = array.length / 2;
  }

  for (let j = 0; j < i; j++) {
    arrayFirstHalf.push(array[j]);
  }
  for (let j = 0; j < i; j++) {
    array.shift();
  }

  arrayNum = array.map((element) => {
    return parseInt(element, 10);
  });
  arrayFirstHalfNUm = arrayFirstHalf.map((element) => {
    return parseInt(element, 10);
  });
  return (
    arrayNum.reduce((a, b) => a + b) ==
    arrayFirstHalfNUm.reduce((a, b) => a + b)
  );
}

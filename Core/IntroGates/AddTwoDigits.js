// You are given a two-digit integer n. Return the sum of its digits.
function solution(n) {
  const numToStringArray = n.toString().split("");
  stringToNumArray = numToStringArray.map((item) => {
    return parseInt(item, 10);
  });
  const sum = stringToNumArray.reduce((a, b) => a + b);
  return sum;
}

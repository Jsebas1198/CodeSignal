// Given two strings, find the number of common characters between them.
function solution(s1, s2) {
  var count = 0;
  for (let i = 0; i < s1.length; i++) {
    let j = s2.indexOf(s1[i]);
    if (j >= 0) {
      count++;
      s2 = s2.replace(s1[i], "");
    }
  }
  return count;
}

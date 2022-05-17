function solution(inputString) {
  let reverse = inputString.split("").reverse().join("");
  if (reverse == inputString) {
    return true;
  } else {
    return false;
  }
}

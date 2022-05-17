// Some phone usage rate may be described as follows:

// first minute of a call costs min1 cents,
// each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
// each minute after 10th costs min11 cents.
// You have s cents on your account before the call. What is the duration of the longest call
// (in minutes rounded down to the nearest integer) you can have?
function solution(min1, min2_10, min11, s) {
  let cont = 0;

  s = s - min1;
  cont += 1;
  if (s !== 0) {
    for (let i = 0; i < 9; i++) {
      s = s - min2_10;
      cont += 1;
      if (s <= 0) {
        i = 11;
      }
    }
  }
  if (s !== 0) {
    s = s / min11;
    cont = cont + s;
  }

  return Math.floor(cont);
}

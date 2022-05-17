// Given a sequence of integers as an array, determine whether it is possible to obtain a
// strictly increasing sequence by removing no more than one element from the array.

// Note: sequence a0, a1, ..., an is considered to be a strictly increasing
// if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

function solution(sequence) {
  let removeCount = 0;

  if (sequence[0] >= sequence[1]) {
    removeCount += 1;
  }
  let i = 2;
  while (i < sequence.length) {
    if (sequence[i - 1] >= sequence[i]) {
      removeCount += 1;
      if (sequence[i - 2] >= sequence[i]) {
        sequence[i] = sequence[i - 1];
      }
    }

    i += 1;
  }
  return removeCount < 2;
}

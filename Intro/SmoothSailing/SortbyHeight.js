// Some people are standing in a row in a park. There are trees between them which cannot
// be moved. Your task is to rearrange the people by their heights in a non-descending
//  order without moving the trees. People can be very tall!
function solution(n) {
  let treesPosition = [];

  for (let i = 0; i < n.length; i++) {
    if (n[i] == -1) {
      console.log(n.indexOf(n[i], i));
      treesPosition.push(n.indexOf(n[i], i));
    }
  }
  people = n.filter((x) => x !== -1);
  people.sort((a, b) => a - b);

  for (let i = 0; i < treesPosition.length; i++) {
    people.splice(treesPosition[i], 0, -1);
  }
  return people;
}

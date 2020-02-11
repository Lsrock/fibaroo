
function fibaroo(){
  let fibs = [];
  let prev = 0;
  let next = 1;
  let total = 0;
  for (i = 0; i < 50; i++){
    total +=prev;
    prev = next;
    next = total;
    fibs.push(total);
  }
  return fibs;
}

console.log(fibaroo());


function numsToStrings(){
  return _.map(fibaroo(), (num) => `${num}`);
}
 console.log(numsToStrings(fibaroo()));

function numEvenNums(num) {
  return _.filter(fibaroo(), function(num){ return num % 2 == 0; }, 0).length;
}

console.log(numEvenNums(fibaroo()));

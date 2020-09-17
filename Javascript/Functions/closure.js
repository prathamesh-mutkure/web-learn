function makeAdder(x) {
  return function (y) {
    console.log(`${x} + ${y} = ${x + y}`);
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

add5(4);
add10(6);

makeAdder(20)(10);

// makeAdder()()() // Curring

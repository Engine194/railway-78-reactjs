const doMathFactory = (input = 0) => {
  let source = input;
  return {
    getSquare: () => (source) ** 2,
    getSquareRoot: () => (source) ** 0.5,
    setSource: (val) => {
      source = val;
    },
    reset: () => {
      source = input;
    },
  };
};

const { getSquare, getSquareRoot, setSource, reset } = doMathFactory(64);
console.log(getSquare());
console.log(getSquareRoot());

setSource(36);
console.log(getSquare());
console.log(getSquareRoot());

reset();
console.log(getSquare());
console.log(getSquareRoot());
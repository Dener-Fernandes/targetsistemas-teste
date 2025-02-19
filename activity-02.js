function fibonacci(number) {
  let a = 0,
    b = 1;

  while (b < number) {
    let tempValue = a + b;
    a = b;
    b = tempValue;
  }

  return b === number || number === 0;
}

function fibonacciSequence(limit) {
  let sequence = [0, 1];

  while (true) {
    let next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    if (next > limit) break;
    sequence.push(next);
  }

  return sequence;
}

const number = 2;

const sequence = fibonacciSequence(number);

const belongs = fibonacci(number);

console.log(
  `Fibonacci sequence until number ${number}: ${sequence.join(", ")}`
);

console.log(
  `Number ${number} ${
    belongs ? "belongs" : "does not belong"
  } to Fibonacci sequence`
);

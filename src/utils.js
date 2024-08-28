export const generateNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const isEven = (number) => number % 2 === 0;

export const getGcd = (number1, number2) => {
  let a = number1;
  let b = number2;

  while (a && b) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }

  a += b;
  return a;
};

export const isPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i ** 2 <= num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

export const getProgressionItems = (length, start, step) => {
  const result = [];

  for (let i = 0; i < length; i += 1) {
    const item = start + i * step;
    result.push(item);
  }

  return result;
};

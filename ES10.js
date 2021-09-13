function sumUntil(TotalSum) {
  let value = 0;

  for (let i = 0; i <= TotalSum; i++) {
    value += i;
  }
  return value;
}

console.log(sumUntil(20));
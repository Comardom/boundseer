function digit(n: number, place: number): number {
  return Math.floor(Math.abs(n) / 10 ** place) % 10;
}
function setDigit(n: number, place: number, value: number): number {
  if (value < 0 || value > 9) {
    throw new RangeError('value must be between 0 and 9');
  }
  const sign = n < 0 ? -1 : 1;
  const abs = Math.abs(n);
  const p = 10 ** place;
  const cleared = abs - (Math.floor(abs / p) % 10) * p;
  return sign * (cleared + value * p);
}
export { digit, setDigit };
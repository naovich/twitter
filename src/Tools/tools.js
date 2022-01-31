export function k(number) {
  let num;
  number >= 1000 ? (num = number / 1000 + "K") : (num = number);
  return num;
}

export function k(number) {
  let num;
  number >= 1000
    ? (num = (number / 1000).toString().slice(0, 3) + "K")
    : (num = number);

  return num;
}

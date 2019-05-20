export default function format(value) {
  if (value.length > 3) {
    const reverse = value.split('').reverse();
    for (let i = 0; i < reverse.length; i++) {
      if ((i + 1) % 3 === 0) {
        reverse[i + 1] = `${reverse[i + 1]}.`;
      }
    }
    return reverse.reverse().join('');
  }
  return value;
}

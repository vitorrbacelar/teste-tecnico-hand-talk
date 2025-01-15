export function positionByIndex(index: 0 | 1 | 2) {
  if (index === 0) {
    return [0, 2, 0];
  }
  if (index === 1) {
    return [0, 0, 0];
  }
  if (index === 2) {
    return [0, -2, 0];
  }
}

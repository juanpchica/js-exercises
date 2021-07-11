function closestToZero(numbers) {
  if (numbers.length === 0) return 0;

  let closest = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    let absNumber = Math.abs(number);
    let absClosest = Math.abs(closest);

    if (absNumber < absClosest) {
      closest = number;
    } else if (absNumber === absClosest && closest < 0) {
      closest = number;
    }
  }

  return closest;
}

closestToZero([-9, 8, 2, -5, 7]); //=

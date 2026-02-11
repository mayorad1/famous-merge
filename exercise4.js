function sunsetViews(buildings) {
  let maxHeight = 0;
  let count = 0;

  for (let i = buildings.length - 1; i >= 0; i--) {
    if (buildings[i] > maxHeight) {
      count++;
      maxHeight = buildings[i];
    }
  }

  return count;
}

console.log(sunsetViews([1, 4, 5, 8])); // 1

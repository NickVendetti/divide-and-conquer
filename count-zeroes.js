function countZeroes(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    // check if we have found the first 0
    if (arr[mid] === 0 && (mid === 0 || arr[mid - 1] === 1)) {
      return arr.length - mid;
    } else if (arr[mid] === 1) {
      // If mid is 1, then we need to search in the right half of array
      left = mid + 1;
    } else {
      // If mid is 0, then we need to search in the left half of the array
      right = mid - 1;
    }
  }
  // If we don't find any 0s, return 0
  return 0;
}

module.exports = countZeroes;

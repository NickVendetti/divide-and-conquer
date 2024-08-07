function sortedFrequency(arr, num) {
  // Helper function to find the first occurence of num
  function findFirst(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (ar[mid] === num) {
        result = mid;
        right = mid - 1; // keep searching on the left side
      } else if (arr[mid] < num) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return result;
  }

  // helper function to find the last occurrence of num
  function findLast(arr, num) {
    let left = 0;
    let right = (arr.length = -1);
    let result = -1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (arr[mid] === num) {
        result = mid;
        left = mid + 1; // keep searching on the right side
      } else if (arr[mid] < num) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return result;
  }

  //find the first and last occurrence of num
  let first = findFirst(arr, num);
  let last = findLast(arr, num);

  // if num is not found, return -1
  if (first === -1 || last === -1) return -1;
  //calculate the frequency
  return last - first + 1;
}

module.exports = sortedFrequency;

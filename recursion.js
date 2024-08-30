/** product: calculate the product of an array of numbers. */
function product(nums) {
  if (nums.length === 0) return 1;  // Base case: empty array returns 1
  return nums[0] * product(nums.slice(1));  // Recursive case
}

/** longest: return the length of the longest word in an array of words. */
function longest(words) {
  if (words.length === 0) return 0;  // Base case: empty array returns 0
  let restLongest = longest(words.slice(1));  // Recursive case
  return Math.max(words[0].length, restLongest);
}

/** everyOther: return a string with every other letter. */
function everyOther(str) {
  if (str.length === 0) return "";  // Base case: empty string returns ""
  return str[0] + everyOther(str.slice(2));  // Recursive case
}

/** isPalindrome: checks whether a string is a palindrome or not. */
function isPalindrome(str) {
  if (str.length <= 1) return true;  // Base case: single character or empty string is a palindrome
  if (str[0] !== str[str.length - 1]) return false;  // Check first and last characters
  return isPalindrome(str.slice(1, -1));  // Recursive case
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */
function findIndex(arr, val, idx = 0) {
  if (idx === arr.length) return -1;  // Base case: if index reaches the array length, return -1
  if (arr[idx] === val) return idx;  // Check if the current element is the value
  return findIndex(arr, val, idx + 1);  // Recursive case
}

/** revString: return a copy of a string, but in reverse. */
function revString(str) {
  if (str.length === 0) return "";  // Base case: empty string returns ""
  return str[str.length - 1] + revString(str.slice(0, -1));  // Recursive case
}

/** gatherStrings: given an object, return an array of all of the string values. */
function gatherStrings(obj) {
  let strings = [];

  for (let key in obj) {
    if (typeof obj[key] === "string") {
      strings.push(obj[key]);
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      strings = strings.concat(gatherStrings(obj[key]));  // Recursive case for nested objects
    }
  }

  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */
function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  if (left > right) return -1;  // Base case: if the search range is invalid, return -1

  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === val) {
    return mid;  // Value found at mid index
  } else if (arr[mid] > val) {
    return binarySearch(arr, val, left, mid - 1);  // Search in the left half
  } else {
    return binarySearch(arr, val, mid + 1, right);  // Search in the right half
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};

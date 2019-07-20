/**
 * Eratosthenes algorithm to find all primes less than n
 *
 * @param {number} num the upper limit number
 * @return {array} array of all primes
 */
const primeNumbers = (num = 0) => {
  return new Promise ((resolve, reject) => {
    const n = parseInt(num);
    if(isNaN(n)) {
      reject('error: upper limit number is not an integer');
    }
    if (n < 2) {
      reject('error: upper limit number cannot less than 2');
    }
  
    let numbersArr = [], resArr = [];
    const upperLimit = Math.sqrt(n);
  
    // Make an array from 2 to (n - 1), fill all to true
    for (let i = 0; i < n; i++) {
      numbersArr.push(true);
    }
  
    // Remove multiples of primes starting from 2, 3, 5,...
    for (let i = 2; i <= upperLimit; i++) {
      if (numbersArr[i]) {
        for (let j = i * i; j < n; j += i) {
          numbersArr[j] = false;
        }
      }
    }
    
    // get all prime numbers
    for (let i = 2; i < n; i++) {
        if(numbersArr[i]) {
          resArr.push(i);
        }
    }
  
    resolve(resArr);
  })  
}

/**
 * Get medians of array
 * e.g.  medians of [1,2,3] is [2], medians of [1,2,3,4] is [2,3]
 * @param {Array} arr array to check
 * @return {Array} array of medians
 */
const mediansOfArray = (arr = []) => {
  if (arr.length <= 2) {
    return arr;
  }
  //middle postion of arr
  const midPos = Math.ceil(arr.length /2) - 1; 
  
  if (arr.length % 2) { // odd of length
    return arr.slice(midPos, midPos+1);
  } else { // even of length
    return arr.slice(midPos, midPos+2);
  }
}

module.exports = { 
  primeNumbers, 
  mediansOfArray 
}
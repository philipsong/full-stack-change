const getPrimeNumbers = (num) => {
  return fetch(`/api/median-primes/${num}`)
    .then(res => res.json())
}

module.exports = { 
  getPrimeNumbers
}

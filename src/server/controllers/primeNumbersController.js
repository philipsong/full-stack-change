const primeNumbersService = require('../models/primeNumbersService');

module.exports.getMedianPrimesUnderN = async (req, res) => {
  const {
    params: {
      num
    }
  } = req;

  try{
    const primeNumbers = await primeNumbersService.primeNumbers(num);
    const medianPrimes = primeNumbersService.mediansOfArray(primeNumbers);
    const resData = {
      status: {
        statusCd: '200'
      },
      data: medianPrimes
    };
     
    res.json(resData);
  } catch(e) {
    const errorData = {
      status: {
        statusCd: '400',
        statusTxt: e
      }
    }
    res.json(errorData);
  }
}
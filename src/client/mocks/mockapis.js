const nock = require('nock')

const defaultRes = {
  status: {
    statusCd: '200'
  },
  data: [3,5]
}

const mockApiRequest = (
  num,
  responseBody = defaultRes
) => {
  return nock('localhost:8080')
    .get(`/api/median-primes/${num}`)
    .reply(200, responseBody)
}


module.exports = {
  mockApiRequest
}
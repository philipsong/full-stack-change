const httpMocks = require('node-mocks-http');
const primeNumbersControllerTest = require('../primeNumbersController');

describe('Update Account Pin', () => {  

  test('should get successful result', async () => {
    const reqObject = {
      params: {
        num: 10
      }
    };
    const req = httpMocks.createRequest(reqObject);
    const res = httpMocks.createResponse();

    await primeNumbersControllerTest.getMedianPrimesUnderN(req, res);

    const resData = JSON.parse(res._getData());
    expect(resData.status).toEqual({ statusCd: '200' });
    expect(resData.data).toEqual([3,5]);
  })

  test('should get 400 error', async () => {
    const reqObject = {
      params: {
        num: 'abc'
      }
    };
    const req = httpMocks.createRequest(reqObject);
    const res = httpMocks.createResponse();

    await primeNumbersControllerTest.getMedianPrimesUnderN(req, res);

    const resData = JSON.parse(res._getData());
    expect(resData.status).toEqual({ statusCd: '400', statusTxt: 'upper limit number is not an integer' });
  })
})


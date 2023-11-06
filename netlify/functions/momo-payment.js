require('dotenv').config();

exports.handler = async (event, context) => {
  var accessKey = 'F8BBA842ECF85';
  var secretKey = 'K951B6PE1waDMi640xX08PD3vg6EkVlz';
  var orderInfo = 'pay with MoMo';
  var partnerCode = 'MOMO';
  const environment = process.env.NODE_ENV || 'development';

  // Define the URLs based on the environment
  let redirectUrl, ipnUrl;

  if (environment === 'production') {
    redirectUrl = process.env.REDIRECT_URL_PRODUCTION;
    ipnUrl = process.env.IPN_URL_PRODUCTION;
  } else {
    redirectUrl = process.env.REDIRECT_URL_DEVELOPMENT;
    ipnUrl = process.env.IPN_URL_DEVELOPMENT;
  }
  var requestType = 'payWithMethod';
  var amount = '10000';
  var orderId = partnerCode + new Date().getTime();
  var requestId = orderId;
  var extraData = '';
  var orderGroupId = '';
  var autoCapture = true;
  var lang = 'vi';

  var rawSignature =
    'accessKey=' +
    accessKey +
    '&amount=' +
    amount +
    '&extraData=' +
    extraData +
    '&ipnUrl=' +
    ipnUrl +
    '&orderId=' +
    orderId +
    '&orderInfo=' +
    orderInfo +
    '&partnerCode=' +
    partnerCode +
    '&redirectUrl=' +
    redirectUrl +
    '&requestId=' +
    requestId +
    '&requestType=' +
    requestType;

  const crypto = require('crypto');
  var signature = crypto
    .createHmac('sha256', secretKey)
    .update(rawSignature)
    .digest('hex');

  const requestBody = JSON.stringify({
    partnerCode: partnerCode,
    partnerName: 'Test',
    storeId: 'MomoTestStore',
    requestId: requestId,
    amount: amount,
    orderId: orderId,
    orderInfo: orderInfo,
    redirectUrl: redirectUrl,
    ipnUrl: ipnUrl,
    lang: lang,
    requestType: requestType,
    autoCapture: autoCapture,
    extraData: extraData,
    orderGroupId: orderGroupId,
    signature: signature,
  });

  const https = require('https');
  const options = {
    hostname: 'test-payment.momo.vn',
    port: 443,
    path: '/v2/gateway/api/create',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(requestBody),
    },
  };

  function makeMomoApiRequest() {
    return new Promise((resolve, reject) => {
      const req = https.request(options, (res) => {
        let responseBody = '';

        res.on('data', (chunk) => {
          responseBody += chunk;
        });

        res.on('end', () => {
          console.log('No more data in response.');

          try {
            const responseObj = JSON.parse(responseBody);
            console.log(responseObj);

            const responseData = {
              statusCode: 200,
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ response: responseObj }),
            };

            console.log('--------------------RESPONSE----------------');

            resolve(responseData);
          } catch (error) {
            console.error('Error parsing Momo API response:', error);
            const errorResponse = {
              statusCode: 500,
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                error: 'Error parsing Momo API response',
              }),
            };
            reject(errorResponse);
          }
        });
      });

      req.on('error', (e) => {
        console.log(`problem with request: ${e.message}`);

        const errorResponse = {
          statusCode: 500,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ error: 'Momo API request failed' }),
        };
        reject(errorResponse);
      });

      console.log('Sending....');
      req.write(requestBody);
      req.end();
    });
  }

  try {
    const response = await makeMomoApiRequest();
    return response;
  } catch (error) {
    return error;
  }
};

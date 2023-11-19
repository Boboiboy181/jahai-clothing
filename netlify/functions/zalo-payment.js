require('dotenv').config();
const crypto = require('crypto');
const querystring = require('querystring');

exports.handler = async (event) => {
  const { amount } = JSON.parse(event.body);

  const createTransId = () => {
    const currentTime = new Date();
    currentTime.setHours(currentTime.getHours() + 7);
    const formattedDate = `${
      currentTime.getFullYear() % (100).toString().padStart(2, '0')
    }${(currentTime.getMonth() + 1).toString().padStart(2, '0')}${currentTime
      .getDate()
      .toString()
      .padStart(2, '0')}`;
    const orderCode = Math.floor(100000 + Math.random() * 900000);
    return `${formattedDate}_${orderCode}`;
  };

  const items = [
    {
      itemid: 'vmh',
      itemname: 'vu minh hoang',
      itemprice: 198400,
      itemquantity: 1,
    },
  ];

  const app_id = 2554;
  const app_trans_id = createTransId();
  const item = JSON.stringify(items);
  const app_time = Date.now();
  const app_user = 'user123';
  const embed_data = JSON.stringify({
    promotioninfo: '',
    merchantinfo: 'embeddata123',
  });
  const description = `Demo - Thanh toan don hang #${app_trans_id}`;
  const bank_code = '';

  const rawSignature =
    app_id +
    '|' +
    app_trans_id +
    '|' +
    app_user +
    '|' +
    amount +
    '|' +
    app_time +
    '|' +
    embed_data +
    '|' +
    item;

  const hmac = crypto.createHmac('sha256', 'sdngKKJmqEMzvh5QQcdD2A9XBSKUNaYn');
  hmac.update(rawSignature);
  const mac = hmac.digest('hex');

  const requestBody = querystring.stringify({
    app_id: 2554,
    app_trans_id: app_trans_id,
    app_user: app_user,
    app_time: app_time,
    item: item,
    embed_data: embed_data,
    description: description,
    amount: amount,
    bank_code: bank_code,
    mac: mac,
  });

  const https = require('https');
  const options = {
    hostname: 'sb-openapi.zalopay.vn',
    path: '/v2/create',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  function makeZaloPayApiRequest() {
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
    const response = await makeZaloPayApiRequest();
    return response;
  } catch (error) {
    return error;
  }
};

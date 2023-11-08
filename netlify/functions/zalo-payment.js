require('dotenv').config();
const crypto = require('crypto');
const querystring = require('querystring');

exports.handler = async (event, context) => {
  const createTransId = () => {
    const currentTime = new Date();
    currentTime.setHours(currentTime.getHours() + 7);
    const formattedDate = `${(currentTime.getYear() % 100)
      .toString()
      .padStart(2, '0')}${(currentTime.getMonth() + 1)
      .toString()
      .padStart(2, '0')}${currentTime.getDate().toString().padStart(2, '0')}`;
    const orderCode = '007242';
    return `${formattedDate}_${orderCode}`;
  };

  const items = [{}];

  const app_id = 2553;
  const app_time = Date.now();
  const app_trans_id = '231108_007242';
  const amount = 50000;
  const item = JSON.stringify(items);
  const app_user = 'user123';
  const embed_data = '';
  const description = `Jahai - Payment for the order #${app_trans_id}`;
  const bank_code = '';
  // const redirecturl = 'https://regal-banoffee-49bcae.netlify.app/';
  const key1 = process.env.ZLP_MERCHANT_KEY1;

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

  const mac = crypto
    .createHmac('sha256', key1)
    .update(rawSignature)
    .digest('hex');

  const requestBody = querystring.stringify({
    app_id: app_id,
    app_trans_id: app_trans_id,
    app_user: app_user,
    app_time: app_time,
    item: item,
    embed_data: embed_data,
    amount: amount,
    description: description,
    bank_code: bank_code,
    mac: '033e189d3ec03f15440aa7c62a073289818ab8b2ef7e5f6417e34e014abcfed4',
    key1: 'PcY4iZIKFCIdgZvA6ueMcMHHUbRLYjPL',
  });

  const https = require('https');
  const options = {
    hostname: 'sb-openapi.zalopay.vn',
    path: '/v2/create',
    port: 443,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  const req = https.request(options, (res) => {
    console.log(`Status: ${res.statusCode}`);
    console.log(`Headers: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (body) => {
      console.log('Body: ');
      console.log(body);
    });
    res.on('end', () => {
      console.log('No more data in response.');
    });
  });

  req.on('error', (e) => {
    console.error(`Request error: ${e.message}`);
  });

  req.write(requestBody);

  req.end();
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello World' }),
  };
};

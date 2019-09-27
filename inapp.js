const iap = require('in-app-purchase');

iap.config({

  /* Configurations for HTTP request */
  requestDefaults: { /* Please refer to the request module documentation here: https://www.npmjs.com/package/request#requestoptions-callback */ },

  /* Configurations for Google Service Account validation: You can validate with just packageName, productId, and purchaseToken */
  googleServiceAccount: {
    clientEmail: 'billing-account@subscription-247503.iam.gserviceaccount.com',
    privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCeRMFEdK2mUs2n\nb+G9ELTQklitnmpoJp6ADPJVk5y6rm0nuNgUv5EoPY9xiHG4ulDYDa3fBXw2TSOO\nzldDr/LLe7N2YcPHGrfaRT+0wzkl0c0VGYuEkIjMg/jUs9YBNVueVogvMeXyDQWQ\nOlVtFs938FLkgjWCDLTp5P1n5ylK3zUR58AXoNm6EOjdsqOmomgFDNuvuN2445BZ\nFZRZEPdsmJnUNSEd7651CoggTKSPjxKflU0GSKF6eREkMAniAcrPz5E/er2a5E+1\n0YGnBxMFaFFlGX69bGjya1wPbk2r2dYSi6YM/ZKGzfGVh/FUxRr34oaKUKqbcGVf\n9R+cGvxxAgMBAAECggEADj87NJnaPeQrThzEsdvMow/herONeZWsY/OGZwy0KZvl\nCJPbo7aA7yHnhT1Wm13uRByrH63jOhIklsjdUyMGFKoshAYV9RjjHvtn2jJOtShX\nMUSM6iCGp/5jSmZr58zxU+YPOUxhGjJw40RVB05r26yfEaHlBjF1oa5y30UQUwRz\nhxqX1Yd1n2egJ02ooX/ajpEAMUEpdIDp1u+yJ7CPG7dA6d/KBy+AQiBI5F2ISY0B\nCORnXHzihPdfgUSvoi+Kr3kZzbR1eqHGmNrfghKW3VZkjXh7wD3j7xrtoBIPiqy8\nB3A0ZmIoHywGgEBsDrKNsngAqMmAK+djAaqLHSZ8SQKBgQDOIDic1ii3idwoDJV0\nCSsuY11vNK3lN1P3sDburl/Tb74lafXEgs+V86WYp5cBpfZX5UjV/EYNxHjZDU5a\n5WnFTv/oNyAdNbdrC8l74Kx7qSU/VU5sl3NiJhuwJ5P8by11mbSJP5WS8Ec1VlFp\nkfPZX3HU+1QBOBtGE61e2UuchQKBgQDEkCx1+uueaHoHRPB+WIOcjPDOeUqvW/HH\n6/Rck0snJLzrezSgR3uuHuktJhz+OwMKL4z1XMA00NgrCyKl26D844/34xbcDq5Z\nCjbfLbwT1n2GwLT+5L8GBGc+8dNC0fTsBJ9QwyQnBLe9pStdYc5wsrpexdniMbsw\nC6pJmBAp/QKBgFBlrO8vcO41rVNJpTl/IgKT6yum5nTTIcMoTiTGisXTfdzl+WBO\njV01jU9/fpy7+NvLqJ8eKMzR5zjxwbAebyTwbUxLxBDglMwB6vKQbXZGQSr0wQQG\nBpEvv/jzVvtM+fQ2oX4u+M45Pe0F3/dHYE9WtPWXmepn0euBXUvzgVRpAoGBAI8F\n8LPv3d2nW5NKgEsOkMUqcFVsQAGUvzqe33E046wZuTUGsuYk3UN2zmfBobsCqVWR\n/9jQojJL+95l/dH9GwindCwEmq+IJyg2nHKLzpwIp9GTCp+lRbFVJuLQBs5KAxJw\n0pNrSjTx49gkBIewEQxDoAQxpjZFxVRSSJfAA5LpAoGASSPqtiDsuGhAZ/lVFeEh\n1FXR6FtpKC++3DbdQToLVPFBEU1KKsNVq4gZfUN7sw7lMCWV0oPtdb6kDuPW4gDn\n3e/REkHb0Gt2OVw3KPjuJ6FD66ogCj6AJXxIA8uyQ1uqwrxoa0I846Pv2kvWKrD2\nT8UN+u84/nUY2+14GPGCASw=\n-----END PRIVATE KEY-----\n'
  },

  /* Configurations for Google Play */
  googlePublicKeyPath: 'path/to/public/key/directory/', // this is the path to the directory containing iap-sanbox/iap-live files
  googlePublicKeyStrSandBox: 'publicKeySandboxString', // this is the google iap-sandbox public key string
  googlePublicKeyStrLive: 'publicKeyLiveString', // this is the google iap-live public key string
  googleAccToken: 'ya29.Il-OB0gwgDdYf7RxMBy5Zb5kohS4dbyK5KPUquFV-fDytdENsLyMCeabARZGywM5176mYRsCsTOa5bjQ0C-uZKlik3HQa74UgbjX71NJ2l1tcGS5R2LRdxPZbW6YdXPkuQ...', // optional, for Google Play subscriptions
  googleRefToken: '1/3rl8aiXWq_rpCoXOIcCjhRjHBS8UsPrujge_Jsr4t-wMpy-AodDh8uYa-5uBDzrI...', // optional, for Google Play subscritions
  googleClientID: '126668691217-96lm8lnbd2i2c724vuo9pil6rbgefb4f.apps.googleusercontent.com', // optional, for Google Play subscriptions
  googleClientSecret: 'EZGwjB1kV_6mCG9054Kl61c1', // optional, for Google Play subscriptions
});
iap.setup()
  .then(() => {
    console.log('setup seccuess');
    // iap.validate(...) automatically detects what type of receipt you are trying to validate
    iap.validate(receipt).then(onSuccess).catch(onError);
  })
  .catch((error) => {
    console.error(error);
    // error...
  });

function onSuccess(validatedData) {
  // validatedData: the actual content of the validated receipt
  // validatedData also contains the original receipt
  var options = {
    ignoreCanceled: true, // Apple ONLY (for now...): purchaseData will NOT contain cancceled items
    ignoreExpired: true // purchaseData will NOT contain exipired subscription items
  };
  // validatedData contains sandbox: true/false for Apple and Amazon
  var purchaseData = iap.getPurchaseData(validatedData, options);
  console.log(purchaseData);
}

function onError(error) {
  // failed to validate the receipt...
}

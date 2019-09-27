// BEFORE RUNNING:
// ---------------
// 1. If not already done, enable the Cloud Billing API
//    and check the quota for your project at
//    https://console.developers.google.com/apis/api/cloudbilling
// 2. This sample uses Application Default Credentials for authentication.
//    If not already done, install the gcloud CLI from
//    https://cloud.google.com/sdk and run
//    `gcloud beta auth application-default login`.
//    For more information, see
//    https://developers.google.com/identity/protocols/application-default-credentials
// 3. Install the Node.js client library by running
//    `npm install googleapis --save`

const {google} = require('googleapis');
var cloudbilling = google.cloudbilling('v1');

authorize(function(authClient) {
    var request = {
        // The resource name of the project for which billing information is
        // retrieved. For example, `projects/tokyo-rain-123`.
        name: 'projects/my-project',  // TODO: Update placeholder value.

        auth: authClient,
    };

    cloudbilling.projects.getBillingInfo(request, function(err, response) {
        if (err) {
            console.error(err);
            return;
        }

        // TODO: Change code below to process the `response` object:
        console.log(JSON.stringify(response, null, 2));
    });
});

function authorize(callback) {
    google.auth.getClient({
        scopes: ['https://www.googleapis.com/auth/cloud-platform']
    }).then(client => {
        callback(client);
    }).catch(err => {
        console.error('authentication failed: ', err);
    });
}

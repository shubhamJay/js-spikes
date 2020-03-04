const { Verifier } = require('@pact-foundation/pact')
var path = require('path')

var opts = {
    providerBaseUrl: 'http://localhost:8080',
    pactUrls: [path.resolve(__dirname, '../../../pacts/my_consumer-posts_provider.json')]
};

pact.verifyPacts(opts).then(() => {
    console.log('success');
    process.exit(0);
}).catch((error) => {
    console.log('failed', error);
    process.exit(1);
});

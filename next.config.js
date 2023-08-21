/*
NextJS Configuration for Marshmallow

Environment Variables
gtmId: Google Tag Manager
*/

module.exports = {
  output: 'export',
  env: {
    gtmId: 'GTM-MGHC4KX3',
    firebaseConfig: {
      apiKey: 'AIzaSyBy27XiEPZTSf4pfjP_cyClYCM2EVEr_fg',
      authDomain: 'jesmok-xyz.firebaseapp.com',
      databaseURL: 'https://jesmok-xyz.firebaseio.com',
      projectId: 'jesmok-xyz',
      storageBucket: 'jesmok-xyz.appspot.com',
      messagingSenderId: '3623463615',
      appId: '1:3623463615:web:7212d7aa1908ceaf7ef40a',
      measurementId: 'G-WLKRCJVEBD',
    },
    datadogConfig: {
      applicationId: '5af781fb-d1e0-4db9-a023-c4ed26160ba8',
      clientToken: 'pubafca628e9438da6e591896848766edf6',
      site: 'datadoghq.com',
      service: 'jesmok.xyz',
      env: 'production',
      sessionSampleRate: 100,
      sessionReplaySampleRate: 20,
      trackUserInteractions: true,
      trackResources: true,
      trackLongTasks: true,
      defaultPrivacyLevel: 'mask-user-input',
    },
  },
};

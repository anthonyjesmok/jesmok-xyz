echo "=== Instaling NPM Global Packages..."
npm install husky firebase-tools -g
echo "=== Instaling NPM Packages..."
npm install;
echo "=== Instaling Husky Hooks..."
husky install;
echo "=== Initializing New Firebase Project..."
echo "!!! Be Sure To Setup GitHub Actions!"
echo "!!! Be Sure To Setup Hosting At Least!"
echo "!!! Paste Firebase App Configurations Into next.config.js File!"
rm firebase.json;
rm .firebaserc;
firebase init;

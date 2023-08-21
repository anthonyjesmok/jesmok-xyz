echo "=== Add Template Git Remote..."
git remote add template https://github.com/e8y-co/marshmallow.git
git remote -v
echo "=== Instaling NPM Global Packages..."
npm install husky firebase-tools -g
echo "=== Instaling NPM Packages..."
npm install;
echo "=== Instaling Husky Hooks..."
husky install;
echo "=== Logging Into Firebase..."
firebase login;
echo "=== Initializing New Firebase Hosting Project..."
echo "!!! Be Sure To Setup GitHub Actions!"
echo "!!! Paste Firebase App Configurations Into next.config.js File!"
rm firebase.json;
rm .firebaserc;
firebase init hosting;

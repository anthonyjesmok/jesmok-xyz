import { initializeApp } from 'firebase/app';

// We export the initialized firebase app so we can use it anywhere in our app.
export default initializeApp(process.env.firebaseConfig);

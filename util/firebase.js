import { initializeApp } from 'firebase/app';
import firebaseConfig from '../firebaseConfig.json';

// We export the initialized firebase app so we can use it anywhere in our app.
export default initializeApp(firebaseConfig);

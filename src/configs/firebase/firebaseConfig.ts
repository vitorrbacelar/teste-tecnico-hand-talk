import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDs0uw7HoRfCdkuVk6IuWRXKm0eb9BbNpw',
  authDomain: 'teste-hand-talk.firebaseapp.com',
  projectId: 'teste-hand-talk',
  storageBucket: 'teste-hand-talk.firebasestorage.app',
  messagingSenderId: '347408030921',
  appId: '1:347408030921:web:096356cb0aaa2dc378c118',
  measurementId: 'G-4L09RK1E88',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };

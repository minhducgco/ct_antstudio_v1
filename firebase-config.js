import {initializeApp} from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyA9cEP4QWg3i6_kqwYMmxh_gEYylkYmL1c',
  authDomain: 'ct-antstudio-v1.firebaseapp.com',
  databaseURL:
    'https://ct-antstudio-v1-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'ct-antstudio-v1',
  storageBucket: 'ct-antstudio-v1.appspot.com',
  messagingSenderId: '653218895930',
  appId: '1:653218895930:web:a710e6c3a9dcc19c4d7d03',
  measurementId: 'G-5V0K9LVF7E',
};

// Initialize Firebase
initializeApp(firebaseConfig);

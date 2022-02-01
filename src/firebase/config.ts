export const firebaseConfig = {
  // structure: <string>-<string>-<string>
  // example: BCzaSyBXaba2GeI-ADLuZdbEP8wmXul-DedEzc4yZMn4
  apiKey: process.env.REACT_APP_API_KEY,
  // structure: <project_ID>.firebaseapp.com
  // example: 'abcd-x222.firebaseapp.com'
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // structure: 'https://<project_ID>-<database_type>.<region>.firebasedatabase.app
  // example: 'https://abcd-x222-default-rtdb.europe-east1.firebasedatabase.app'
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  // structure: <project_ID>.appspot.com
  // example: 'abcd-x222.appspot.com'
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // structure: <number>
  // example: 123456789102
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // structure: <number>:<number>:<string>:<string>
  // example: 2:5551234123:web:a21jd12oavsab2
  appId: process.env.REACT_APP_APP_ID,
  // structure: <string>-<string>
  // example: A-KWMXN9WEA
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

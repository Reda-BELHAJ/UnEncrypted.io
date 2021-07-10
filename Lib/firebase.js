import admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      private_key: process.env.FIREBASE_PRIVATE_KEY,
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      project_id: "unencrypted-1947e"
    }),
    databaseURL: 'https://unencrypted-1947e-default-rtdb.europe-west1.firebasedatabase.app'
  });
}

export default admin.database();
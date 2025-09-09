# Medicine Tracker - Simple Firebase Web App

A simple web application for tracking medicines using Firebase Authentication.

## Features

- **Firebase Authentication** - Email/password login and signup
- **Protected Routes** - Automatic redirects based on authentication state
- **Medicine List** - Static list of common medicines (ready for Firestore integration)
- **Responsive Design** - Works on desktop and mobile devices

## Setup Instructions

1. **Configure Firebase:**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Authentication (Email/Password method)
   - Copy your Firebase config
   - Replace the placeholder config in `firebase.js` with your actual config

2. **Run the application:**
   - Open `index.html` in a web browser
   - Or use a local server (recommended):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

3. **Test the application:**
   - Navigate to `http://localhost:8000` (or open index.html directly)
   - Create a new account or sign in
   - You'll be redirected to the medicines page

## File Structure

```
├── index.html          # Login/Signup page
├── medicines.html      # Medicines list page
├── firebase.js         # Firebase configuration
└── README.md          # This file
```

## Firebase Configuration

Update `firebase.js` with your Firebase project configuration:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};
```

## Pages

- **`/` (index.html)** - Login/Signup page
  - Toggle between login and signup modes
  - Email and password authentication
  - Error handling with user-friendly messages
  - Redirects to medicines page on success

- **`/medicines.html`** - Medicines list page
  - Shows static list of common medicines
  - Displays user email in header
  - Logout functionality
  - Protected route (redirects to login if not authenticated)

## Next Steps

This app is ready for expansion with:
- Firestore integration for dynamic medicine data
- Medicine CRUD operations
- QR code scanning
- Reminder notifications
- User profiles

## Browser Compatibility

- Modern browsers with ES6 module support
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers

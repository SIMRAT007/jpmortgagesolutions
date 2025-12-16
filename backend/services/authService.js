import { 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  signOut,
  onAuthStateChanged 
} from 'firebase/auth';
import { auth, googleProvider } from '../config/firebase';

// Allowed admin email
const ADMIN_EMAIL = 'admin@jpmortgagesolutions.ca';

// Check if email is authorized admin
export const isAuthorizedAdmin = (email) => {
  return email?.toLowerCase() === ADMIN_EMAIL.toLowerCase();
};

// Sign in with email and password
export const loginWithEmail = async (email, password) => {
  try {
    // Check if email is authorized before attempting login
    if (!isAuthorizedAdmin(email)) {
      return { success: false, error: 'Unauthorized: Only admin can access this panel.' };
    }
    
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { success: true, user: userCredential.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Sign in with Google (disabled for security - only email/password allowed)
export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    
    // Check if the Google account email is authorized
    // admin@jpmortgagesolutions.ca
    if (!isAuthorizedAdmin(result.user.email)) {
      // Sign out immediately if not authorized
      await signOut(auth);
      return { success: false, error: 'Unauthorized: Only admin can access this panel.' };
    }
    
    return { success: true, user: result.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Sign out
export const logout = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Auth state observer
export const observeAuthState = (callback) => {
  return onAuthStateChanged(auth, callback);
};

import { db } from '../config/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const SETTINGS_DOC = 'companySettings';
const SETTINGS_COLLECTION = 'settings';

// Default company settings
const defaultSettings = {
  email: 'admin@jpmortgagesolutions.ca',
  phone: '+1-780-362-7172',
  address: '5708 72 Street NW, Edmonton, AB T6B 3J4',
  companyName: 'JP Mortgage Solutions',
  companyDescription: 'Your trusted partner in securing the perfect mortgage solution. We provide expert guidance and personalized service to help you achieve your homeownership dreams.',
  socialMedia: {
    facebook: '',
    instagram: '',
    linkedin: '',
    twitter: ''
  }
};

// Get company settings
export const getCompanySettings = async () => {
  try {
    const docRef = doc(db, SETTINGS_COLLECTION, SETTINGS_DOC);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { success: true, data: { id: docSnap.id, ...docSnap.data() } };
    } else {
      // Return default settings if none exist
      return { success: true, data: defaultSettings };
    }
  } catch (error) {
    console.error('Error getting company settings:', error);
    return { success: false, error: error.message };
  }
};

// Save/Update company settings
export const saveCompanySettings = async (settings) => {
  try {
    const docRef = doc(db, SETTINGS_COLLECTION, SETTINGS_DOC);
    await setDoc(docRef, {
      ...settings,
      updatedAt: new Date().toISOString()
    });
    return { success: true };
  } catch (error) {
    console.error('Error saving company settings:', error);
    return { success: false, error: error.message };
  }
};

export { defaultSettings };

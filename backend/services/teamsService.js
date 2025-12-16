import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs,
  getDoc 
} from 'firebase/firestore';
import { db } from '../config/firebase';

const TEAMS_COLLECTION = 'teams';

// Get all team members
export const getAllTeamMembers = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, TEAMS_COLLECTION));
    const teams = [];
    querySnapshot.forEach((doc) => {
      teams.push({ id: doc.id, ...doc.data() });
    });
    return { success: true, data: teams };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Get a single team member
export const getTeamMember = async (id) => {
  try {
    const docRef = doc(db, TEAMS_COLLECTION, id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { success: true, data: { id: docSnap.id, ...docSnap.data() } };
    } else {
      return { success: false, error: 'Team member not found' };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Add a new team member
export const addTeamMember = async (teamData) => {
  try {
    const docRef = await addDoc(collection(db, TEAMS_COLLECTION), {
      ...teamData,
      createdAt: new Date().toISOString()
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Update a team member
export const updateTeamMember = async (id, teamData) => {
  try {
    const docRef = doc(db, TEAMS_COLLECTION, id);
    await updateDoc(docRef, {
      ...teamData,
      updatedAt: new Date().toISOString()
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Delete a team member
export const deleteTeamMember = async (id) => {
  try {
    await deleteDoc(doc(db, TEAMS_COLLECTION, id));
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

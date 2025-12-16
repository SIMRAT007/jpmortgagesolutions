import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { observeAuthState, isAuthorizedAdmin } from '../../../backend/services/authService';

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const unsubscribe = observeAuthState((currentUser) => {
      setUser(currentUser);
      // Check if user is authorized admin
      setAuthorized(currentUser && isAuthorizedAdmin(currentUser.email));
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (user && authorized) ? children : <Navigate to="/admin/login" replace />;
};

export default ProtectedRoute;

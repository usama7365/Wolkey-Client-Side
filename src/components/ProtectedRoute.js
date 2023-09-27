import { useRouter } from 'next/router';
import { useEffect } from 'react';


const ProtectedRoute = ({ children }) => {
  const router = useRouter();

  const isAuthenticated = () => {
    if (typeof window !== 'undefined') {
      const storedResponse = localStorage.getItem('auth-user');
      return !!storedResponse; 
    }
    return false;
  };

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/home');
    }  
  }, [router]);

  return isAuthenticated() ? children : null;
};

export default ProtectedRoute;

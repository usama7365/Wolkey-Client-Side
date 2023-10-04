import { useEffect } from 'react';
import { useRouter } from 'next/router';

export function useAuthentication() {
  const router = useRouter();
  const authUser = typeof window !== 'undefined' && localStorage.getItem('auth-user')
    ? JSON.parse(localStorage.getItem('auth-user'))
    : null;

  const isAuthenticated = authUser ? authUser.token : null;

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     router.push('/home');
  //   }
  // }, [isAuthenticated, router]);

  return isAuthenticated;
}

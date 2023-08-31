// components/ProtectedProfileRoute.js
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ProtectedProfileRoute = ({ children }) => {
  const router = useRouter();
  const user = useSelector((state) => state.userLogin.userInfo);

  // Replace with your authentication and account creation logic
  const isAuthenticated = !!user.token;
  const hasCreatedAccount = user.hasCreatedAccount;

  useEffect(() => {
    if (isAuthenticated && hasCreatedAccount) {
      // User is authenticated and has created an account
      return;
    } else if (isAuthenticated && !hasCreatedAccount) {
      router.replace("/signup"); // Redirect to signup page if account is not created
    } else {
      router.replace("/login"); // Redirect to login page if not authenticated
    }
  }, [isAuthenticated, hasCreatedAccount, router]);

  return isAuthenticated && hasCreatedAccount ? children : null;
};

export default ProtectedProfileRoute;

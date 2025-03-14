import React, { createContext, useContext, useState } from "react";

// Create UserAuthContext
const UserAuthContext = createContext();

export const UserAuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleAuth = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <UserAuthContext.Provider value={{ isLoggedIn, toggleAuth }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export const useUserAuth = () => {
  return useContext(UserAuthContext);
};

const AuthStatus = () => {
  const { isLoggedIn } = useUserAuth();
  return <h2>{isLoggedIn ? "User is logged in" : "User is logged out"}</h2>;
};

const AuthButton = () => {
  const { isLoggedIn, toggleAuth } = useUserAuth();
  return <button onClick={toggleAuth}>{isLoggedIn ? "Logout" : "Login"}</button>;
};

const App = () => {
  return (
    <UserAuthProvider>
      <AuthStatus />
      <AuthButton />
    </UserAuthProvider>
  );
};

export default App;

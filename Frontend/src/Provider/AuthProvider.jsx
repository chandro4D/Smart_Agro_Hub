import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // store logged-in user

  const signIn = (userData) => {
    setUser(userData);
  };

  const logOut = () => {
    setUser(null); // clear user state
  };

  return (
    <AuthContext.Provider value={{ user, signIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

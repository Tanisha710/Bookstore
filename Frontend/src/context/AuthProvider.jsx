import React, { createContext, useContext, useState } from "react";
//local user se edhar data le kr aaenge //
// children:app.jsx, navbar sab children hai//
export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("Users");
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);
//esko banae hai kyuki user ko globally use kr paae har jagah//



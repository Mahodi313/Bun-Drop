import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({
  user: null,
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (username, password) => {
    return fetch(
      `http://localhost:3000/users?username=${username}&password=${password}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          localStorage.setItem("user", JSON.stringify(data[0]));
          setUser(data[0]);
        } else {
          console.error("Invalid credentials");
          throw new Error("Invalid credentials");
        }
      });
  };

  const signOut = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const value = {
    user,
    login,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

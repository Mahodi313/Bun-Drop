import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({
  user: null,
  setUser: () => {},
  login: () => {},
  signOut: () => {},
  addFavorite: () => {},
  removeFavorite: () => {},
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

  const addFavorite = (favoriteItem) => {
    if (!user) {
      return;
    }

    if (user.favorites.some((item) => item.id === favoriteItem.id)) {
      return;
    }

    const updatedUser = {
      ...user,
      favorites: [...user.favorites, favoriteItem],
    };

    return fetch(`http://localhost:3000/users/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data));
        setUser(data);
      })
      .catch((error) => {
        console.error("Error updating user", error);
      });
  };

  const removeFavorite = (favoriteItem) => {
    if (!user) {
      return;
    }

    const updatedUser = {
      ...user,
      favorites: user.favorites.filter((item) => item.id !== favoriteItem.id),
    };

    return fetch(`http://localhost:3000/users/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data));
        setUser(data);
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };

  const value = {
    user,
    login,
    signOut,
    addFavorite,
    removeFavorite,
    setUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

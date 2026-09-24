import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("authUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Demo Users
    const users = [
      {
        id: 1,
        name: "John Doe",
        email: "user@example.com",
        password: "123456",
        role: "user",
      },
      {
        id: 2,
        name: "Admin User",
        email: "admin@example.com",
        password: "123456",
        role: "admin",
      },
    ];

    const foundUser = users.find(
      (user) => user.email === email && user.password === password,
    );

    if (!foundUser) {
      return {
        success: false,
        message: "Invalid email or password",
      };
    }

    const authenticatedUser = {
      id: foundUser.id,
      name: foundUser.name,
      email: foundUser.email,
      role: foundUser.role,
    };

    setUser(authenticatedUser);

    localStorage.setItem("authUser", JSON.stringify(authenticatedUser));

    return {
      success: true,
      user: authenticatedUser,
    };
  };

  const register = (name, email, password) => {
    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      role: "user",
    };

    setUser(newUser);

    localStorage.setItem("authUser", JSON.stringify(newUser));

    return {
      success: true,
      user: newUser,
    };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
  };

  const value = {
    user,
    loading,
    isAuthenticated: !!user,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

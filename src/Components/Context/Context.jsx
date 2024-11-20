import React, { createContext, useState } from "react";

// Create the Context
export const EmailContext = createContext();

// Create a Provider Component
export const EmailProvider = ({ children }) => {
  const [email, setEmail] = useState(""); 

  return (
    <EmailContext.Provider value={{ email, setEmail }}>
      {children}
    </EmailContext.Provider>
  );
};

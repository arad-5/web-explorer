import React, { createContext, useState } from "react";
export const Theme_context = createContext();

const Theme_provider = ({ children }) => {
  const [isDark, setIsDark] = useState(
    window.localStorage.isDark ? JSON.parse(window.localStorage.isDark) : false,
  );
  if (isDark === false) {
    window.localStorage.removeItem("isDark");
  } else {
    window.localStorage.setItem("isDark", true);
  }
  return (
    <Theme_context.Provider value={{ isDark, setIsDark }}>
      {children}
    </Theme_context.Provider>
  );
};

export default Theme_provider;

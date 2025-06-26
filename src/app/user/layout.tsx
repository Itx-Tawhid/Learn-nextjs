import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>Hello MF</div>
      {children}
    </div>
  );
};

export default Layout;

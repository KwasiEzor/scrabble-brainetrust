import React from "react";

interface UserLayoutProps {
  children: React.ReactNode;
}

const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
  return (
    <>
      UserLayout
      {children}
    </>
  );
};

export default UserLayout;

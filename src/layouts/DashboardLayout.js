import React from "react";
import useDashboardLayoutStyle from "./DashboardLayoutStyle";
import SidePanel from "../components/SidePanel/SidePanel";

const DashboardLayout = ({ children }) => {
  const classes = useDashboardLayoutStyle();
  console.log('dashboard layout');
  return (
    <div className={classes.root}>
      <>
        <SidePanel />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </>
    </div>
  );
};

export default DashboardLayout;

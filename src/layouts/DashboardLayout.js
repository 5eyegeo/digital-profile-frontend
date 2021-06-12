import React, {useState} from "react";
import classNames from "classnames";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import SidePanel from "../components/SidePanel/SidePanel";
import useDashboardLayoutStyle from "./DashboardLayoutStyle";
import Navbar from "../components/Navbar/Navbar";


const DashboardLayout = ({children}) => {
  const classes = useDashboardLayoutStyle();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <>
        <CssBaseline/>
        <Navbar open={open} handleDrawerOpen={handleDrawerOpen}/>
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
          open={open}
        >
          <div className={classes.toolbar}/>
          <SidePanel/>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar}/>
        </main>
      </>
    </div>
  );
};

export default DashboardLayout;

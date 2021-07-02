import sideBarItem from "./sideBarItems";
import React, {useState} from "react";
import MaterialUICollapseMenu from "../Reusable/CollapseMenu";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "../Navbar/Navbar";
import Drawer from "@material-ui/core/Drawer";
import classNames from "classnames";
import useDashboardLayoutStyle from "../../layouts/DashboardLayoutStyle";

const SidePanel = React.memo(function mySideBar(props) {
  const classes = useDashboardLayoutStyle();
  const [open, setOpen] = useState(true);
  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
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
        <MaterialUICollapseMenu items={sideBarItem}/>
      </Drawer>
    </div>
  );
})

export default SidePanel;

import sideBarItem from "./sideBarItems";
import React from "react";
import MaterialUICollapseMenu from "../Reusable/CollapseMenu";

const SidePanel = () => {
  return (
    <div>
      <MaterialUICollapseMenu items={sideBarItem} />
    </div>
  );
};

export default SidePanel;

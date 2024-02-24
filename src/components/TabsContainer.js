// TabsContainer.js
import React from "react";
import Tab from "./Tab";
import { RxDashboard } from "react-icons/rx";
import { RiArchiveDrawerFill } from "react-icons/ri";

function TabsContainer({
  activeTab,
  handleTabClick,
  tab1ClassName,
  tab2ClassName,
  tab1IconColor,
  tab2IconColor,
}) {
  return (
    <div className="tab-container">
      <Tab
        active={activeTab === "tab1"}
        onClick={handleTabClick("tab1")}
        icon={<RxDashboard />}
        iconColor={tab1IconColor}
        className={tab1ClassName}
      />
      <Tab
        active={activeTab === "tab2"}
        onClick={handleTabClick("tab2")}
        icon={<RiArchiveDrawerFill />}
        iconColor={tab2IconColor}
        className={tab2ClassName}
      />
    </div>
  );
}

export default TabsContainer;

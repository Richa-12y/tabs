import React from "react";
import "./tab.css";

const Tab = ({ active, onClick, icon, className, iconColor = "blue" }) => {
  return (
    <div
      className={`tab ${active ? "active-tab" : ""} ${className}`}
      onClick={onClick}
    >
      {React.cloneElement(icon, {
        style: { color: active ? "white" : iconColor },
      })}
    </div>
  );
};

export default Tab;

import React from "react";
import "./index.css";

function Header({ group, groupName, darkColor }) {
  return (
    <div className="Header">
      <div className={darkColor ? "darkLength" : "length"}>
        {" "}
        {group.length}{" "}
      </div>
      <div className={darkColor ? "darkName" : "name"}> {groupName} assets</div>
    </div>
  );
}

export default Header;

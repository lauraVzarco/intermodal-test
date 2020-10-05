import React from "react";

function Header({ group, groupName }) {
  return (
    <div className="Header">
      <div> {group.length} </div>
      <div> Assets de {groupName}</div>
    </div>
  );
}

export default Header;

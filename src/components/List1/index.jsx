import React from "react";

function List1({ data }) {
  console.log(data, "data");

  return (
    <div className="List">
      <div>Imei</div>
      {data.map((i) => (
        <div key={i.assetId}>{i.imei}</div>
      ))}

      <div>Name</div>
      {data.map((i) => (
        <div key={i.assetId}>{i.name}</div>
      ))}

      <div>Account</div>
      {data.map((i) => (
        <div key={i.assetId}>{i.accountAlias}</div>
      ))}
    </div>
  );
}

export default List1;

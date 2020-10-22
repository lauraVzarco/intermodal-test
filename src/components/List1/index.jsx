import React from "react";
import "./index.css";
//import Toggle from "../Toggle";

function List1({ data, onClick, toggle }) {
  return (
    <div className="List">
      <table className="table">
        <thead>
          <tr>
            <th>Imei</th>
            <th>Name</th>
            <th>Account</th>
          </tr>
        </thead>
        {data.map((i) => (
          <tbody className="data">
            <tr key={i.assetId} className="dataInfo" onClick={onClick}>
              <td className="info">{i.imei}</td>
              <td className="info">{i.accountAlias}</td>
              <td className="info">{i.name}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default List1;

import React, { useState } from "react";
import Header from "./components/Header";
import List1 from "./components/List1";
import data from "./mocked-data";
import "./App.css";

function App() {
  const [toggle, setToggle] = useState(false);
  const[info, setInfo] = useState(null);
  let group = data.reduce((r, a) => {
    r[a.accountAlias] = [...(r[a.accountAlias] || []), a];
    return r;
  }, {});
  console.log("group", group);

  return (
    <div className="App">
      <div className="headers">
        <Header group={data} groupName={"Total"} darkColor={true} />
        <Header group={group.alpha} groupName={"Alpha"} />
        <Header group={group.bravo} groupName={"Bravo"} />
        <Header group={group.charly} groupName={"Charly"} />
      </div>
      <List1 data={data} onClick={() => setToggle(!toggle)} toggle={toggle} />
    </div>
  );
}

export default App;

import React from "react";
import Header from "./components/Header";
import List1 from "./components/List1";
import data from "./mocked-data";

function App() {
  let group = data.reduce((r, a) => {
    r[a.accountAlias] = [...(r[a.accountAlias] || []), a];
    return r;
  }, {});
  console.log("group", group);

  return (
    <div className="App">
      <Header group={group.alpha} groupName={"Alpha"} />
      <Header group={group.bravo} groupName={"Bravo"} />
      <Header group={group.charly} groupName={"Charly"} />
      <List1 data={data}></List1>
    </div>
  );
}

export default App;

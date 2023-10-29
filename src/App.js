import React, { useState } from "react";
import UseTransition1 from "./components/UseTransition1";
import UseTransition2 from "./components/UseTransition2";
import UseTransition3 from "./components/UseTransition3";

function App() {
  const [showNo, setShowNo] = useState(1);

  return (
    <>
      <button onClick={() => setShowNo(1)}>Show 1</button>
      <button onClick={() => setShowNo(2)}>Show 2</button>
      <button onClick={() => setShowNo(3)}>Show 3</button>
      {showNo === 1 ? (
        <UseTransition1 />
      ) : showNo === 2 ? (
        <UseTransition2 />
      ) : showNo === 3 ? (
        <UseTransition3 />
      ) : null}
    </>
  );
}

export default App;

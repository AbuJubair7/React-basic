import React, { useState } from "react";

// to use state in functional component we use useState()
// destructure used to get data and set method for that data
// use useState() to initialize data
// in destructure first one to declare a name for the data
// in destructure second option to setData() in state
export default function HookUseState() {
  // set every state separately
  /*
   const [counter, setCounter] = useState(0);
   const [version, setVersion] = useState(0);
   */

  // we can pass object in useState() like class state()
  const [softInfo, setEverything] = useState({ counter: 0, version: 0 });

  function increment() {
    // setCounter(counter + 1);
    // setVersion(counter);
    // console.log(counter);

    setEverything({
      counter: softInfo.counter + 1,
      version: softInfo.version + 1,
    });
  }

  let { counter, version } = softInfo;
  return (
    <div>
      <h2>UseState: {counter}</h2>
      <h2>UseState version: {version}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

import React, { useEffect, useState } from "react";

const UseEffect2 = () => {
  const [widthCount, setWidthCount] = useState(window.screen.height);


  const actualwidth = () => {
    console.log(window.innerHeight);
    setWidthCount(window.innerHeight)
  };

  useEffect(() => {
      console.log("add event")
    window.addEventListener("resize", actualwidth);

    return()=>{
        console.log("remove event")
        window.removeEventListener("resize", actualwidth);
    }
  });
 

  return (
    <div>
      <p>The Actual Size of the window is :</p>
      <h1>{widthCount}</h1>
    </div>
  );
};
export default UseEffect2;

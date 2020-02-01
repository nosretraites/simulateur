import React, { useContext } from "react";

import { Context } from "../context";

const Result = () => {
  const foo = useContext(Context);

  console.log("result => ", foo);

  return (
    <div>
      Result :<div>{JSON.stringify(foo)}</div>
    </div>
  );
};

export default Result;

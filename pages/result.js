import React, { useContext } from "react";

import { Context } from "../context";

const Result = () => {
  const { simpleResult: { emp } } = useContext(Context);

  return (
    <div>
      Result :<div>{JSON.stringify(emp)}</div>
    </div>
  );
};

export default Result;

import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err, "useRouteError hook");
  return <h1>Error page</h1>;
};
export default Error;

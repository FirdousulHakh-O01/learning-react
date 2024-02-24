import React, { useEffect, useState } from "react";
const TestCompo = () => {
  const [test, setTest] = useState(0);
  useEffect(() => {
    console.log("Test");
    setTest(1);
  }, []);
  console.log("t1");
  return <h1>fir</h1>;
};
export default TestCompo;

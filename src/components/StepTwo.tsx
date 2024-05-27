import { useEffect } from "react";

const StepTwo = () => {
  useEffect(() => console.log("step Two re-render"));
  return <h1>Step two</h1>;
};

export default StepTwo;

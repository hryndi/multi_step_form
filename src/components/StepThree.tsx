import { useEffect } from "react";

const StepThree = () => {
  useEffect(() => console.log("StepThre component re-render"));
  return <h1>Step three</h1>;
};

export default StepThree;

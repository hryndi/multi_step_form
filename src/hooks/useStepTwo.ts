import { useState } from "react";
import { TUseStepTwoReturn } from "../types";

export const useStepTwo = (): TUseStepTwoReturn => {
  const [isYearly, setIsYearly] = useState<boolean>(false);
  const [radioValue, setRadioValue] = useState<string>("");
  const planHandler = () => {
    setIsYearly((prevVal) => !prevVal);
  };
  return { isYearly, planHandler, radioValue, setRadioValue };
};

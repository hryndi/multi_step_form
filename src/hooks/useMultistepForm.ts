import { useMemo, useState } from "react";
import { StepperNavigationData } from "../utils/data";
import { NavigateFunction } from "react-router-dom";
import {
  TUseMultistepFormReturn,
  TStepOneErrors,
  TFormValues,
  TInputConstructor,
  TStepperNavigationData,
} from "../types";

export const useMultistepForm = (navigate: NavigateFunction): TUseMultistepFormReturn => {
  const [formValues, setFormValues] = useState<TFormValues>({ name: "", email: "", phoneNum: "" });

  const [currentPageIndx, setCurrentPageIndx] = useState<number>(1);
  const [isStepOneValid, setIsStepOneValid] = useState<TStepOneErrors>({ name: false, email: false, phoneNum: false });
  const [navigationActiv, setNavigationActive] = useState<boolean>(true);
  const [stepperNavigationData, setStepperNavigationData] = useState<TStepperNavigationData[]>(StepperNavigationData);
  // useEffect(() => {
  const currentStepHandler = (currIndx: number) => {
    setStepperNavigationData((prevVal) => {
      return prevVal.map((item) => {
        return item.count === currIndx ? { ...item, isActive: true } : { ...item, isActive: false };
      });
    });
    console.log(stepperNavigationData);
  };
  // }, []);

  const nextPage = () => {
    setCurrentPageIndx((prevVal) => {
      const newVal = prevVal + 1;
      if (prevVal > stepperNavigationData.length) return prevVal;
      currentStepHandler(newVal);
      navigate(`/step_${newVal}/`);

      //   console.log(newVal, StepperNavigationData.length);
      return newVal;
    });
  };
  //
  const testFunc = (testString: string, regx: RegExp, objParam: string) => {
    if (!regx.test(testString)) {
      setIsStepOneValid((prevVal) => {
        return { ...prevVal, [objParam]: true };
      });
    } else {
      setIsStepOneValid((prevVal) => {
        return { ...prevVal, [objParam]: false };
      });
    }
    console.log(isStepOneValid);
  };

  const nextPageHandler = () => {
    testFunc(formValues.name, /^[a-zA-Z\s]{1,}$/, "name");
    testFunc(formValues.email, /^[a-zA-Z\s].*@.*$/, "email");
    testFunc(formValues.phoneNum, /^\+[0-9+]{8,}$/, "phoneNum");

    setIsStepOneValid((prevVal) => {
      console.log(isStepOneValid);
      if (!Object.values(prevVal).some(Boolean)) {
        console.log(isStepOneValid);
        nextPage();

        return { ...prevVal };
      } else return { ...prevVal };
    });

    console.log(isStepOneValid);
  };
  const prevPageHandler = () => {
    setCurrentPageIndx((prevVal) => {
      const newVal = prevVal - 1;
      if (prevVal <= stepperNavigationData.length - stepperNavigationData.length + 1) return prevVal;
      currentStepHandler(newVal);
      navigate(`/step_${newVal}/`);
      console.log(isStepOneValid);
      return newVal;
    });
  };

  const inputConstructor: TInputConstructor = useMemo(
    () => [
      {
        typography: "Name",
        id: "outlined-basic",
        placeholder: "e.g. Stephen King",
        variant: "outlined",
        value: formValues.name,
        error: isStepOneValid.name,
        onChange: (e) =>
          setFormValues((prevVal) => {
            return { ...prevVal, name: e.target.value };
          }),
        helperText: isStepOneValid.name ? "please, dont use only letters and spaces in your name." : undefined,
      },
      {
        typography: "Email Address",
        id: "outlined-basic",
        placeholder: "e.g. stephenking@lorem.com",
        variant: "outlined",
        value: formValues.email,
        error: isStepOneValid.email,
        onChange: (e) =>
          setFormValues((prevVal) => {
            return { ...prevVal, email: e.target.value };
          }),
        helperText: isStepOneValid.email ? "please, dont use only letters and spaces in your name." : undefined,
      },
      {
        typography: "Phone Number",
        id: "outlined-basic",
        placeholder: "e.g. +1 234 567 890",
        variant: "outlined",
        value: formValues.phoneNum,
        error: isStepOneValid.phoneNum,
        onChange: (e) =>
          setFormValues((prevVal) => {
            return { ...prevVal, phoneNum: e.target.value };
          }),
        helperText: isStepOneValid.phoneNum ? "please, dont use only letters and spaces in your name." : undefined,
      },
    ],
    [formValues, isStepOneValid]
  );

  return {
    inputConstructor,
    nextPageHandler,
    prevPageHandler,
    isFirstStep: currentPageIndx !== 1,
    isLastStep: currentPageIndx !== 4,
    isStepOneValid,
    navigationActiv,
    setNavigationActive,
    stepperNavigationData,
  };
};

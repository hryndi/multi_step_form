import React, { InputHTMLAttributes, useEffect, useMemo, useState } from "react";
import { StepperNavigationData } from "../utils/data";
import { NavigateFunction } from "react-router-dom";
import { TContextAPI, TStepOneErrors, TFormValues, TInputConstructor } from "../types";

export const useMultistepForm = (navigate: NavigateFunction): TContextAPI => {
  const [formValues, setFormValues] = useState<TFormValues>({ name: "", email: "", phoneNum: "" });
  let updatedStepOneValidation: TStepOneErrors = { name: false, email: false, phoneNum: false };

  const [currentPageIndx, setCurrentPageIndx] = useState<number>(1);
  const [isStepOneValid, setIsStepOneValid] = useState<TStepOneErrors>({ name: false, email: false, phoneNum: false });

  // useEffect(() => {

  // }, []);

  const nextPage = () => {
    setCurrentPageIndx((prevVal) => {
      const newVal = prevVal + 1;
      if (prevVal > StepperNavigationData.length) return prevVal;
      navigate(`/multi_step_form/step_${newVal}/`);
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
        //   setIsStepOneValid(() => {
        //     return updatedStepOneValidation
        //   });
        nextPage();
        return { ...prevVal };
      } else {
        //   setIsStepOneValid(() => {
        //     return updatedStepOneValidation;
        //   });
        return { ...prevVal };
      }
    });

    console.log(isStepOneValid);
  };
  const prevPageHandler = () => {
    setCurrentPageIndx((prevVal) => {
      const newVal = prevVal - 1;
      if (prevVal <= StepperNavigationData.length - StepperNavigationData.length + 1) return prevVal;
      navigate(`/multi_step_form/step_${newVal}/`);
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

  //   console.log(isStepOneValid);
  return {
    inputConstructor,
    nextPageHandler,
    prevPageHandler,
    isFirstStep: currentPageIndx !== 1,
    isLastStep: currentPageIndx !== 4,
    isStepOneValid,
  };
};

import { useState } from "react";
import { StepperNavigationData } from "../utils/data";
import { NavigateFunction } from "react-router-dom";

export const useMultistepForm = (navigate: NavigateFunction) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNum, setPhoneNum] = useState<number>(0);
  const [currentPageNum, setCurrentPageNum] = useState<number>(1);
  const [isShowReturnButton, setIsShowReturnButton] = useState<boolean>(false);
  const [isShowNextButton, setIsShowNextButton] = useState<boolean>(true);

  const nextPageHandler = () => {
    const newPageNum = currentPageNum + 1;
    if (newPageNum > StepperNavigationData.length) {
      setIsShowNextButton(false);

      return;
    } else {
      setCurrentPageNum(newPageNum);
      navigate(`/multi_step_form/step_${newPageNum}/`);
    }
  };
  const prevPageHandler = () => {
    const newPageNum = currentPageNum + 1;

    if (newPageNum <= StepperNavigationData.length) {
      setIsShowReturnButton(false);

      return;
    } else {
      setCurrentPageNum(newPageNum);
      navigate(`/multi_step_form/step_${newPageNum}`);
    }
  };

  return { name, setName, email, setEmail, phoneNum, setPhoneNum, nextPageHandler, prevPageHandler };
};

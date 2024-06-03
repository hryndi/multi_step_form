import { createContext } from "use-context-selector";
import { useMultistepForm } from "../hooks/useMultistepForm";
import { useStepTwo } from "../hooks/useStepTwo";
import { useStepThree } from "../hooks/useStepThree";
import { TContextAPI } from "../types";
import { useNavigate } from "react-router-dom";

export const ContextAPI = createContext<TContextAPI | null>(null);

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const {
    inputConstructor,
    nextPageHandler,
    prevPageHandler,
    isFirstStep,
    isLastStep,
    isStepOneValid,
    navigationActiv,
    setNavigationActive,
    stepperNavigationData,
  } = useMultistepForm(navigate);
  const { isYearly, planHandler, radioValue, setRadioValue } = useStepTwo();
  const { add_onsData, add_onsHandler } = useStepThree();

  const vals = {
    inputConstructor,
    prevPageHandler,
    nextPageHandler,
    isFirstStep,
    isLastStep,
    isStepOneValid,
    isYearly,
    planHandler,
    add_onsData,
    add_onsHandler,
    radioValue,
    setRadioValue,
    navigationActiv,
    setNavigationActive,
    stepperNavigationData,
  };
  console.log(isStepOneValid);
  return <ContextAPI.Provider value={vals}>{children}</ContextAPI.Provider>;
};

export default ContextProvider;

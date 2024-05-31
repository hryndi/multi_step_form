import { createContext } from "use-context-selector";
import { useMultistepForm } from "../hooks/useMultistepForm";
import { TContextAPI } from "../types";
import { useNavigate } from "react-router-dom";

export const ContextAPI = createContext<TContextAPI | null>(null);

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const { inputConstructor, nextPageHandler, prevPageHandler, isFirstStep, isLastStep, isStepOneValid } =
    useMultistepForm(navigate);
  const vals = {
    inputConstructor,
    prevPageHandler,
    nextPageHandler,
    isFirstStep,
    isLastStep,
    isStepOneValid,
  };
  console.log(isStepOneValid);
  return <ContextAPI.Provider value={vals}>{children}</ContextAPI.Provider>;
};

export default ContextProvider;

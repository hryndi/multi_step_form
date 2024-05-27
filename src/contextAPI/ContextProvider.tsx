import { createContext } from "use-context-selector";
import { useMultistepForm } from "../hooks/useMultistepForm";
import { TContextAPI } from "../types";
import { useNavigate } from "react-router-dom";

export const ContextAPI = createContext<TContextAPI | null>(null);

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const { email, name, phoneNum, setEmail, setName, setPhoneNum, nextPageHandler, prevPageHandler } =
    useMultistepForm(navigate);
  const vals = { email, name, phoneNum, setEmail, setName, setPhoneNum, prevPageHandler, nextPageHandler };
  return <ContextAPI.Provider value={vals}>{children}</ContextAPI.Provider>;
};

export default ContextProvider;

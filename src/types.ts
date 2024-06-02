import { TextFieldVariants } from "@mui/material";
import { InputHTMLAttributes } from "react";

export type TStepperNavigationData = {
  id: string;
  isActive: boolean;
  count: number;
  name: string;
  title: string;
};

export type TContextAPI = TUseMultistepFormReturn & TUseStepTwoReturn & TUseStepThreeReturn;

export type TUseMultistepFormReturn = {
  inputConstructor: TInputConstructor;
  prevPageHandler: () => void;
  nextPageHandler: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  isStepOneValid: TStepOneErrors;
};
export type TUseStepTwoReturn = {
  isYearly: boolean;
  planHandler: () => void;
  radioValue: string;
  setRadioValue: React.Dispatch<React.SetStateAction<string>>;
};

export type TUseStepThreeReturn = {
  add_onsData: TAdd_ons[];
  add_onsHandler: (id: string) => void;
};

export type TFormValues = {
  name: string;
  email: string;
  phoneNum: string;
};

export type TStepOneErrors = {
  name: boolean;
  email: boolean;
  phoneNum: boolean;
};
export type TInputConstructor = Array<
  InputHTMLAttributes<HTMLInputElement> & {
    typography: string;
    variant: TextFieldVariants;
    error: boolean;
    helperText: string | undefined;
  }
>;

export type TPlanRadioMonthly = {
  icon: string;
  title: string;
  subTitle: string;
  intPrice: number;
};
export type TPlanRadioYearly = {
  icon: string;
  title: string;
  subTitle: string;
  discount: string;
  intPrice: number;
};

export type TAdd_ons = {
  title: string;
  subTitle: string;
  price: string;
  id: string;
  checked: boolean;
  intPrice: number;
};

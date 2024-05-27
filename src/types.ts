export type TStepperNavigationData = {
  id: string;
  isActive: boolean;
  count: number;
  name: string;
  title: string;
};

export type TContextAPI = {
  email: string;
  name: string;
  phoneNum: number;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setPhoneNum: React.Dispatch<React.SetStateAction<number>>;
  prevPageHandler: () => void;
  nextPageHandler: () => void;
};

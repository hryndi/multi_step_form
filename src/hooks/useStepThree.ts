import { useState } from "react";
import { Add_ons } from "../utils/data";
import { TAdd_ons, TUseStepThreeReturn } from "../types";

export const useStepThree = (): TUseStepThreeReturn => {
  const [add_onsData, setAdd_onsData] = useState<TAdd_ons[]>(Add_ons);
  const add_onsHandler = (id: string) => {
    setAdd_onsData((prevVal) => [
      ...prevVal.map((item) =>
        item.id !== id
          ? item
          : {
              ...item,
              checked: !item.checked,
            }
      ),
    ]);
  };
  return { add_onsData, add_onsHandler };
};

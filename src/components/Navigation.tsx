import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useContextSelector } from "use-context-selector";
import { ContextAPI } from "../contextAPI/ContextProvider";
import { useEffect } from "react";

const Navigation = () => {
  // useEffect(() => console.log("navigator component re-render"));
  const nextPageHandler = useContextSelector(ContextAPI, (state) => state?.nextPageHandler);
  const prevPageHandler = useContextSelector(ContextAPI, (state) => state?.prevPageHandler);
  const isShowNextBtn = useContextSelector(ContextAPI, (state) => state?.isLastStep);
  const isShowReturnBtn = useContextSelector(ContextAPI, (state) => state?.isFirstStep);
  return (
    <Stack
      direction={"row"}
      justifyContent={"end"}
      padding={"1rem"}
      sx={{
        "@media (max-width:682px)": {
          width: "100%",
        },
        "@media (min-width:682px)": {
          marginInline: "1rem",
          width: undefined,
        },
        backgroundColor: "#fff",
      }}
    >
      {isShowReturnBtn && (
        <Button variant={"outlined"} onClick={() => prevPageHandler?.()}>
          Go back
        </Button>
      )}
      {isShowNextBtn && (
        <Button variant={"contained"} onClick={nextPageHandler}>
          Next Step
        </Button>
      )}
    </Stack>
  );
};
export default Navigation;

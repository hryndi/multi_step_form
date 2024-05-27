import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useContextSelector } from "use-context-selector";
import { ContextAPI } from "../contextAPI/ContextProvider";
import { useEffect } from "react";

const Navigation = () => {
  useEffect(() => console.log("navigator component re-render"));
  const nextPageHandler = useContextSelector(ContextAPI, (state) => state?.nextPageHandler);
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
      <Button variant={"contained"} onClick={() => nextPageHandler?.()}>
        Next Step
      </Button>
    </Stack>
  );
};
export default Navigation;

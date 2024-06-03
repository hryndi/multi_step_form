import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useContextSelector } from "use-context-selector";
import { ContextAPI } from "../contextAPI/ContextProvider";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  // useEffect(() => console.log("navigator component re-render"));
  const nextPageHandler = useContextSelector(ContextAPI, (state) => state?.nextPageHandler);
  const prevPageHandler = useContextSelector(ContextAPI, (state) => state?.prevPageHandler);
  const isShowNextBtn = useContextSelector(ContextAPI, (state) => state?.isLastStep);
  const isShowReturnBtn = useContextSelector(ContextAPI, (state) => state?.isFirstStep);
  const navigationActiv = useContextSelector(ContextAPI, (v) => v?.navigationActiv);
  const setNavigationActive = useContextSelector(ContextAPI, (v) => v?.setNavigationActive);

  const navigate = useNavigate();
  return (
    navigationActiv && (
      <Stack
        direction={"row"}
        justifyContent={!isShowReturnBtn ? "end" : "space-between"}
        padding={"1rem"}
        sx={{
          height: "70px",
          "@media (max-width:682px)": {
            width: "100%",
            // position: "fixed",
            // bottom: 0,
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
        {isShowNextBtn ? (
          <Button variant={"contained"} onClick={nextPageHandler}>
            Next Step
          </Button>
        ) : (
          <Button
            variant={"contained"}
            onClick={() => {
              setNavigationActive?.((prevVal) => !prevVal);
              return navigate("/byer_success");
            }}
          >
            Finish
          </Button>
        )}
      </Stack>
    )
  );
};

export default Navigation;

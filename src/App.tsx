// MUI
import Box from "@mui/material/Box";
import { styled as styledMui } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

// assets
import MobileStepBackground from "./assets/bg-sidebar-mobile.svg";
import DesktopStepBackground from "./assets/bg-sidebar-desktop.svg";

// router
import { Outlet } from "react-router-dom";

const SBox = styledMui(Box)({
  height: "100svh",
});

function App() {
  return (
    <SBox>
      <Grid container justifyContent={"center"} position={"relative"}>
        <Grid item>
          <picture>
            <source media="(min-width:600px)" srcSet={DesktopStepBackground} />
            <img src={MobileStepBackground} alt="stepper background" />
          </picture>
        </Grid>
        <Grid item sx={{ backgroundColor: "limegreen" }} position={"relative"} top={-30}>
          <Outlet />
        </Grid>
      </Grid>
    </SBox>
  );
}

export default App;

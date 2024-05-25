// MUI
import Box from "@mui/material/Box";
import { styled as styledMui } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
// assets
import MobileStepBackground from "./assets/bg-sidebar-mobile.svg";
import DesktopStepBackground from "./assets/bg-sidebar-desktop.svg";

// router
import { Outlet } from "react-router-dom";

// components
import Navigation from "./components/Navigation";

const SBox = styledMui(Box)(({ theme }) => ({
  height: "100svh",
  backgroundColor: theme.palette.grey[300],
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
}));

function App() {
  return (
    <SBox>
      <Grid container justifyContent={"center"} alignContent={"space-between"} direction={"row"} height={"100%"}>
        <Grid item>
          <picture>
            <source media="(min-width:600px)" srcSet={DesktopStepBackground} />
            <img src={MobileStepBackground} alt="stepper background" />
          </picture>
        </Grid>
        <Grid
          item
          // sx={{ backgroundColor: "hsla(125.16129032258064, 82.30088495575224%, 77.84313725490196%, 0.47)" }}
          position={"relative"}
          padding={"1rem"}
          paddingTop={0}
          top={-75}
          flexDirection={"column"}
          maxWidth={375}
        >
          <Outlet />
        </Grid>
        <Navigation />
      </Grid>
    </SBox>
  );
}

export default App;

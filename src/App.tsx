// MUI
import Box from "@mui/material/Box";
import { styled as styledMui } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
// assets
import MobileStepBackground from "./assets/bg-sidebar-mobile.svg";
import DesktopStepBackground from "./assets/bg-sidebar-desktop.svg";

// contextAPI
import ContextProvider from "./contextAPI/ContextProvider.tsx";

// router
import { Outlet } from "react-router-dom";

// components
import Navigation from "./components/Navigation";
import StepperNavigation from "./components/StepperNavigation";
import { useEffect } from "react";

const SBox = styledMui(Box)(({ theme }) => ({
  height: "100svh",
  backgroundColor: theme.palette.grey[300],
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
}));

const SStepBackgroundGridItem = styledMui(Grid)(() => ({
  "@media (max-width:682px)": {
    backgroundPosition: "center",
    height: 173,
    width: "100%",
    backgroundImage: `url(${MobileStepBackground})`,
    backgroundSize: "cover",
  },
  "@media (min-width:600px)": {
    backgroundImage: MobileStepBackground,
    backgroundSize: "cover",
  },
}));

const SContentGridItem = styledMui(Grid)(() => ({
  "@media (max-width:682px)": {
    position: "relative",
    paddingTop: 0,
    top: -70,
    flexDirection: "column",
    display: "flex",

    width: "100%",
    alignItems: "center",
    height: "100%",
    justifyContent: "space-between",
  },
}));

function App() {
  useEffect(() => console.log("App re-render"));

  return (
    <SBox>
      <Grid container justifyContent={"center"} alignContent={"space-between"}>
        <SStepBackgroundGridItem item>
          {/* <picture>
            <source media="(min-width:600px)" srcSet={DesktopStepBackground} />
            <img src={MobileStepBackground} alt="stepper background" />
          </picture> */}
          <StepperNavigation />
        </SStepBackgroundGridItem>
        <SContentGridItem item>
          <ContextProvider>
            <Outlet />
            <Navigation />
          </ContextProvider>
        </SContentGridItem>
      </Grid>
    </SBox>
  );
}

export default App;

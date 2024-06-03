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
import { Outlet, Navigate } from "react-router-dom";

// components
import Navigation from "./components/Navigation";
import StepperNavigation from "./components/StepperNavigation";
import { useEffect } from "react";

const SBox = styledMui(Box)(({ theme }) => ({
  // height: "",
  backgroundColor: theme.palette.grey[300],
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  height: "100svh",

  "@media (min-width:600px)": {
    justifyContent: "center",
    alignItems: "center",
  },
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
    height: "570px",
    width: "280px",
    backgroundImage: `url(${DesktopStepBackground})`,
    backgroundSize: "cover",
    // height: "auto",
  },
}));

const SContentGridItem = styledMui(Grid)(() => ({
  "@media (max-width:682px)": {
    position: "relative",
    paddingTop: 0,
    top: -70,
    flexDirection: "column",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    // alignItems: "center",
    height: "calc(100vh - 103px)",
  },
  "@media (min-width:682px)": {
    // flexDirection: "row",
    width: "630px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

function App() {
  useEffect(() => console.log("App re-render"));

  return (
    <ContextProvider>
      <SBox>
        <Box sx={{ "@media (min-width:600px)": { backgroundColor: "#fff", borderRadius: 5, padding: 2 } }}>
          <Grid container justifyContent={"center"} sx={{ "@media (max-width:682px)": { height: "100vh" } }}>
            <SStepBackgroundGridItem item>
              <StepperNavigation />
            </SStepBackgroundGridItem>

            <SContentGridItem item gap={1}>
              <Outlet />
              <Navigation />
            </SContentGridItem>
          </Grid>
        </Box>
      </SBox>
    </ContextProvider>
  );
}

export default App;

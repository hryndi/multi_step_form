import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// components
import App from "./App.tsx";
import StepOne from "./components/StepOne.tsx";
import StepTwo from "./components/StepTwo.tsx";
import StepThree from "./components/StepThree.tsx";
import StepFour from "./components/StepFour.tsx";
import ByerSuccess from "./components/ByerSuccess.tsx";

//ContextAPI

// Router DOM
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

// MUI
import { createTheme, ThemeProvider } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      lightBg_400: string;
      lightBg_200: string;
    };
  }

  interface ThemeOptions {
    custom?: {
      lightBg_400?: string;
      lightBg_200?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "hsl(213, 96%, 18%)",
    },
    secondary: {
      main: "hsl(243, 100%, 62%)",
    },
    error: {
      main: "hsl(354, 84%, 57%)",
    },
    grey: {
      "500": "hsl(231, 11%, 63%)",
      "400": "hsl(229, 24%, 87%)",
      "300": "hsl(217, 100%, 97%)",
      "200": "hsl(231, 100%, 99%)",
    },
  },
  custom: {
    lightBg_200: "hsl(206, 94%, 87%)",
    lightBg_400: "hsl(228, 100%, 84%)",
  },
  typography: {
    fontFamily: "Ubuntu, sans-serif",
    subtitle2: {
      fontSize: "0.8rem",
    },
  },
});

const Main = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <App />,

        children: [
          {
            path: "/",
            element: <Navigate to="/step_1" />,
          },

          {
            path: "/step_1",
            element: <StepOne />,
          },
          {
            path: "/step_2",
            element: <StepTwo />,
          },
          {
            path: "/step_3",
            element: <StepThree />,
          },
          {
            path: "/step_4",
            element: <StepFour />,
          },
          {
            path: "/byer_success",
            element: <ByerSuccess />,
          },
        ],
      },
    ],
    { basename: "/multi_step_form/" }
  );
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<Main />);

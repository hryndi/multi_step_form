import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// components
import App from "./App.tsx";
import StepOne from "./components/StepOne.tsx";
import StepTwo from "./components/StepTwo.tsx";
import StepThree from "./components/StepThree.tsx";
import StepFour from "./components/StepFour.tsx";

// Router DOM
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
});

const Main = () => {
  const router = createBrowserRouter([
    {
      path: "/multi_step_form/",
      element: <App />,
      children: [
        {
          path: "/multi_step_form/step_1",
          element: <StepOne />,
        },
        {
          path: "/multi_step_form/step_2",
          element: <StepTwo />,
        },
        {
          path: "/multi_step_form/step_3",
          element: <StepThree />,
        },
        {
          path: "/multi_step_form/step_4",
          element: <StepFour />,
        },
      ],
    },
  ]);
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<Main />);

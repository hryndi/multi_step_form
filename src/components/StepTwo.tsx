// react
import { useEffect } from "react";

// types

//custom components
import ContentWrapper from "./shared/ContentWrapper";
import { StyledTypography } from "./shared/STypography";
import RadioCardGroup from "./shared/RadioCardGroup";

// MUI
import { Stack, Typography, useTheme, Switch, styled } from "@mui/material";

// ContextAPI
import { ContextAPI } from "../contextAPI/ContextProvider";
import { useContextSelector } from "use-context-selector";

const AndroidSwitch = styled(Switch)(() => ({
  padding: 8,
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    "&::before, &::after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: 2,
  },
}));

const StepTwo = () => {
  const isYearly = useContextSelector(ContextAPI, (v) => v?.isYearly);
  const planHandler = useContextSelector(ContextAPI, (v) => v?.planHandler);

  const theme = useTheme();
  return (
    <ContentWrapper display={"flex"} flexDirection={"column"} gap={3}>
      <div>
        <StyledTypography variant="h5">Select your plan</StyledTypography>
        <StyledTypography variant="subtitle1">You have the option of monthly or yearly billing.</StyledTypography>
      </div>
      <RadioCardGroup isYearly={isYearly || false} />

      <Stack
        marginBlock={1}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
        sx={{ backgroundColor: theme.palette.grey[300] }}
      >
        <Typography variant={"subtitle2"} color={theme.palette.primary.main} fontWeight={600} fontSize={"0.9rem"}>
          Monthly
        </Typography>
        <AndroidSwitch defaultChecked={isYearly} onClick={planHandler} />

        <Typography variant={"subtitle2"} color={theme.palette.grey[500]} fontWeight={600} fontSize={"0.9rem"}>
          Yearly
        </Typography>
      </Stack>
    </ContentWrapper>
  );
};

export default StepTwo;

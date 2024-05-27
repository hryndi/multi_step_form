// Context
import { useContextSelector } from "use-context-selector";
import { ContextAPI } from "../contextAPI/ContextProvider";
// MUI
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

// custom components
import ContentWrapper from "./shared/ContentWrapper";
import { StyledTypography } from "./shared/STypography";
import { styled } from "@mui/material/styles";
import { useEffect } from "react";

const SInputField = styled(TextField)({
  "& .MuiInputBase-root": {
    height: "2.5em",
  },
});

const StepOne = () => {
  useEffect(() => console.log("step One re-render"));
  const name = useContextSelector(ContextAPI, (state) => state?.name);
  const setName = useContextSelector(ContextAPI, (state) => state?.setName);
  const email = useContextSelector(ContextAPI, (state) => state?.email);
  const setEmail = useContextSelector(ContextAPI, (state) => state?.setEmail);
  const phoneNum = useContextSelector(ContextAPI, (state) => state?.phoneNum);
  const setPhoneNum = useContextSelector(ContextAPI, (state) => state?.setPhoneNum);
  return (
    <ContentWrapper>
      <StyledTypography variant="h5">Personal Info</StyledTypography>
      <StyledTypography variant="subtitle1">Please provide your name, email address, and phone number</StyledTypography>
      <Box component={"form"} display={"grid"} marginTop={"0.5rem"}>
        <StyledTypography variant="subtitle2" marginTop1>
          Name
        </StyledTypography>
        <SInputField
          id="outlined-basic"
          placeholder="e.g. Stephen King"
          variant="outlined"
          value={name}
          onChange={(e) => setName?.(e.target.value)}
        />
        <StyledTypography variant="subtitle2" marginTop1>
          Email Address
        </StyledTypography>
        <SInputField
          id="outlined-basic"
          placeholder="e.g. stephenking@lorem.com"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail?.(e.target.value)}
        />
        <StyledTypography variant="subtitle2" marginTop1>
          Phone Number
        </StyledTypography>
        <SInputField
          id="outlined-basic"
          type="text"
          placeholder="e.g. +1 234 567 890"
          variant="outlined"
          value={phoneNum}
          onChange={(e) => setPhoneNum?.(+e.target.value)}
        />
      </Box>
    </ContentWrapper>
  );
};
export default StepOne;

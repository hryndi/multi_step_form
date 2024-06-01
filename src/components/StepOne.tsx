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
  const inputConstructor = useContextSelector(ContextAPI, (state) => state?.inputConstructor);

  return (
    <ContentWrapper>
      <StyledTypography variant="h5">Personal Info</StyledTypography>
      <StyledTypography variant="subtitle1">Please provide your name, email address, and phone number</StyledTypography>
      <Box component={"form"} display={"grid"} marginTop={"0.5rem"}>
        {inputConstructor?.map((item) => (
          <>
            <StyledTypography variant="subtitle2" marginTop1 isError={item.error}>
              {item.typography}
            </StyledTypography>
            <SInputField
              id={item.id}
              placeholder={item.placeholder}
              variant={item.variant}
              value={item.value}
              error={item.error}
              onChange={item.onChange}
              helperText={item.helperText}
            />
          </>
        ))}
      </Box>
    </ContentWrapper>
  );
};
export default StepOne;

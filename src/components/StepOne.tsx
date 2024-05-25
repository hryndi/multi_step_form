// MUI
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

// custom components
import ContentWrapper from "./shared/ContentWrapper";
import { StyledTypography } from "./shared/STypography";
import { styled } from "@mui/material/styles";

const SInputField = styled(TextField)({
  "& .MuiInputBase-root": {
    height: "2.5em",
  },
});

const StepOne = () => {
  return (
    <ContentWrapper>
      <StyledTypography variant="h5">Personal Info</StyledTypography>
      <StyledTypography variant="subtitle1">Please provide your name, email address, and phone number</StyledTypography>
      <Box component={"form"} display={"grid"} marginTop={"0.5rem"}>
        <StyledTypography variant="subtitle2" marginTop1>
          Name
        </StyledTypography>
        <SInputField id="outlined-basic" placeholder="e.g. Stephen King" variant="outlined" />
        <StyledTypography variant="subtitle2" marginTop1>
          Email Address
        </StyledTypography>
        <SInputField id="outlined-basic" placeholder="e.g. stephenking@lorem.com" variant="outlined" />
        <StyledTypography variant="subtitle2" marginTop1>
          Phone Number
        </StyledTypography>
        <SInputField id="outlined-basic" placeholder="e.g. +1 234 567 890" variant="outlined" />
      </Box>
    </ContentWrapper>
  );
};
export default StepOne;

import ContentWrapper from "./shared/ContentWrapper";
import { StyledTypography } from "./shared/STypography";
import SuccessImg from "../assets/icon-thank-you.svg";

import { styled } from "@mui/material/styles";

const StyledSuccessImg = styled("img")(() => ({
  "@media(max-width:600px)": {
    width: 55,
    height: 55,
    marginBottom: 16,
  },
  "@media(min-width:600px)": {
    width: 80,
    height: 80,
    marginBottom: 16,
  },
}));

const ByerSuccess = () => {
  return (
    <ContentWrapper
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      sx={{
        "@media(min-width:600px)": { justifyContent: "center", height: "100%", padding: "5rem" },
      }}
    >
      <StyledSuccessImg src={SuccessImg} alt="success image" />
      <StyledTypography
        variant="h5"
        sx={{
          "@media(min-width:600px)": {
            fontSize: "2rem",
          },
        }}
      >
        Thank you!
      </StyledTypography>
      <StyledTypography variant="subtitle1" textAlign={"center"}>
        Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support,
        please feel free to email us at support@loremgaming.com
      </StyledTypography>
      {/* <StyledTypography variant="subtitle1" textAlign={"center"} lineHeight={"1.6rem !important"}>
       
      </StyledTypography> */}
    </ContentWrapper>
  );
};

export default ByerSuccess;

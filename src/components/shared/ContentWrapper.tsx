import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Navigation from "../Navigation";

const SBox = styled(Box)(({ theme }) => ({
  background: theme.palette.common.white,
}));

const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SBox component={"main"} padding={"1.5rem"} borderRadius={3}>
        {children}
      </SBox>
    </>
  );
};

export default ContentWrapper;

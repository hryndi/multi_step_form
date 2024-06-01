import Box, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Navigation from "../Navigation";

const SBox = styled(Box)(({ theme }) => ({
  background: theme.palette.common.white,
  marginInline: "1rem",
}));

const ContentWrapper = <T extends React.ElementType>(props: BoxProps<T, { component?: T }>) => {
  return (
    <>
      <SBox component={"main"} {...props} padding={"1.5rem"} borderRadius={3}>
        {props.children}
        {/* IsNavigation */}
      </SBox>
    </>
  );
};

export default ContentWrapper;

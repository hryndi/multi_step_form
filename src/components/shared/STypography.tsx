import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const StyledTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "marginTop1" && prop !== "isError",
})<{
  marginTop1?: boolean;
  isError?: boolean;
}>(({ theme, variant, marginTop1, isError }) => ({
  paddingTop: marginTop1 ? "0.8rem" : undefined,
  paddingBlock: variant === "h5" ? "0.45rem" : undefined,
  lineHeight: variant === "subtitle1" ? "1.5rem" : undefined,
  color:
    ((variant === "h5" || variant === "subtitle2") && theme.palette.primary.main) ||
    (variant === "subtitle1" && theme.palette.grey[500]) ||
    (isError && theme.palette.error.main) ||
    undefined,
  fontWeight: variant == "h5" ? "bold" : undefined,
}));

import ContentWrapper from "./shared/ContentWrapper";
import { StyledTypography } from "./shared/STypography";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import Link from "@mui/material/Link";
import { ContextAPI } from "../contextAPI/ContextProvider";
import { useContextSelector } from "use-context-selector";
import { PlanRadioMonthly, PlanYearly } from "../utils/data";
import { useTheme } from "@mui/material/styles";
import { useEffect } from "react";

const STypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "isSubTitle",
})<{
  isSubTitle?: boolean;
}>(({ theme, isSubTitle }) => ({
  color: isSubTitle ? theme.palette.grey[500] : theme.palette.primary.main,

  fontWeight: !isSubTitle ? "bold" : 400,
  fontSize: isSubTitle ? "0.95rem" : "0.9rem",
  lineHeight: isSubTitle ? 1 : undefined,
}));
const StepFour = () => {
  const theme = useTheme();
  const planValue = useContextSelector(ContextAPI, (v) => v?.radioValue);
  const isYearly = useContextSelector(ContextAPI, (v) => v?.isYearly);
  const add_onsData = useContextSelector(ContextAPI, (v) => v?.add_onsData);
  let totalValue: number = 0;
  return (
    <ContentWrapper display={"flex"} flexDirection={"column"} gap={3}>
      <div>
        <StyledTypography variant="h5">Finishing up</StyledTypography>
        <StyledTypography variant="subtitle1">Double-check everything looks OK before confirming.</StyledTypography>
      </div>

      <Box component={"div"} padding={2} borderRadius={2.5} sx={{ backgroundColor: theme.palette.grey[200] }}>
        <Box component={"div"} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
          <div>
            <STypography variant="subtitle2">
              {planValue}({isYearly ? "Yearly" : "Monthly"})
            </STypography>
            <Link>
              <STypography variant="subtitle2" isSubTitle>
                Change
              </STypography>
            </Link>
          </div>
          <Typography variant="subtitle1" color={"blue"} fontWeight={600}>
            {(isYearly ? PlanYearly : PlanRadioMonthly)
              .filter((item) => item.title === planValue)
              .map((item) => {
                totalValue += item.intPrice;
                return item.subTitle;
              })}
          </Typography>
        </Box>

        <Divider sx={{ marginBlock: 1.8 }} />

        {add_onsData
          ?.filter((item) => item.checked)
          .map((item) => {
            totalValue += item.intPrice;
            console.log(totalValue);
            return (
              <>
                <Box component={"div"} display={"flex"} justifyContent={"space-between"} marginBlock={0.9}>
                  <STypography variant="subtitle2" isSubTitle>
                    {item.title}
                  </STypography>
                  <STypography variant="subtitle2" fontWeight={"450 !important"}>
                    {item.price}
                  </STypography>
                </Box>
              </>
            );
          })}
      </Box>

      <Box component={"div"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} marginInline={1.5}>
        <STypography variant="subtitle2" isSubTitle>
          Total (per month)
        </STypography>

        <Typography variant="subtitle1" color={"blue"} fontWeight={600}>
          {`+$${totalValue}/${isYearly ? "yr" : "mo"}`}
        </Typography>
      </Box>
    </ContentWrapper>
  );
};
export default StepFour;

import { useEffect } from "react";
import ContentWrapper from "./shared/ContentWrapper";
import { StyledTypography } from "./shared/STypography";
import CheckBoxCardGroup from "./shared/CheckBoxCardGroup";

const StepThree = () => {
  useEffect(() => console.log("StepThre component re-render"));
  return (
    <ContentWrapper display={"flex"} flexDirection={"column"} gap={3}>
      <div>
        <StyledTypography variant="h5">Pick add-ons</StyledTypography>
        <StyledTypography variant="subtitle1">Add-ons help enchance your gaming experience.</StyledTypography>
      </div>
      <CheckBoxCardGroup />
    </ContentWrapper>
  );
};

export default StepThree;

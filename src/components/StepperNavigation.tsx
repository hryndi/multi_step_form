import styled from "@emotion/styled";
import { styled as styledMui } from "@mui/material/styles";
import { StepperNavigationData } from "../utils/data";

const SUl = styled.ul`
  height: 100%;
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: center;
  gap: 0.88rem;
`;
const SLi = styled.li``;
const SItemCount = styledMui("span", { shouldForwardProp: (prop) => prop !== "isActive" })<{
  isActive?: boolean;
}>(({ isActive, theme }) => ({
  width: 35,
  height: 35,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "3.333rem",
  border: "1px solid white",
  marginTop: "2.2rem",
  fontWeight: 500,
  color: isActive ? "black" : "white",
  fontSize: "0.93rem",
  backgroundColor: isActive ? theme.custom.lightBg_200 : undefined,
}));
const SStepDetails = styled.div`
  @media (max-width: 682px) {
    display: none;
  }
`;
const SItemName = styled.span``;
const SItemTitle = styled.span``;

const StepperNavigation = () => {
  return (
    <SUl>
      {StepperNavigationData.map((item) => (
        <SLi id={item.id}>
          <SItemCount isActive={item.isActive}>{item.count}</SItemCount>
          <SStepDetails>
            <SItemName>{item.name}</SItemName>
            <SItemTitle>{item.title}</SItemTitle>
          </SStepDetails>
        </SLi>
      ))}
    </SUl>
  );
};

export default StepperNavigation;

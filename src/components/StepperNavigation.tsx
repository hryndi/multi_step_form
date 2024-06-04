import styled from "@emotion/styled";
import { styled as styledMui } from "@mui/material/styles";
import { ContextAPI } from "../contextAPI/ContextProvider";
import { useContextSelector } from "use-context-selector";

const SUl = styled.ul`
  height: 100%;
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: center;
  gap: 0.88rem;

  @media (min-width: 682px) {
    flex-direction: column;
    height: auto;

    gap: 1.1rem;
    margin-top: 2rem;
    margin-inline: 2rem;
  }
`;
const SLi = styled.li`
  display: flex;
  gap: 0.5rem;
@media all and (min-width: 680px) {
    align-items: center;
  }
`;
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
  fontWeight: 500,
  color: isActive ? "black" : "white",
  fontSize: "0.93rem",
  backgroundColor: isActive ? theme.custom.lightBg_200 : undefined,
  "@media (max-width: 682px)": {
    marginTop: "2.2rem",
  },
  //   "@media (min-width: 682px)": {

  //   },
}));
const SStepDetails = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 682px) {
    display: none;
  }
`;
const SItemName = styledMui("span")(({ theme }) => ({
  textTransform: "uppercase",
  color: theme.palette.grey[500],
  fontSize: "0.8rem",
}));

const SItemTitle = styledMui("span")(({ theme }) => ({
  textTransform: "uppercase",
  fontWeight: 600,
  color: theme.palette.grey[300],
}));

const StepperNavigation = () => {
  const stepperNavigationData = useContextSelector(ContextAPI, (v) => v?.stepperNavigationData);
  return (
    <SUl>
      {stepperNavigationData?.map((item) => (
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

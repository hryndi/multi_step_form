import {
  Card,
  CardProps,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  RadioGroupProps,
  Stack,
  lighten,
  Box,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import React from "react";
import { useTheme } from "@mui/material";
import { PlanRadioMonthly, PlanYearly } from "../../utils/data";

//ContextAPI
import { ContextAPI } from "../../contextAPI/ContextProvider";
import { useContextSelector } from "use-context-selector";

const StyledRadioCardItem = styled(Card)(({ theme }) => ({
  padding: "0.8rem",
  margin: 0,
  cursor: "pointer",
  border: `2px solid ${theme.palette.grey[400]}`,
  width: "100%",
  boxShadow: undefined,
  borderRadius: 10,
  "&:focus-within": {
    // border: "2px solid black",
  },
}));

const STypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "isSubTitle",
})<{
  isSubTitle?: boolean;
}>(({ theme, isSubTitle }) => ({
  color: isSubTitle ? theme.palette.grey[500] : theme.palette.primary.main,
  fontWeight: !isSubTitle ? "bold" : 400,
}));

type TStyledRadioCardItemProps = CardProps & {
  control?: React.ReactNode;
  icon?: string;
  selected?: boolean;
  disabled?: boolean;
  formValue?: string;
};

const RadioCardItem = ({ formValue, control, icon, selected, disabled, ...rest }: TStyledRadioCardItemProps) => {
  const theme = useTheme();
  const selectedStyles = {
    backgroundColor: selected ? lighten(theme.palette.primary.light, 0.92) : "inherit",
    border: `1.5px solid ${theme.palette.secondary.main}`,
  };
  const disabledStyles = {
    opacity: 0.7,
    backgroundColor: `${theme.palette.grey[300]} !important`,
    pointerEvents: "none",
  };

  let styles = {};
  if (disabled) {
    styles = disabledStyles;
  } else if (selected) {
    styles = selectedStyles;
  }
  return (
    <StyledRadioCardItem sx={styles} {...rest}>
      <Stack
        sx={{
          flexDirection: "row",
          "@media(min-width:600px)": {
            flexDirection: "column",
          },
        }}
        gap={2}
      >
        <img style={{ maxWidth: 50, maxHeight: 50 }} src={icon} alt="" />
        <FormControlLabel
          value={formValue}
          disableTypography
          sx={{ margin: 0, ...theme.typography.h6 }}
          control={
            <Radio
              sx={{ opacity: 0, position: "absolute", width: 0, height: 0 }}
              inputProps={{
                style: {
                  width: 0,
                  height: 0,
                },
              }}
            />
          }
          label={control}
        />
      </Stack>
    </StyledRadioCardItem>
  );
};

export interface RadioCardGroupProps extends RadioGroupProps {
  isYearly: boolean;
}

function RadioCardGroup({ isYearly }: RadioCardGroupProps) {
  const value = useContextSelector(ContextAPI, (v) => v?.radioValue);
  const setValue = useContextSelector(ContextAPI, (v) => v?.setRadioValue);
  const theme = useTheme();

  return (
    <FormControl>
      <RadioGroup aria-labelledby="TODO: Label by the title" name="controlled-radio-buttons-group">
        <Grid
          gap={1}
          container
          display={"flex"}
          sx={{
            "@media(min-width:600px)": {
              flexWrap: "nowrap",
            },
          }}
        >
          {(isYearly ? PlanYearly : PlanRadioMonthly).map((option) => (
            <Grid xs={12} xl={3} key={option.title} overflow={"hidden"} borderRadius={2.5}>
              <RadioCardItem
                onClick={() => setValue?.(option.title)}
                formValue={option.title}
                control={
                  <Box display={"flex"} flexDirection={"column"}>
                    <STypography variant="subtitle1">{option.title}</STypography>{" "}
                    <STypography variant="subtitle2" isSubTitle fontSize={"0.9rem"}>
                      {option.subTitle}
                    </STypography>
                    {isYearly && (
                      <span style={{ fontSize: "0.79rem", color: theme.palette.primary.main }}>2 month free</span>
                    )}
                  </Box>
                }
                icon={option.icon}
                selected={value === option.title}
              />
            </Grid>
          ))}
        </Grid>
      </RadioGroup>
    </FormControl>
  );
}

export default RadioCardGroup;

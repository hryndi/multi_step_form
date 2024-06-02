import {
  Card,
  CardProps,
  FormControl,
  FormControlLabel,
  Checkbox,
  FormGroup,
  RadioGroupProps,
  Stack,
  lighten,
  Box,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import { useTheme } from "@mui/material";
// ContextAPI
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
  onClickFunc?: () => void;
  selected?: boolean;
  disabled?: boolean;
  formValue?: string;
  id?: string;
};

const RadioCardItem = ({
  formValue,
  id,
  onClickFunc,
  control,
  selected,
  disabled,
  ...rest
}: TStyledRadioCardItemProps) => {
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
      <Stack flexDirection={"row"} gap={2}>
        <FormControlLabel
          sx={{ margin: 0, ...theme.typography.h6, gap: 1, width: "100%" }}
          control={<Checkbox checked={selected} onClick={onClickFunc} />}
          label={control}
        />
      </Stack>
    </StyledRadioCardItem>
  );
};

export interface RadioCardGroupProps extends RadioGroupProps {
  //   options: TPlanRadioYearly[] | TPlanRadioMonthly[];
  defaultValue?: string;
}

function CheckBoxCardGroup() {
  const add_onsData = useContextSelector(ContextAPI, (v) => v?.add_onsData);
  const add_onsHandler = useContextSelector(ContextAPI, (v) => v?.add_onsHandler);
  //   const [value, setValue] = useState(defaultValue);
  //   const theme = useTheme();

  //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setValue(event.target.value);
  //   };

  return (
    <FormControl>
      <FormGroup>
        <Grid gap={1} container>
          {add_onsData?.map((option) => (
            <Grid xs={12} key={option.title} overflow={"hidden"} borderRadius={2.5}>
              <RadioCardItem
                onClickFunc={() => add_onsHandler?.(option.id)}
                // id={option.id}
                formValue={option.title}
                control={
                  <Box display={"flex"} flexDirection={"column"} sx={{ pointerEvents: "auto" }}>
                    <STypography variant="subtitle1">{option.title}</STypography>{" "}
                    <STypography variant="subtitle2" isSubTitle fontSize={"0.9rem"}>
                      {option.subTitle}
                    </STypography>
                  </Box>
                }
                selected={option.checked}
              />
            </Grid>
          ))}
        </Grid>
      </FormGroup>
    </FormControl>
  );
}

export default CheckBoxCardGroup;

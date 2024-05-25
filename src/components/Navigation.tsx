import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Navigation = () => {
  return (
    <Stack direction={"row"} justifyContent={"end"} padding={"1rem"} width={"100%"} sx={{ backgroundColor: "#fff" }}>
      <Button variant={"contained"}>Next Step</Button>
    </Stack>
  );
};
export default Navigation;

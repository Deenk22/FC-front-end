import {Box, Typography} from "@mui/material";

export default function Unauthorized() {
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Typography variant="h1" color={"primary"}>
        Vaya! No estás autorizado. Lo siento!.
      </Typography>
    </Box>
  );
}

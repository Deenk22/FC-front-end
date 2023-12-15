import {Box, Typography, styled} from "@mui/material";

export default function IconSection({...iconInfo}) {
  const {title, icon} = iconInfo;

  const Img = styled("img")({
    width: "64px",
    height: "64px",
  });

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      bgcolor={"primary.main"}
      borderRadius={2}
      py={4}
      gap={1}
    >
      <Img src={icon} alt={title} />
      <Typography variant="body1" color={"secondary"}>
        {title}
      </Typography>
    </Box>
  );
}

import {Box, Typography, styled, useTheme} from "@mui/material";

export default function IconSection({...iconInfo}) {
  const theme = useTheme();
  const {title, icon} = iconInfo;

  const Img = styled("img")({
    width: "64px",
    height: "64px",
  });

  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      bgcolor={"primary.main"}
      borderRadius={2}
      py={4}
      gap={1}
      boxShadow={`4px 4px 4px 0px ${theme.palette.primary.opacity}`}
    >
      <Img src={icon} alt={title} />
      <Typography variant="body1" color={"secondary"}>
        {title}
      </Typography>
    </Box>
  );
}

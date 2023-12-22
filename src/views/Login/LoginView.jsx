import {Box, Button, Typography, useTheme} from "@mui/material";
import LoginFormAdv from "../../components/LoginForm/LoginFormAdv";
import RegFormAdv from "../../components/RegForm/RegFormAdv";
import LogAccordion from "../../components/Accordion/LogAccordion";

export default function LoginView({isMember, handleActive}) {
  const theme = useTheme();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      minHeight={"100vh"}
      className="bg-header"
    >
      {isMember ? <LoginFormAdv /> : <RegFormAdv />}
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-around"}
        alignItems={"center"}
        width={"320px"}
        mt={4}
      >
        <Typography variant="body2" color={"primary"}>
          {isMember ? "Aún no tienes una cuenta?" : "Ya tienes una cuenta?"}
        </Typography>
        <Button
          disableTouchRipple
          size="small"
          onClick={handleActive}
          variant="contained"
          color="secondary"
          sx={{
            color: "primary.main",
            backgroundColor: "secondary.main",
            boxShadow: `4px 4px 4px 1px ${theme.palette.primary.opacity}`,
            border: "2px solid",
            borderColor: "primary.main",
            ":hover": {
              color: "secondary.main",
              backgroundColor: "primary.main",
            },
          }}
        >
          {isMember ? "Regístrate" : "Inicia sesión"}
        </Button>
      </Box>
      <LogAccordion />
    </Box>
  );
}

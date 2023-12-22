import {useForm} from "react-hook-form";
import {DevTool} from "@hookform/devtools";
import {zodResolver} from "@hookform/resolvers/zod";
import {loginSchema} from "../../helpers/loginSchema";
import {TextField, Button, Stack, Typography, Box} from "@mui/material";
import {useAuth} from "../../hooks/useAuth";

export default function LoginFormAdv() {
  const {login} = useAuth();
  const form = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const {
    register,
    handleSubmit,
    formState: {errors, isDirty, isValid},
    control,
    reset,
  } = form;

  // Ajustar bien la función reset, para que resetee todos los inputs correctamente.

  // touchedFields es super interesante. Cada vez que el usuario "toque" el input, este reaccionara. Por ejemplo podemos oscurecer el fondo para hacer énfasis en el formulario.
  // console.log(touchedFields);

  // isSubmitSuccessful Podemos decir que si isSubmitSuccessful === true / notificaremos al usuario con React Hot Toast, una notificación.
  // console.log(isSubmitSuccessful);

  const onSubmit = (LoginFormData) => {
    reset();
    login(LoginFormData);
  };

  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Typography
        variant="body1"
        color={"primary"}
        borderBottom={2}
        width={"100%"}
        paddingBottom={1}
        mb={2}
      >
        Login
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack spacing={2} width={320}>
          <TextField
            type="email"
            label="Email"
            variant="outlined"
            {...register("identifier")}
            error={!!errors.email}
            helperText={errors.email?.message}
            autoComplete="email"
          />
          <TextField
            type="password"
            label="Password"
            variant="outlined"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.email?.password}
          />
          <Button
            disabled={!isValid || !isDirty}
            type="submit"
            variant="contained"
            color="primary"
          >
            Iniciar Sesión
          </Button>
        </Stack>
      </form>
      <DevTool control={control} />
    </Box>
  );
}

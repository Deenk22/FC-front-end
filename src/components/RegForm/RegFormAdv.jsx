import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {regSchema} from "../../helpers/regSchema";
import {TextField, Button, Stack, Typography} from "@mui/material";
import axios from "axios";

export default function RegFormAdv() {
  const form = useForm({
    resolver: zodResolver(regSchema),
    mode: "onChange",
  });

  const {
    register,
    handleSubmit,
    formState: {errors, isDirty, isValid},
    reset,
    isSubmitting,
  } = form;

  // Ajustar bien la función reset, para que resetee todos los inputs correctamente.

  // touchedFields es super interesante. Cada vez que el usuario "toque" el input, este reaccionara. Por ejemplo podemos oscurecer el fondo para hacer énfasis en el formulario.
  // console.log(touchedFields);

  // isSubmitSuccessful Podemos decir que si isSubmitSuccessful === true / notificaremos al usuario con React Hot Toast, una notificación.
  // console.log(isSubmitSuccessful);

  const onSubmit = async (regFormData) => {
    console.log(regFormData);
    await axios.post(
      "http://localhost:1337/api/auth/local/register",
      regFormData
    );
    reset();
  };

  return (
    <>
      <Typography variant="body1" color={"primary"} mb={2}>
        Regístrate
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack spacing={2} width={320}>
          <TextField
            type="text"
            label="UserName"
            variant="outlined"
            {...register("username")}
            error={!!errors.username}
            helperText={errors.username?.message}
            autoComplete="off"
          />
          <TextField
            type="email"
            label="Email"
            variant="outlined"
            {...register("email")}
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
            helperText={errors.password?.message}
          />
          <TextField
            type="password"
            label="Confirm Password"
            variant="outlined"
            {...register("confirmPassword")}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
          />
          <Button
            disabled={isSubmitting ? isSubmitting : !isDirty || !isValid}
            type="submit"
            variant="contained"
            color="primary"
          >
            Registrate
          </Button>
        </Stack>
      </form>
    </>
  );
}

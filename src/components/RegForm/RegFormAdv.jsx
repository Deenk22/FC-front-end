import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {regSchema} from "../../helpers/regSchema";
import {TextField, Button, Stack, Typography} from "@mui/material";

export default function RegFormAdv() {
  const form = useForm({
    resolver: zodResolver(regSchema),
    mode: "onChange",
    // defaultValues: {
    //   email: "@gmail.com",
    // },
  });

  const {
    register,
    handleSubmit,
    formState: {errors, isDirty, isValid},
    reset,
    isSubmitting,
  } = form;

  // touchedFields es super interesante. Cada vez que el usuario "toque" el input, este reaccionara. Por ejemplo podemos oscurecer el fondo para hacer énfasis en el formulario.
  // console.log(touchedFields);

  // isSubmitSuccessful Podemos decir que si isSubmitSuccessful === true / notificaremos al usuario con React Hot Toast, una notificación.
  // console.log(isSubmitSuccessful);

  const onSubmit = (formData) => {
    console.log(formData);
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
            type="email"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            type="password"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <TextField
            type="password"
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

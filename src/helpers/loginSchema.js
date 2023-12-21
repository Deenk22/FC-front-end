import {z} from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5, "Recuerda, debe tener al menos 5 caracteres."),
});

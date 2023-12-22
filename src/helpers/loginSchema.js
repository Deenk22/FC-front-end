import {z} from "zod";

export const loginSchema = z.object({
  identifier: z.string().email(),
  password: z.string().min(5, "Recuerda, debe tener al menos 5 caracteres."),
});

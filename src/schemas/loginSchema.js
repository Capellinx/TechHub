import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "Este campo é obrigatório").email(),
  password: z.string().min(1, "Este campo é obrigatório."),
});

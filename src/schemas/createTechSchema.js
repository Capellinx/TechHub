import { z } from "zod";

export const createTechSchema = z.object({
  title: z.string().min(1, "Este campo é obrigatório"),
  status: z.string().min(1, "Este campo é obrigatório."),
});

import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(1, "Este campo é obrigatório"),
    email: z
      .string()
      .min(1, "Este campo é obrigatório")
      .email("Forneça um e-mail valido"),
    password: z
      .string()
      .min(8, "É nesessário ao menos 8 caracteres.")
      .regex(/[0-9]+/, "É necessário pelo menos um numero")
      .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
      .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
      .regex(/[^A-Za-z0-9]/, "É necessário pelo menos um caracter especial"),
    confirmPassword: z.string().min(1, "Este campo é obrigatório"),
    bio: z.string().min(1, "Fale pelo menos algo sobre você"),
    contact: z.string().min(1, "Forneça um contato"),
    course_module: z.string().min(1, "Forneça um modulo"),
  })
  .refine(
    ({ password, confirmPassword }) => {
      return password === confirmPassword;
    },
    {
      message: "As senhas não correspondem",
      path: ["confirmPassword"],
    }
  );

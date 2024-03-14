import { registerSchema } from "../../../schemas/registerSchema";
import { UserContext } from "../../../providers/UserContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useContext } from "react";

import { Input } from "../Input/index";
import { Select } from "../Select/index";

export const RegisterForm = () => {
   const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: zodResolver(registerSchema),
   });
   const { submitUserInfo } = useContext(UserContext);

   const isFormInvalid = Object.keys(errors).length === 0;

   return (
      <form onSubmit={handleSubmit(submitUserInfo)} >
         <h2 className="title1">Crie sua conta</h2>
         <span className="headline">Rapido e grátis, vamos nessa!</span>
         <Input
            label="Nome"
            type="text"
            className="input__default"
            placeholder="Digite Seu Nome"
            error={errors.name}
            {...register("name")}
         />
         <Input
            label="E-mail"
            type="email"
            className="input__default"
            placeholder="Digite Seu Email"
            error={errors.email}
            {...register("email")}
         />
         <Input
            label="Senha"
            type="password"
            className="input__default"
            placeholder="Digite Sua Senha"
            error={errors.password}
            {...register("password")}
         />

         <Input
            label="Confirmar Senha"
            type="password"
            className="input__default"
            placeholder="Digite Novamente Sua Senha"
            error={errors.confirmPassword}
            {...register("confirmPassword")}
         />

         <Input
            label="Bio"
            type="text"
            className="input__default"
            placeholder="Fale Sobre Vocẽ"
            error={errors.bio}
            {...register("bio")}
         />
         <Input
            label="Contato"
            type="text"
            className="input__default"
            placeholder="Opção de Contato"
            error={errors.contact}
            {...register("contact")}
         />
         <Select
            label="Selecionar módulo"
            error={errors.course_module}
            options={[
               {
                  value: "Primeiro Módulo (Introdução a programação)",
                  label: "Primeiro Módulo"
               },
               {
                  value: "Segundo Módulo (Front-end Intermediário)",
                  label: "Segundo Módulo"
               },
               {
                  value: "Terceiro Módulo (Front-end Avançado)",
                  label: "Terceiro Módulo"
               },
               {
                  value: "Quarto Módulo (Introdução ao back-end)",
                  label: "Quarto Módulo"
               },
               {
                  value: "Quinto Módulo (Back-end intermediário",
                  label: "Quinto Módulo"
               },
               {
                  value: "Sexto Módulo (Back-end avançado)",
                  label: "Sexto Módulo"
               },
            ]}
            {...register("course_module")}
         />
         <button
            type="submit"
            className={!isFormInvalid ? "btn__close" : "btn__default"}
            disabled={!isFormInvalid}
         >Cadastrar
         </button>
      </form>
   );
}
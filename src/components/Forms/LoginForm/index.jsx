import { UserContext } from "../../../providers/UserContext";
import { loginSchema } from "../../../schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useContext } from "react";

import { Input } from "../Input/index";

export const LoginForm = () => {
   const { handleSubmit, register, formState: { errors } } = useForm({
      resolver: zodResolver(loginSchema)
   });
   const { handleUserLogin } = useContext(UserContext);

   return (
      <form onSubmit={handleSubmit(handleUserLogin)}>
         <Input
            type="email"
            label="Email"
            placeholder="E-mail"
            className="input__default"
            error={errors.email}
            {...register("email")}
         />
         <Input
            type="password"
            label="Senha"
            placeholder="***********"
            className="input__default"
            error={errors.password}
            {...register("password")}
         />
         <button
            className="btn__default"
            type="submit">Entrar</button>
      </form>
   );
}
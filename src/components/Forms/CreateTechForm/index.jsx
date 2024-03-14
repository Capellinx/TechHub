import { createTechSchema } from "../../../schemas/createTechSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import { Input } from "../Input/index";
import { Select } from "../Select";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";

import styles from "./styles.module.scss";

export const CreateTechForm = () => {
   const { handleSubmit, register, formState: { errors } } = useForm({
      resolver: zodResolver(createTechSchema)
   })
   const { registerTech } = useContext(TechContext);

   return (
      <form onSubmit={handleSubmit(registerTech)}>
         <Input
            type="text"
            label="Nome"
            placeholder=""
            className="input__default"
            error={errors.title}
            {...register("title")}
         />
         <Select
            label="Selecionar status"
            error={errors.status}
            options={[
               {
                  value: "Iniciante",
                  label: "Iniciante"
               },
               {
                  value: "Intermediário",
                  label: "Intermediário"
               },
               {
                  value: "Avançado",
                  label: "Avançado"
               }
            ]}
            {...register("status")}
         />
         <button type="submit" className="btn__default">Cadastrar Tecnologia</button>
      </form>
   )
}
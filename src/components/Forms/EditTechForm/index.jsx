import { useForm } from "react-hook-form";
import { Input } from "../Input/index";
import { Select } from "../Select";

import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";

export const EditTechForm = () => {
   const { editTech, updateStatusTech } = useContext(TechContext);

   const { handleSubmit, register, formState: { errors } } = useForm({
      values: {
         title: editTech.title,
         status: editTech.status
      }
   })

   const getIdToUpdate = (formData) => {
      updateStatusTech(formData)
   }

   return (
      <form onSubmit={handleSubmit(getIdToUpdate)}>
         <Input
            type="text"
            label="Nome"
            placeholder=""
            disabled
            className="input__default"
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
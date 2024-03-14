import { createContext, useContext, useState } from "react";
import { api } from "../services";
import { UserContext } from "./UserContext";
import { toast } from "react-toastify";


export const TechContext = createContext({})

export const TechProvider = ({ children }) => {
   const { setTechList, techList } = useContext(UserContext);

   const [isOpen, setIsOpen] = useState(false);
   const [editTech, setEditTech] = useState(null);

   const registerTech = (techData) => {
      createTech(techData);
      setIsOpen(false);
   }

   const getIdTechToRemove = (techId) => {
      deleteTech(techId);
   }

   const createTech = async (payload) => {
      try {
         const token = localStorage.getItem("@kenziehub:@TOKEN");

         const { data } = await api.post("/users/techs", payload, {
            headers: {
               Authorization: `Bearer ${token}`
            }
         });
         const newTechList = [...techList, data];

         setTechList(newTechList);
         toast.success("Tech criada com sucesso!");
      } catch (error) {
         console.log(error);
      }
   }

   const deleteTech = async (techId) => {
      try {
         const token = localStorage.getItem("@kenziehub:@TOKEN");

         await api.delete(`/users/techs/${techId}`, {
            headers: {
               Authorization: `Bearer ${token}`
            }
         });
         const newTechList = techList.filter(tech => tech.id !== techId)
         setTechList(newTechList);
         toast.success("Tech deletada com sucesso!");
      } catch (error) {
         console.log(error);
      }
   }

   const updateStatusTech = async (payload) => {
      try {
         const token = localStorage.getItem("@kenziehub:@TOKEN");

         const { data } = await api.put(`/users/techs/${editTech.id}`, payload, {
            headers: {
               Authorization: `Bearer ${token}`
            }
         });
         const newTechList = techList.map(tech => {
            if (tech.id === editTech.id) {
               return data;
            } else {
               return tech;
            }
         })
         setTechList(newTechList);
         setEditTech(null);
         toast.success("Tech atualizada com sucesso!");
      } catch (error) {
         console.log(error);
      }
   }

   return (
      <TechContext.Provider value={{
         setIsOpen,
         isOpen,
         registerTech,
         getIdTechToRemove,
         setEditTech,
         editTech,
         updateStatusTech
      }}>
         {children}
      </TechContext.Provider>
   )
}
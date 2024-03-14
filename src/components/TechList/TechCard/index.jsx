
import { useContext } from "react";
import styles from "./styles.module.scss";
import { FaTrash, FaPen } from "react-icons/fa";
import { TechContext } from "../../../providers/TechContext";

export const TechCard = ({ tech }) => {
   const { getIdTechToRemove, setEditTech } = useContext(TechContext);

   const handleRemove = (techId) => {
      getIdTechToRemove(techId);
   }

   return (
      <>
         <li className={styles.list}>
            <p>{tech.title}</p>
            <div>
               <span>{tech.status}</span>
               <FaPen onClick={() => setEditTech(tech)} />
               <FaTrash onClick={() => handleRemove(tech.id)} />
            </div>
         </li>
      </>
   );
}

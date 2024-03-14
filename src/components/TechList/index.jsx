
import { useContext } from "react";
import { TechCard } from "./TechCard/index";
import styles from "./styles.module.scss";
import { UserContext } from "../../providers/UserContext";

export const TechList = () => {
   const { techList } = useContext(UserContext);

   return (
      <>
         <ul className={styles.container}>
            {techList.map((tech) => <TechCard key={tech.id} tech={tech} />)}
         </ul>
      </>
   );
}

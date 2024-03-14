import { RegisterForm } from "../../components/Forms/RegisterForm/index";
import { Link } from "react-router-dom";

import KenzieHub from "../../assets/Logo.svg"
import styles from "./styles.module.scss"

export const Register = () => {
   return (
      <>
         <section className={styles.container}>
            <div className={styles.header}>
               <img src={KenzieHub} alt="" />
               <Link to={"/"} className={styles.btnBack}>Voltar</Link>
            </div>
            <div className="cardForm">
               <RegisterForm />
            </div>
         </section>
      </>
   );
}

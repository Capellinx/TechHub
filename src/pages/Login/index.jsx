import { LoginForm } from "../../components/Forms/LoginForm/index";
import { Link } from "react-router-dom";

import logo from "../../assets/Logo.svg";
import styles from "./styles.module.scss";

export const Login = () => {
   return (
      <>
         <section className={styles.container}>
            <div className={styles.header}>
               <img src={logo} alt="" />
            </div>
            <div className="cardForm">
               <h1 className="title1">Login</h1>
               <LoginForm />
               <div className={styles.footer}>
                  <span className="headlineBold">Ainda não possui uma conta?</span>
                  <Link
                     to={"/register"}
                     className="btn__disabled ">Cadastre-se</Link>
               </div>
            </div>
         </section>
      </>
   )
}

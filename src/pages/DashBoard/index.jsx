import { UserContext } from "../../providers/UserContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa"

import { EditTechMoal } from "../../components/Modals/EditTechModal/index";
import { CreateTechModal } from "../../components/Modals/CreateTechModal";
import { TechList } from "../../components/TechList/index";
import { TechContext } from "../../providers/TechContext";

import kenzieHub from "../../assets/Logo.svg"
import styles from "./styles.module.scss"

export const DashBoard = () => {
   const { userLogout, user, techList } = useContext(UserContext);
   const { isOpen, setIsOpen, editTech, setEditTech } = useContext(TechContext);

   const handleClose = () => setIsOpen(false);
   const handleCloseEdit = () => setEditTech(false);

   return (
      <>
         <header className={styles.header}>
            <img src={kenzieHub} alt="Logo kenziehub" />
            <div className="btnContainer">
               <Link
                  to={"/"}
                  className="btn__closeBoard"
                  onClick={userLogout}>Sair
               </Link>
            </div>
         </header>
         <main>
            <section className={styles.info__user}>
               <div>
                  <p className="title1">Olá, {user?.name}</p>
                  <span className="headlineBold">{user?.course_module}</span>
               </div>
            </section>

            <section className={styles.view_techs}>
               <div className={styles.view_content}>
                  <div className={styles.view_header}>
                     <h3 className="title1">Tecnologias</h3>
                     <button onClick={() => setIsOpen(true)}>
                        <FaPlus />
                     </button>
                  </div>
                  <div className={styles.view_list_techs}>
                     {techList.length == 0
                        ?
                        <div
                           className={styles.view_empty_tech}
                           onClick={() => setIsOpen(true)}>
                           <h2 className="title1">
                              Nenhuma tecnologia cadastrada
                           </h2>
                           <span className="headline">Registrar nova tecnologia</span>
                        </div>
                        :
                        <TechList />
                     }
                  </div>
               </div>
            </section>

         </main>

         {isOpen
            ?
            <CreateTechModal handleClose={handleClose} />
            : null}
         {editTech
            ?
            <EditTechMoal handleCloseEdit={handleCloseEdit} />
            : null}
      </>
   );
}

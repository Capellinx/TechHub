
import { children, useEffect, useRef } from "react";
import { CreateTechForm } from "../../Forms/CreateTechForm/index";

export const CreateTechModal = ({ children, handleClose }) => {

   const modalRef = useRef(null);

   useEffect(() => {
      const handleOutClick = (event) => {
         if (!modalRef.current?.contains(event.target)) {
            handleClose();
         }
      };

      const handleEscapeClick = (event) => {
         if (event.key === "Escape") {
            handleClose();
         }
      };

      window.addEventListener("mousedown", handleOutClick);
      window.addEventListener("keydown", handleEscapeClick);

      return () => {
         window.removeEventListener("mousedown", handleOutClick);
         window.removeEventListener("keydown", handleEscapeClick);
      };
   }, []);

   return (
      <div role="dialog" className="modalOverlay">
         <div ref={modalRef} className="modalBox">
            <div className="modalHeader">
               <p className="title2">Cadastrar Tecnologia</p>
               <button onClick={() => handleClose()}>X</button>
            </div>
            <div className="modalBody">
               <CreateTechForm />
            </div>
         </div>
      </div>
   )
}
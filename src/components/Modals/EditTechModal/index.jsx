
import { children, useContext, useEffect, useRef } from "react";
import { EditTechForm } from "../../Forms/EditTechForm";
import { TechContext } from "../../../providers/TechContext";

export const EditTechMoal = ({ children }) => {
   const { setEditTech } = useContext(TechContext);

   const modalRef = useRef(null);

   useEffect(() => {
      const handleOutClick = (event) => {
         if (!modalRef.current?.contains(event.target)) {
            setEditTech(null);
         }
      };

      const handleEscapeClick = (event) => {
         if (event.key === "Escape") {
            setEditTech(null);
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
               <p className="title2">Tecnologia Detalhes</p>
               <button onClick={() => setEditTech(null)}>X</button>
            </div>
            <div className="modalBody">
               <EditTechForm />
            </div>
         </div>
      </div>
   )
}
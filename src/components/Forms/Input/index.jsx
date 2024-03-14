import { forwardRef } from "react";
import styles from './styles.module.scss'

export const Input = forwardRef(({ label, error, ...rest }, ref) => {
   return (
      <>
         <div className={styles.container}>
            <label className="headline">
               {label}
               <input ref={ref} {...rest} />
               {error ? <p>{error.message}</p> : null}
            </label>
         </div>
      </>
   );
})
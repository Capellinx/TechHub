import { forwardRef } from "react";
import styles from './styles.module.scss'

export const Select = forwardRef(({ label, error, options, ...rest }, ref) => {
   return (
      <>
         <div className={styles.container}>
            <label className="headline">
               {label}
               <select ref={ref} {...rest} className="input__default">
                  <option disabled value="Selecionar">Selecionar</option>
                  {options.map(option => (
                     <option key={option.value} value={option.value}>
                        {option.label}
                     </option>
                  ))}
               </select>
               {error ? <p>{error.message}</p> : null}
            </label>
         </div>
      </>
   );
});

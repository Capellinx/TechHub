import styles from './styles.module.scss'
import error404 from '../../assets/error-404.png'
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
   return (
      <>
         <div className={styles.container}>
            <img src={error404} alt="Erro image" />
            <p className='title1'>Page Not Afound</p>
            <Link to={'/'} className='btn__default'>Voltar</Link>
         </div>
      </>
   );

}

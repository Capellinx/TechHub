import { RoutesMain } from './routes/RoutesMain';
import { ToastContainer } from 'react-toastify';
import { useContext } from 'react';
import { UserContext } from './providers/UserContext';

import 'react-toastify/dist/ReactToastify.css';
import './styles/index.scss'

export const App = () => {
  const { loading } = useContext(UserContext);
  const spinnerCfg = { left: "45%", transform: "translateY(145%)" };

  return (
    <>
      <ToastContainer theme='dark' />
      < RoutesMain />
    </>
  )
}
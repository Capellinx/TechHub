import { RoutesMain } from './routes/RoutesMain';
import { useContext } from 'react';
import { UserContext } from './providers/UserContext';

import './styles/index.scss'

export const App = () => {
  const { loading } = useContext(UserContext);
  const spinnerCfg = { left: "45%", transform: "translateY(145%)" };

  return (
    <>
      < RoutesMain />
    </>
  )
}
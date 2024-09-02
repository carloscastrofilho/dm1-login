
import StackerNavigation from './src/components/StackerNavigation';
import AuthContext from "./src/contexts/auth";
import { useContext } from 'react';
import TabNavigation from './src/components/TabNavigation';

const Routes: React.FC = () => {
  const { signed, token } = useContext(AuthContext);
  return (
    <>
     { signed == false ? <StackerNavigation /> : <TabNavigation />  }
    </>
  );
}

export default  Routes;

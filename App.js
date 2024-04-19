import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';

export default function App() {
  return (

    <>
      <StatusBar 
        barStyle="light-content"
        backgroundColor='transparente'
        translucent
      />
      
      <Home/>
    </>
    
  );
}



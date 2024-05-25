import RouteStack from './src/Constants/Routes/Stack/Stack';
import UserGreating from './UserGreating.tsx' 

export default function App() {
  return (
    <RouteStack />
    <>
      <UserGreating isCommented={true} username="Nothing here!"/>
      </>
  );
}

export default App
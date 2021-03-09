import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Shipment from './component/Shipment/Shipment';
import { createContext, useState } from 'react';
export const CategoryContext = createContext();
function App() {
  const [count,setCount] = useState(0);
  return (
    <CategoryContext.Provider value={count}>
      <Header count={count} setCount={setCount}></Header>
      <Home></Home>
      <Shipment count={count} setCount={setCount}></Shipment>
    </CategoryContext.Provider>
  );
}

export default App;

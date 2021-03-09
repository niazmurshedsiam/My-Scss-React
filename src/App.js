import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Shipment from './component/Shipment/Shipment';
import { createContext, useState } from 'react';
export const CategoryContext = createContext();
function App() {
  const [category,setCategory] = useState('Laptop');
  return (
    <CategoryContext.Provider value={[category,setCategory]}>
      <Header></Header>
      <Home></Home>
      <Shipment></Shipment>
    </CategoryContext.Provider>
  );
}

export default App;

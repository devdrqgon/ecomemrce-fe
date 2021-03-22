import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductsOverview from './components/productsOverviewComp/productsOverview';
import { Product } from "./models/product"
import SinglePage from './components/singlePageHome/singlePageComp';
import ShoppingCard from './components/shoppingCardComponent/shoppingCard.container';


const App: React.FC = () => {



return (
    <div className="App">
      <ShoppingCard/>             
    </div>


  );
}

export default App;

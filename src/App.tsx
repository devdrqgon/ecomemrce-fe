import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductsOverview from './components/productsOverviewComp/productsOverview';
import { Product } from "./models/product"
import SinglePage from './components/singlePageHome/singlePageComp';


const App: React.FC = () => {



return (
    <div className="App">
      <SinglePage/>             
    </div>


  );
}

export default App;

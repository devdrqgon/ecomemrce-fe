import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductsOverview from './productsOverviewComp/productsOverview';
import { Product } from "./models/product"


const App: React.FC = () => {

const Omo=new Product("1","Omo Matic",5)
const Dixan=new Product("15","Dixan",24)
const ProductsList:Product[]= [Omo, Dixan]

return (
    <div className="App">
      <ProductsOverview _productsOverviewProp={ProductsList}/>                
    </div>


  );
}

export default App;

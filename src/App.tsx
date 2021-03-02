import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductsOverview from './components/productsOverviewComp/productsOverview';
import { Product } from "./models/product"


const App: React.FC = () => {

const Omo=new Product("1","Omo Matic", 5)
const Dixan=new Product("15","Dixan", 24)
const Nadhif=new Product ("F534HG", "Nadhif", 7)
const ProductsList:Product[]= [Omo, Dixan, Nadhif]

return (
    <div className="App">
      <ProductsOverview _productsOverviewProp={ProductsList}/>                
    </div>


  );
}

export default App;

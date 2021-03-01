import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingCard from './shoppingCardComponent/shoppingCard.container';
import { Product } from "./models/product"

function App() {
const Omo=new Product("1","Omo Matic",5)
const Dixan=new Product("15","Dixan",24)
const ProductsList:Product[]= [Omo, Dixan]
  return (
    <div className="App">
      <ShoppingCard ProductsListProp={ProductsList}/>
    </div>
  );
}

export default App;

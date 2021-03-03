import React, { useState } from 'react';
import styles from "./productsOverview.module.css"
import { Product } from "../../models/product"
import App from '../../App';
import ProductItem from '../productItemComp/productItemComp';


interface ProductsOverviewProps {
    _productsProp: Product[]
}

const ProductsOverview: React.FC<ProductsOverviewProps> = ({ _productsProp }) => {
   
    const [selectedFilter,setSelectedFilter]= useState<String>('none')

    function filterProducts(arrayProducts: Product[]){
        
        //if no filter is selected, we display all products
        if (selectedFilter === 'none') {
            return arrayProducts
        }
        else{
            let filteredProducts: Product[] = []
            //we display only products that have category === selectedFilter variable
            arrayProducts.forEach(p=> {
                if(selectedFilter === p.category){
                    filteredProducts.push(p)
                }
            })
            return filteredProducts
        }
    
    }

    let displayedProducts = filterProducts(_productsProp)

    return (
        <div style={{ borderRight: 'solid red 1px' }}>
            <div className={styles.CategoryFiltersContainer}>
            <button onClick={()=> setSelectedFilter('none')}> reset </button>
                <button onClick={()=> setSelectedFilter('Cleaning')}> Cleaning </button>
                <button onClick={()=> setSelectedFilter('Food')}> Food </button>
                <button onClick={()=> setSelectedFilter('Sports')}> Sports </button>
            </div>
            <div>
                Selected Tag: {selectedFilter}
            </div>
            <h1> Products Overview </h1>

            <div className={styles.ProductsOverviewContainer}>
                {displayedProducts.map(p =>
                    <ProductItem _productProp={p} />
                )}
            </div>
        </div>
    )
}

export default ProductsOverview

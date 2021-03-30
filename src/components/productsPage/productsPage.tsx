import React from 'react'
import styles from './productsPage.module.css'
import ProductItem from '../common/productItem/productItem'
import { connect } from 'react-redux'

const ProductsPage: React.FC= () => {
   
    return(
        <div className={styles.ProductsListContainer}>    
            {/* {
                productsInventory.map(p=>
                    <ProductItem product={p}/>
                )
            } */}
            <h1> Under construction </h1>
        </div>
    )
}


export default ProductsPage
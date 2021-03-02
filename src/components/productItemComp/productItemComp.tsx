import React from 'react'
import {Product} from '../../models/product'
import styles from './productItemComp.module.css'


interface ProductItemProps{
    _productProp:Product
}

const ProductItem: React.FC <ProductItemProps>= ({ _productProp })=>{
    return(
        <div className={styles.ProductItemContainer}>
            <div style={{marginRight:'25px'}}>
            <strong> Name:{_productProp.name}</strong>
        </div>
            <div>
                
                <strong>Price:{_productProp.price}</strong>
                <button>Add to Cart</button>
            </div>
        </div>

    )
}

export default ProductItem
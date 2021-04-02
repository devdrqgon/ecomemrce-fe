import React from 'react'
import styles from './productsPage.module.css'
import ProductItem from '../common/productItem/productItem'
import { useSelector } from 'react-redux'
import { uuid } from 'uuidv4';
import { addProductToScACTIONCREATOR } from '../../store/actionCreators';
const ProductsPage: React.FC= () => {
    //this is how you read certain data from your store 
    const inventoryProducts: readonly IProduct[] = useSelector(
        (state: AppState) => state.inventoryProducts
      )

    return(
        <div className={styles.ProductsListContainer}>    
            {
                inventoryProducts.map(p=>
                    <ProductItem key={uuid()} productProp={p} addProductProp={addProductToScACTIONCREATOR}/>
                )
            }
        </div>
    )
}


export default ProductsPage
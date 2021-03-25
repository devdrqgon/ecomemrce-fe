import React from 'react'
import styles from './productsPage.module.css'
import { Product } from '../../models/product'
import ProductItem from '../common/productItem/productItem'

interface ProductsPageProps {
    productsListProp: Product[]
}
const ProductsPage: React.FC<ProductsPageProps> = ({productsListProp}) => {
    return(
        <div className={styles.ProductsListContainer}>
                
            {
                productsListProp.map(p=>
                <ProductItem nameProduct={p.name} priceProduct={p.price}/>
                    
                )
            }
        </div>
    )
}
export default ProductsPage
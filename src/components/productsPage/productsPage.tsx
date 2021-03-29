import React from 'react'
import styles from './productsPage.module.css'
import { Product } from '../../models/product'
import ProductItem from '../common/productItem/productItem'
import { connect } from 'react-redux'
import { AppState } from '../../store'

interface ProductsPageProps {
    productsInventory: Product[]
}
const ProductsPage: React.FC<ProductsPageProps>= ({productsInventory}) => {
   
    return(
        <div className={styles.ProductsListContainer}>    
            {
                productsInventory.map(p=>
                    <ProductItem product={p}/>
                )
            }
        </div>
    )
}

const mapStateToProps = ({ state }: AppState) => {
    const { productsInventory } = state;
    return { productsInventory };
}

export default connect(mapStateToProps)(ProductsPage);
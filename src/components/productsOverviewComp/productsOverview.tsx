import React from 'react'; 
import styles from "./productsOverview.module.css" 
import { Product } from "../../models/product" 
import App from '../../App'; 
import ProductItem from '../productItemComp/productItemComp';

 
interface ProductsOverviewProps {
    _productsOverviewProp: Product[]
}

const ProductsOverview: React.FC<ProductsOverviewProps> = ({ _productsOverviewProp }) => {
    return (
        <div>
            <h1> Products Overview </h1>
            <div className={styles.ProductsOverviewContainer}>
                {_productsOverviewProp.map(p =>
                   <ProductItem _productProp={p}/>
                )}
            </div>
        </div>
    )
}

export default ProductsOverview
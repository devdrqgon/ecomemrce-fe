import React from 'react'; //
import styles from "./productsOverview.module.css" //
import { Product } from "../models/product" //
import App from '../App'; //

//declaration of an interface called ProductsOverviewProps 
interface ProductsOverviewProps {
    _productsOverviewProp: Product[]
}
//declaration of a variable with type React functional component that takes on Props as an input and returns an array of Products
const ProductsOverview: React.FC<ProductsOverviewProps> = ({ _productsOverviewProp }) => {
    return (
        <div>
            <h1> Products Overview </h1>
            <div className={styles.ProductsOverviewContainer}>
                {_productsOverviewProp.map(p =>
                    <div className={styles.ProductItemContainer}>
                        <div style={{marginRight: '25px'}}>
                            name: {p.name}
                        </div>
                        <div>
                            price: {p.price}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductsOverview
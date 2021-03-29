import React from "react"
import styles from "./shoppingCart.module.css"
import { Product } from "../../../models/product";


interface ProductItemProps{
    product: Product,
}


const ShoppingCartItem: React.FC<ProductItemProps> = ({product}) => {

return(
    
    <div className={styles.itemContainer}>
        <div className={styles.imgStyle}>

        </div>
        <div className={styles.detailsStyle}>
            name : {product.name}
        </div>
        <div className={styles.itemPriceStyle}>
            price: {product.price}
        </div>
        
    </div>
)
}



export default ShoppingCartItem

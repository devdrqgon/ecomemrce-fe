import React from "react"
import styles from "./productItem.module.css"

interface ProductItemProps{
    nameProduct: string
    priceProduct: number
}


const ProductItem: React.FC<ProductItemProps> = ({nameProduct, priceProduct}) => {

return(
    
    <div className={styles.itemContainer}>
        <div className={styles.imgStyle}>

        </div>
        <div className={styles.detailsStyle}>
            name : {nameProduct}
        </div>
        <div className={styles.itemPriceStyle}>
            price: {priceProduct}
        </div>
    </div>
)
}
export default ProductItem
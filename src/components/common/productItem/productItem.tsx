import React from "react"
import styles from "./productItem.module.css"
import { Button } from "antd";



const ProductItem: React.FC = () => {

return(
    
    <div className={styles.itemContainer}>
        <div className={styles.imgStyle}>

        </div>
        <div className={styles.detailsStyle}>
            name :
        </div>
        <div className={styles.itemPriceStyle}>
            price: 
        </div>
        <div>
           <Button  type='primary'> Add to card</Button>
        </div>
    </div>
)
}



export default ProductItem

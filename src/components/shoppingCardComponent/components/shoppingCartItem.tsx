import React from "react"
import styles from "./shoppingCart.module.css"
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"


interface ProductItemProps{
    product: IProduct,
    removeProduct: (article: IProduct) => void
}


const ShoppingCartItem: React.FC<ProductItemProps> = ({product, removeProduct}) => {
    const dispatch: Dispatch<any> = useDispatch()
    const deleteProduct = React.useCallback(
        (article: IProduct) => dispatch(removeProduct(article)),
        [dispatch, removeProduct]
      )
return(
    
    <div className={styles.itemContainer}>
        <div className={styles.imgStyle}>

        </div>
        <div className={styles.detailsStyle}>
            name : {product.title}
        </div>
        <div className={styles.itemPriceStyle}>
            price: {product.price}
        </div>
        <div>
        <button onClick={() => deleteProduct(product)}>Delete</button>
        </div>
        
    </div>
)
}



export default ShoppingCartItem

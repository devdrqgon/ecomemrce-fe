import React from "react"
import styles from "./shoppingCart.module.css"
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"
import { Button } from "antd"

interface ProductItemProps{
    scItem: IShoppingCartItem,
    decreaseQuantityProp: (article: IShoppingCartItem) => void,
    increaseQuantityProp: (article: IShoppingCartItem) => void,
    removeSCItemProp: (article: IShoppingCartItem) => void,
}


const ShoppingCartItem: React.FC<ProductItemProps> = ({scItem, decreaseQuantityProp,increaseQuantityProp,removeSCItemProp}) => {
    const dispatch: Dispatch<any> = useDispatch()
    //deleteProduct is a function object that has inside a func that dispatches our action creator
    const decreaseQuantity = (article: IShoppingCartItem) => dispatch(decreaseQuantityProp(article))
    const increaseQuantity = (article: IShoppingCartItem) => dispatch(increaseQuantityProp(article))
    const removeSCItem = (article: IShoppingCartItem) => dispatch(removeSCItemProp(article))

    return(
    <div className={styles.itemContainer}>
        <div className={styles.imgStyle}>
        </div>
        <div className={styles.detailsStyle}>
            <div>
                name : {scItem.title}
            </div>
            <div className={styles.quanityStyle}>
               <div>
               quanity
               </div>
               <div>
                {scItem.quanity}
               </div>
               <div>
                   <button onClick={() => decreaseQuantity(scItem)} > - </button>
               </div>
               <div>
                   <button onClick={() => increaseQuantity(scItem)}> +</button>
               </div>
            </div>
        </div>
        <div className={styles.itemPriceStyle}>
            price: {scItem.price * scItem.quanity}
        </div>
        <div>
            <Button onClick={() => removeSCItem(scItem)}> Remove Item</Button>
        </div>
    </div>
)
}



export default ShoppingCartItem

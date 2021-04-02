import React from "react"
import styles from "./shoppingCart.module.css"
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"

interface ProductItemProps{
    scItem: IShoppingCartItem,
    removeProductProp: (article: IShoppingCartItem) => void
}


const ShoppingCartItem: React.FC<ProductItemProps> = ({scItem, removeProductProp}) => {
    const dispatch: Dispatch<any> = useDispatch()
    //deleteProduct is a function object that has inside a func that dispatches our action creator
    const deleteProduct = (article: IShoppingCartItem) => dispatch(removeProductProp(article))
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
                <input width={'5px'} type="text"/>
               </div>
               <div>
                   <button> - </button>
               </div>
               <div>
                   <button> +</button>
               </div>
            </div>
        </div>
        <div className={styles.itemPriceStyle}>
            price: {scItem.price}
        </div>
    </div>
)
}



export default ShoppingCartItem

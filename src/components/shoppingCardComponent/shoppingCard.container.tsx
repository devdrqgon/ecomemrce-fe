import React from "react"
import { shallowEqual, useSelector } from "react-redux"
import ShoppingCartItem from "./components/shoppingCartItem"
import EmptyShoppingCard from "./emptyShoppingCard"
import styles from "./shoppingCard.module.css"
import { addProduct, removeProduct} from "../../store/actionCreators"




const ShoppingCardPage: React.FC= () => {
    //this is how you read certain data from your store 
    const products: readonly IProduct[] = useSelector(
        (state: AppState) => state.products,
      )

     
   
    //updating checkout info
    function calculateSum(_inputList: readonly IProduct[]){
        let sum = 0
        products.forEach(p => {
            sum = sum + p.price
        });
        return sum
    }
    let itemsCount = products.length
    let totalprice = calculateSum(products)

    //output
    return (
       <div>
           {products.length> 0 ? 
             <div className={styles.shoppingCardPageContainer}>
             <div className={styles.shoppingCardContainer}>
                 <div className={styles.headerContainer}>
                     <div className={styles.titleStyle}>
                         shopping Card
                     </div>
                     <div className={styles.priceStyle}>
                         price
                     </div>
                 </div>
                 <div className={styles.shoppingCardItemsContainer}>
                     {
                         products.map(p => 
                             <ShoppingCartItem product={p} removeProductProp={removeProduct} />   
                         )
                     }
                 </div>
             </div>
             <div className={styles.checkoutContainer}>
                 <div>
                     Subtotal ({itemsCount}): {totalprice} euros
                 </div>
                 <div>
                     <button> Checkout </button>
                 </div>
             </div>
             
         </div> 
         :
        <EmptyShoppingCard/>
        }
       </div>
    )
}

export default ShoppingCardPage;




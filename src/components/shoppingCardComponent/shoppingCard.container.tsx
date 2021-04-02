import React from "react"
import { shallowEqual, useSelector } from "react-redux"
import ShoppingCartItem from "./components/shoppingCartItem"
import EmptyShoppingCard from "./emptyShoppingCard"
import styles from "./shoppingCard.module.css"
import {  removeSCItem} from "../../store/actionCreators"
import { uuid } from "uuidv4"




const ShoppingCardPage: React.FC= () => {
    //this is how you read certain data from your store 
    const shoppingCartItems: readonly IShoppingCartItem[] = useSelector(
        (state: AppState) => state.shoppingCartItems,
        shallowEqual
      )

     
   
    //updating checkout info
    function calculateSum(_inputList: readonly IShoppingCartItem[]){
        let sum = 0
        shoppingCartItems.forEach(p => {
            sum = sum + (p.price * p.quanity)
        });
        return sum
    }

    function calculateItemsCount(_inputList: readonly IShoppingCartItem[]){
        let sum = 0
        shoppingCartItems.forEach(p => {
            sum = sum + ( p.quanity)
        });
        return sum
    }
    let itemsCount = calculateItemsCount(shoppingCartItems)
    let totalprice = calculateSum(shoppingCartItems)

    //output
    return (
       <div>
           {shoppingCartItems.length> 0 ? 
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
                         shoppingCartItems.map(p => 
                             <ShoppingCartItem key={uuid()} scItem={p} removeProductProp={removeSCItem} />   
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




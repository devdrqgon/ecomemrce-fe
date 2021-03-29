import React from "react"
import { connect } from "react-redux"
import { Product } from "../../models/product"
import { AppState } from "../../store"
import ShoppingCartItem from "./components/shoppingCartItem"
import EmptyShoppingCard from "./emptyShoppingCard"
import styles from "./shoppingCard.module.css"

interface ShoppingCardPageProps{
    shoppingCardProducts: Product[]
}


const ShoppingCardPage: React.FC<ShoppingCardPageProps>= ({shoppingCardProducts}) => {
    //Daten 
   
    
    function calculateSum(_inputList: Product[]){
        let sum = 0
        shoppingCardProducts.forEach(p => {
            sum = sum + p.price
        });
        return sum
    }
    let itemsCount = shoppingCardProducts.length
    let totalprice = calculateSum(shoppingCardProducts)

    //output
    return (
       <div>
           {shoppingCardProducts.length> 0 ? 
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
                         shoppingCardProducts.map(p => 
                             <ShoppingCartItem product={p} />   
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
const mapStateToProps = ({ state }: AppState) => {
    const { shoppingCardProducts } = state;
    return { shoppingCardProducts };
}

export default connect(mapStateToProps)(ShoppingCardPage);




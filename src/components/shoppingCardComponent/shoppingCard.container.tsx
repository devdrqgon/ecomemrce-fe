import React from "react"
import styles from "./shoppingCard.module.css"


interface ShoppingCardProps {
   
}

const ShoppingCardPage: React.FC<ShoppingCardProps> = ({}) => {
    return (
        <div className={styles.shoppingCardPageContainer}>
            <div className={styles.productsListContainer}>
                shoppingCard
            </div>
            <div className={styles.checkoutContainer}>
                checkout
            </div>
            
        </div>
    )
}

export default ShoppingCardPage


// {ProductsListProp.map(p =>
//     <div className={styles.shoppingCardContianer}>
//         <div style={{ marginRight: '50px' }}>
//             Name: {p.name}
//         </div>
//         <div>
//             Price:  {p.price}
//         </div>
//     </div>
// )}
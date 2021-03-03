import React from "react"
import styles from "./shoppingCard.module.css"
import { Product } from "../../models/product"


interface ShoppingCardProps {
    ProductsListProp: Product[]
}

const ShoppingCard: React.FC<ShoppingCardProps> = ({ ProductsListProp }) => {
    return (
        <div>
            <div style={{ marginLeft: '100px', borderBottom: 'solid 1px black' }}>
                <h4> Shopping Card</h4>
            </div>
            {ProductsListProp.map(p =>
                <div className={styles.shoppingCardContianer}>
                    <div style={{ marginRight: '50px' }}>
                        Name: {p.name}
                    </div>
                    <div>
                        Price:  {p.price}
                    </div>
                </div>
            )}
        </div>
    )
}

export default ShoppingCard
import React from "react"
import styles from "./productItem.module.css"
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { addProductToSC } from "../../../store/actionCreators";

interface ProductItemProps{
    productProp : IProduct
    addProductProp: (product: IProduct)=>void
}

const ProductItem: React.FC<ProductItemProps> = ({productProp,addProductProp}) => {

    const dispatch: Dispatch<any> = useDispatch()
// addProduct is function object that dispatches that has an inside function that dispatches our actionCreator
    const addProduct=(product:IProduct)=>dispatch(addProductProp(product))
return(
    
    <div className={styles.itemContainer}>
        <div className={styles.imgStyle}>

        </div>
        <div className={styles.detailsStyle}>
            name : {productProp.title}
        </div>
        <div className={styles.itemPriceStyle}>
            price:  {productProp.price}
        </div>
        <div>
                       <Button  onClick={()=>addProduct(productProp)}>Add To SC</Button>
        </div>
    </div>
)
}



export default ProductItem

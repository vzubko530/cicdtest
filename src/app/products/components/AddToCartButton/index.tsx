'use client'

import { addToCart, useAppDispatch } from "@/store/store";
import { Product } from "../../types/Product";

interface AddToCartButtonProps {
    product: Product;
}

const AddToCartButton = ({product}: AddToCartButtonProps) => {
    const dispatch = useAppDispatch();

    const handleAddToCart = (product: Product) => {
        dispatch(addToCart(product))
    }

    return(
        <button onClick={() => {handleAddToCart(product)}}>
            Add to cart
        </button>
    )
}

export default AddToCartButton;
'use client'

import { useAppSelector } from "@/store/store";

const CartPage = () => {
    const products = useAppSelector((state) => state.cart.items);

    return(
        <div>
            {products.map((product) => {
                return(
                    <div key={product.id}>
                        {product.title}
                    </div>
                )
            })}
        </div>
    )
}

export default CartPage;
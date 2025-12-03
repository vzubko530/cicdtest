import { getProducts } from "./lib/getProducts";

import styles from './index.module.css'
import AddToCartButton from "./components/AddToCartButton";

const ProductsPage = async () => {
    const products = await getProducts();

    return(
        <div>
            {products.map((product) => {
                return(
                    <div key={product.id} className={styles.product}>
                        <span>{product.title}</span>
                        <span>{product.price}</span>
                        <p>{product.description}</p>
                        <AddToCartButton product={product} />
                    </div>
                )
            })}
        </div>
    )
}

export default ProductsPage;
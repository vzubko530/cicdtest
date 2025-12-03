import { Product, ProductsDto } from "../types/Product";

export const getProducts = async ():Promise<Product[]> => {
    const data = await fetch('https://dummyjson.com/products');
    const products = (await ( data.json() as Promise<ProductsDto>)).products;

    return products;
}
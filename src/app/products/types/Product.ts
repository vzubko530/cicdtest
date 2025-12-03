export interface ProductsDto { 
    products: Product[]
}

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
}
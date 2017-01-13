export interface Product{
    category: string;
    price: string;
    stocked: boolean;
    name: string;
}

export interface FilterableProducts
{
    filterText: string,
    inStockOnly: boolean,
    products: Array<Product>
}
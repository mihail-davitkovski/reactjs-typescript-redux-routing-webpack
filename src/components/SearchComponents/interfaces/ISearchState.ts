import {IProduct} from "./IProduct";

export interface ISearchState{
    filterText: string;
    inStockOnly: boolean;
    products: Array<IProduct>;
}

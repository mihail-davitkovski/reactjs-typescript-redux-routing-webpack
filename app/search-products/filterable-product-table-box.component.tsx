import { connect } from 'react-redux'

import * as React from "react";

import { SearchBar } from "./search-bar.component";

import { ProductTable } from "./product-table.component";

import { Product, FilterableProducts } from "./model/product";

import * as actionsCreators from "./action-creators/search-product-action.creators";

interface ProductsBoxProps {
    filterableProducts: FilterableProducts,
    loadProducts(): void,
    onFilterChange(filterText: string, inStockOnly: boolean): void
}

const mapStateToProps = (state: {filterableProducts: FilterableProducts}) => {
    return { 
        filterableProducts: state.filterableProducts
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        loadProducts: () => {
            dispatch(actionsCreators.getAllProducts());
        },
        onFilterChange: (filterText: string, inStockOnly: boolean) => {
            dispatch(actionsCreators.filterChange(filterText, inStockOnly));
        }
    }
}


//@connect(mapStateToProps, mapDispatchToProps)
const FilterableProductTableBox: React.StatelessComponent<ProductsBoxProps> = (props) => {
    props.loadProducts();
    return (
        <div>
            <SearchBar
                filterText={props.filterableProducts.filterText}
                inStockOnly={props.filterableProducts.inStockOnly}
                onUserInput={props.onFilterChange} />
            <ProductTable products={props.filterableProducts.products} />

            <br /><br /><br />
            <div>
                <a href="/comments"><b>View Comments</b></a>
            </div>
        </div>

    );

}

export const FilterableProductTableBoxReduxMapper = connect(mapStateToProps, mapDispatchToProps)(FilterableProductTableBox);

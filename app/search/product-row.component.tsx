import * as React from "react";

import { Product } from "./model/product";

interface ProductRowProps {
    product: Product
}

export const ProductRow: React.StatelessComponent<ProductRowProps> = (props) => {
    var name = props.product.stocked ?
        props.product.name :
        <span style={{ color: 'red' }}>
            {props.product.name}
        </span>;
    return (
        <tr>
            <td>{name}</td>
            <td>{props.product.price}</td>
        </tr>
    );
}

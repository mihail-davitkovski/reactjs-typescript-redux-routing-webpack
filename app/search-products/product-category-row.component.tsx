import * as React from "react";

interface ProductCategoryRowProps {
    category: string;

}
export const ProductCategoryRow: React.StatelessComponent<ProductCategoryRowProps> = (props) => {
    return (
        <tr>
            <th colSpan={2}>
                {props.category}
            </th>
        </tr>
    );
}
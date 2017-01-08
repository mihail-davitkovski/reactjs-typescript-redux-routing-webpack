import * as React from "react";

import { ProductCategoryRow } from "./product-category-row.component";

import { ProductRow } from "./product-row.component";

import { Product } from "./model/product";

interface ProductTableProps {
  products: Array<Product>
}

var tableStyle = {
  display: "inline"
}

export const ProductTable: React.StatelessComponent<ProductTableProps> = (props) => {
  let rows: any[] = [];
  let lastCategory: string = null;

  props.products.forEach((product: Product) => {

    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });
  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
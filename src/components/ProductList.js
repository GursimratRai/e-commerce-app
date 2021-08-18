import React from 'react';
import { Product } from './';

function ProductList(props) {
    const {products} = props;
    console.log('products',products);
    return (
        <div>
            {products.map((product) => {
                return <Product key={product.id} product={product} />
            })}
         </div>
    );
}

export default ProductList;
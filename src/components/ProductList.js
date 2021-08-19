import React ,{ useState } from 'react';
import { Product } from './';

function ProductList(props) {
    const {products} = props;
    const [edit,setEdit] = useState(-1);

    const handleEdit = (id) => {
        setEdit(id);
    }
    const handleCancel = () => {
        setEdit(-1);
    }

    console.log('products',products);
    return (
        <div>
            {products.map((product) => {
                return <Product edit = {edit} handleEdit={handleEdit} handleCancel={handleCancel} key={product.id} product={product} />
            })}
         </div>
    );
}

export default ProductList;
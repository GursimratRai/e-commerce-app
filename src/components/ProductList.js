import React, { useEffect, useState } from "react";
//Components
import { Product } from "./";
//antd components
import { Button } from "antd";

const ProductList = (props) => {
  const { products } = props;
  //for checking status of the sort button i.e. sorted / default
  const [sort, setSort] = useState(false);
  //sorted list
  const [sortedList, setSortedList] = useState(products);
  //default list
  const [list, setList] = useState(products);
  //for handling which product to be edited.
  const [edit, setEdit] = useState(-1);

  //for sorting the product list
  useEffect(() => {
    const sortList = []
      .concat(list)
      .sort((item1, item2) => (item1.price >= item2.price ? 1 : -1));
    setSortedList(sortList);
  }, [list]);

  //function for handling the edit button functionality
  const handleEdit = (id) => {
    setEdit(id);
  };

  //function for handling the cancellation fuctionality
  const handleCancel = () => {
    setEdit(-1);
  };

  //function for handling sort Preview button functionality
  const handleSort = async(value) => {
    if (value) {
     //if value is true -> display the sorted list
      setSort(value);
      setList(sortedList);
    } else {
     //if value is false -> display the default list
      setSort(value);
      setList(products);
    }
  };

  return (
    <div>
      {sort ? (
        <Button onClick={() => handleSort(false)}>X</Button>
      ) : (
        <Button onClick={() => handleSort(true)}>Sorted Preview</Button>
      )}
      {list.map((product) => {
        return (
          <Product
            edit={edit}
            handleEdit={handleEdit}
            handleCancel={handleCancel}
            key={product.id}
            product={product}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
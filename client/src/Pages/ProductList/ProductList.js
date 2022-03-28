import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../JS/Actions/productActions";
import ProductCard from "../../Components/ProductCard/ProductCard";

const ProductList = () => {
  const productsToFind = useSelector(
    (state) => state.productReducer.productsToFind
  );

  const load = useSelector((state) => state.productReducer.load);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return load ? (
    <h2>loading</h2>
  ) : (
    <div className="productlist">
      {productsToFind.map((product, i = 4) => (
        <ProductCard product={product} key={i} />
      ))}
    </div>
  );
};

export default ProductList;

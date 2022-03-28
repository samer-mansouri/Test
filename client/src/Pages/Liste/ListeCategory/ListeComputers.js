import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../JS/Actions/productActions";
import Computers from "../../Category/Computers/Computers";
const ListeComputers = () => {
  const productsToFind = useSelector(
    (state) => state.productReducer.productsToFind
  );
  const filiter = useSelector((state) => state.filiterReducer.nameProduct);
  const load = useSelector((state) => state.productReducer.load);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return load ? (
    <h2>loading</h2>
  ) : (
    <div className="productlist">
      {productsToFind
        .filter(
          (product) =>
            product.NameProduct.toUpperCase().includes(filiter.toUpperCase()) &&
            product.Category == "computers"
        )
        .map((product) => (
          <Computers product={product} key={product.id} />
        ))}
    </div>
  );
};

export default ListeComputers;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../JS/Actions/productActions";
import AdminComputers from "../AdminCategory/AdminComputers";
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
        .filter((product) =>
          product.NameProduct.toUpperCase().includes(filiter.toUpperCase())
        )
        .map((product) => (
          <AdminComputers product={product} key={product.id} />
        ))}
    </div>
  );
};

export default ListeComputers;

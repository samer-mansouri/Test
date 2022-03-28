import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../JS/Actions/productActions";
import Tablettes from "../../Category/Tablettes/Tablettes";
const ListeTablettes = () => {
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
            product.Category == "tablette"
        )
        .map((product) => (
          <Tablettes product={product} key={product.id} />
        ))}
    </div>
  );
};

export default ListeTablettes;

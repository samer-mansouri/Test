import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteOrder } from "../../../JS/Actions/orderActions";
const ListeOrder = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <tr>
      {product.user && (
        <td>
          {product.user.FirstName} {product.user.LastName}
        </td>
      )}
      <Link
        to={{
          pathname: `/Invoice/${product._id}`,
          state: product,
        }}
      >
        <td> Invoice </td>
      </Link>
      <td>{product.bill}</td>
      <div className="valide">
        <Link to="/Order" className="link">
          <button onClick={() => dispatch(deleteOrder(product._id))}>
            Validation
          </button>
        </Link>
      </div>
    </tr>
  );
};

export default ListeOrder;

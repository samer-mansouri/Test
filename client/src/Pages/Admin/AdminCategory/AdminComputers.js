import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { MdDelete, MdEdit } from "react-icons/md";
import {
  deleteProduct,
  getProduct,
  toggleTrue,
} from "../../../JS/Actions/productActions";
const Computers = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="car">
      <div className="Card">
        <img src={product.ImgURL} alt={product.NameProduct} />
        <Link to={`/DetailsProduct/${product._id}`}>
          <p className="title">{product.NameProduct} </p>
        </Link>
        <Link to={`/EditProduct/${product._id}`}>
          <button
            className="del"
            onClick={() => {
              dispatch(toggleTrue());
              dispatch(getProduct(product._id));
            }}
          >
            {" "}
            <MdEdit
              className="edit"
              style={{ color: "black", fontSize: "3em" }}
            />{" "}
          </button>
        </Link>
        <button
          className="del"
          onClick={() => dispatch(deleteProduct(product._id))}
        >
          <MdDelete style={{ color: "black", fontSize: "3em" }} />{" "}
        </button>
      </div>
    </div>
  );
};

export default Computers;

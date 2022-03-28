import React, { useState } from "react";
import { addProduct } from "../../../JS/Actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const AddProduct = () => {
  const dispatch = useDispatch();
  const [newProduct, setNewProduct] = useState({
    NameProduct: "",
    ImgURL: "",
    Price: "",
    Category: "",
    Barcode: "",
    Quantity: "",
    Description: "",
    Size: "",
    Weight: "",
  });
  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="login">
        <div className="split-screen">
          <div className="left">
            <div className="copy"></div>
          </div>
          <div className="right">
            <form>
              <div className="copy">
                <h2>Add Product</h2>
                <div className="login-container">
                  <p>
                    {" "}
                    Already have an account?{" "}
                    <a href="#">
                      {" "}
                      <strong>Log in </strong>
                    </a>{" "}
                  </p>
                </div>
              </div>
              <div className="input-container name">
                <label for="NameProduct">Name Product</label>
                <input
                  id="NameProduct"
                  onChange={handleChange}
                  name="NameProduct"
                  type="text"
                />
              </div>
              <div className="input-container name">
                <label for="ImgURL">ImgURL</label>
                <input
                  id="ImgURL"
                  onChange={handleChange}
                  name="ImgURL"
                  type="text"
                />
              </div>
              <div className="input-container name">
                <label for="Price">Price</label>
                <input
                  id="Price"
                  onChange={handleChange}
                  name="Price"
                  type="text"
                />
              </div>
              <div className="input-container name">
                <label for="Category">Category</label>
                <input
                  id="Category"
                  onChange={handleChange}
                  name="Category"
                  type="text"
                />
              </div>
              <div className="input-container name">
                <label for="Barcode">Barcode</label>
                <input
                  id="Barcode"
                  onChange={handleChange}
                  name="Barcode"
                  type="text"
                />
              </div>
              <div className="input-container name">
                <label for="Quantity">Quantity</label>
                <input
                  id="Quantity"
                  onChange={handleChange}
                  name="Quantity"
                  type="text"
                />
              </div>
              <div className="input-container name">
                <label for="Description">Description</label>
                <input
                  id="Description"
                  onChange={handleChange}
                  name="Description"
                  type="text"
                />
              </div>
              <div className="input-container name">
                <label for="Size">Size</label>
                <input
                  id="Size"
                  onChange={handleChange}
                  name="Size"
                  type="text"
                />
              </div>
              <div className="input-container name">
                <label for="Weight">Weight</label>
                <input
                  id="Weight"
                  onChange={handleChange}
                  name="Weight"
                  type="text"
                />
              </div>
              <Link to="/ListeAdminCategory">
                <button
                  onClick={() => dispatch(addProduct(newProduct))}
                  className="signup-btn"
                  type="submit"
                >
                  Add Product
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

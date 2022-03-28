import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filiter } from "../../JS/Actions/filterActions";
import { FormControl, Button } from "react-bootstrap";
import "./Filter.css";
const Filter = () => {
  const filter = useSelector((state) => state.filiterReducer.nameProduct);
  const dispatch = useDispatch();
  const [nameProduct, setNameProduct] = useState("");

  const handleChange = (e) => {
    setNameProduct(e.target.value);
  };
  // useEffect(() => {
  //     nameProduct &&
  //         dispatch(filiter(nameProduct));
  // }, [dispatch]);
  console.log({ filter });
  return (
    <div className="filter">
      {/* <Form className="d-flex"> */}
      <FormControl
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        onChange={handleChange}
        value={nameProduct}
      />
      <Button onClick={() => dispatch(filiter(nameProduct))} type="button">
        Filter
      </Button>

      {/* </Form> */}
    </div>
  );
};

export default Filter;

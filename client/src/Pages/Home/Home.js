import React from "react";
import Carousel from "../../Components/Carousel/Carousel.js";
import Order from "../../assets/order.png";
import ProductCard from "../../Components/ProductCard/ProductCard.js";
import ProductList from "../ProductList/ProductList";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div classNaame="home">
        <Carousel />
        <h2 ClassName="welcome">Welcome To AROM Tech</h2>
        <ProductList />
        <div ClassName="delivery">
          <img alt="Order" src={Order} width={600} />
          <h3>Home Delivery</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;

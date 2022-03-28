import "./App.css";
import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import ProductList from "./Pages/ProductList/ProductList";
import Home from "./Pages/Home/Home";
import ContactUS from "./Pages/ContactUS/ContactUS";
import Error from "./Pages/Error/Error";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Navbarr from "./Components/Navbar/Navbar.js";
import Smartphone from "./Pages/Category/Smartphone/Smartphone";
import Cart from "./Pages/Cart/Cart";
import Computers from "./Pages/Category/Computers/Computers";
import Tablettes from "./Pages/Category/Tablettes/Tablettes";
import Printers from "./Pages/Category/Printers/Printers";
import ListeCart from "./Pages/Liste/ListeCart/ListeCart";
import Order from "./Pages/Admin/Order/Order";
import Profile from "./Pages/Profile/Profile";
import AddProduct from "./Pages/Admin/AddProduct/AddProduct";
import ListeComputers from "./Pages/Liste/ListeCategory/ListeComputers";
import ListePrinters from "./Pages/Liste/ListeCategory/ListePrinters";
import ListeSmartphone from "./Pages/Liste/ListeCategory/ListeSmartphone";
import ListeTablettes from "./Pages/Liste/ListeCategory/ListeTablettes";
import Filiter from "./Components/Filter/Filter";
import DetailsProduct from "./Pages/DetailsProduct/DetailsProduct";
import { useDispatch, useSelector } from "react-redux";
import { getAuthUser } from "./JS/Actions/authActions";
import EditUser from "./Components/Auth/EditUser";
import Invoice from "./Pages/Invoice/Invoice";
import EditProduct from "./Pages/Admin/EditProduct/EditProduct";
import PrivateRoute from "./Router/PrivateRoute";
import AdminRoute from "./Router/AdminRoute";
import ListeAdminCategory from "./Pages/Admin/ListeAdminCategory/ListeAdminCategory";
function App() {
  const token = localStorage.getItem("token");

  const dispatch = useDispatch();

  useEffect(() => {
    token && dispatch(getAuthUser());
  }, [dispatch, token]);

  return (
    <div className="App">
      <Navbarr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Product" component={ProductList} />
        <Route path="/Filiter" component={Filiter} />
        <PrivateRoute path="/Profile/:id" component={EditUser} />
        <Route path="/ContactUS" component={ContactUS} />
        <Route path="/Smartphone" component={ListeSmartphone} />
        <Route path="/Computers" component={ListeComputers} />
        <Route path="/Tablettes" component={ListeTablettes} />
        <Route path="/Printers" component={ListePrinters} />

        <AdminRoute path="/ListeAdminCategory" component={ListeAdminCategory} />
        <AdminRoute path="/Order" component={Order} />
        <AdminRoute path="/AddProduct" component={AddProduct} />
        <AdminRoute path="/EditProduct/:id" component={EditProduct} />
        <PrivateRoute path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/CreateAccount" component={Register} />
        <PrivateRoute path="/cart/:id" component={Cart} />
        <AdminRoute path="/Invoice/:id" component={Invoice} />
        <Route path="/DetailsProduct/:id" component={DetailsProduct} />
        <Route path="/*" component={Error} />
      </Switch>
    </div>
  );
}

export default App;

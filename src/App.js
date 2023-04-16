import React from "react";
import './App.css';
import Navbar from "./components/Navbar.js";
import Sidebar from "./components/Sidebar.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Pc from "./pages/Pc.js";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import HomePage from "./pages/HomePage";
import Phone from "./pages/Phone";
import PhoneDetail from "./components/PhoneDetail";
import Tv from "./pages/Tv";
import TvDetails from "./components/TvDetails";
import GamingConsole from "./pages/GamingConsole";
import GamingConsoleDetails from "./components/GamingConsoleDetails";
import ComputerAccessories from "./pages/ComputerAccessories";
import PcAccessoriesDetails from "./components/PcAccessoriesDetails";
import CustumerPage from "./pages/CustomerPage";
import MessageScreen from "./pages/MessageScreen";
import DealList from "./pages/DealList";
import OrderList from "./pages/OrderList"
import SellerPage from "./pages/SellerPage";
import SellerProfile from "./components/SellerProfile";
import AddProduct from "./pages/AddProduct";
import AddProductDetail from "./pages/AddProductDetail";
import AddPhoneDetail from "./pages/AddPhoneDetail";
import AddTvDetails from "./pages/AddTvDetails";
import AddGamingConsoleDetail from "./pages/AddGamingConsoleDetail";
import AddPcAccessoriesDetail from "./pages/AddPcAccessoriesDetail";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";
import OrderedList from "./components/OrderedList";
import ExampleCard from "./components/Card";
import AdminPage from "./pages/AdminPage";
import SellerProducts from "./pages/SellerProducts";
import LoginPage from "./pages/LoginPage";
import CustomerSignUp from "./pages/CustomerSignUp";
import SellerSignUp from "./pages/SellerSignUp";
import CustomerStat from "./pages/CustomerStat";
import SellerStat from "./pages/SellerStat";
import CheckProduct from "./pages/CheckProducts";

function App() {
  return (
      <div className={"max-h-full bg-neutral-100"}>
          <BrowserRouter>
            <div className={"flex relative"}>
                <Header/>
            </div>
              <div>
                  <Navbar/>
              </div>

              <div>
                  <Routes>
                      <Route path={"/home"} element={<HomePage/>} />
                      <Route path={"/pc"} element={<Pc/>}/>
                      <Route path={"/phone"} element={<Phone/>}/>
                      <Route path={"/phone-detail"} element={<PhoneDetail/>}/>
                      <Route path={"/tv"} element={<Tv/>}/>
                      <Route path={"/gaming-console"} element={<GamingConsole/>}/>
                      <Route path={"/pc-accessories"} element={<ComputerAccessories/>}/>
                      <Route path={"/customer"} element={<CustumerPage/>}/>
                      <Route path={"/details"} element={<ProductDetail/>}/>
                      <Route path={"/example"} element={<ExampleCard/>}/>
                      <Route path={"/deal-list"} element={<DealList/>}/>
                      <Route path={"/order-list"} element={<OrderedList/>}/>
                      <Route path={"/seller"} element={<SellerPage/>}/>
                      <Route path={"/seller-profile"} element={<SellerProfile/>}/>
                      <Route path={"/add-product"} element={<AddProduct/>}/>
                      <Route path={"/add-pc-detail"} element={<AddProductDetail/>}/>
                      <Route path={"/add-phone-detail"} element={<AddPhoneDetail/>}/>
                      <Route path={"/add-tv-detail"} element={<AddTvDetails/>}/>
                      <Route path={"/add-gaming-console-detail"} element={<AddGamingConsoleDetail/>}/>
                      <Route path={"/add-pc-accessories-detail"} element={<AddPcAccessoriesDetail/>}/>
                      <Route path={"/tv/details"} element={<TvDetails/>}/>
                      <Route path={"/gaming-console/details"} element={<GamingConsoleDetails/>}/>
                      <Route path={"/pc-accessories/details"} element={<PcAccessoriesDetails/>}/>
                      <Route path={"/message"} element={<MessageScreen/>}/>
                      <Route path={"/admin"} element={<AdminPage/>}/>
                      <Route path={"/seller-products"} element={<SellerProducts/>}/>
                      <Route path={"/login-page"} element={<LoginPage/>}/>
                      <Route path={"/customer-sign-up"} element={<CustomerSignUp/>}/>
                      <Route path={"/seller-sign-up"} element={<SellerSignUp/>}/>
                      <Route path={"/customer-stat"} element={<CustomerStat/>}/>
                      <Route path={"/seller-stat"} element={<SellerStat/>}/>
                      <Route path={"/check-product"} element={<CheckProduct/>}/>
                  </Routes>
              </div>
                  <Footer/>
          </BrowserRouter>
      </div>
  );
}

export default App;
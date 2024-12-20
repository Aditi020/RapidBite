import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import AllFoods from "../pages/AllFoods";
import Cart from "../pages/CartPage";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import AdminLogin from "../pages/Admin_Login";
import Register from "../pages/Registeration";
import FoodDetails from "../pages/FoodDetails";
import AddNewFoodItem from "../pages/AddNewFoodItem";

// Custom hook to check if user is authenticated
// const useAuth = () => {
//     const token = sessionStorage.getItem("token"); // Assuming the token is stored in sessionStorage
//     return token ? true : false;  // Return true if token exists
// };

const Routers = () => {
    // const isAuthenticated = useAuth();

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/foods" element={<AllFoods />} />
            <Route path="/foods/:id" element={<FoodDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            {/* <Route path="/checkout" element={isAuthenticated ? <Checkout /> : <Navigate to="/user_login" />} /> */}
            <Route path="/user_login" element={<Login />} />
            <Route path="/admin_login" element={<AdminLogin />} />
            <Route path="/add_food_form" element={<AddNewFoodItem />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
};

export default Routers;

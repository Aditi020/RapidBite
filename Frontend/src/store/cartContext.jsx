import { createContext, useState } from "react";
import img1 from "../assets/Foods/B1 .jpg";
import img2 from "../assets/Foods/P2.jpg";

export const cartContext = createContext(
    {
        cartItems : 0,
        calculateTotalAmount : ()=>{},
        deleteItem : ()=>{},
        totalAmount : ()=>{},
    }
)

// Sample data for cart items
const initialCartItems = [
    {
        id: 1,
        title: "Deluxe Burger",
        image01: img1,
        price: 12.99,
        quantity: 2
    },
    {
        id: 2,
        title: "Pepperoni Pizza",
        image01: img2,
        price: 15.49,
        quantity: 1

    }
];

export default function CartContextServiceProvider({ childern }) {
    
    const [cartItems, setCartItems] = useState(initialCartItems);

    const calculateTotalAmount = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const deleteItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const totalAmount = calculateTotalAmount();

    const value = {
        cartItems,
        calculateTotalAmount,
        deleteItem,
        totalAmount,
    }

    return (
        <cartContext.Provider value={value}>
            {childern}
        </cartContext.Provider>
    )
}
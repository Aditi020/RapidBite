import { createContext, useState } from "react";
import img1 from "../assets/Foods/B1.jpg";
import img2 from "../assets/Foods/P2.jpg";

export let CartContext = createContext({
    cartItems: 0,
    deleteItem: () => { },
    totalAmount: 0,
    totalItemsInCart:0,
})

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

    },
    {
        id: 3,
        title: "Evil Wikie Burger",
        image01: img1,
        price: 12.99,
        quantity: 2
    },
];

export default function CartContextServiceProvider({ children }) {

    const [cartItems, setCartItems] = useState(initialCartItems);

    let totalItemsInCart = cartItems.length

    const calculateTotalAmount = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const deleteItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const totalAmount = calculateTotalAmount();

    const value = {
        cartItems,
        deleteItem,
        totalAmount,
        totalItemsInCart,
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}
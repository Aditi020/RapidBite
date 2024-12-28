import React, { useState } from "react";
import "../styles/MyOrders.css";

const MyOrders = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [orders] = useState([
        {
            id: "001",
            date: "2023-12-01",  // Order date
            deliveryDate: "2023-12-05", // Delivery date
            customerName: "John Doe",  // Customer name
            status: "delivered",
            items: [
                {
                    name: "Pepperoni Pizza",
                    quantity: 2,
                    price: 15,
                    image: "https://via.placeholder.com/100",
                },
                {
                    name: "Caesar Salad",
                    quantity: 1,
                    price: 10,
                    image: "https://via.placeholder.com/100",
                },
            ],
        },
        {
            id: "002",
            date: "2023-12-10",  // Order date
            deliveryDate: "2023-12-15", // Delivery date
            customerName: "Jane Smith",  // Customer name
            status: "processing",
            items: [
                {
                    name: "Burger Meal",
                    quantity: 1,
                    price: 12,
                    image: "https://via.placeholder.com/100",
                },
                {
                    name: "Chocolate Milkshake",
                    quantity: 2,
                    price: 8,
                    image: "https://via.placeholder.com/100",
                },
            ],
        },
        {
            id: "003",
            date: "2023-11-28",  // Order date
            deliveryDate: "2023-12-01", // Delivery date
            customerName: "Alice Green",  // Customer name
            status: "cancelled",
            items: [
                {
                    name: "Pasta Alfredo",
                    quantity: 1,
                    price: 18,
                    image: "https://via.placeholder.com/100",
                },
            ],
        },
    ]);

    // Filter orders based on the search query and the name of the dishes in the order
    const filteredOrders = orders.filter((order) =>
        order.items.some((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    return (
        <div className="orders-container">
            <h1 className="orders-title">My Orders</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search by dish name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            {filteredOrders.length > 0 ? (
                <div className="orders-list">
                    {filteredOrders.map((order) => (
                        <div className="order-card" key={order.id}>
                            <div className="order-header">
                                <h3>Order #{order.id}</h3>
                                <p>{order.date}</p>
                                <span className={`status ${order.status}`}>{order.status}</span>
                            </div>
                            <div className="order-details">
                                <p><strong>Ship to:</strong> {order.customerName}</p>
                                <p><strong>Delivery Date:</strong> {order.deliveryDate}</p>
                            </div>
                            <div className="order-items">
                                {order.items.map((item, index) => (
                                    <div className="order-item" key={index}>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="item-image"
                                        />
                                        <div className="item-details">
                                            <h4>{item.name}</h4>
                                            <p>
                                                Quantity: {item.quantity} | Price: $
                                                {(item.price * item.quantity).toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="order-footer">
                                <p>
                                    Total: $
                                    {order.items
                                        .reduce((acc, item) => acc + item.price * item.quantity, 0)
                                        .toFixed(2)}
                                </p>
                                <button
                                    className="download-button"
                                    onClick={() =>
                                        alert(`Download invoice for Order #${order.id}`)
                                    }
                                >
                                    Download Invoice
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="no-orders">No orders found for the given dish name.</p>
            )}
        </div>
    );
};

export default MyOrders;

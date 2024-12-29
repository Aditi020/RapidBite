import React, { useState } from 'react';
import '../styles/Profile.css';

function Profile() {
    const [profileData, setProfileData] = useState({
        name: 'Jyoti',
        email: 'jyoti@gmail.com',
        contact: '+91 7493658737',
        dob: '02-03-1999',
        gender: 'Female',
        city: 'Delhi, NCR',
        role: 'User',
    });

    const [activeSection, setActiveSection] = useState('profileDetails');
    const [searchQuery, setSearchQuery] = useState('');
    const [addresses, setAddresses] = useState([
        {
            name: 'Home',
            mobile: '+91 9876543210',
            pincode: '110001',
            locality: 'Connaught Place',
            city: 'New Delhi',
            state: 'Delhi',
            address: 'A1, Block B, Example Apartments',
            landmark: 'Near Metro Station',
        },
        {
            name: 'Work',
            mobile: '+91 9123456789',
            pincode: '110020',
            locality: 'Saket',
            city: 'New Delhi',
            state: 'Delhi',
            address: 'Office No. 24, Business Hub',
            landmark: 'Opposite Mall',
        },
    ]);

    const [orders] = useState([
        {
            id: '001',
            date: '2023-12-01',
            deliveryDate: '2023-12-05',
            customerName: 'John Doe',
            status: 'Delivered',
            items: [
                {
                    name: 'Pepperoni Pizza',
                    quantity: 2,
                    price: 15,
                    image: 'https://via.placeholder.com/100',
                },
                {
                    name: 'Caesar Salad',
                    quantity: 1,
                    price: 10,
                    image: 'https://via.placeholder.com/100',
                },
            ],
        },
        {
            id: '002',
            date: '2023-12-10',
            deliveryDate: '2023-12-15',
            customerName: 'Jane Smith',
            status: 'Processing',
            items: [
                {
                    name: 'Burger Meal',
                    quantity: 1,
                    price: 12,
                    image: 'https://via.placeholder.com/100',
                },
                {
                    name: 'Chocolate Milkshake',
                    quantity: 2,
                    price: 8,
                    image: 'https://via.placeholder.com/100',
                },
            ],
        },
    ]);

    const filteredOrders = orders.filter((order) =>
        order.items.some((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <section className="profile-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card profile-card">
                            <div className="card-body">
                                <div className="sidebar">
                                
                                <div className="profile-header">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtbEsykx-0fhTred6UwHDYtMFd2UgTJCG4gaklT1dx4suRO4_n5LJr4Gg28kquSX5fpNo&usqp=CAU"
                                        alt="Admin"
                                        className="profile-image"
                                    />
                                    <div className="profile-details">
                                        <h4>{profileData.name}</h4>
                                        <p>{profileData.contact}</p>
                                        <p>{profileData.city}</p>
                                    </div>
                                </div>
                                <div className="section-list">
                                    <button
                                        className={`section-button ${activeSection === 'profileDetails' ? 'active' : ''}`}
                                        onClick={() => handleSectionChange('profileDetails')}
                                    >
                                        Profile Information
                                    </button>
                                    <button
                                        className={`section-button ${activeSection === 'orderDetails' ? 'active' : ''}`}
                                        onClick={() => handleSectionChange('orderDetails')}
                                    >
                                        Orders
                                    </button>
                                    <button
                                        className={`section-button ${activeSection === 'addressBook' ? 'active' : ''}`}
                                        onClick={() => handleSectionChange('addressBook')}
                                    >
                                        Address Book
                                    </button>
                                    <button className="section-button">Logout</button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        {activeSection === 'profileDetails' && <ProfileDetails profileData={profileData} />}
                        {activeSection === 'orderDetails' && <OrderDetails orders={filteredOrders} setSearchQuery={setSearchQuery} searchQuery={searchQuery} />}
                        {activeSection === 'addressBook' && <AddressBook addresses={addresses} />}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ProfileDetails({ profileData }) {
    return (
        <div className="card profile-info-card">
            <div className="card-body">
                <h5 className="card-title">Profile Information</h5>
                <ul className="profile-info-list">
                    <li><strong>Name:</strong> {profileData.name}</li>
                    <li><strong>Contact:</strong> {profileData.contact}</li>
                    <li><strong>Date of Birth:</strong> {profileData.dob}</li>
                    <li><strong>Gender:</strong> {profileData.gender}</li>
                </ul>
            </div>
        </div>
    );
}

function OrderDetails({ orders, setSearchQuery, searchQuery }) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">My Orders</h5>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search by dish name..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                {orders.length > 0 ? (
                    <div className="order-list">
                        {orders.map((order) => (
                            <div key={order.id} >
                                <div className="order-header">
                                    <strong>Order ID: {order.id}</strong><br />
                                    <small>{order.date} - Delivery: {order.deliveryDate} | Status: {order.status}</small>
                                </div>
                                <ul className="order-items">
                                    {order.items.map((item, index) => (
                                        <li key={index} className="order-item-detail">
                                            <img src={item.image} alt={item.name} className="item-image" />
                                            <div className="item-details">
                                                <p><strong>{item.name}</strong></p>
                                                <p>Quantity: {item.quantity}</p>
                                                <p>Price: ${item.price}</p>
                                                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="no-orders">No orders found for the given dish name.</p>
                )}
            </div>
        </div>
    );
}

function AddressBook({ addresses }) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Address Book</h5>
                <div className="address-list">
                    {addresses.map((address, index) => (
                        <div key={index} className="address-item">
                            <h6>{address.name}</h6>
                            <p><strong>Mobile:</strong> {address.mobile}</p>
                            <p>
                                <strong>Address:</strong> {address.address}, {address.locality}, {address.city}, {address.state} - {address.pincode}
                            </p>
                            <p><strong>Landmark:</strong> {address.landmark || 'N/A'}</p>
                            <button className="modify-address-btn">Modify</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Profile;

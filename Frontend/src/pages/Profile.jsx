import React, { useState, useEffect } from 'react';
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
    const [addresses, setAddresses] = useState([]);
    const [newAddress, setNewAddress] = useState({
        name: '',
        mobile: '',
        pincode: '',
        locality: '',
        city: '',
        state: '',
        address: '',
        landmark: '',
        alternatePhone: '',
    });
    const [isAddAddressModalOpen, setIsAddAddressModalOpen] = useState(false);

    useEffect(() => {
        const storedAddresses = localStorage.getItem('addresses');
        if (storedAddresses) {
            setAddresses(JSON.parse(storedAddresses));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('addresses', JSON.stringify(addresses));
    }, [addresses]);

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    const handleAddressChange = (e) => {
        setNewAddress({ ...newAddress, [e.target.id]: e.target.value });
    };

    const saveAddress = (e) => {
        e.preventDefault();
        setAddresses([...addresses, newAddress]);
        setNewAddress({
            name: '',
            mobile: '',
            pincode: '',
            locality: '',
            city: '',
            state: '',
            address: '',
            landmark: '',
            alternatePhone: '',
        });
        setIsAddAddressModalOpen(false);
    };

    const openAddAddressModal = () => {
        setIsAddAddressModalOpen(true);
    };

    const closeAddAddressModal = () => {
        setIsAddAddressModalOpen(false);
    };

    return (
        <section className="my-5">
            <div className="container">
                <div className="main-body">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtbEsykx-0fhTred6UwHDYtMFd2UgTJCG4gaklT1dx4suRO4_n5LJr4Gg28kquSX5fpNo&usqp=CAU"
                                            alt="Admin"
                                            className="rounded-circle p-1 bg-warning"
                                            width={110}
                                        />
                                        <div className="mt-3">
                                            <h4>{profileData.name}</h4>
                                            <p className="text-secondary mb-1">{profileData.contact}</p>
                                            <p className="text-muted font-size-sm">{profileData.city}</p>
                                        </div>
                                    </div>

                                    <div className="list-group list-group-flush text-center mt-4">
                                        <button
                                            className={`list-group-item list-group-item-action border-0 ${activeSection === 'profileDetails' ? 'active' : ''}`}
                                            onClick={() => handleSectionChange('profileDetails')}
                                        >
                                            Profile Information
                                        </button>
                                        <button
                                            className={`list-group-item list-group-item-action border-0 ${activeSection === 'orderDetails' ? 'active' : ''}`}
                                            onClick={() => handleSectionChange('orderDetails')}
                                        >
                                            Orders
                                        </button>
                                        <button
                                            className={`list-group-item list-group-item-action border-0 ${activeSection === 'addressBook' ? 'active' : ''}`}
                                            onClick={() => handleSectionChange('addressBook')}
                                        >
                                            Address Book
                                        </button>
                                        <button className="list-group-item list-group-item-action border-0">Logout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            {activeSection === 'profileDetails' && <ProfileDetails profileData={profileData} />}
                            {activeSection === 'orderDetails' && <OrderDetails />}
                            {activeSection === 'addressBook' && <AddressBook addresses={addresses} openAddAddressModal={openAddAddressModal} />}
                        </div>
                    </div>
                    {isAddAddressModalOpen && (
                        <div className="modal">
                            <div className="modal-content">
                                <span className="close" onClick={closeAddAddressModal}>
                                    &times;
                                </span>
                                <h2>Add Address</h2>
                                <AddAddressForm
                                    handleAddressChange={handleAddressChange}
                                    newAddress={newAddress}
                                    saveAddress={saveAddress}
                                    closeModal={closeAddAddressModal}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

function ProfileDetails({ profileData }) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Profile Information</h5>
                <p><strong>Name:</strong> {profileData.name}</p>
                <p><strong>Contact:</strong> {profileData.contact}</p>
                <p><strong>Date of Birth:</strong> {profileData.dob}</p>
                <p><strong>Gender:</strong> {profileData.gender}</p>
            </div>
        </div>
    );
}

function OrderDetails() {
    return <div className="order_card">{/* Add your Order Details Content here */}</div>;
}

function AddressBook({ addresses, openAddAddressModal }) {
    return (
        <div className="card">
            <div className="card-body">
                <h5>Address Book</h5>
                <button className="add_address_button" onClick={openAddAddressModal}>
                    Add Address
                </button>
                <div id="addressList">
                    {addresses.map((address, index) => (
                        <div key={index} className="address-item">
                            <p><strong>Name:</strong> {address.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function AddAddressForm({ handleAddressChange, newAddress, saveAddress, closeModal }) {
    return (
        <form id="addAddressForm" onSubmit={saveAddress}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={newAddress.name} onChange={handleAddressChange} required />
            </div>
            <div>
                <button type="submit">Save</button>
                <button type="button" onClick={closeModal}>
                    Cancel
                </button>
            </div>
        </form>
    );
}

export default Profile;

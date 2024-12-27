import React, { useState, useEffect } from "react";
import "../styles/Settings.css";
import "remixicon/fonts/remixicon.css"; // Importing RemixIcon CSS
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Importing toastify styles

const Settings = () => {
    const [activeTab, setActiveTab] = useState("profile");
    const [photoPreview, setPhotoPreview] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [deleteConfirmation, setDeleteConfirmation] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(null); // State to track login status
    const [addresses, setAddresses] = useState([]); // Store the list of addresses for Address Management
    const [newAddress, setNewAddress] = useState(""); // Store the input for a new address
    const [editingIndex, setEditingIndex] = useState(null); // Track if we are editing an address
    const [editedAddress, setEditedAddress] = useState(""); // Store the edited address

    // Check if the user is logged in by checking for JWT token in localStorage
    useEffect(() => {
        const storedToken = localStorage.getItem("jwtToken");
        if (storedToken) {
            setIsLoggedIn(true); // User is logged in
        } else {
            setIsLoggedIn(false); // User is not logged in
        }
    }, []); // Only run this effect once on component mount

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.match("image.*")) {
            const reader = new FileReader();
            reader.onload = () => setPhotoPreview(reader.result);
            reader.readAsDataURL(file);
        } else {
            alert("Please upload a valid image.");
        }
    };

    const handleDeleteConfirmation = (event) => {
        setDeleteConfirmation(event.target.value);
    };

    const handleDeleteAccount = () => {
        if (deleteConfirmation !== "DELETE") {
            alert("Please type 'DELETE' to confirm account deletion.");
            return;
        }

        // Simulate API call to delete the account
        setIsDeleting(true);
        setTimeout(() => {
            // Simulate successful deletion (you'd usually call an API here)
            setIsDeleting(false);
            toast.success("Your account has been deleted.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
            });
        }, 2000); // Simulate a 2-second delay
    };

    // ADDRESS MANAGEMENT FUNCTIONS:
    // Add a new address to the address list
    const handleAddAddress = () => {
        if (!newAddress) {
            alert("Please enter an address.");
            return;
        }

        // Add the new address to the list of addresses
        setAddresses([...addresses, newAddress]);
        setNewAddress(""); // Clear the input field after adding
        toast.success("Address added successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "colored"
        });
    };

    // Start editing an address
    const handleEditAddress = (index) => {
        setEditingIndex(index);
        setEditedAddress(addresses[index]); // Set the address to edit
    };

    // Save the edited address
    const handleSaveEditAddress = () => {
        if (editedAddress) {
            const updatedAddresses = addresses.map((address, index) =>
                index === editingIndex ? editedAddress : address
            );
            setAddresses(updatedAddresses);
            setEditingIndex(null);
            setEditedAddress(""); // Clear the edited address input
            toast.success("Address updated successfully!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
            });
        }
    };

    // Cancel editing an address
    const handleCancelEdit = () => {
        setEditingIndex(null);
        setEditedAddress(""); // Clear the edited address input
    };

    // Delete an address
    const handleDeleteAddress = (index) => {
        const updatedAddresses = addresses.filter((address, idx) => idx !== index);
        setAddresses(updatedAddresses);
        toast.success("Address deleted successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "colored"
        });
    };

    // Render the settings form based on active tab
    const renderContent = () => {
        switch (activeTab) {
            case "profile":
                return (
                    <form className="settings-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Enter your name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="photo">Photo</label>
                            <div className="photo-upload">
                                <div className="photo-preview">
                                    {photoPreview ? (
                                        <img src={photoPreview} alt="Profile" />
                                    ) : (
                                        <i className="ri-user-line"></i> // Default icon when no image is uploaded
                                    )}
                                </div>
                                <input
                                    type="file"
                                    id="photo"
                                    className="upload-input"
                                    onChange={handleFileChange}
                                />
                            </div>
                        </div>
                        <button type="submit" className="save-btn">
                            Save Profile
                        </button>
                    </form>
                );
            case "security":
                return (
                    <form className="settings-form">
                        <div className="form-group">
                            <label htmlFor="current-password">Current Password</label>
                            <input
                                type="password"
                                id="current-password"
                                placeholder="Enter current password"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="new-password">New Password</label>
                            <input
                                type="password"
                                id="new-password"
                                placeholder="Enter new password"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input
                                type="password"
                                id="confirm-password"
                                placeholder="Confirm new password"
                            />
                        </div>
                        <button type="submit" className="save-btn">
                            Update Password
                        </button>
                    </form>
                );
            case "billing":
                return (
                    <div className="form-container">
                        <div className="form-header">
                            <h2>Billing Information</h2>
                        </div>
                        <form className="settings-form">
                            <div className="form-group">
                                <label htmlFor="card-name">Cardholder Name</label>
                                <input
                                    type="text"
                                    id="card-name"
                                    placeholder="Enter cardholder name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="card-number">Card Number</label>
                                <input
                                    type="text"
                                    id="card-number"
                                    placeholder="Enter card number"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="expiry-date">Expiry Date</label>
                                <input type="text" id="expiry-date" placeholder="MM/YY" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cvv">CVV</label>
                                <input type="password" id="cvv" placeholder="Enter CVV" />
                            </div>
                            <button type="submit" className="save-btn">
                                Save Billing Info
                            </button>
                        </form>
                    </div>
                );
            case "address":
                return (
                    <form className="settings-form">
                        <div className="form-group">
                            <label htmlFor="address-line1">Address Line 1</label>
                            <input
                                type="text"
                                id="address-line1"
                                placeholder="Enter address line 1"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address-line2">Address Line 2</label>
                            <input
                                type="text"
                                id="address-line2"
                                placeholder="Enter address line 2"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <input type="text" id="city" placeholder="Enter city" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="postal-code">Postal Code</label>
                            <input type="text" id="postal-code" placeholder="Enter postal code" />
                        </div>
                        <button type="submit" className="save-btn">
                            Save Address
                        </button>
                    </form>
                );
            case "delete":
                return (
                    <div className="settings-form">
                        <p>
                            Deleting your account will remove all your data permanently. This action
                            cannot be undone.
                        </p>
                        <div>
                            <label htmlFor="delete-confirmation">Type "DELETE" to confirm:</label>
                            <input
                                type="text"
                                id="delete-confirmation"
                                value={deleteConfirmation}
                                onChange={handleDeleteConfirmation}
                                placeholder="Type DELETE"
                            />
                        </div>
                        <button
                            className="delete-btn"
                            onClick={handleDeleteAccount}
                            disabled={isDeleting || deleteConfirmation !== "DELETE"}
                        >
                            {isDeleting ? "Deleting..." : "Delete Account"}
                        </button>
                    </div>
                );
            default:
                return null;
        }
    };

    // Don't render anything if isLoggedIn is null (during the initial check)
    if (isLoggedIn === null) {
        return null; // Return nothing while checking the token
    }

    return (
        <section className="settings-section">
            <div className="settings-sidebar">
                <div className="settings-header">
                    <h2>Settings</h2>
                </div>
                <div className="settings-tabs">
                    <button
                        className={`settings-tab ${activeTab === 'profile' ? 'active' : ''}`}
                        onClick={() => setActiveTab("profile")}
                    >
                        Profile Info
                    </button>
                    <button
                        className={`settings-tab ${activeTab === 'security' ? 'active' : ''}`}
                        onClick={() => setActiveTab("security")}
                    >
                        Security
                    </button>
                    <button
                        className={`settings-tab ${activeTab === 'billing' ? 'active' : ''}`}
                        onClick={() => setActiveTab("billing")}
                    >
                        Billing
                    </button>
                    <button
                        className={`settings-tab ${activeTab === 'address' ? 'active' : ''}`}
                        onClick={() => setActiveTab("address")}
                    >
                        Address Management
                    </button>
                    {isLoggedIn && (
                        <button
                            className={activeTab === "delete" ? "active-tab" : ""}
                            onClick={() => setActiveTab("delete")}
                        >
                            Delete Account
                        </button>
                    )}
                </div>
            </div>

            <div className="settings-content">
                {renderContent()}
            </div>

            <ToastContainer />
        </section>
    );
};

export default Settings;

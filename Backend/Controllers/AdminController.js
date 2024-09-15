const upload = require('../Config/multerConfig');
const AdminService = require('../Services/AdminService'); 

// Register Admin controller
const registerAdmin = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        await AdminService.registerAdmin({ name, email, password });
        res.status(201).json({ msg: "Admin registered successfully" });
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
};

// Login Admin controller
const loginAdmin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const token = await AdminService.loginAdmin(email, password);
        res.json({ token, msg: "Login successful" });
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
};

// Get Admin profile controller
const getAdminProfile = async (req, res) => {
    try {
        const admin = await AdminService.getAdminProfile(req.AdminId);  // Use req.AdminId to fetch Admin
        if (!admin) {
            return res.status(404).json({ msg: "Admin not found. Unable to fetch profile." });
        }
        res.status(200).json(admin);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

// Update Admin profile controller
const updateAdminProfile = async (req, res) => {
    const { name, email } = req.body;
    try {
        const updatedAdmin = await AdminService.updateAdminProfile(req.AdminId, { name, email });
        if (!updatedAdmin) {
            return res.status(404).json({ msg: "Admin not found. Unable to update profile." });
        }
        res.status(200).json({ msg: "Admin updated successfully", Admin: updatedAdmin });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

// Delete Admin profile controller
const deleteAdminProfile = async (req, res) => {
    try {
        await AdminService.deleteAdminProfile(req.AdminId);
        res.status(200).json({ msg: 'Admin deleted successfully' });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

// Change Admin password controller
const changeAdminPassword = async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    try {
        await AdminService.changeAdminPassword(req.AdminId, oldPassword, newPassword);
        res.status(200).json({ msg: "Password updated successfully" });
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
};

// Add Menu Item with Image Upload (Admin only)
const addMenuItem = async (req, res) => {
    // Check if an image URL is provided in the request body
    if (req.body.imageUrl) {  // Use 'imageUrl' with lowercase 'u'
        const menuData = req.body;
        try {
            // Directly use the provided image URL
            menuData.imageUrl = req.body.imageUrl;  // Ensure consistent casing

            const newMenuItem = await AdminService.addMenuService(menuData);
            return res.status(201).json({ msg: 'Menu item added successfully', menuItem: newMenuItem });
        } catch (err) {
            return res.status(400).json({ msg: 'Error adding menu item: ' + err.message });
        }
    }

    // If no image URL, use multer to handle file upload
    upload.single('image')(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ msg: 'File upload error: ' + err.message });
        }

        const menuData = req.body;
        try {
            if (req.file) {
                // Save file path to imageUrl if a file is uploaded
                menuData.imageUrl = `/uploads/${req.file.filename}`;
            } else {
                return res.status(400).json({ msg: 'Either an image file or image URL must be provided' });
            }

            const newMenuItem = await AdminService.addMenuService(menuData);
            res.status(201).json({ msg: 'Menu item added successfully', menuItem: newMenuItem });
        } catch (err) {
            res.status(400).json({ msg: 'Error adding menu item: ' + err.message });
        }
    });
};



// Update Menu Item with Image Upload or URL (Admin only)
const updateMenuItem = async (req, res) => {
    // Check if an image URL is provided in the request body
    if (req.body.imageUrl) {
        const { id } = req.params;  // Menu item ID from route parameters
        const { name, description, price, category, availability } = req.body;

        const menuData = {
            name,
            description,
            price,
            category,
            availability,
            imageUrl: req.body.imageUrl // Use imageUrl from the request body
        };

        try {
            // Call service to update the menu item
            const updatedMenuItem = await AdminService.updateMenuService(id, menuData);
            if (!updatedMenuItem) {
                return res.status(404).json({ msg: "Menu item not found" });
            }

            res.status(200).json({ msg: 'Menu item updated successfully', menuItem: updatedMenuItem });
        } catch (err) {
            return res.status(400).json({ msg: "Error updating menu item: " + err.message });
        }
    } else {
        // If no image URL, use multer to handle file upload
        upload.single('image')(req, res, async (err) => {
            if (err) {
                return res.status(400).json({ msg: "File upload error: " + err.message });
            }

            const { id } = req.params;  // Menu item ID from route parameters
            const { name, description, price, category, availability } = req.body;

            const menuData = {
                name,
                description,
                price,
                category,
                availability
            };

            try {
                if (req.file) {
                    // Save file path to imageUrl if a file is uploaded
                    menuData.imageUrl = `/uploads/${req.file.filename}`;
                }

                // Call service to update the menu item
                const updatedMenuItem = await AdminService.updateMenuService(id, menuData);
                if (!updatedMenuItem) {
                    return res.status(404).json({ msg: "Menu item not found" });
                }

                res.status(200).json({ msg: 'Menu item updated successfully', menuItem: updatedMenuItem });
            } catch (err) {
                res.status(400).json({ msg: "Error updating menu item: " + err.message });
            }
        });
    }
};


module.exports = {
    registerAdmin,
    loginAdmin,
    getAdminProfile,
    updateAdminProfile,
    deleteAdminProfile,
    changeAdminPassword,
    addMenuItem,  
    updateMenuItem  
};

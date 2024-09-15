// Contains the multer configuration for handling file uploads.

const multer = require('multer');
const path = require('path'); // Import path module for file path operations

// Configure multer storage
const storage = multer.diskStorage({
    // Set the destination folder for uploaded files
    destination: (req, file, cb) => {
        cb(null, 'uploads/');  // 'uploads/' directory where files will be stored
    },
    // Define the filename for the uploaded file
    filename: (req, file, cb) => {
        // Create a unique filename with a timestamp to prevent overwriting
        cb(null, Date.now() + path.extname(file.originalname));  // Append file extension to timestamp
    }
});

// Multer file filter to accept only images
const fileFilter = (req, file, cb) => {
    // Define allowed file types (jpeg, jpg, png, svg, avif)
    const filetypes = /jpeg|jpg|png|svg|avif/;

    // Check if the file extension matches the allowed types
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    // Check if the file mimetype matches the allowed types
    const mimetype = filetypes.test(file.mimetype);

    // If both the mimetype and extension are valid, allow the file
    if (mimetype && extname) {
        return cb(null, true);  // File is accepted
    } else {
        cb(new Error('Only images are allowed'));  // Reject the file if it's not an image
    }
};

// Create multer instance with configured storage and file filter
const upload = multer({
    storage: storage,    // Use the defined storage configuration
    fileFilter: fileFilter  // Use the defined file filter for images
});

module.exports = upload;  // Export the upload middleware for use in routes

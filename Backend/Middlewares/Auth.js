const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret"; // Make sure this is set in your .env

function extractToken(req) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return null;
    }
    return authHeader.split(" ")[1]; // Extract the token
}

function userMiddleware(req, res, next) {
    const token = extractToken(req);
    if (!token) {
        return res.status(401).json({ msg: "No token provided" });
    }

    try {
        const decodedValue = jwt.verify(token, JWT_SECRET);
        if (decodedValue && decodedValue.userId) { 
            req.userId = decodedValue.userId;
            req.username = decodedValue.username;
            next();
        } else {
            return res.status(403).json({ msg: "Invalid token or user not authenticated" });
        }
    } catch (e) {
        return res.status(403).json({ msg: "Token verification failed" });
    }
}

const adminMiddleware = (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(" ")[1];

    if (!token) {
        return res.status(401).json({ msg: "No token provided, access denied" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); 
        req.AdminId = decoded.AdminId; 
        next(); 
        
    } catch (err) {
        return res.status(401).json({ msg: "Invalid token, access denied" });
    }
};

module.exports = { userMiddleware, adminMiddleware };

const zod = require("zod");

// schema for user registration
const UserRegistrationSchema = zod.object({
    name: zod.string().min(1, "Name is required"),
    email: zod.string().email("Invalid email format"),
    password: zod.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: zod.string().min(6, "Confirm Password must be at least 6 characters long"),
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
});

// schema for user login
const UserLoginSchema = zod.object({
    email: zod.string().email("Invalid email format"),
    password: zod.string().min(6, "Password must be at least 6 characters long"),
});


// schema for user update
const UserUpdateSchema = zod.object({
    name: zod.string().optional(),
    email: zod.string().email("Invalid email format").optional(),
    password: zod.string().min(6, "Password must be at least 6 characters long").optional(),
});

// schema for contact form
const ContactFormSchema = zod.object({
    name: zod.string().min(1, "Name is required"),
    email: zod.string().email("Invalid email format"),
    phone: zod.string().optional(),
    message: zod.string().min(1, "Message is required"),
});

// schema for checkout form
const CheckoutSchema = zod.object({
    name: zod.string().min(1, "Name is required"),
    email: zod.string().email("Invalid email format"),
    phone: zod.string().min(10, "Phone number must be at least 10 digits long"),
    country: zod.string().min(1, "Country is required"),
    city: zod.string().min(1, "City is required"),
    postalCode: zod.string().min(1, "Postal code is required"),
});

module.exports = {
    UserRegistrationSchema,
    UserLoginSchema,
    UserUpdateSchema,
    ContactFormSchema,
    CheckoutSchema,
};

import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import mongoose from "mongoose";
import session from "express-session";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";
import cartRoutes from "./routes/cart.route.js";
import paymentRoutes from "./routes/payment.route.js";
import analyticsRoutes from "./routes/analytics.route.js";

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
app.use(cors({
	origin: "http://localhost:5173",
	credentials: true
}));

app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());

app.use(
	session({
		secret: process.env.SESSION_SECRET || "secret-key",
		resave: false,
		saveUninitialized: false,
		cookie: {
			maxAge: 7 * 24 * 60 * 60 * 1000, 
			secure: false, 
			sameSite: "lax", 
		},
	})
);

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB connected: ${conn.connection.host}`);
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
		process.exit(1);
	}
};

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/analytics", analyticsRoutes);

app.listen(PORT, () => {
	console.log("Server is running on http://localhost:" + PORT);
	connectDB();
});

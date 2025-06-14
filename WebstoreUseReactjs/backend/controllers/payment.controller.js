import Order from "../models/order.model.js";

export const createCheckoutSession = async (req, res) => {
	try {
		const { products } = req.body;

		if (!Array.isArray(products) || products.length === 0) {
			return res.status(400).json({ error: "Invalid or empty products array" });
		}

		let totalAmount = 0;
		products.forEach((product) => {
			totalAmount += product.price * (product.quantity || 1);
		});

		const order = new Order({
			user: req.user?._id || null,
			products: products.map((p) => ({
				product: p._id,
				quantity: p.quantity,
				price: p.price,
			})),
			totalAmount,
			paymentStatus: "paid",
		});

		await order.save();

		res.status(201).json({ success: true, orderId: order._id });
	} catch (error) {
		res.status(500).json({ message: "Error processing checkout", error: error.message });
	}
};
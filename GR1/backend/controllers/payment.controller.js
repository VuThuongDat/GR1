import Order from "../models/order.model.js";

export const createCheckoutSession = async (req, res) => {
	try {
		const { products } = req.body;

		let totalAmount = 0;
		products.forEach((product) => {
			totalAmount += product.price * product.quantity;
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
import User from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
	try {
		if (!req.session.userId) {
			return res.status(401).json({ message: "Unauthorized - Please log in" });
		}

		const user = await User.findById(req.session.userId).select("-password");
		if (!user) {
			return res.status(401).json({ message: "Unauthorized - User not found" });
		}

		req.user = user;
		next();
	} catch (error) {
		console.log("Error in protectRoute middleware", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

export const adminRoute = (req, res, next) => {
	if (req.user && req.user.role === "admin") {
		next();
	} else {
		res.status(403).json({ message: "Access denied - Admins only" });
	}
};

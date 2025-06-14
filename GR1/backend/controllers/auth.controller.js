import User from "../models/user.model.js";

export const signup = async (req, res) => {
	const { email, password, name } = req.body;

	try {
		const userExists = await User.findOne({ email });
		if (userExists) {
			return res.status(400).json({ message: "User already exists" });
		}

		const user = await User.create({ name, email, password });

		req.session.user = {
			_id: user._id,
			name: user.name,
			email: user.email,
			role: user.role,
		};
		req.session.userId = user._id;
		res.status(201).json(req.session.user);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const login = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ email });

		if (user && (await user.comparePassword(password))) {
			req.session.user = {
				_id: user._id,
				name: user.name,
				email: user.email,
				role: user.role,
			};
			req.session.userId = user._id;
			res.json(req.session.user);
		} else {
			res.status(400).json({ message: "Invalid email or password" });
		}
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const logout = async (req, res) => {
	try {
		req.session.destroy((err) => {
			if (err) return res.status(500).json({ message: "Logout failed" });

			res.clearCookie("connect.sid");
			res.json({ message: "Logged out successfully" });
		});
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const getProfile = async (req, res) => {
	if (!req.session.user) {
		return res.status(401).json({ message: "Unauthorized" });
	}
	res.json(req.session.user);
};
import { useState } from "react";
import { Link } from "react-router-dom";
import { UserPlus, Mail, Lock, User, ArrowRight, Loader } from "lucide-react";
import { useUserStore } from "../stores/useUserStore";

const SignUpPage = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const { signup, loading } = useUserStore();

	const handleSubmit = (e) => {
		e.preventDefault();
		signup(formData);
	};

	return (
		<div className="flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<h2 className="mt-6 text-center text-3xl font-bold text-sky-400">
					Create your account
				</h2>
			</div>

			<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
				<div className="bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
					<form onSubmit={handleSubmit} className="space-y-5">
						{/* Full name */}
						<div>
							<label htmlFor="name" className="block text-sm font-medium text-gray-300">
								Full name
							</label>
							<div className="mt-1 relative">
								<input
									id="name"
									type="text"
									required
									value={formData.name}
									onChange={(e) => setFormData({ ...formData, name: e.target.value })}
									className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md text-white sm:text-sm"
									placeholder="John Doe"
								/>
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center">
									<User className="h-5 w-5 text-gray-400" />
								</div>
							</div>
						</div>

						{/* Email */}
						<div>
							<label htmlFor="email" className="block text-sm font-medium text-gray-300">
								Email address
							</label>
							<div className="mt-1 relative">
								<input
									id="email"
									type="email"
									required
									value={formData.email}
									onChange={(e) => setFormData({ ...formData, email: e.target.value })}
									className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md text-white sm:text-sm"
									placeholder="you@example.com"
								/>
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center">
									<Mail className="h-5 w-5 text-gray-400" />
								</div>
							</div>
						</div>

						{/* Password */}
						<div>
							<label htmlFor="password" className="block text-sm font-medium text-gray-300">
								Password
							</label>
							<div className="mt-1 relative">
								<input
									id="password"
									type="password"
									required
									value={formData.password}
									onChange={(e) => setFormData({ ...formData, password: e.target.value })}
									className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md text-white sm:text-sm"
									placeholder="••••••••"
								/>
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center">
									<Lock className="h-5 w-5 text-gray-400" />
								</div>
							</div>
						</div>

						{/* Confirm Password */}
						<div>
							<label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">
								Confirm Password
							</label>
							<div className="mt-1 relative">
								<input
									id="confirmPassword"
									type="password"
									required
									value={formData.confirmPassword}
									onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
									className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md text-white sm:text-sm"
									placeholder="••••••••"
								/>
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center">
									<Lock className="h-5 w-5 text-gray-400" />
								</div>
							</div>
						</div>

						{/* Submit Button */}
						<button
							type="submit"
							className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-sky-600 disabled:opacity-50"
							disabled={loading}
						>
							{loading ? (
								<>
									<Loader className="mr-2 h-5 w-5 animate-spin" />
									Loading...
								</>
							) : (
								<>
									<UserPlus className="mr-2 h-5 w-5" />
									Sign up
								</>
							)}
						</button>
					</form>

					<p className="mt-6 text-center text-sm text-gray-400">
						Already have an account?{" "}
						<Link to="/login" className="text-sky-400">
							Login here <ArrowRight className="inline h-4 w-4" />
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default SignUpPage;

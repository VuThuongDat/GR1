import { ShoppingCart, UserPlus, LogIn, LogOut, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";

const Navbar = () => {
	const { user, logout } = useUserStore();
	const isAdmin = user?.role === "admin";
	const { cart } = useCartStore();

	return (
		<header className='fixed top-0 left-0 w-full bg-gray-900 border-b border-sky-800 z-40'>
			<div className='container mx-auto px-4 py-3'>
				<div className='flex justify-between items-center'>
					<Link to='/' className='text-2xl font-bold text-sky-400'>
						Store
					</Link>

					<nav className='flex items-center gap-4 text-gray-300'>
						<Link to={"/"}>Home</Link>

						{user && (
							<Link to={"/cart"} className='relative flex items-center'>
								<ShoppingCart size={20} className='mr-1' />
								<span className='hidden sm:inline'>Cart</span>
								{cart.length > 0 && (
									<span className='absolute -top-2 -left-2 bg-sky-500 text-white rounded-full px-2 text-xs'>
										{cart.length}
									</span>
								)}
							</Link>
						)}

						{isAdmin && (
							<Link to={"/secret-dashboard"} className='bg-sky-500 text-white px-3 py-1 rounded-md flex items-center'>
								<Lock size={18} className='mr-1' />
								<span className='hidden sm:inline'>Dashboard</span>
							</Link>
						)}

						{user ? (
							<button onClick={logout} className='bg-gray-700 text-white py-2 px-4 rounded-md flex items-center'>
								<LogOut size={18} />
								<span className='hidden sm:inline ml-2'>Đăng xuất</span>
							</button>
						) : (
							<>
								<Link to={"/signup"} className='bg-sky-600 text-white py-2 px-4 rounded-md flex items-center'>
									<UserPlus className='mr-2' size={18} />
									Đăng ký
								</Link>
								<Link to={"/login"} className='bg-gray-700 text-white py-2 px-4 rounded-md flex items-center'>
									<LogIn className='mr-2' size={18} />
									Đăng nhập
								</Link>
							</>
						)}
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Navbar;

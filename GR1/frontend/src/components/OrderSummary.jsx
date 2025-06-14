import { useCartStore } from "../stores/useCartStore";
import { Link, useNavigate } from "react-router-dom";
import { MoveRight, CreditCard } from "lucide-react";
import axios from "../lib/axios";

const OrderSummary = () => {
	const { total, cart, clearCart } = useCartStore();
	const navigate = useNavigate();

	const handleCheckout = async () => {
		try {
			await axios.post("/payments/create-checkout-session", { products: cart });
			clearCart();
			navigate("/purchase-success");
		} catch (error) {
			console.error("Checkout error:", error);
			navigate("/purchase-cancel");
		}
	};

	return (
		<div className='space-y-4 rounded-lg border border-gray-700 bg-gray-800 p-4 shadow-sm'>
			<p className='text-xl font-semibold text-emerald-400'>Order Summary</p>

			<div className='space-y-2'>
				<div className='flex justify-between text-base font-bold'>
					<span className='text-white'>Tổng:</span>
					<span className='text-emerald-400'>{total} VND</span>
				</div>
			</div>

			<button
				onClick={handleCheckout}
				className='w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 flex items-center justify-center'
			>
				<CreditCard className='mr-2' size={18} />
				Proceed to Checkout
			</button>

			<div className='text-center text-sm text-gray-400 mt-4'>
				<Link
					to='/'
					onClick={() => {
						console.log("Quay lại trang chủ");
						
					}}
					className='text-emerald-400 underline hover:text-emerald-300'
				>
					Quay lại trang chủ
					<MoveRight size={14} className='inline-block ml-1' />
				</Link>

			</div>
		</div>
	);
};

export default OrderSummary;

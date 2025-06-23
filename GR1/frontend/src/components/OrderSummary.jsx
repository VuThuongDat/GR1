import { useCartStore } from "../stores/useCartStore";
import { Link, useNavigate } from "react-router-dom";
import { MoveRight, CreditCard } from "lucide-react";
import axios from "../lib/axios";
import { toast } from "react-hot-toast";

const OrderSummary = () => {
	const { total, cart, clearCart } = useCartStore();
	const navigate = useNavigate();

	const handleCheckout = async () => {
		try {
			await axios.post("/payments/create-checkout-session", { products: cart });
			toast.success("Thanh toán thành công");
			clearCart();
			navigate("/");
		} catch (error) {
			console.error("Checkout error:", error);
			navigate("/");
		}
	};

	return (
		<div className='space-y-4 rounded-lg border border-gray-700 bg-gray-800 p-4 shadow-sm'>
			<p className='text-xl font-semibold text-sky-400'>Hóa đơn</p>

			<div className='space-y-2'>
				<div className='flex justify-between text-base font-bold'>
					<span className='text-white'>Tổng:</span>
					<span className='text-sky-400'>{total} VND</span>
				</div>
			</div>

			<button
				onClick={handleCheckout}
				className='w-full bg-sky-600 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded-lg transition duration-300 flex items-center justify-center'
			>
				<CreditCard className='mr-2' size={18} />
				Thanh toán
			</button>

			<div className='text-center text-sm text-gray-400 mt-4'>
				<Link
					to='/'
					onClick={() => {
						console.log("Quay lại trang chủ");
						
					}}
					className='text-sky-400 underline hover:text-sky-300'
				>
					Quay lại trang chủ
					<MoveRight size={14} className='inline-block ml-1' />
				</Link>

			</div>
		</div>
	);
};

export default OrderSummary;

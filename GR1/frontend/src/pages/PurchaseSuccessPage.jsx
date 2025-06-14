import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../stores/useCartStore";
import axios from "../lib/axios";

const PurchaseSuccessPage = () => {
	const [isProcessing, setIsProcessing] = useState(true);
	const { clearCart } = useCartStore();
	const navigate = useNavigate();

	useEffect(() => {
		const handleCheckoutSuccess = async (sessionId) => {
			try {
				await axios.post("/payments/checkout-success", {
					sessionId,
				});
				clearCart();
			} catch (error) {
				console.error(error);
			} finally {
				setIsProcessing(false);
				setTimeout(() => {
					navigate("/");
				}, 2000);
			}
		};

		const sessionId = new URLSearchParams(window.location.search).get("session_id");
		if (sessionId) {
			handleCheckoutSuccess(sessionId);
		} else {
			setIsProcessing(false);
			navigate("/");
		}
	}, [clearCart, navigate]);

	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-900 text-white text-xl font-semibold'>
			{isProcessing ? "Đang xử lý thanh toán..." : "Thanh toán thành công! Đang chuyển về trang chủ..."}
		</div>
	);
};
export default PurchaseSuccessPage;

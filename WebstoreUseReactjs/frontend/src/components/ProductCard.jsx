import toast from "react-hot-toast";
import { ShoppingCart } from "lucide-react";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";

const ProductCard = ({ product }) => {
	const { user } = useUserStore();
	const { addToCart } = useCartStore();

	const handleAddToCart = () => {
		if (!user) {
			toast.error("Đăng nhập để mua hàng", { id: "login" });
			return;
		}
		addToCart(product);
	};

	const getImageURL = (image) => {
		if (!image) return "";
		return `http://localhost:5000${image}`;
	};

	return (
		<div className="w-full flex flex-col border border-gray-600 rounded-lg bg-gray-800">
			<div className="w-full h-60">
				<img
					src={getImageURL(product.image)}
					alt={product.name}
					className="w-full h-full object-cover"
				/>
			</div>

			<div className="p-4">
				<h5 className="text-lg font-semibold text-white">{product.name}</h5>
				<p className="mt-2 text-2xl font-bold text-emerald-400">{product.price}VND</p>

				<button
					className="mt-4 flex items-center justify-center bg-emerald-600 text-white px-4 py-2 rounded"
					onClick={handleAddToCart}
				>
					<ShoppingCart size={20} className="mr-2" />
					Thêm vào giỏ
				</button>
			</div>
		</div>
	);
};

export default ProductCard;

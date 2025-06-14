import { Minus, Plus, Trash } from "lucide-react";
import { useCartStore } from "../stores/useCartStore";

const CartItem = ({ item }) => {
	const { removeFromCart, updateQuantity } = useCartStore();

	const getImageURL = (image) => {
		if (!image) return "";
		return `http://localhost:5000${image}`;
	};

	return (
		<div className='rounded-lg border p-4 border-gray-700 bg-gray-800'>
			<div className='md:flex md:items-center md:justify-between md:gap-6'>
				<div className='shrink-0'>
					<img
						className='h-20 md:h-32 rounded object-cover'
						src={getImageURL(item.image)}
						alt={item.name}
					/>
				</div>

				<div className='flex items-center justify-between mt-4 md:mt-0'>
					<div className='flex items-center gap-2'>
						<button
							className='h-5 w-5 rounded-md border border-gray-600 bg-gray-700 text-gray-300'
							onClick={() => updateQuantity(item._id, item.quantity - 1)}
						>
							<Minus size={14} />
						</button>
						<p>{item.quantity}</p>
						<button
							className='h-5 w-5 rounded-md border border-gray-600 bg-gray-700 text-gray-300'
							onClick={() => updateQuantity(item._id, item.quantity + 1)}
						>
							<Plus size={14} />
						</button>
					</div>

					<div className='ml-6 md:w-32 text-base font-bold text-emerald-400'>
						{item.price}VND
					</div>
				</div>

				<div className='mt-4 md:mt-0 md:max-w-md flex-1'>
					<p className='text-base font-medium text-white'>{item.name}</p>
					<p className='text-sm text-gray-400'>{item.description}</p>

					<div className='mt-2'>
						<button
							className='text-sm font-medium text-red-400'
							onClick={() => removeFromCart(item._id)}
						>
							<Trash size={16} />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartItem;

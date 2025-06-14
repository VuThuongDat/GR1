import { ShoppingCart } from "lucide-react";
import { useCartStore } from "../stores/useCartStore";

const FeaturedProducts = ({ featuredProducts }) => {
	const { addToCart } = useCartStore();

	return (
		<div className='py-12'>
			<div className='container mx-auto px-4'>
				<h2 className='text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-8'>Nổi bật</h2>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
					{featuredProducts?.map((product) => (
						<div key={product._id} className='bg-white bg-opacity-10 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-emerald-500/30'>
							<img
								src={`http://localhost:5000${product.image}`}
								alt={product.name}
								className='w-full h-48 object-cover'
							/>
							<div className='p-4'>
								<h3 className='text-lg font-semibold mb-2 text-white'>{product.name}</h3>
								<p className='text-emerald-300 font-medium mb-4'>
									{product.price.toFixed(2)}VND
								</p>
								<button
									onClick={() => addToCart(product)}
									className='w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2 px-4 rounded flex items-center justify-center'
								>
									<ShoppingCart className='w-5 h-5 mr-2' />
									Thêm vào giỏ hàng
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default FeaturedProducts;

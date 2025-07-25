import { Link } from "react-router-dom";
import { useCartStore } from "../stores/useCartStore";
import { ShoppingCart } from "lucide-react";
import CartItem from "../components/CartItem";
import PeopleAlsoBought from "../components/PeopleAlsoBought";
import OrderSummary from "../components/OrderSummary";

const CartPage = () => {
	const { cart } = useCartStore();

	return (
		<div className='py-8 md:py-16'>
			<div className='mx-auto max-w-screen-xl px-4 2xl:px-0'>
				<div className='mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8'>
					<div className='mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl'>
						{cart.length === 0 ? (
							<EmptyCartUI />
						) : (
							<>
								<div className='space-y-6'>
									{cart.map((item) => (
										<CartItem key={item._id} item={item} />
									))}
								</div>
								<PeopleAlsoBought />
							</>
						)}
					</div>

					{cart.length > 0 && (
						<div className='mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full'>
							<OrderSummary />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default CartPage;

const EmptyCartUI = () => (
	<div className='flex flex-col items-center justify-center space-y-4 py-16'>
		<ShoppingCart className='h-24 w-24 text-gray-300' />
		<h3 className='text-2xl font-semibold'>Giỏ hàng trống</h3>
		<Link
			to='/'
			className='mt-4 rounded-md bg-sky-500 px-6 py-2 text-white hover:bg-sky-600 transition'
		>
			Mua ngay!!!
		</Link>
	</div>
);

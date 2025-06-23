import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

const categories = [
	{ href: "/Ao_phong", name: "Áo Phông", imageUrl: "/aophong.jpg" },
	{ href: "/Balo", name: "Balo", imageUrl: "/balo.jpg" },
	{ href: "/Ca_vat", name: "Cà vạt", imageUrl: "/cavat.jpg" },
	{ href: "/Dep", name: "Dép", imageUrl: "/dep.jpg" },
	{ href: "/Kinh", name: "Kính", imageUrl: "/kinh.jpg" },
	{ href: "/Quan_dui", name: "Quần đùi", imageUrl: "/quandui.jpg" },
];

const HomePage = () => {
	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);

	return (
		<div className='relative min-h-screen text-white overflow-hidden'>
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<h1 className='text-center text-5xl sm:text-6xl font-bold text-sky-400 mb-4'>
					Danh mục
				</h1>
				<div className='grid lg:grid-cols-4 gap-4'>
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
				</div>
				{!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}
			</div>
		</div>
	);
};
export default HomePage;

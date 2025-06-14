import { useEffect, useState } from "react";
import axios from "../lib/axios";
import { Users, Package, ShoppingCart, DollarSign } from "lucide-react";

const AnalyticsTab = () => {
	const [analyticsData, setAnalyticsData] = useState({
		users: 0,
		products: 0,
		totalSales: 0,
		totalRevenue: 0,
	});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchAnalyticsData = async () => {
			try {
				const response = await axios.get("/analytics");
				setAnalyticsData(response.data.analyticsData);
			} catch (error) {
				console.error("Error fetching analytics data:", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchAnalyticsData();
	}, []);

	return (
		<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
				<AnalyticsCard title='Số người dùng' value={analyticsData.users} icon={Users} />
				<AnalyticsCard title='Số sản phẩm' value={analyticsData.products} icon={Package} />
				<AnalyticsCard title='Đã bán' value={analyticsData.totalSales} icon={ShoppingCart} />
				<AnalyticsCard title='Doanh thu' value={`${analyticsData.totalRevenue}VND`} icon={DollarSign} />
			</div>
		</div>
	);
};
export default AnalyticsTab;

const AnalyticsCard = ({ title, value, icon: Icon }) => (
	<div className='bg-gray-800 rounded-lg p-6 shadow-md flex items-center justify-between'>
		<div>
			<p className='text-gray-400 text-sm font-medium'>{title}</p>
			<h3 className='text-white text-2xl font-semibold'>{value.toLocaleString()}</h3>
		</div>
		<Icon className='h-10 w-10 text-emerald-400' />
	</div>
);

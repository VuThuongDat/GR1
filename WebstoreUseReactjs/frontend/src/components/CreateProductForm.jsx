import { useState } from "react";
import { PlusCircle, Upload, Loader } from "lucide-react";
import { useProductStore } from "../stores/useProductStore";

const categories = ["Ao_phong", "Balo", "Ca_vat", "Dep", "Kinh", "Quan_dui"];

const CreateProductForm = () => {
	const [newProduct, setNewProduct] = useState({
		name: "",
		description: "",
		price: "",
		category: "",
	});
	const [imageFile, setImageFile] = useState(null);
	const { createProduct, loading } = useProductStore();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("name", newProduct.name);
		formData.append("description", newProduct.description);
		formData.append("price", newProduct.price);
		formData.append("category", newProduct.category);
		if (imageFile) {
			formData.append("image", imageFile);
		}

		try {
			await createProduct(formData);
			setNewProduct({ name: "", description: "", price: "", category: "" });
			setImageFile(null);
		} catch {
			console.log("Thêm sản phẩm thất bại");
		}
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setImageFile(file);
		}
	};


	return (
		<div className='bg-gray-800 shadow-md rounded-lg p-6 max-w-xl mx-auto mb-8'>
			<h2 className='text-2xl font-semibold mb-4 text-emerald-300'>Thêm sản phẩm mới</h2>
			<form onSubmit={handleSubmit} className='space-y-4'>

				{/* Product Name */}
				<div>
					<label htmlFor='name' className='block text-sm text-gray-300'>Tên sản phẩm</label>
					<input
						type='text'
						id='name'
						value={newProduct.name}
						onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
						className='mt-1 w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white'
						required
					/>
				</div>

				{/* Description */}
				<div>
					<label htmlFor='description' className='block text-sm text-gray-300'>Mô tả sản phẩm</label>
					<textarea
						id='description'
						rows='3'
						value={newProduct.description}
						onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
						className='mt-1 w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white'
						required
					/>
				</div>

				{/* Price */}
				<div>
					<label htmlFor='price' className='block text-sm text-gray-300'>Giá(VND)</label>
					<input
						type='number'
						id='price'
						step='10000'
						value={newProduct.price}
						onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
						className='mt-1 w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white'
						required
					/>
				</div>

				{/* Category */}
				<div>
					<label htmlFor='category' className='block text-sm text-gray-300'>Danh mục</label>
					<select
						id='category'
						value={newProduct.category}
						onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
						className='mt-1 w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white'
						required
					>
						<option value=''>Chọn danh mục sản phẩm</option>
						{categories.map((category) => (
							<option key={category} value={category}>{category}</option>
						))}
					</select>
				</div>

				{/* Image Upload */}
				<div className='flex items-center'>
					<input
						type='file'
						id='image'
						accept='image/*'
						className='sr-only'
						onChange={handleImageChange}
					/>
					<label
						htmlFor='image'
						className='cursor-pointer bg-gray-700 px-3 py-2 rounded-md text-sm text-gray-300 border border-gray-600 hover:bg-gray-600'
					>
						<Upload className='h-5 w-5 inline-block mr-2' />
						Upload Image
					</label>
					{imageFile && <span className='ml-3 text-sm text-gray-400'>{imageFile.name}</span>}
				</div>

				{/* Submit Button */}
				<button
					type='submit'
					className='w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md flex items-center justify-center'
					disabled={loading}
				>
					{loading ? (
						<>
							<Loader className='h-5 w-5 mr-2 animate-spin' />
							Creating...
						</>
					) : (
						<>
							<PlusCircle className='h-5 w-5 mr-2' />
							Thêm sản phẩm
						</>
					)}
				</button>
			</form>
		</div>
	);
};

export default CreateProductForm;

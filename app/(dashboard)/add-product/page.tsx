import { createProduct } from "@/lib/actions/products";
import Link from "next/link";



const AddProductPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
        <main className="p-8">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="font-semibold text-2xl text-gray-900">Add Product</h1>
                        <p className="text-sm text-gray-500">Add a new product to your inventory.</p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-2xl">
                <div className="bg-white rounded-lg border border-gray-100 p-6">
                    <form className="space-y-6" 
                        action={createProduct}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 ">Product Name<span className="text-red-500">*</span></label>
                            <input type="text" name="name" id="name" placeholder="Enter Product Name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent" />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2 ">Price<span className="text-red-500">*</span></label>
                                <input type="number" name="price" id="price" step={0.01} min={0} placeholder="0.00" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent" />
                            </div>
                            <div>
                                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2 ">Quantity<span className="text-red-500">*</span></label>
                                <input type="number" name="quantity" id="quantity" min={0} placeholder="0" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="sku" className="block text-sm font-medium text-gray-700 mb-2 ">Sku (optional)</label>
                            <input type="text" name="sku" id="sku" placeholder="Enter SKU" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent" />
                        </div>

                        <div>
                            <label htmlFor="lowStockAt" className="block text-sm font-medium text-gray-700 mb-2 ">Low Stock At (optional)</label>
                            <input type="number" name="lowStockAt" id="lowStockAt" min={0} placeholder="Enter low stock threshold" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent" />
                        </div>

                        <div className="flex gap-5">
                            <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 cursor-pointer">
                                Add Product
                            </button>
                            <Link href="/inventory" className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 cursor-pointer">
                                Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    </div>
  )
}

export default AddProductPage;
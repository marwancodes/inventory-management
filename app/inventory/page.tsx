import Sidebar from "@/components/sidebar";
import deleteProduct from "@/lib/actions/products";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";



const InventoryPage = async ({searchParams}: {searchParams: Promise<{q? : string}>}) => {

    const user = await getCurrentUser();
    const userId = user.id;

    // Get search query
    const params = await searchParams;
    const q = (params.q ?? "").trim();


    const where = {
        userId,
        ...(q ? {name: {
            contains: q, 
            mode: "insensitive" as const} // Case-insensitive search for better UX
        } : {})
    }

    // const totalProducts = await prisma.product.findMany({
    //     where,
    // });

    const [totalCount, itmes] = await Promise.all([
        prisma.product.count({where}),
        prisma.product.findMany({
            where,
        }),
    ]);

    const pageSize = 10;
    const totalPages = Math.max(1, Math.ceil(totalCount/pageSize))

  return (
    <div className="min-h-screen bg-gray-50 text-black">
        <Sidebar currentPath="/inventory" />
        <main className="ml-64 p-8">
            {/* Title */}
            <div className="mb-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="font-semibold text-2xl text-gray-900">Inventory</h1>
                        <p className="text-sm text-gray-500">Manage your products & track inventory levels.</p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="space-y-6">

                {/* Search */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <form action="/inventory" method="GET" className="flex gap-2">
                        <input type="search" name="q" placeholder="Search products..." className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:border-transparent" />
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 cursor-pointer">
                            Search
                        </button>
                    </form>
                </div>

                {/* Products table */}
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">SKU</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Quantity</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Low Stock</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {itmes.map((product, i) => (
                                <tr key={i} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.sku || "-"}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">£{Number(product.price).toFixed(2)}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.quantity}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.lowStockAt || "-"}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <form action={async (formData: FormData) => {
                                            "use server";
                                            await deleteProduct(formData);
                                        }}>
                                            <input type="hidden" name="id" value={product.id} />
                                            <button className="text-red-600 hover:text-red-700 cursor-pointer">Delete</button>
                                        </form>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

               
            </div>

        </main>
    </div>
  )
}

export default InventoryPage;
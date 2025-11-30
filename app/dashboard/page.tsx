import Sidebar from "@/components/sidebar";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";


const DashboardPage = async () => {

    const user = getCurrentUser();
    const userId = (await user).id;

    const totalProducts = await prisma.product.count({where: {userId}});
    console.log(`Total Products: ${totalProducts}`);

  return (
    <div className="min-h-screen bg-gray-50 ">
        <Sidebar currentPath="/dashboard" />
        <main className="ml-64 p-8">
            {/* Header */}
            <div className="text-black mb-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
                        <p className="text-sm text-gray-500">Welcome back! Here is an overview of your inventory.</p>
                    </div>
                </div>
            </div>

            {/* Key Matrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            </div>
        </main>
    </div>
  )
}

export default DashboardPage;
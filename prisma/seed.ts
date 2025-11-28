// prisma/seed.ts
import { PrismaClient } from "@prisma/client/extension";
const prisma = new PrismaClient()

async function main() {
  // Replace this with a real Stack Auth user ID
  const demoUserId = "2add79b4-7279-4425-a979-eaa59f7bf642";

  // Generate 25 demo products
  const products = Array.from({ length: 25 }).map((_, i) => ({
    userId: demoUserId,
    name: `Product ${i + 1}`,
    sku: `SKU-${i + 1}`,                 // unique SKU
    price: (Math.random() * 90 + 10).toFixed(2), // Prisma converts string → Decimal
    quantity: Math.floor(Math.random() * 20),
    lowStockAt: 5,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * (i * 5)), // optional: spread creation dates
  }));

  await prisma.product.createMany({ data: products });

  console.log("✅ Seed data created successfully!");
  console.log("✅ 25 products created for user:", demoUserId);
}

main()
  .catch((err) => {
    console.error("❌ Error during seed:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
 
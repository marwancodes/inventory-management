"use server";

import { redirect } from "next/navigation";
import { getCurrentUser } from "../auth";
import { prisma } from "../prisma";
import {z} from "zod";


const ProductSchema = z.object({
    name: z.string().min(1, "Name is required").max(255),
    price: z.coerce.number().nonnegative("Price must be non-negative"),
    quantity: z.coerce.number().int().min(0, "Quantity must be at non-negative"),
    sku: z.string().max(100).optional(),
    lowStockAt: z.coerce.number().int().min(0).optional(),
})


const deleteProduct = async (formData: FormData) => {
    const user = await getCurrentUser();
    const id = String(formData.get("id") || "") ;

    await prisma.product.deleteMany({
        where: { 
            id: String(id), 
            userId: user.id
        }
    })
}
export const createProduct = async (formData: FormData) => {
    const user = await getCurrentUser();

    const parsedData = ProductSchema.safeParse({
        name: formData.get("name"),
        price: formData.get("price"),
        quantity: formData.get("quantity"),
        sku: formData.get("sku") || undefined,
        lowStockAt: formData.get("lowStockAt") || undefined,
    });

    if (!parsedData.success) {
        throw new Error("Invalid product data");
    }

    try {
        await prisma.product.create({
            data: {...parsedData.data, userId: user.id },
        });
    } catch (error) {
        throw new Error("Failed to create product.");
    }
    
    redirect("/inventory");

}

export default deleteProduct;
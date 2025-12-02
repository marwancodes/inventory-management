"use server";

import { getCurrentUser } from "../auth";
import { prisma } from "../prisma";


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

export default deleteProduct;
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

export const db=(database_url:string)=>{
    const prisma=new PrismaClient({
        datasourceUrl:database_url
    }).$extends(withAccelerate());
    return prisma
}
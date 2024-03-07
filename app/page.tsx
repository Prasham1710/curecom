import ProductCard from "./components/ProductCard";
import { prisma } from '@/app/lib/db/prisma';
export default async function Home() {
   const products =  await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
   });
  return (
    <div>
      <ProductCard product={products[0]}/>
    </div>
  );
}

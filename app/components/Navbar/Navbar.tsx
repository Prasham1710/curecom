import { getCart } from "@/app/lib/db/cart";
import Link from "next/link";
import { redirect } from "next/navigation";
import ShoppingCartButton from "./ShoppingCartButton";
import UserMenuButton from "./UserMenuButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/utils/authOptions";


async function searchProducts(formData: FormData) {
  "use server";

  const searchQuery = formData.get("searchQuery")?.toString();

  if (searchQuery) {
    redirect("components/search?query=" + searchQuery);
  }
}
export default async function Navbar() {
  const session = await getServerSession(authOptions);
  const cart = await getCart();
  return (
    <div className="bg-blue-400">
      <div className="navbar m-auto max-w-7xl flex-col gap-2 sm:flex-row">
        <div className="flex-1">
          <Link href="/" className="btn-ghost btn text-xl normal-case">
            Codecure
          </Link>
        </div>
        <div>
        
        </div>
        <Link className="btn-ghost text-lg btn" href="/">
          Home
        </Link>
        <Link className="btn-ghost text-lg btn" href="/">
          Consunlt doctor
        </Link>
        <div className="flex-none gap-2">
          <form action={searchProducts}>
            <div className="form-control">
              <input
                name="searchQuery"
                placeholder="Search"
                className="input-bordered input w-full min-w-[100px]"
              />
            </div>
          </form>
          <ShoppingCartButton cart={cart} />
          <UserMenuButton session={session} />
          <button className="p-3">Rx</button>
        </div>
      </div>
    </div>
  );
}
/* <nav className="navbar">
            <div className="navbar-start">
                <a href="/" className="navbar-brand">CodeCure</a>
            </div>
            <div className="navbar-end">
                <a href="components/add-product" className="btn btn-ghost">Add Product</a>
                <a href="/cart" className="btn btn-ghost">Cart</a>
            </div>
        </nav>*/

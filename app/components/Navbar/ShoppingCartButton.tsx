"use client";
import { ShoppingCart } from "@/app/lib/db/cart";
import { formatPrice } from "@/app/lib/format";
import Link from "next/link";
import { BsCartPlus } from "react-icons/bs";
interface ShoppingCartButtonProps {
  cart: ShoppingCart | null;
}
export default function ShoppingCartButton({ cart }: ShoppingCartButtonProps) {[]
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn-ghost btn-circle btn">
        <div className="indicator">
          <BsCartPlus size={25} />
          <span className="badge badge-sm indicator-item">
            {cart?.size || 0}
          </span>
        </div>
      </label>
      <div
        tabIndex={0}
        className="card dropdown-content card-compact z-30 mt-3 w-52 bg-base-100 shadow"
      >
        <div className="card-body">
          <span className="text-lg font-bold">{cart?.size || 0} Items</span>
          <span className="text-info">
            Subtotal: {formatPrice(cart?.subtotal || 0)}
          </span>
          <div className="card-actions">
            <Link href="components/cart" className="btn-primary btn-block btn">
              View cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

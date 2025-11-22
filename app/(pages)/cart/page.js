"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPlus, FaMinus, FaXmark } from "react-icons/fa6";
import Breadcrumb from "@/app/ui/Breadcrumb";
import { useCart } from "@/app/context/CartContext";
import EmptyCart from "@/app/components/cart/EmptyCart";

export default function CartPage() {
  const { cart, updateQuantity, removeItem, subtotal } = useCart();

  return (
    <div className="mt-20 bg-gradient-to-b from-softprimary/40 via-white to-softprimary/25">
      <Breadcrumb
        items={[{ label: "Shop", href: "/shop" }, { label: "Cart" }]}
      />

      <div className="container mb-12 pb-8">
        <div className="flex flex-col items-center gap-3 py-10 text-center">
          <span className="rounded-full bg-primary_color/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-hardprimary">
            Cart
          </span>
          <h2 className="text-[32px] font-semibold text-black_main">
            My Shopping Cart
          </h2>
          <p className="max-w-2xl text-sm text-secondary_color">
            Review your picks before checkout. Adjust quantities instantly and
            see totals update in real time.
          </p>
        </div>

        <EmptyCart cart={cart} />

        {cart.length > 0 && (
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-2xl border border-softprimary/60 bg-white/80 shadow-md backdrop-blur">
                <table className="w-full text-left">
                  <thead className="border-b border-softprimary/40 bg-softprimary text-hardprimary text-sm uppercase">
                    <tr>
                      <th className="w-[40%] px-6 py-4">Product</th>
                      <th className="px-6 py-4">Price</th>
                      <th className="px-6 py-4">Quantity</th>
                      <th className="px-6 py-4">Subtotal</th>
                      <th className="px-6 py-4"></th>
                    </tr>
                  </thead>

                  <tbody>
                    {cart.map((item) => (
                      <tr
                        key={item.id}
                        className="border-b border-softprimary/30 last:border-0 transition hover:bg-softprimary/40"
                      >
                        <td className="flex items-center gap-4 px-6 py-6">
                          <Image
                            src={item.thumbnail}
                            alt={item.title}
                            width={64}
                            height={64}
                            className="object-contain"
                          />
                          <span className="font-medium text-black_main">
                            {item.title}
                          </span>
                        </td>

                        <td className="px-6 py-6 font-semibold text-hardprimary">
                          ${item.price.toFixed(2)}
                        </td>

                        <td className="px-6 py-6">
                          <div className="flex w-fit items-center justify-center gap-3 rounded-full border border-softprimary/60 bg-softprimary/60 px-4 py-2 shadow-inner">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              disabled={item.quantity <= 1}
                              className="text-secondary_color transition hover:text-black_main disabled:opacity-40"
                            >
                              <FaMinus />
                            </button>

                            <span className="font-semibold text-black_main">
                              {item.quantity}
                            </span>

                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="text-secondary_color transition hover:text-black_main"
                            >
                              <FaPlus />
                            </button>
                          </div>
                        </td>

                        <td className="px-6 py-6 font-semibold text-black_main">
                          ${(item.price * item.quantity).toFixed(2)}
                        </td>

                        <td className="px-6 py-6 text-right">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-secondary_color transition hover:text-red-500"
                          >
                            <FaXmark />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
                <Link
                  href="/shop"
                  className="rounded-full border border-softprimary/60 px-6 py-3 text-sm font-semibold text-black_main transition hover:-translate-y-0.5 hover:border-hardprimary hover:bg-softprimary"
                >
                  Return to shop
                </Link>
              </div>
            </div>

            <div>
              <div className="rounded-2xl border border-softprimary/60 bg-white/85 p-6 shadow-md backdrop-blur">
                <h3 className="mb-4 text-xl font-semibold text-black_main">
                  Cart Total
                </h3>

                <div className="space-y-4 text-sm">
                  <div className="flex justify-between border-b pb-3">
                    <span className="text-secondary_color">Subtotal:</span>
                    <span className="font-semibold text-black_main">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between border-b pb-3">
                    <span className="text-secondary_color">Shipping:</span>
                    <span className="font-semibold text-primary_color">
                      Free
                    </span>
                  </div>

                  <div className="flex justify-between pb-3 text-lg font-semibold">
                    <span>Total:</span>
                    <span className="text-black_main">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                </div>

                <Link
                  href={"/checkout"}
                  className="mt-6 block w-full cursor-pointer rounded-full bg-primary_color py-3 text-center text-sm font-semibold text-white shadow-lg shadow-primary_color/25 transition hover:-translate-y-0.5 hover:bg-hardprimary"
                >
                  Proceed to checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

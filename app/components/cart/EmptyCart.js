import Image from "next/image";
import Link from "next/link";
import React from "react";

const EmptyCart = ({ cart }) => {
  return (
    <>
      {cart.length === 0 && (
        <div className="text-center py-16 border border-softprimary/50 rounded-2xl shadow-md bg-softprimary/60 backdrop-blur">
          <Image
            src="/images/empty-cart.png"
            alt="Empty Cart"
            width={200}
            height={200}
            className="mx-auto opacity-90"
          />

          <h3 className="text-xl font-semibold mt-6 text-black_main">
            Your cart is empty
          </h3>
          <p className="text-secondary_color mt-2">
            Looks like you haven&apos;t added anything yet.
          </p>

          <Link
            href="/shop"
            className="mt-6 inline-block rounded-full bg-primary_color px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-primary_color/20 transition hover:-translate-y-0.5 hover:bg-hardprimary"
          >
            Continue Shopping
          </Link>
        </div>
      )}
    </>
  );
};

export default EmptyCart;

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import logo from "@/public/images/logo.png";
import { FaTimes, FaUserCircle } from "react-icons/fa";
import { FaBagShopping, FaBars, FaUser } from "react-icons/fa6";
import { useCart } from "../context/CartContext";

const Navbar = ({ token }) => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { cart } = useCart();

  useEffect(() => {
    setMounted(true);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Blog", path: "/blog" },
    { name: "About Us", path: "/aboutus" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => pathname === path;

  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-gradient-to-b from-white/90 via-white/80 to-white/60 backdrop-blur-xl">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="rounded-2xl bg-primary_color/10 p-2 shadow-inner shadow-primary_color/10">
              <Image src={logo} alt="logo" className="h-10 w-auto" />
            </span>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-[11px] uppercase tracking-[0.2em] text-secondary_color">
                Organic Market
              </span>
              <span className="text-base font-semibold text-black_main">
                Fresh & Honest
              </span>
            </div>
          </Link>

          <ul className="hidden items-center gap-2 rounded-full border border-softprimary/40 bg-white/70 px-2 py-1 text-sm font-medium text-black_main shadow-sm backdrop-blur lg:flex">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 transition-all duration-200 ${
                    isActive(link.path)
                      ? "bg-primary_color text-white shadow-md shadow-primary_color/20"
                      : "hover:bg-softprimary/30 hover:text-hardprimary"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 sm:flex">
            <Link
              href="/cart"
              className={`relative rounded-full border border-softprimary/50 bg-white/80 p-2 text-xl transition hover:-translate-y-0.5 hover:border-primary_color hover:shadow-md ${
                mounted && cart.length > 0 ? "text-primary_color" : ""
              }`}
            >
              <FaBagShopping />
              {mounted && cart.length > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary_color text-[10px] font-semibold text-white">
                  {cart.length}
                </span>
              )}
            </Link>

            {token ? (
              <Link
                href="/profile"
                className="rounded-full border border-softprimary/50 bg-white/80 p-2 text-xl text-black_main transition hover:-translate-y-0.5 hover:border-primary_color hover:text-primary_color hover:shadow-md"
              >
                <FaUserCircle />
              </Link>
            ) : (
              <Link
                href="/login"
                className="rounded-full border border-softprimary/50 bg-white/80 px-4 py-2 text-sm font-semibold text-black_main transition hover:-translate-y-0.5 hover:border-primary_color hover:bg-primary_color hover:text-white hover:shadow-md"
              >
                Sign in
              </Link>
            )}
          </div>

          <button
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-softprimary/50 bg-white/80 text-xl text-black_main shadow-sm transition hover:-translate-y-0.5 hover:border-primary_color hover:text-primary_color hover:shadow-md lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* ====== mobile menu ============= */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-[420px] pb-4" : "max-h-0"
          }`}
        >
          <div className="rounded-2xl border border-softprimary/40 bg-white/80 p-5 shadow-md backdrop-blur">
            <ul className="flex flex-col gap-3 text-base font-semibold text-black_main">
              {links.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    onClick={() => setOpen(false)}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-2 transition ${
                      isActive(link.path)
                        ? "bg-primary_color text-white shadow-sm shadow-primary_color/30"
                        : "hover:bg-softprimary/30 hover:text-hardprimary"
                    }`}
                  >
                    {link.name}
                    {isActive(link.path) && (
                      <span className="text-[10px] font-semibold uppercase tracking-wide">
                        Live
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex items-center justify-between gap-4">
              <Link
                href="/cart"
                className="flex items-center gap-2 rounded-xl border border-softprimary/50 bg-white px-3 py-2 text-base font-semibold text-black_main shadow-sm transition hover:border-primary_color hover:text-primary_color"
              >
                <FaBagShopping />
                <span>Cart</span>
                {mounted && cart.length > 0 && (
                  <span className="rounded-full bg-primary_color px-2 text-xs font-semibold text-white">
                    {cart.length}
                  </span>
                )}
              </Link>

              {token ? (
                <Link
                  href="/profile"
                  className="flex items-center gap-2 rounded-xl border border-softprimary/50 bg-white px-3 py-2 text-base font-semibold text-black_main shadow-sm transition hover:border-primary_color hover:text-primary_color"
                >
                  <FaUserCircle />
                  <span>Profile</span>
                </Link>
              ) : (
                <Link
                  href="/login"
                  className="flex items-center justify-center gap-2 rounded-xl bg-primary_color px-3 py-2 text-base font-semibold text-white shadow-md transition hover:bg-hardprimary"
                >
                  <FaUser />
                  <span>Sign in</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

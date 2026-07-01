"use client";

import { Link } from "@/i18n/routing";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useTranslations } from "next-intl";
import {
  Home,
  Boxes,
  Sparkles,
  CreditCard,
  ShoppingCart,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";

export default function Header() {
  const t = useTranslations("header");

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { total, itemCount, setIsCartOpen } = useCart();

  return (
    <header className="bg-white border-b border-gray-200 relative z-30">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="w-14 h-14 rounded-2xl border-2 border-emerald-500 flex items-center justify-center bg-white transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-lg">
            <Image
              src="/logo.png"
              alt={t("logoAlt")}
              width={50}
              height={30}
            />
          </div>

          <div className="leading-none">
            <Image
              src="/title.png"
              alt={t("titleAlt")}
              width={150}
              height={30}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-full border border-gray-200 px-5 py-3 text-gray-700 transition-all duration-300 hover:bg-orange-500 hover:border-orange-500 hover:text-white hover:-translate-y-1 hover:shadow-lg active:scale-95"
          >
            <Home size={18} />
            {t("nav.home")}
          </Link>

          <Link
            href="/soluciones"
            className="flex items-center gap-2 rounded-full border border-gray-200 px-5 py-3 text-gray-700 transition-all duration-300 hover:bg-orange-500 hover:border-orange-500 hover:text-white hover:-translate-y-1 hover:shadow-lg active:scale-95"
          >
            <Boxes size={18} />
            {t("nav.solutions")}
          </Link>

          <Link
            href="/arquitectura-comercial-personalizada"
            className="flex items-center gap-2 rounded-full border border-gray-200 px-5 py-3 text-gray-700 transition-all duration-300 hover:bg-orange-500 hover:border-orange-500 hover:text-white hover:-translate-y-1 hover:shadow-lg active:scale-95"
          >
            <Sparkles size={18} />
            {t("nav.customPlan")}
          </Link>

          <Link
            href="/pagar-plan-personalizado"
            className="flex items-center gap-2 rounded-full border border-gray-200 px-5 py-3 text-gray-700 transition-all duration-300 hover:bg-orange-500 hover:border-orange-500 hover:text-white hover:-translate-y-1 hover:shadow-lg active:scale-95"
          >
            <CreditCard size={18} />
            {t("nav.payPlan")}
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Cart */}
          <button
            onClick={() => setIsCartOpen(true)}
            aria-label={t("cart")}
            className="relative flex items-center gap-3 rounded-full bg-emerald-500 text-white px-5 py-3 shadow-md transition-all duration-300 hover:bg-emerald-600 hover:scale-105 hover:shadow-xl active:scale-95"
          >
            <ShoppingCart size={20} />

            <span className="font-semibold whitespace-nowrap">
              $ {total.toLocaleString()}
            </span>

            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center animate-bounce">
                {itemCount}
              </span>
            )}
          </button>

          {/* Mobile Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={
              isMenuOpen ? t("closeMenu") : t("openMenu")
            }
            className="lg:hidden w-12 h-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center transition-all duration-300 hover:bg-orange-600 hover:scale-110 active:scale-95"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-6">
          <div className="rounded-3xl border border-gray-200 bg-white shadow-lg p-4 flex flex-col gap-3">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 rounded-2xl px-4 py-3 text-gray-700 transition-all duration-300 hover:bg-orange-500 hover:text-white"
            >
              <Home size={20} />
              {t("nav.home")}
            </Link>

            <Link
              href="/soluciones"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 rounded-2xl px-4 py-3 text-gray-700 transition-all duration-300 hover:bg-orange-500 hover:text-white"
            >
              <Boxes size={20} />
              {t("nav.solutions")}
            </Link>

            <Link
              href="/arquitectura-comercial-personalizada"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 rounded-2xl px-4 py-3 text-gray-700 transition-all duration-300 hover:bg-orange-500 hover:text-white"
            >
              <Sparkles size={20} />
              {t("nav.customPlan")}
            </Link>

            <Link
              href="/pagar-plan-personalizado"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 rounded-2xl px-4 py-3 text-gray-700 transition-all duration-300 hover:bg-orange-500 hover:text-white"
            >
              <CreditCard size={20} />
              {t("nav.payPlan")}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
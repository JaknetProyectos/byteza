"use client";

import { useLocale, useTranslations } from "next-intl";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { Link } from "@/i18n/routing";
import { solutionsEnglish, solutionsSpanish } from "@/lib/solutions";

import {
  Check,
  ShoppingCart,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function SolucionesPage() {
  const t = useTranslations("solutionsPage");
  const { addToCart } = useCart();
  const locale = useLocale()
  const solutions = locale == "es" ? solutionsSpanish : solutionsEnglish;

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Header />

      {/* Hero */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Glow Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-40 animate-pulse" />
          <div className="absolute bottom-0 right-10 w-80 h-80 bg-green-200 rounded-full blur-3xl opacity-40 animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-100 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 text-orange-700 px-5 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            {t("hero.badge")}
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
            {t.rich("hero.title", {
              span: (chunks) => (
                <span className="text-orange-500">
                  {chunks}
                </span>
              ),
            })}
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            {t("hero.description")}
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="relative py-10 px-6">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-0 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-40" />
          <div className="absolute bottom-10 left-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-40" />
        </div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              className="group relative bg-white border border-orange-100 rounded-[32px] p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Top Badge */}
              <div className="relative flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-200 group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-black text-gray-900 mb-5">
                {solution.name}
              </h3>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-end gap-2">
                  <span className="text-5xl font-black text-orange-500">
                    ${solution.price.toLocaleString()}
                  </span>
                </div>

                <span className="text-gray-500 text-sm font-medium">
                  {t("pricing.tax")}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10 flex-1">
                {solution.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>

                    <span className="text-sm leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                onClick={() =>
                  addToCart({
                    id: solution.id,
                    name: solution.name,
                    price: solution.price,
                  })
                }
                className="group/button relative overflow-hidden w-full flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-[1.02]"
              >
                <ShoppingCart className="w-5 h-5 transition-transform group-hover/button:rotate-6" />

                {t("pricing.button")}

                <ArrowRight className="w-5 h-5 transition-transform group-hover/button:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Custom CTA */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-20 top-10 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-40" />
          <div className="absolute right-20 bottom-0 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-40" />
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="bg-orange-50 border border-orange-100 rounded-[40px] p-10 md:p-16 text-center shadow-xl">
            <div className="w-20 h-20 mx-auto mb-8 rounded-3xl bg-green-500 flex items-center justify-center shadow-lg shadow-green-200 animate-bounce">
              <Sparkles className="w-10 h-10 text-white" />
            </div>

            <span className="inline-block bg-white border border-orange-200 text-orange-600 px-5 py-2 rounded-full font-semibold text-sm mb-6">
              {t("custom.badge")}
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              {t("custom.title")}
            </h2>

            <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed mb-10">
              {t("custom.description")}
            </p>

            <Link
              href="/arquitectura-comercial-personalizada"
              className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-2xl font-bold transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-200"
            >
              {t("custom.button")}

              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
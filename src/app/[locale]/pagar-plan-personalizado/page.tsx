"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import {
  Receipt,
  CreditCard,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function PagarPlanPersonalizadoPage() {
  const t = useTranslations("customPaymentPage");

  const [formData, setFormData] = useState({
    cotizacionId: "",
    monto: "",
  });

  const router = useRouter();

  const { addToCart } = useCart();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    addToCart({
      id: 0,
      name: `${t("cartItem")} - Byteza - ${formData.cotizacionId}`,
      price: Number(formData.monto),
    });

    router.push("/carrito");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Header />

      {/* Hero */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-40 animate-pulse" />
          <div className="absolute bottom-0 right-10 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-40 animate-pulse" />
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 text-orange-700 px-5 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            {t("hero.badge")}
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
            {t.rich("hero.title", {
              highlight: (chunks) => (
                <span className="text-orange-500">{chunks}</span>
              ),
            })}
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t("hero.description")}
          </p>
        </div>
      </section>

      {/* Payment Section */}
      <section className="relative py-16 px-6">
        {/* Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-20 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-40" />
          <div className="absolute right-0 bottom-10 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-40" />
        </div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Info */}
          <div className="bg-orange-50 border border-orange-100 rounded-[32px] p-8 md:p-10 shadow-xl">
            <div className="w-20 h-20 rounded-3xl bg-orange-500 flex items-center justify-center mb-8 shadow-lg shadow-orange-200">
              <Receipt className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-4xl font-black text-gray-900 mb-6 leading-tight">
              {t("info.title")}
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              {t("info.description")}
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4 bg-white rounded-2xl border border-orange-100 p-5">
                <div className="w-12 h-12 rounded-2xl bg-green-500 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    {t("securePayment.title")}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t("securePayment.description")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-2xl border border-orange-100 p-5">
                <div className="w-12 h-12 rounded-2xl bg-orange-500 flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    {t("paymentMethods.title")}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {t("paymentMethods.description")}
                  </p>

                  <Image
                    src="/cards.png"
                    alt={t("paymentMethods.imageAlt")}
                    width={160}
                    height={32}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white border border-gray-200 rounded-[32px] p-8 md:p-10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-7">
              {/* Quote ID */}
              <div>
                <label className="block text-gray-900 font-bold mb-3">
                  {t("form.quoteId")}
                </label>

                <input
                  type="text"
                  name="cotizacionId"
                  value={formData.cotizacionId}
                  onChange={handleChange}
                  required
                  placeholder={t("form.quotePlaceholder")}
                  className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-orange-400 focus:ring-4 focus:ring-orange-100 outline-none transition-all text-gray-900"
                />
              </div>

              {/* Amount */}
              <div>
                <label className="block text-gray-900 font-bold mb-3">
                  {t("form.amount")}
                </label>

                <div className="relative">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 font-bold">
                    $
                  </span>

                  <input
                    type="number"
                    name="monto"
                    value={formData.monto}
                    onChange={handleChange}
                    required
                    placeholder="0.00"
                    className="w-full h-14 pl-10 pr-5 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-orange-400 focus:ring-4 focus:ring-orange-100 outline-none transition-all text-gray-900"
                  />
                </div>
              </div>

              {/* Summary */}
              {formData.monto && (
                <div className="bg-orange-50 border border-orange-100 rounded-3xl p-6 space-y-4">
                  <div className="flex items-center justify-between text-gray-700">
                    <span>{t("summary.subtotal")}</span>

                    <span className="font-semibold">
                      ${Number(formData.monto).toLocaleString()} MXN
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-gray-700">
                    <span>{t("summary.tax")}</span>

                    <span className="font-semibold">
                      $
                      {(Number(formData.monto) * 0.16).toLocaleString()} MXN
                    </span>
                  </div>

                  <div className="border-t border-orange-200 pt-4 flex items-center justify-between">
                    <span className="text-lg font-black text-gray-900">
                      {t("summary.total")}
                    </span>

                    <span className="text-2xl font-black text-orange-500">
                      $
                      {(Number(formData.monto) * 1.16).toLocaleString()} MXN
                    </span>
                  </div>
                </div>
              )}

              {/* Button */}
              <button
                type="submit"
                className="group w-full h-14 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-orange-200"
              >
                {t("button")}

                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <p className="text-center text-sm text-gray-500">
                {t("footer")}
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
import { useTranslations } from "next-intl";
import React from "react";
import {
  Package,
  Rocket,
  ShoppingBag,
  Plus,
} from "lucide-react";

export default function CardV1() {
  const t = useTranslations("catalogCard");

  const products = [
    {
      title: t("products.product1.title"),
      subtitle: t("products.product1.subtitle"),
    },
    {
      title: t("products.product2.title"),
      subtitle: t("products.product2.subtitle"),
    },
    {
      title: t("products.product3.title"),
      subtitle: t("products.product3.subtitle"),
    },
  ];

  return (
    <div className="flex-1 flex justify-center">
      <div className="relative">
        {/* Shadow */}
        <div className="absolute inset-0 translate-y-6 scale-95 rounded-[40px] bg-orange-100 blur-2xl" />

        {/* Card */}
        <div className="relative rounded-[40px] border border-gray-200 bg-white p-8 shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:rotate-1">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                {t("badge")}
              </p>

              <h3 className="mt-2 text-2xl font-black text-gray-900">
                {t("title")}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                {t("description")}
              </p>
            </div>

            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-orange-500 text-white shadow-lg animate-bounce">
              <ShoppingBag className="h-8 w-8" strokeWidth={2.2} />
            </div>
          </div>

          {/* Products */}
          <div className="space-y-5">
            {products.map((product) => (
              <div
                key={product.title}
                className="flex items-center gap-4 rounded-3xl border border-gray-100 p-4 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                  <Package className="h-8 w-8" />
                </div>

                <div className="flex-1">
                  <p className="font-bold text-gray-900">
                    {product.title}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    {product.subtitle}
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white shadow-md">
                  <Plus className="h-5 w-5" strokeWidth={3} />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div className="mt-8 flex items-center justify-between rounded-3xl bg-emerald-500 p-5 text-white">
            <div>
              <p className="text-sm opacity-90">
                {t("ordersReady")}
              </p>

              <p className="text-2xl font-black">
                +1,280
              </p>
            </div>

            <Rocket className="h-12 w-12" strokeWidth={2.5} />
          </div>
        </div>
      </div>
    </div>
  );
}
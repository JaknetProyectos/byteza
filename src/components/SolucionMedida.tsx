import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  ArrowRight,
  CheckCircle2,
  LayoutTemplate,
  Package,
} from "lucide-react";
import CardV1 from "./CardV1";
import Image from "next/image";

export default function SolucionMedida() {
  const t = useTranslations("customSolution");

  return (
    <section className="relative overflow-hidden bg-orange-500 py-24 px-6">
      {/* Decorative Elements */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-orange-400 opacity-40" />
      <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-amber-400 opacity-30" />

      <div className="relative mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[40px] bg-white shadow-2xl">
          <div className="flex flex-col items-center gap-16 p-10 lg:flex-row lg:p-16">
            {/* Content */}
            <div className="flex-1">
              <span className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-semibold text-orange-600">
                {t("badge")}
              </span>

              <h2 className="mt-8 text-4xl lg:text-5xl text-gray-900 leading-tight">
                {t("title")}
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-gray-600">
                <strong>
                  {t("description")}
                </strong>
              </p>

              <div className="mt-10 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-500">
                    <LayoutTemplate size={22} />
                  </div>

                  <span className="text-gray-700 text-lg">
                    {t("items.catalog")}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-500">
                    <CheckCircle2 size={22} />
                  </div>

                  <span className="text-gray-700 text-lg">
                    {t("items.sales")}
                  </span>
                </div>
              </div>

              <Link
                href="/arquitectura-comercial-personalizada"
                className="mt-12 inline-flex items-center gap-3 rounded-full bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl active:scale-95"
              >
                {t("button")}
                <ArrowRight size={20} />
              </Link>
            </div>

            {/* Illustration */}
            <Image
              src={"https://plus.unsplash.com/premium_photo-1661481717830-0d07445509cf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              alt={""}
              width={600}
              height={800}
              className="rounded-xl"
            />
            {/* End Illustration */}
          </div>
        </div>
      </div>
    </section>
  );
}
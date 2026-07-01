import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  ArrowRight,
  CheckCircle2,
  LayoutTemplate,
  Package,
} from "lucide-react";

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
            <div className="flex flex-1 justify-center">
              <div className="relative">
                <div className="absolute inset-0 translate-y-6 scale-95 rounded-[40px] bg-orange-100 blur-2xl" />

                <div className="relative rounded-[40px] border border-gray-200 bg-gray-50 p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1">
                  <div className="rounded-3xl bg-white p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="h-5 w-40 rounded-full bg-gray-200"></div>
                        <div className="mt-3 h-3 w-24 rounded-full bg-gray-100"></div>
                      </div>

                      <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-orange-100 text-orange-500">
                        <Package size={34} />
                      </div>
                    </div>

                    <div className="mt-8 space-y-4">
                      {[1, 2, 3].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-4 rounded-2xl border border-gray-100 p-4 transition-all duration-300 hover:border-orange-200 hover:shadow-md"
                        >
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-500">
                            <CheckCircle2 size={20} />
                          </div>

                          <div className="flex-1">
                            <div className="h-4 w-32 rounded-full bg-gray-200"></div>
                            <div className="mt-2 h-3 w-20 rounded-full bg-gray-100"></div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex items-center justify-between rounded-3xl bg-orange-500 p-6 text-white">
                      <div>
                        <p className="text-sm opacity-90">
                          {t("card.subtitle")}
                        </p>

                        <p className="mt-1 text-2xl">
                          {t("card.title")}
                        </p>
                      </div>

                      <ArrowRight size={32} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Illustration */}
          </div>
        </div>
      </div>
    </section>
  );
}
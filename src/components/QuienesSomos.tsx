import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  ArrowRight,
  Briefcase,
  LayoutDashboard,
  Package,
} from "lucide-react";

export default function QuienesSomos() {
  const t = useTranslations("aboutCompany");

  return (
    <section className="relative overflow-hidden bg-white py-24 px-6">
      {/* Decorative Elements */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-orange-100" />
      <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-emerald-100" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-20 lg:flex-row items-center">
        {/* Illustration */}
        <div className="flex flex-1 justify-center">
          <div className="relative">
            <div className="absolute inset-0 translate-y-6 scale-95 rounded-[40px] bg-emerald-100 blur-2xl" />

            <div className="relative rounded-[40px] border border-gray-200 bg-white p-8 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:-rotate-1">
              <div className="rounded-3xl border border-gray-100 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="h-5 w-40 rounded-full bg-gray-200"></div>
                    <div className="mt-3 h-3 w-24 rounded-full bg-gray-100"></div>
                  </div>

                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-orange-100 text-orange-500">
                    <LayoutDashboard size={34} />
                  </div>
                </div>

                <div className="mt-8 grid gap-4">
                  {[Package, Briefcase, LayoutDashboard].map(
                    (Icon, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 rounded-2xl border border-gray-100 p-4 transition-all duration-300 hover:border-orange-200 hover:shadow-md"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-500">
                          <Icon size={22} />
                        </div>

                        <div className="flex-1">
                          <div className="h-4 w-32 rounded-full bg-gray-200"></div>
                          <div className="mt-2 h-3 w-20 rounded-full bg-gray-100"></div>
                        </div>
                      </div>
                    )
                  )}
                </div>

                <div className="mt-8 rounded-3xl bg-orange-500 p-6 text-white flex items-center justify-between">
                  <div>
                    <div className="text-sm opacity-90">
                      {t("card.subtitle")}
                    </div>

                    <div className="mt-1 text-2xl">
                      {t("card.title")}
                    </div>
                  </div>

                  <Briefcase size={34} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <span className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-semibold text-orange-600">
            {t("badge")}
          </span>

          <h2 className="mt-8 text-4xl lg:text-5xl text-gray-900 leading-tight">
            {t("title")}
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-gray-600">
            {t("description1")}
          </p>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            {t("description2")}
          </p>

          <h3 className="mt-10 text-2xl text-gray-900">
            {t("subtitle")}
          </h3>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            {t("description3")}
          </p>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            {t("description4")}
          </p>

          <Link
            href="/soluciones"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl active:scale-95"
          >
            {t("button")}
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
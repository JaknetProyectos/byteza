import { useTranslations } from "next-intl";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import CardV2 from "./CardV2";

export default function AboutSection() {
  const t = useTranslations("about");

  return (
    <section className="relative overflow-hidden bg-gray-50 py-24 px-6">
      {/* Decorative Elements */}
      <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-orange-100" />
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-emerald-100" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-20 lg:flex-row">
        {/* Content */}
        <div className="flex-1">
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-sm font-semibold text-emerald-600">
            {t("badge")}
          </span>

          <h2 className="mt-8 text-4xl lg:text-5xl text-gray-900 leading-tight">
            {t("title")}
            <span className="block text-orange-500">
              {t("highlight")}
            </span>
          </h2>

          <p className="mt-8 text-xl text-gray-600 leading-relaxed">
            {t("description")}
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-500">
                <CheckCircle2 size={24} />
              </div>

              <span className="text-gray-700 text-lg">
                {t("items.catalogs")}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-500">
                <CheckCircle2 size={24} />
              </div>

              <span className="text-gray-700 text-lg">
                {t("items.experience")}
              </span>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+525552445687"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-orange-500 px-7 py-4 text-white font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl active:scale-95"
            >
              <Phone size={20} />
              +52 1 55 5244 5687
            </a>
          </div>
        </div>

        <CardV2 />
      </div>
    </section>
  );
}
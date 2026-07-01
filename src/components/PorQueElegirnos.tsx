import { useTranslations } from "next-intl";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  CircleDot,
  Layers3,
  Target,
} from "lucide-react";

export default function PorQueElegirnos() {
  const t = useTranslations("whyChooseUs");

  const items = [
    t("items.friction"),
    t("items.decisions"),
    t("items.communication"),
    t("items.image"),
    t("items.integration"),
  ];

  return (
    <section className="relative overflow-hidden bg-gray-50 py-24 px-6">
      {/* Decorative Elements */}
      <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-orange-100" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-100" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-20 lg:flex-row items-center">
        {/* Content */}
        <div className="flex-1">
          <span className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-semibold text-orange-600">
            {t("badge")}
          </span>

          <h2 className="mt-8 text-4xl lg:text-5xl text-gray-900">
            {t("title")}
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            {t("description")}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-3 text-gray-800 shadow-sm">
              <Layers3 size={18} className="text-orange-500" />
              {t("tags.order")}
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-3 text-gray-800 shadow-sm">
              <CheckCircle2 size={18} className="text-emerald-500" />
              {t("tags.clarity")}
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-3 text-gray-800 shadow-sm">
              <Target size={18} className="text-orange-500" />
              {t("tags.conversion")}
            </span>
          </div>

          <h3 className="mt-10 text-2xl text-gray-900">
            {t("subtitle")}
          </h3>

          <div className="mt-8 space-y-5">
            {items.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-500">
                  <CircleDot size={18} />
                </div>

                <p className="text-lg text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Illustration */}
        <div className="flex flex-1 justify-center">
          <div className="relative">
            <div className="absolute inset-0 translate-y-6 scale-95 rounded-[40px] bg-orange-100 blur-2xl" />

            <div className="relative rounded-[40px] border border-gray-200 bg-white p-8 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1">
              <div className="rounded-3xl border border-gray-100 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="h-5 w-40 rounded-full bg-gray-200"></div>
                    <div className="mt-3 h-3 w-24 rounded-full bg-gray-100"></div>
                  </div>

                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-orange-100 text-orange-500">
                    <BarChart3 size={34} />
                  </div>
                </div>

                <div className="mt-8 space-y-5">
                  <div className="rounded-2xl border border-gray-100 p-5">
                    <div className="flex items-end gap-3 h-32">
                      <div className="w-8 rounded-t-xl bg-orange-300 h-12"></div>
                      <div className="w-8 rounded-t-xl bg-orange-400 h-20"></div>
                      <div className="w-8 rounded-t-xl bg-orange-500 h-28"></div>
                      <div className="w-8 rounded-t-xl bg-emerald-500 h-24"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl bg-gray-50 p-4 text-center"
                      >
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-500">
                          <CheckCircle2 size={20} />
                        </div>

                        <div className="mt-4 h-3 rounded-full bg-gray-200"></div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between rounded-3xl bg-emerald-500 p-6 text-white">
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
        </div>
      </div>

      <div className="relative mx-auto mt-24 max-w-5xl rounded-[32px] border border-gray-200 bg-white px-10 py-12 text-center shadow-lg">
        <h3 className="text-3xl text-gray-900">
          {t("bottom.title")}
        </h3>

        <p className="mt-4 text-2xl text-orange-500">
          {t("bottom.description")}
        </p>
      </div>
    </section>
  );
}
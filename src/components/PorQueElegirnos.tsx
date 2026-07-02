import { useTranslations } from "next-intl";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  CircleDot,
  Layers3,
  Target,
} from "lucide-react";
import CardV1 from "./CardV1";
import CardV2 from "./CardV2";
import Image from "next/image";

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
        <Image
          src={"https://plus.unsplash.com/premium_photo-1681487865280-c2b836dd83e8?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
          alt={""}
          width={600}
          height={800}
          className="rounded-xl"
        />
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
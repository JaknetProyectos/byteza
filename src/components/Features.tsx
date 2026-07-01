import { useTranslations } from "next-intl";
import {
  Search,
  FileText,
  Zap,
  MessageCircle,
} from "lucide-react";

export default function Features() {
  const t = useTranslations("features");

  const features = [
    {
      title: t("items.search"),
      icon: Search,
    },
    {
      title: t("items.offer"),
      icon: FileText,
    },
    {
      title: t("items.decisions"),
      icon: Zap,
    },
    {
      title: t("items.contact"),
      icon: MessageCircle,
    },
  ];

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-semibold text-orange-600">
          {t("badge")}
        </span>

        <p className="mt-8 text-lg text-gray-600 leading-relaxed">
          {t("description")}
        </p>

        <h2 className="mt-6 text-4xl lg:text-5xl text-gray-900">
          {t("title")}
        </h2>

        <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          {t("subtitle")}
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-16 grid gap-8 md:grid-cols-2">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={index}
              className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-xl"
            >
              <div className="flex items-start gap-6">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-orange-100 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  <Icon size={38} strokeWidth={2} />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl text-gray-900 leading-snug">
                    {feature.title}
                  </h3>

                  <div className="mt-6 h-1 w-16 rounded-full bg-emerald-500 transition-all duration-300 group-hover:w-24" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
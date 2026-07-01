import { useTranslations } from "next-intl";
import {
  BarChart3,
  Boxes,
  CheckCircle2,
  Code2,
} from "lucide-react";

export default function Metodologia() {
  const t = useTranslations("methodology");

  const steps = [
    {
      number: "1",
      title: t("steps.analysis.title"),
      description: t("steps.analysis.description"),
      icon: BarChart3,
    },
    {
      number: "2",
      title: t("steps.structure.title"),
      description: t("steps.structure.description"),
      icon: Boxes,
    },
    {
      number: "3",
      title: t("steps.development.title"),
      description: t("steps.development.description"),
      icon: Code2,
    },
    {
      number: "4",
      title: t("steps.delivery.title"),
      description: t("steps.delivery.description"),
      icon: CheckCircle2,
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-emerald-500 py-24 px-6"
      id="soluciones"
    >
      {/* Decorative Elements */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-400 opacity-30" />
      <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-emerald-300 opacity-20" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center text-white">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur-sm">
            {t("badge")}
          </span>

          <h2 className="mt-8 text-4xl lg:text-5xl">
            {t("title")}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/90">
            {t("description")}
          </p>
        </div>

        {/* Steps */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="group rounded-[32px] border border-white/10 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-orange-100 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                    <Icon size={32} />
                  </div>

                  <span className="text-5xl text-emerald-100 font-bold">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl text-gray-900 leading-snug">
                  {step.title}
                </h3>

                <p className="mt-5 text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                <div className="mt-8 h-1 w-16 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-24" />
              </div>
            );
          })}
        </div>

        {/* Bottom */}
        <div className="mt-24 rounded-[40px] border border-white/10 bg-white p-10 shadow-2xl">
          <h3 className="text-3xl text-gray-900">
            {t("bottom.title")}
          </h3>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
            {t.rich("bottom.description", {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
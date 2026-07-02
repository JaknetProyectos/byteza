import {
  BarChart3,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Users,
  Globe,
} from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

export default function CardV2() {
  const t = useTranslations("analyticsCard");

  const stats = [
    {
      icon: TrendingUp,
      label: t("stats.sales"),
    },
    {
      icon: Users,
      label: t("stats.clients"),
    },
    {
      icon: Globe,
      label: t("stats.visibility"),
    },
  ];

  return (
    <div className="flex flex-1 justify-center">
      <div className="relative">
        {/* Shadow */}
        <div className="absolute inset-0 translate-y-6 scale-95 rounded-[40px] bg-orange-100 blur-2xl" />

        {/* Card */}
        <div className="relative rounded-[40px] border border-gray-200 bg-white p-8 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1">
          <div className="rounded-3xl border border-gray-100 p-6">
            {/* Header */}
            <div className="flex items-center justify-between gap-5">
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

              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-orange-100 text-orange-500">
                <BarChart3 size={34} />
              </div>
            </div>

            <div className="mt-8 space-y-5">
              {/* Chart */}
              <div className="rounded-2xl border border-gray-100 p-5">
                <div className="flex h-32 items-end gap-3">
                  <div className="h-12 w-8 rounded-t-xl bg-orange-300"></div>

                  <div className="h-20 w-8 rounded-t-xl bg-orange-400"></div>

                  <div className="h-28 w-8 rounded-t-xl bg-orange-500"></div>

                  <div className="h-24 w-8 rounded-t-xl bg-emerald-500"></div>
                </div>

                <div className="mt-5 flex items-center justify-between text-xs font-medium text-gray-400">
                  <span>{t("chart.month1")}</span>
                  <span>{t("chart.month2")}</span>
                  <span>{t("chart.month3")}</span>
                  <span>{t("chart.month4")}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat) => {
                  const Icon = stat.icon;

                  return (
                    <div
                      key={stat.label}
                      className="rounded-2xl bg-gray-50 p-4 text-center transition-all duration-300 hover:bg-gray-100"
                    >
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-500">
                        <Icon size={20} />
                      </div>

                      <p className="mt-4 text-xs font-semibold text-gray-600">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Bottom CTA */}
              <div className="flex items-center justify-between rounded-3xl bg-emerald-500 p-6 text-white">
                <div>
                  <p className="text-sm opacity-90">
                    {t("bottom.subtitle")}
                  </p>

                  <p className="mt-1 text-2xl font-black">
                    {t("bottom.title")}
                  </p>
                </div>

                <ArrowRight size={32} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
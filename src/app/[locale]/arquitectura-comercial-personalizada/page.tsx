"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { useTranslations } from "next-intl";
import {
  ArrowRight,
  CheckCircle2,
  LayoutTemplate,
  Sparkles,
  Briefcase,
  Boxes,
} from "lucide-react";

export default function ArquitecturaPersonalizadaPage() {
  const t = useTranslations("customArchitecturePage");

  const benefits = [
    t("benefits.items.0"),
    t("benefits.items.1"),
    t("benefits.items.2"),
    t("benefits.items.3"),
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-orange-500 px-6 py-24">
        {/* Decorative */}
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-orange-400 opacity-30" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-amber-300 opacity-20" />

        <div className="relative mx-auto max-w-6xl text-center text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            {t("hero.badge")}
          </div>

          <h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">
            {t("hero.title")}
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/90 lg:text-xl">
            {t("hero.description")}
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative bg-white px-6 py-24">
        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-orange-100 opacity-50 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-emerald-100 opacity-50 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left */}
          <div>
            <span className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-semibold text-orange-600">
              {t("benefits.badge")}
            </span>

            <h2 className="mt-8 text-4xl leading-tight text-gray-900 lg:text-5xl">
              {t("benefits.title")}
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-gray-600">
              {t("benefits.description")}
            </p>

            <div className="mt-10 space-y-5">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-3xl border border-gray-100 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-500">
                    <CheckCircle2 size={22} />
                  </div>

                  <span className="text-lg text-gray-700">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center">
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
                      <LayoutTemplate size={34} />
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    {[Boxes, Briefcase, Sparkles].map((Icon, index) => (
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
                    ))}
                  </div>

                  <div className="mt-8 flex items-center justify-between rounded-3xl bg-orange-500 p-6 text-white">
                    <div>
                      <p className="text-sm opacity-90">
                        {t("card.label")}
                      </p>

                      <p className="mt-1 text-2xl font-bold">
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
      </section>

      {/* Contact */}
      <section className="relative bg-gray-50 px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-sm font-semibold text-emerald-600">
            {t("contact.badge")}
          </span>

          <h2 className="mt-8 text-4xl text-gray-900 lg:text-5xl">
            {t("contact.title")}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
            {t("contact.description")}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
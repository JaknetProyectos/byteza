"use client";

import { useTranslations } from "next-intl";
import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import ContactForm from "./ContactForm";

export default function ContactSection() {
  const t = useTranslations("contact");

  return (
    <section
      className="relative overflow-hidden bg-white py-24 px-6"
      id="contacto"
    >
      {/* Decorative Elements */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-orange-100" />
      <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-emerald-100" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-16 lg:flex-row">
        {/* Left */}
        <div className="flex-1">
          <span className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-semibold text-orange-600">
            {t("badge")}
          </span>

          <h2 className="mt-8 text-4xl lg:text-5xl text-gray-900 leading-tight">
            {t("title")}
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
            {t("description")}
          </p>

          <div className="mt-12 space-y-6">
            <a
              href="mailto:ventas@byteza.com.mx"
              className="group flex items-center gap-5 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                <Mail size={26} />
              </div>

              <span className="text-lg text-gray-800">
                ventas@byteza.com.mx
              </span>
            </a>

            <a
              href="tel:+525552445687"
              className="group flex items-center gap-5 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-500 transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-white">
                <Phone size={26} />
              </div>

              <span className="text-lg text-gray-800">
                +52 1 55 5244 5687
              </span>
            </a>

            <div className="flex items-start gap-5 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-orange-500">
                <MapPin size={26} />
              </div>

              <div>
                <span className="block text-lg text-gray-900">
                  {t("address.title")}
                </span>

                <span className="mt-2 block text-gray-600 leading-relaxed">
                  {t("address.description")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex-1">
          <div className="rounded-[40px] border border-gray-200 bg-white p-6 shadow-2xl">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
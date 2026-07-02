import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  ArrowRight,
  Briefcase,
  LayoutDashboard,
  Package,
} from "lucide-react";
import Image from "next/image";

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
          <Image
            src={"https://plus.unsplash.com/premium_photo-1683133556035-403d392ef900?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            alt={""}
            width={600}
            height={800}
            className="rounded-xl"
          />
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
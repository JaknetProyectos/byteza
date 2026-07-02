import { useTranslations } from "next-intl";
import { ShoppingBag, Smartphone, Timer } from "lucide-react";
import CardV1 from "./CardV1";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Decorative Elements */}
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-orange-100" />
      <div className="absolute top-20 right-0 w-56 h-56 rounded-full bg-emerald-100" />
      <div className="absolute bottom-10 left-1/2 w-8 h-8 rounded-full bg-orange-400 animate-bounce" />
      <div className="absolute top-40 left-16 w-4 h-4 rounded-full bg-emerald-500 animate-ping" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* Left */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="mt-8 text-5xl lg:text-7xl leading-tight text-gray-900">
            {t("title")}
            <span className="block text-orange-500">
              {t("highlight")}
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg lg:text-xl text-gray-600 leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Right */}
        <CardV1 />
      </div>
    </section>
  );
}
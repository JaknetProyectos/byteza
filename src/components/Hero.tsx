import { useTranslations } from "next-intl";
import { ShoppingBag, Smartphone, Timer } from "lucide-react";

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
        <div className="flex-1 flex justify-center">
          <div className="relative">
            {/* Shadow */}
            <div className="absolute inset-0 translate-y-6 scale-95 rounded-[40px] bg-orange-100 blur-2xl" />

            {/* Card */}
            <div className="relative rounded-[40px] border border-gray-200 bg-white p-8 shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:rotate-1">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className="h-5 w-36 rounded-full bg-gray-200 mb-3"></div>
                  <div className="h-3 w-24 rounded-full bg-gray-100"></div>
                </div>

                <div className="w-16 h-16 rounded-3xl bg-orange-500 flex items-center justify-center text-3xl text-white animate-bounce">
                  🛍️
                </div>
              </div>

              {/* Products */}
              <div className="space-y-5">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-3xl border border-gray-100 p-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.03]"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl">
                      📦
                    </div>

                    <div className="flex-1">
                      <div className="h-4 w-36 rounded-full bg-gray-200 mb-3"></div>
                      <div className="h-3 w-24 rounded-full bg-gray-100"></div>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">
                      +
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom */}
              <div className="mt-8 rounded-3xl bg-emerald-500 text-white p-5 flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">
                    {t("ordersReady")}
                  </p>

                  <p className="text-2xl font-bold">
                    +1,280
                  </p>
                </div>

                <div className="text-5xl">
                  🚀
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
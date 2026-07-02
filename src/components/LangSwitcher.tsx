"use client";

import { useLocaleContext } from "@/context/LangContext";

export default function LangSwitcher() {
  const { locale, switchLanguage, isPending } = useLocaleContext();

  const nextLang = locale === "es" ? "en" : "es";

  return (
    <button
      type="button"
      onClick={() => switchLanguage(nextLang)}
      disabled={isPending}
      aria-label="Switch language"
      className="
        fixed bottom-20 right-6 z-50

        flex items-center gap-2

        rounded-full
        border border-orange-200

        bg-white/85
        backdrop-blur-md

        px-3 py-2

        shadow-lg
        shadow-orange-500/10

        transition-all duration-300

        hover:-translate-y-0.5
        hover:border-orange-300
        hover:shadow-xl
        hover:shadow-orange-500/15

        active:scale-95

        disabled:opacity-60
        disabled:cursor-not-allowed
      "
    >
      {/* Flag */}
      <span className="text-lg leading-none">
        {locale === "es" ? "🇲🇽" : "🇺🇸"}
      </span>

      {/* Lang code */}
      <span
        className="
          text-xs
          font-bold
          tracking-[0.15em]
          text-gray-700
          uppercase
        "
      >
        {locale === "es" ? "ES" : "EN"}
      </span>

      {/* Small status dot */}
      <span
        className={`
          h-2 w-2 rounded-full transition-all duration-300
          ${isPending ? "bg-orange-400 animate-pulse" : "bg-green-500"}
        `}
      />
    </button>
  );
}
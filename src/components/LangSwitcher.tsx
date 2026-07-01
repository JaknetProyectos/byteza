"use client";

import { Languages } from "lucide-react";
import { useLocaleContext } from "@/context/LangContext";

export default function LangSwitcher() {
  const { locale, switchLanguage, isPending } = useLocaleContext();

  const nextLang = locale === "es" ? "en" : "es";

  return (
    <button
      type="button"
      onClick={() => switchLanguage(nextLang)}
      disabled={isPending}
      aria-label="Cambiar idioma"
      className="
        fixed bottom-6 right-6 z-50
        group overflow-hidden

        flex items-center gap-4

        rounded-[1.5rem]
        border border-orange-100

        bg-white/90
        backdrop-blur-xl

        px-4 py-3

        shadow-[0_10px_40px_rgba(249,115,22,0.15)]

        transition-all duration-300 ease-out

        hover:-translate-y-1
        hover:scale-[1.02]
        hover:border-orange-200
        hover:shadow-[0_18px_50px_rgba(34,197,94,0.18)]

        active:scale-[0.98]

        disabled:opacity-60
        disabled:cursor-not-allowed
      "
    >
      {/* Glow */}
      <div
        className="
          absolute inset-0
          opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
          bg-gradient-to-r
          from-orange-100/20
          via-green-100/20
          to-orange-100/20
        "
      />

      {/* Icon */}
      <div
        className="
          relative
          flex h-12 w-12 items-center justify-center
          rounded-2xl

          bg-gradient-to-br
          from-orange-500
          to-green-500

          shadow-lg
          shadow-orange-500/20

          transition-all duration-300
          group-hover:rotate-6
          group-hover:scale-105
        "
      >
        <Languages className="h-5 w-5 text-white" />
      </div>

      {/* Text */}
      <div className="relative flex flex-col items-start leading-none">
        <span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold mb-1">
          Language
        </span>

        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-gray-900">
            {locale === "es" ? "Español" : "English"}
          </span>

          <div
            className="
              rounded-full
              bg-gradient-to-r
              from-orange-100
              to-green-100

              border border-orange-200

              px-2 py-1

              text-[10px]
              font-black
              text-orange-600
              tracking-wide
            "
          >
            {locale.toUpperCase()}
          </div>
        </div>
      </div>

      {/* Status */}
      <div className="relative flex items-center justify-center">
        <div
          className={`
            h-3 w-3 rounded-full transition-all duration-300
            ${
              isPending
                ? "bg-amber-400 animate-pulse"
                : "bg-green-500"
            }
          `}
        />

        {!isPending && (
          <div className="absolute h-3 w-3 rounded-full bg-green-400 animate-ping opacity-30" />
        )}
      </div>
    </button>
  );
}
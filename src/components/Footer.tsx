import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import {
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  ReceiptText,
  ScrollText,
} from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="relative overflow-hidden bg-orange-500 text-white">
      {/* Decorative Elements */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-orange-400 opacity-30" />
      <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-amber-400 opacity-20" />

      {/* Main Footer */}
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Contact */}
          <div className="rounded-[32px] border border-white/10 bg-white/10 p-8 backdrop-blur-sm">
            <h4 className="text-2xl mb-8">
              {t("contact.title")}
            </h4>

            <div className="space-y-5">
              <a
                href="tel:+525552445687"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:bg-white/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-orange-500">
                  <Phone size={22} />
                </div>

                <span className="text-white/90 transition-colors group-hover:text-white">
                  +52 1 55 5244 5687
                </span>
              </a>

              <a
                href="mailto:ventas@byteza.com.mx"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:bg-white/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-orange-500">
                  <Mail size={22} />
                </div>

                <span className="text-white/90 transition-colors group-hover:text-white">
                  ventas@byteza.com.mx
                </span>
              </a>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-orange-500">
                  <MapPin size={22} />
                </div>

                <p className="leading-relaxed text-white/90">
                  {t("contact.address")}
                </p>
              </div>
            </div>
          </div>

          {/* Catalog */}
          <div className="rounded-[32px] border border-white/10 bg-white/10 p-8 backdrop-blur-sm">
            <h4 className="text-2xl mb-8">
              {t("catalog.title")}
            </h4>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="leading-relaxed text-white/90">
                <strong>
                  {t("catalog.description")}
                </strong>
              </p>
            </div>
          </div>

          {/* Commercial Architecture */}
          <div className="rounded-[32px] border border-white/10 bg-white/10 p-8 backdrop-blur-sm">
            <h4 className="text-2xl mb-8">
              {t("architecture.title")}
            </h4>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="leading-relaxed text-white/90">
                <strong>
                  {t("architecture.description")}
                </strong>
              </p>
            </div>

            {/* Logo */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex p-5 items-center justify-center rounded-3xl bg-white shadow-lg">
                <Image
                  src={"/logo.png"}
                  alt={""}
                  width={80}
                  height={80}
                  className="rounded-xl"
                />

                <Image
                  src={"/title.png"}
                  alt={""}
                  width={180}
                  height={80}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Payments */}
        <div className="mt-16 flex justify-center">
          <div className="rounded-3xl border border-white/10 bg-white/10 px-8 py-5 backdrop-blur-sm">
            <Image
              src="/cards.png"
              alt={t("paymentsAlt")}
              width={150}
              height={30}
            />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative border-t border-white/10 bg-orange-600/40 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 lg:flex-row">
          <p className="text-center text-sm text-white/80 lg:text-left">
            {t("copyright")}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link
              href="#"
              className="flex items-center gap-2 text-white/80 transition-colors hover:text-white"
            >
              <ShieldCheck size={16} />
              {t("links.privacy")}
            </Link>

            <Link
              href="#"
              className="flex items-center gap-2 text-white/80 transition-colors hover:text-white"
            >
              <ScrollText size={16} />
              {t("links.terms")}
            </Link>

            <Link
              href="#"
              className="flex items-center gap-2 text-white/80 transition-colors hover:text-white"
            >
              <ReceiptText size={16} />
              {t("links.refunds")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  Building2,
  Loader2,
  Mail,
  MessageSquareText,
  Send,
  User,
} from "lucide-react";

import { useContact } from "@/hooks/useContact";

export default function ContactForm() {
  const t = useTranslations("contactForm");

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    solucion: "",
    empresa: "",
    descripcion: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { sendContactForm, isLoading } = useContact();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");

    const response = await sendContactForm({
      nombre: formData.nombre,
      email: formData.email,
      servicioDeseado: formData.solucion,
      tienda: formData.empresa,
      mensaje: formData.descripcion,
    });

    if (response.success) {
      setSuccessMessage(t("messages.success"));

      setFormData({
        nombre: "",
        email: "",
        solucion: "",
        empresa: "",
        descripcion: "",
      });

      return;
    }

    setErrorMessage(
      response.error || t("messages.error")
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="bg-white" id="contacto">
      <div className="rounded-[36px] border border-gray-200 bg-white p-8 shadow-xl lg:p-10">
        <div className="mb-8">
          <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-600">
            {t("badge")}
          </span>

          <h3 className="mt-6 text-3xl text-gray-900">
            {t("title")}
          </h3>

          <p className="mt-4 text-gray-600 leading-relaxed">
            {t("description")}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nombre */}
          <div>
            <label className="mb-3 block text-sm font-medium text-gray-700">
              {t("fields.name")}{" "}
              <span className="text-orange-500">*</span>
            </label>

            <div className="relative">
              <User
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                placeholder={t("placeholders.name")}
                className="h-14 w-full rounded-2xl border border-gray-200 bg-gray-50 pl-14 pr-5 text-gray-900 outline-none transition-all duration-300 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="mb-3 block text-sm font-medium text-gray-700">
              {t("fields.email")}{" "}
              <span className="text-orange-500">*</span>
            </label>

            <div className="relative">
              <Mail
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t("placeholders.email")}
                className="h-14 w-full rounded-2xl border border-gray-200 bg-gray-50 pl-14 pr-5 text-gray-900 outline-none transition-all duration-300 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
              />
            </div>
          </div>

          {/* Solución */}
          <div>
            <label className="mb-3 block text-sm font-medium text-gray-700">
              {t("fields.solution")}{" "}
              <span className="text-orange-500">*</span>
            </label>

            <div className="relative">
              <Send
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                name="solucion"
                value={formData.solucion}
                onChange={handleChange}
                required
                placeholder={t("placeholders.solution")}
                className="h-14 w-full rounded-2xl border border-gray-200 bg-gray-50 pl-14 pr-5 text-gray-900 outline-none transition-all duration-300 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
              />
            </div>
          </div>

          {/* Empresa */}
          <div>
            <label className="mb-3 block text-sm font-medium text-gray-700">
              {t("fields.company")}{" "}
              <span className="text-orange-500">*</span>
            </label>

            <div className="relative">
              <Building2
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
                required
                placeholder={t("placeholders.company")}
                className="h-14 w-full rounded-2xl border border-gray-200 bg-gray-50 pl-14 pr-5 text-gray-900 outline-none transition-all duration-300 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
              />
            </div>
          </div>

          {/* Descripción */}
          <div>
            <label className="mb-3 block text-sm font-medium text-gray-700">
              {t("fields.description")}{" "}
              <span className="text-orange-500">*</span>
            </label>

            <div className="relative">
              <MessageSquareText
                size={20}
                className="absolute left-5 top-5 text-gray-400"
              />

              <textarea
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                required
                rows={5}
                placeholder={t("placeholders.description")}
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 pl-14 pr-5 pt-5 pb-5 text-gray-900 outline-none resize-none transition-all duration-300 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
              />
            </div>
          </div>

          {/* Success */}
          {successMessage && (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm text-emerald-700">
              {successMessage}
            </div>
          )}

          {/* Error */}
          {errorMessage && (
            <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
              {errorMessage}
            </div>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-orange-500 px-8 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                {t("button.loading")}
              </>
            ) : (
              <>
                {t("button.submit")}
                <Send size={20} />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
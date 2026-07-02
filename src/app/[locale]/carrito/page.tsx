"use client";

import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  ChevronLeft,
  CreditCard,
  User,
  MapPin,
  CheckCircle2,
  AlertTriangle,
  ReceiptText,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { useCart } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { processOctanoPayment } from "@/lib/payment";
import { formatPrice } from "@/lib/price";

type Step = 1 | 2 | 3;

function CardShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[32px] border border-gray-200 bg-white shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

function SectionTitle({
  icon: Icon,
  title,
}: {
  icon: React.ElementType;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
      <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-orange-100 text-orange-500">
        <Icon className="h-4 w-4" />
      </div>

      <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-700">
        {title}
      </h3>
    </div>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
  placeholder,
  className = "",
  maxLength,
  mono = false,
  inputClassName = "",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
  maxLength?: number;
  mono?: boolean;
  inputClassName?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-gray-600">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        className={`w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100 ${
          mono ? "font-mono" : ""
        } ${inputClassName}`}
      />
    </div>
  );
}

export default function CarritoCheckoutPage() {
  const t = useTranslations("cartPage");
  const locale = useLocale();

  const { items, total, updateQuantity, removeFromCart, clearCart } = useCart();

  const [step, setStep] = useState<Step>(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successData, setSuccessData] = useState<any>(null);

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    empresa: "",
    direccion: "",
    direccion2: "",
    ciudad: "",
    estado: "",
    cp: "",
    pais: "MX",
    cardNumber: "",
    cardName: "",
    cardMonth: "",
    cardYear: "",
    cardCvv: "",
  });

  const totalWithDiscount = total;
  const iva = totalWithDiscount * 0.16;
  const grandTotal = totalWithDiscount + iva;

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckoutSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setErrorMessage("");

    const uniqueOrderId = `MC-${Date.now()}`;

    const paymentPayload = {
      amount: Number(grandTotal.toFixed(2)),
      orderId: uniqueOrderId,
      cardData: {
        number: formData.cardNumber.replace(/\s/g, ""),
        name: formData.cardName.trim(),
        month: formData.cardMonth.padStart(2, "0"),
        year: formData.cardYear.trim(),
        cvv: formData.cardCvv.trim(),
      },
      customer: {
        nombre: formData.nombre.trim(),
        apellido: formData.apellido.trim(),
        email: formData.email.trim(),
        telefono: formData.telefono.trim(),
        direccion: formData.direccion.trim(),
        direccion2: formData.direccion2.trim() || undefined,
        ciudad: formData.ciudad.trim(),
        estado: formData.estado.trim(),
        pais: formData.pais,
        cp: formData.cp.trim(),
        empresa: formData.empresa.trim() || undefined,
      },
      metadata: {
        notes: "",
      },
    };

    try {
      const response = await processOctanoPayment(paymentPayload);

      if (response.success) {
        setSuccessData(response.data);

        console.log({
          orderId: uniqueOrderId,
          amount: paymentPayload.amount,
          customer: paymentPayload.customer,
          items,
          metadata: paymentPayload.metadata,
        });

        try {
          await fetch(`/${locale ?? "es"}/api/checkout`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              orderId: uniqueOrderId,
              amount: paymentPayload.amount,
              customer: paymentPayload.customer,
              items,
              metadata: paymentPayload.metadata,
            }),
          });
        } catch (emailError) {
          console.error("⚠️ Falló el despacho de correos informativos:", emailError);
        }

        clearCart();
        setStep(3);
      } else {
        setErrorMessage(response.error || t("errors.declined"));
      }
    } catch (err) {
      console.error(err);
      setErrorMessage(t("errors.connection"));
    } finally {
      setIsProcessing(false);
    }
  };

  if (step === 3) {
    return (
      <main className="flex min-h-screen flex-col justify-between bg-white">
        <Header />

        <section className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center px-4 py-20 text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-600 shadow-sm">
            <CheckCircle2 className="h-10 w-10" />
          </div>

          <span className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
            {t("success.approved")}
          </span>

          <h1 className="mt-8 text-4xl text-gray-900">
            {t("success.title")}
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600">
            {t("success.description")}
          </p>

          <CardShell className="mt-10 w-full p-6 text-left">
            <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-500">
                <ReceiptText className="h-4 w-4" />
              </div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-700">
                {t("success.transactionStatus")}
              </h3>
            </div>

            <div className="mt-5 flex items-center justify-between rounded-3xl bg-gray-50 px-5 py-4">
              <span className="text-sm font-medium text-gray-600">
                {t("success.transactionStatus")}
              </span>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                {t("success.approved")}
              </span>
            </div>

            {successData ? (
              <div className="mt-4 rounded-3xl border border-gray-200 bg-white p-5">
                <p className="text-sm text-gray-600">
                  {t("success.title")}
                </p>
              </div>
            ) : null}
          </CardShell>

          <Link href="/soluciones" className="mt-8 w-full">
            <button className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-orange-500 py-5 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl">
              {t("success.backToCatalog")}
              <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
        </section>

        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="sticky top-0 z-10 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col items-stretch justify-between gap-4 px-4 py-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
            <Link href="/" className="transition-colors hover:text-gray-900">
              {t("breadcrumb.home")}
            </Link>
            <span>/</span>
            <span className={step === 1 ? "font-bold text-orange-600" : ""}>
              {t("breadcrumb.summary")}
            </span>
            <span>/</span>
            <span className={step === 2 ? "font-bold text-orange-600" : ""}>
              {t("breadcrumb.shippingPayment")}
            </span>
          </nav>

          <div className="flex items-center gap-3">
            <div
              className={`h-3 w-3 rounded-full ${
                step >= 1 ? "bg-orange-500" : "bg-gray-200"
              }`}
            />
            <div
              className={`h-1 w-12 rounded-full ${
                step >= 2 ? "bg-emerald-500" : "bg-gray-200"
              }`}
            />
            <div
              className={`h-3 w-3 rounded-full ${
                step >= 2 ? "bg-emerald-500" : "bg-gray-200"
              }`}
            />
          </div>
        </div>
      </div>

      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <CardShell className="mx-auto max-w-lg p-12 text-center">
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-orange-50 text-orange-500">
                <ShoppingBag className="h-10 w-10" />
              </div>

              <h2 className="mb-3 text-2xl text-gray-900">
                {t("empty.title")}
              </h2>

              <p className="mb-8 text-sm leading-relaxed text-gray-600">
                {t("empty.description")}
              </p>

              <Link href="/soluciones">
                <button className="rounded-full bg-emerald-500 px-7 py-4 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-600 hover:shadow-xl">
                  {t("empty.goToStore")}
                </button>
              </Link>
            </CardShell>
          ) : (
            <div className="grid items-start gap-8 lg:grid-cols-3">
              <div className="space-y-4 lg:col-span-2">
                {errorMessage && (
                  <div className="flex items-center gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">
                    <AlertTriangle className="h-4 w-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {step === 1 && (
                  <div className="space-y-4">
                    <CardShell className="flex items-center justify-between p-5">
                      <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-800">
                        {t("order.title")}
                      </h2>
                      <button
                        type="button"
                        onClick={clearCart}
                        className="flex items-center gap-1.5 text-xs font-bold text-red-600 transition hover:underline"
                      >
                        <Trash2 className="h-3.5 w-3.5" /> {t("order.clear")}
                      </button>
                    </CardShell>

                    {items.map((item) => (
                      <CardShell
                        key={item.id}
                        className="flex gap-4 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                      >
                        <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
                          <Image
                            src={"/logo.png"}
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </div>

                        <div className="flex min-w-0 flex-1 flex-col justify-between">
                          <div className="flex justify-between gap-2">
                            <div>
                              <h3 className="mt-1 line-clamp-1 text-sm font-bold text-gray-800">
                                {item.name}
                              </h3>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFromCart(item.id)}
                              className="rounded-xl p-2 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>

                          <div className="mt-3 flex items-center justify-between">
                            <div className="flex items-center rounded-full border border-gray-200 bg-gray-50 p-1">
                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                                className="rounded-full p-2 transition hover:bg-white hover:text-orange-600"
                              >
                                <Minus className="h-3 w-3" />
                              </button>

                              <span className="w-10 text-center text-xs font-bold text-gray-800">
                                {item.quantity}
                              </span>

                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                                className="rounded-full p-2 transition hover:bg-white hover:text-emerald-600"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>

                            <span className="text-sm font-black text-gray-900">
                              {formatPrice(item.price * item.quantity, "MXN", true)}
                            </span>
                          </div>
                        </div>
                      </CardShell>
                    ))}
                  </div>
                )}

                {step === 2 && (
                  <form
                    id="octano-payment-form"
                    onSubmit={handleCheckoutSubmit}
                    className="space-y-6"
                  >
                    <CardShell className="space-y-5 p-6">
                      <SectionTitle icon={User} title={t("form.buyerTitle")} />
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <Field
                          label={t("form.firstName")}
                          name="nombre"
                          value={formData.nombre}
                          onChange={handleInputChange}
                          required
                        />
                        <Field
                          label={t("form.lastName")}
                          name="apellido"
                          value={formData.apellido}
                          onChange={handleInputChange}
                          required
                        />
                        <Field
                          label={t("form.email")}
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                        <Field
                          label={t("form.phone")}
                          name="telefono"
                          type="tel"
                          value={formData.telefono}
                          onChange={handleInputChange}
                          required
                        />
                        <Field
                          label={t("form.company")}
                          name="empresa"
                          value={formData.empresa}
                          onChange={handleInputChange}
                          className="sm:col-span-2"
                        />
                      </div>
                    </CardShell>

                    <CardShell className="space-y-5 p-6">
                      <SectionTitle icon={MapPin} title={t("form.addressTitle")} />
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <Field
                          label={t("form.streetAddress")}
                          name="direccion"
                          value={formData.direccion}
                          onChange={handleInputChange}
                          required
                          placeholder={t("form.streetAddressPlaceholder")}
                          className="sm:col-span-2"
                        />
                        <Field
                          label={t("form.neighborhood")}
                          name="direccion2"
                          value={formData.direccion2}
                          onChange={handleInputChange}
                          placeholder={t("form.neighborhoodPlaceholder")}
                          className="sm:col-span-2"
                        />
                        <Field
                          label={t("form.city")}
                          name="ciudad"
                          value={formData.ciudad}
                          onChange={handleInputChange}
                          required
                        />
                        <Field
                          label={t("form.state")}
                          name="estado"
                          value={formData.estado}
                          onChange={handleInputChange}
                          required
                          placeholder={t("form.statePlaceholder")}
                        />
                        <Field
                          label={t("form.postalCode")}
                          name="cp"
                          value={formData.cp}
                          onChange={handleInputChange}
                          required
                        />
                        <div>
                          <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-gray-600">
                            {t("form.country")}
                          </label>
                          <select
                            name="pais"
                            value={formData.pais}
                            onChange={handleInputChange}
                            className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-all duration-300 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
                          >
                            <option value="MX">{t("form.mexico")}</option>
                          </select>
                        </div>
                      </div>
                    </CardShell>

                    <CardShell className="space-y-5 p-6">
                      <SectionTitle icon={CreditCard} title={t("form.paymentTitle")} />
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <Field
                          label={t("form.cardNumber")}
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          required
                          maxLength={16}
                          placeholder={t("form.cardNumberPlaceholder")}
                          className="sm:col-span-3"
                          mono
                          inputClassName="tracking-[0.3em]"
                        />
                        <Field
                          label={t("form.cardHolderName")}
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          required
                          placeholder={t("form.cardHolderPlaceholder")}
                          className="sm:col-span-3"
                        />
                        <Field
                          label={t("form.expiryMonth")}
                          name="cardMonth"
                          value={formData.cardMonth}
                          onChange={handleInputChange}
                          required
                          maxLength={2}
                          placeholder={t("form.expiryMonthPlaceholder")}
                          mono
                          inputClassName="text-center"
                        />
                        <Field
                          label={t("form.expiryYear")}
                          name="cardYear"
                          value={formData.cardYear}
                          onChange={handleInputChange}
                          required
                          maxLength={4}
                          placeholder={t("form.expiryYearPlaceholder")}
                          mono
                          inputClassName="text-center"
                        />
                        <Field
                          label={t("form.cvv")}
                          name="cardCvv"
                          type="password"
                          value={formData.cardCvv}
                          onChange={handleInputChange}
                          required
                          maxLength={4}
                          placeholder={t("form.cvvPlaceholder")}
                          mono
                          inputClassName="text-center"
                        />
                      </div>
                    </CardShell>
                  </form>
                )}
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6 rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-500">
                      <Truck className="h-4 w-4" />
                    </div>
                    <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-800">
                      {t("financial.title")}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between text-xs font-medium text-gray-600">
                      <span>{t("financial.subtotal")}</span>
                      <span className="font-bold text-gray-900">
                        {formatPrice(total, "MXN", true)}
                      </span>
                    </div>

                    <div className="h-px bg-gray-200" />

                    <div className="flex items-baseline justify-between">
                      <span className="text-sm font-bold text-gray-900">
                        {t("financial.netTotal")}
                      </span>
                      <span className="text-3xl font-black text-gray-900">
                        {formatPrice(grandTotal, "MXN", true)}
                      </span>
                    </div>

                    <p className="-mt-2 text-right text-[10px] text-gray-500">
                      {t("financial.tax", {
                        tax: formatPrice(iva, "MXN", true),
                      })}
                    </p>
                  </div>

                  {step === 1 ? (
                    <button
                      onClick={() => setStep(2)}
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 py-5 text-sm font-bold tracking-[0.18em] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl"
                    >
                      {t("actions.proceedToPayment")}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <div className="space-y-3">
                      <button
                        type="submit"
                        form="octano-payment-form"
                        disabled={isProcessing}
                        className={`flex w-full items-center justify-center gap-2 rounded-full py-5 text-sm font-bold tracking-[0.18em] text-white transition-all duration-300 ${
                          isProcessing
                            ? "cursor-wait bg-gray-400"
                            : "bg-emerald-500 hover:-translate-y-1 hover:bg-emerald-600 hover:shadow-lg"
                        }`}
                      >
                        {isProcessing
                          ? t("actions.processing")
                          : t("actions.payAmount", {
                              amount: formatPrice(grandTotal, "MXN", true),
                            })}
                      </button>

                      <button
                        type="button"
                        disabled={isProcessing}
                        onClick={() => setStep(1)}
                        className="flex w-full items-center justify-center gap-1 py-2 text-center text-xs font-bold text-gray-500 transition hover:text-gray-900"
                      >
                        <ChevronLeft className="h-3.5 w-3.5" />
                        {t("actions.backToCart")}
                      </button>
                    </div>
                  )}

                  <div className="border-t border-gray-200 pt-4 text-center space-y-3">
                    <p className="text-[10px] font-medium text-gray-500">
                      {t("security.note")}
                    </p>

                    <div className="flex flex-row justify-between gap-4 rounded-3xl bg-gray-50 p-5">
                      <div className="flex flex-1 items-center justify-center rounded-2xl border border-gray-200 bg-white p-3 shadow-sm">
                        <Image
                          src="/octano.png"
                          alt={t("images.octanoAlt")}
                          width={150}
                          height={30}
                        />
                      </div>

                      <div className="flex flex-1 items-center justify-center rounded-2xl border border-gray-200 bg-white p-3 shadow-sm">
                        <Image
                          src="/secure-payment.png"
                          alt={t("images.securePaymentAlt")}
                          width={150}
                          height={30}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-xs font-semibold text-emerald-600">
                      <ShieldCheck className="h-4 w-4" />
                      {t("security.note")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
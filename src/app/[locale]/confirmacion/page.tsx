'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';
import { useTranslations } from 'next-intl';

function ConfirmationContent() {
  const t = useTranslations('confirmationPage');
  const searchParams = useSearchParams();

  // Obtención de parámetros URL
  const status = searchParams.get('status') || searchParams.get('state') || 'UNKNOWN';
  const reference = searchParams.get('reference') || searchParams.get('orderId') || 'N/A';
  const amount = searchParams.get('amount');

  // Normalizar estado
  const isApproved = status.toUpperCase() === 'APPROVED' || status.toUpperCase() === 'SUCCESS';
  const isPending = status.toLowerCase() === 'pending_authentication' || status.toUpperCase() === 'PENDING';

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-800 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      <main className="w-full max-w-lg">
        {/* Contenedor Principal: Blanco con acentos en Naranja y Verde */}
        <div className="bg-white text-neutral-800 rounded-[32px] p-6 sm:p-8 shadow-2xl border border-neutral-100 transition-all duration-300 relative overflow-hidden">
          
          {/* Esferas decorativas orgánicas en el fondo con naranja y verde suave */}
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center">

            {/* Ícono dinámico según estado */}
            <div className="mb-6 p-4 rounded-2xl bg-orange-50 ring-1 ring-orange-200 shadow-inner">
              {isApproved ? (
                // Éxito: Verde
                <svg className="w-12 h-12 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : isPending ? (
                // Pendiente: Naranja / Ámbar
                <svg className="w-12 h-12 text-orange-500 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                // Error: Rojo / Naranja intenso
                <svg className="w-12 h-12 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </div>

            {/* Encabezado */}
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 text-neutral-900">
              {isApproved
                ? t('status.approved.title')
                : isPending
                  ? t('status.pending.title')
                  : t('status.failed.title')}
            </h1>
            <p className="text-neutral-600 text-sm sm:text-base mb-8 max-w-sm">
              {isApproved
                ? t('status.approved.description')
                : isPending
                  ? t('status.pending.description')
                  : t('status.failed.description')}
            </p>

            {/* Card Interna de Detalles */}
            <div className="w-full bg-neutral-50 rounded-2xl p-5 mb-8 text-left ring-1 ring-neutral-200 space-y-3">
              <div className="flex justify-between items-center py-1 border-b border-neutral-200">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  {t('details.statusLabel')}
                </span>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                  isApproved
                    ? 'bg-emerald-100 text-emerald-800 ring-1 ring-emerald-300'
                    : isPending
                      ? 'bg-orange-100 text-orange-800 ring-1 ring-orange-300'
                      : 'bg-rose-100 text-rose-800 ring-1 ring-rose-300'
                }`}>
                  {status}
                </span>
              </div>

              <div className="flex justify-between items-center py-1 border-b border-neutral-200">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  {t('details.referenceLabel')}
                </span>
                <span className="text-sm font-mono font-medium text-neutral-800">{reference}</span>
              </div>

              {amount && (
                <div className="flex justify-between items-center pt-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    {t('details.totalLabel')}
                  </span>
                  <span className="text-base font-bold text-emerald-700">
                    ${Number(amount).toFixed(2)} MXN
                  </span>
                </div>
              )}
            </div>

            {/* Botón Principal (Naranja) */}
            <Link
              href="/"
              className="w-full inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-full transition-all duration-200 transform active:scale-95 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40"
            >
              {t('backToStore')}
            </Link>

          </div>
        </div>
      </main>
    </div>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-neutral-100 flex items-center justify-center">
          <div className="animate-spin rounded-full h-10 w-10 border-4 border-orange-500 border-t-transparent" />
        </div>
      }
    >
      <ConfirmationContent />
    </Suspense>
  );
}
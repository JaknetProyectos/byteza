"use client";

import { useCart } from "@/context/CartContext";
import { Link } from "@/i18n/routing";
import {
  ShoppingCart,
  X,
  Trash2,
  Plus,
  Minus,
  FileText,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    total,
    clearCart,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-[#fffdf8] z-50 shadow-2xl flex flex-col overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-orange-300/20 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-300/20 blur-3xl rounded-full pointer-events-none" />

        {/* Header */}
        <div className="relative z-10 flex items-center justify-between px-6 py-5 border-b border-orange-100 bg-white/80 backdrop-blur-xl">
          <div>
            <div className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm mb-1">
              <Sparkles className="w-4 h-4" />
              Resumen
            </div>

            <h2 className="text-2xl font-black text-gray-900">
              Carrito
            </h2>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            className="w-11 h-11 rounded-2xl bg-orange-50 hover:bg-orange-100 text-orange-500 flex items-center justify-center transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="relative z-10 flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 rounded-[2rem] bg-gradient-to-br from-orange-400 to-green-500 flex items-center justify-center shadow-xl mb-6">
                <ShoppingCart className="w-12 h-12 text-white" />
              </div>

              <h3 className="text-2xl font-black text-gray-900 mb-3">
                Tu carrito está vacío
              </h3>

              <p className="text-gray-500 mb-8 max-w-xs">
                Explora nuestras soluciones y agrega la que mejor se adapte a tu operación.
              </p>

              <Link
                href="/soluciones"
                onClick={() => setIsCartOpen(false)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-all"
              >
                Ver Soluciones
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="group relative bg-white border border-orange-100 rounded-[1.75rem] p-5 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-orange-100/0 to-green-100/0 group-hover:from-orange-100/40 group-hover:to-green-100/40 transition-all duration-300" />

                  <div className="relative z-10 flex gap-4">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-green-500 flex items-center justify-center shadow-lg flex-shrink-0">
                      <FileText className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 leading-snug mb-2">
                        {item.name}
                      </h3>

                      <p className="text-orange-500 font-black text-lg mb-4">
                        ${item.price.toLocaleString()} MXN
                      </p>

                      {/* Quantity */}
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-9 h-9 rounded-xl bg-orange-50 hover:bg-orange-100 text-orange-500 flex items-center justify-center transition-all"
                        >
                          <Minus className="w-4 h-4" />
                        </button>

                        <span className="w-8 text-center font-bold text-gray-900">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-9 h-9 rounded-xl bg-green-50 hover:bg-green-100 text-green-600 flex items-center justify-center transition-all"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="w-10 h-10 rounded-xl hover:bg-red-50 text-gray-400 hover:text-red-500 flex items-center justify-center transition-all flex-shrink-0"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="relative z-10 border-t border-orange-100 bg-white/90 backdrop-blur-xl p-6 space-y-5">
            {/* Totals */}
            <div className="bg-[#fffaf3] border border-orange-100 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 font-medium">
                  Subtotal
                </span>

                <span className="text-2xl font-black text-gray-900">
                  ${total.toLocaleString()}
                </span>
              </div>

              <p className="text-sm text-gray-500">
                + IVA
              </p>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <Link href="/carrito">
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                  }}
                  className="group w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 text-white py-4 rounded-full font-bold shadow-xl hover:scale-[1.02] transition-all"
                >
                  Proceder al Pago
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              <button
                onClick={clearCart}
                className="w-full py-3 rounded-full border border-orange-100 text-gray-500 hover:text-gray-700 hover:bg-orange-50 transition-all font-medium"
              >
                Vaciar carrito
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
"use client";

import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";

export function ClientBody({ children }: { children: React.ReactNode }) {
  return (
    <body className="antialiased bg-white text-gray-900" suppressHydrationWarning>
      <CartProvider>
        {children}
        <CartDrawer />
      </CartProvider>
    </body>
  );
}

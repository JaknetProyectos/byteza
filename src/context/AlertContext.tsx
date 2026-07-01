"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
} from "react";

import {
  X,
  CheckCircle2,
  Info,
  AlertTriangle,
  ShieldAlert,
} from "lucide-react";

import Image from "next/image";
import { cn } from "@/lib/utils";

export type AlertType =
  | "error"
  | "success"
  | "warning"
  | "info";

export interface AlertOptions {
  title: string;
  message: string;
  icon?: React.ReactNode;
  image?: string;
  confirmText?: string;
  onClose?: () => void;
  type?: AlertType;
}

interface AlertContextType {
  showAlert: (
    options: AlertOptions
  ) => void;

  hideAlert: () => void;
}

const AlertContext =
  createContext<
    AlertContextType | undefined
  >(undefined);

export function AlertProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] =
    useState(false);

  const [options, setOptions] =
    useState<AlertOptions | null>(
      null
    );

  const showAlert = useCallback(
    (opts: AlertOptions) => {
      setOptions(opts);
      setIsOpen(true);
    },
    []
  );

  const hideAlert = useCallback(() => {
    setIsOpen(false);

    if (options?.onClose) {
      options.onClose();
    }

    setTimeout(() => {
      setOptions(null);
    }, 200);
  }, [options]);

  const type =
    options?.type || "info";

  const DefaultIcon =
    type === "success"
      ? CheckCircle2
      : type === "error"
        ? ShieldAlert
        : type === "warning"
          ? AlertTriangle
          : Info;

  return (
    <AlertContext.Provider
      value={{
        showAlert,
        hideAlert,
      }}
    >
      {children}

      {isOpen && options && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Overlay */}
          <div
            onClick={hideAlert}
            className="absolute inset-0 bg-slate-950/55 backdrop-blur-sm"
          />

          {/* Modal */}
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="alert-title"
            className={`
              relative
              w-full
              max-w-md
              overflow-hidden
              rounded-[32px]
              border
              bg-white
              shadow-[0_25px_80px_rgba(15,23,42,0.18)]
              animate-in
              fade-in
              zoom-in-95
              duration-200

              ${type === "success"
                ? "border-emerald-200"
                : ""
              }

              ${type === "error"
                ? "border-rose-200"
                : ""
              }

              ${type === "warning"
                ? "border-amber-200"
                : ""
              }

              ${type === "info"
                ? "border-sky-200"
                : ""
              }
            `}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                <span className="h-3 w-3 rounded-full bg-[#28C840]" />
              </div>

              <button
                onClick={hideAlert}
                className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-200 hover:text-slate-700"
                aria-label="Close alert"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Body */}
            <div
              className={`
                relative
                p-8

                ${type === "success"
                  ? "bg-emerald-50"
                  : ""
                }

                ${type === "error"
                  ? "bg-rose-50"
                  : ""
                }

                ${type === "warning"
                  ? "bg-amber-50"
                  : ""
                }

                ${type === "info"
                  ? "bg-sky-50"
                  : ""
                }
              `}
            >
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-7 flex justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-[24px] bg-white shadow-sm">
                    <div
                      className={`
                        ${type === "success"
                          ? "text-emerald-600"
                          : ""
                        }

                        ${type === "error"
                          ? "text-rose-600"
                          : ""
                        }

                        ${type === "warning"
                          ? "text-amber-600"
                          : ""
                        }

                        ${type === "info"
                          ? "text-sky-600"
                          : ""
                        }
                      `}
                    >
                      {options.icon || (
                        <DefaultIcon className="h-10 w-10" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Image */}
                {options.image && (
                  <div className="relative mb-7 aspect-video overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                    <Image
                      src={options.image}
                      alt="Alert image"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="mb-8 text-center">
                  <h3
                    id="alert-title"
                    className="text-2xl font-bold tracking-tight text-slate-900"
                  >
                    {options.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    {options.message}
                  </p>
                </div>

                {/* Action */}
                <button
                  onClick={hideAlert}
                  className={cn(
                    "flex h-12 w-full items-center justify-center rounded-2xl text-sm font-semibold text-white transition-all duration-200",

                    type === "success" &&
                    "bg-emerald-500 hover:bg-emerald-600",

                    type === "error" &&
                    "bg-red-500 hover:bg-red-600",

                    type === "warning" &&
                    "bg-red-500 hover:bg-red-600",

                    type === "info" &&
                    "bg-blue-500 hover:bg-blue-600"
                  )}
                >
                  {options.confirmText ||
                    "Continue"}
                </button>

                {/* Footer */}
                <div className="mt-5 flex items-center justify-center gap-2 text-[11px] text-slate-400">
                  <div className="h-1 w-1 rounded-full bg-slate-300" />

                  <span>
                    System status active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </AlertContext.Provider>
  );
}

export const useAlert = () => {
  const context =
    useContext(AlertContext);

  if (!context) {
    throw new Error(
      "useAlert must be used within AlertProvider"
    );
  }

  return context;
};
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getTranslations } from "next-intl/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const LOGO_URL = "https://byteza.com.mx/logo.png";
const BUSINESS_EMAIL = "ventas@byteza.com.mx";

function formatCurrency(value: number, locale: string) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "MXN",
  }).format(value);
}

function escapeHtml(value: string) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      orderId,
      amount,
      customer,
      items,
      metadata,
      locale = "es",
    } = body;

    const t = await getTranslations({
      locale,
      namespace: "purchaseEmail",
    });

    if (!orderId || !amount || !customer || !items || !items.length) {
      return NextResponse.json(
        { error: t("errors.incompleteOrder") },
        { status: 400 }
      );
    }

    const currencyLocale = locale === "en" ? "en-US" : "es-MX";

    const safeOrderId = escapeHtml(String(orderId));
    const customerName = escapeHtml(customer.nombre || "");
    const customerLastName = escapeHtml(customer.apellido || "");
    const customerEmail = String(customer.email || "").trim();
    const customerPhone = escapeHtml(customer.telefono || "");
    const customerAddress = escapeHtml(customer.direccion || "");
    const customerAddress2 = customer.direccion2
      ? `, ${escapeHtml(customer.direccion2)}`
      : "";
    const customerCity = escapeHtml(customer.ciudad || "");
    const customerState = escapeHtml(customer.estado || "");
    const customerZip = escapeHtml(customer.cp || "");
    const customerCompany = escapeHtml(customer.empresa || "");
    const orderTotal = formatCurrency(Number(amount), currencyLocale);

    let productsHTML = "";

    items.forEach((item: any) => {
      const product = item.product || {};
      const qty = Number(item.quantity || 1);
      const unitPrice = Number(item.price || 0);
      const total = unitPrice * qty;

      const productName = escapeHtml(
        item.name || t("fallbacks.product")
      );

      const productDescription = escapeHtml(
        item.description || t("fallbacks.productDescription")
      );

      const productIcon = escapeHtml(String(product.icon || ""));

      productsHTML += `
        <table
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
          style="
            margin:0 0 18px 0;
            border:1px solid #fde7c8;
            border-radius:26px;
            overflow:hidden;
            background:#ffffff;
            box-shadow:0 10px 24px rgba(249,115,22,0.05);
          "
        >

          <tr>
            <td style="padding:22px 22px 20px 22px">
              <h3
                style="
                  margin:0 0 10px 0;
                  font-size:22px;
                  line-height:1.15;
                  color:#111827;
                  font-weight:800;
                  letter-spacing:-0.03em;
                "
              >
                ${productName}
              </h3>

              <p
                style="
                  margin:0 0 18px 0;
                  font-size:14px;
                  line-height:1.8;
                  color:#4b5563;
                "
              >
                ${productDescription}
              </p>

              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td valign="top">
                    <p
                      style="
                        margin:0 0 6px 0;
                        font-size:11px;
                        color:#f97316;
                        text-transform:uppercase;
                        letter-spacing:0.08em;
                        font-weight:800;
                      "
                    >
                      ${t("product.quantity")}
                    </p>

                    <span
                      style="
                        display:inline-block;
                        padding:7px 12px;
                        border-radius:999px;
                        background:#ecfdf5;
                        color:#059669;
                        font-size:14px;
                        font-weight:800;
                      "
                    >
                      ${qty}
                    </span>
                  </td>

                  <td align="right" valign="top">
                    <p
                      style="
                        margin:0 0 6px 0;
                        font-size:11px;
                        color:#f97316;
                        text-transform:uppercase;
                        letter-spacing:0.08em;
                        font-weight:800;
                      "
                    >
                      ${t("product.total")}
                    </p>

                    <p
                      style="
                        margin:0;
                        font-size:24px;
                        color:#111827;
                        font-weight:900;
                        letter-spacing:-0.03em;
                      "
                    >
                      ${formatCurrency(total, currencyLocale)}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      `;
    });

    const wrapperStart = `
      <!DOCTYPE html>
      <html>
        <body
          style="
            margin:0;
            padding:0;
            background:#fffaf3;
            font-family:Arial,Helvetica,sans-serif;
          "
        >
          <table
            width="100%"
            border="0"
            cellspacing="0"
            cellpadding="0"
            style="background:#fffaf3; padding:36px 16px"
          >
            <tr>
              <td align="center">
                <table
                  width="100%"
                  border="0"
                  cellspacing="0"
                  cellpadding="0"
                  style="
                    max-width:680px;
                    background:#ffffff;
                    border:1px solid #fde7c8;
                    border-radius:30px;
                    overflow:hidden;
                    box-shadow:
                      0 28px 70px rgba(249,115,22,0.12),
                      0 10px 30px rgba(15,23,42,0.06);
                  "
                >
                  <tr>
                    <td
                      style="
                        padding:28px 28px 24px 28px;
                        background:#fffdf9;
                        border-bottom:1px solid #fde7c8;
                      "
                    >
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td valign="middle" align="left">
                            <table border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td valign="middle">
                                  <div
                                    style="
                                      width:58px;
                                      height:58px;
                                      border-radius:18px;
                                      overflow:hidden;
                                      border:1px solid #fde7c8;
                                      background:#ffffff;
                                      box-shadow:0 8px 20px rgba(249,115,22,0.08);
                                    "
                                  >
                                    <img
                                      src="${LOGO_URL}"
                                      alt="Byteza"
                                      width="58"
                                      height="58"
                                      style="
                                        width:58px;
                                        height:58px;
                                        object-fit:cover;
                                        display:block;
                                      "
                                    />
                                  </div>
                                </td>
                                <td valign="middle" style="padding-left:14px">
                                  <div
                                    style="
                                      font-size:28px;
                                      line-height:1;
                                      font-weight:800;
                                      letter-spacing:-0.04em;
                                      color:#111827;
                                    "
                                  >
                                    Byteza
                                  </div>
                                  <div
                                    style="
                                      margin-top:7px;
                                      display:inline-block;
                                      padding:6px 10px;
                                      border-radius:999px;
                                      background:#ecfdf5;
                                      color:#059669;
                                      font-size:11px;
                                      font-weight:800;
                                      letter-spacing:0.08em;
                                      text-transform:uppercase;
                                    "
                                  >
                                    ${t("header.description")}
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
    `;

    const wrapperEnd = `
                  <tr>
                    <td
                      style="
                        padding:22px 28px 28px 28px;
                        background:#fffdf9;
                        border-top:1px solid #fde7c8;
                        text-align:center;
                      "
                    >
                      <p
                        style="
                          margin:0;
                          font-size:12px;
                          line-height:1.7;
                          color:#6b7280;
                        "
                      >
                        Byteza © 2026
                      </p>

                      <p
                        style="
                          margin:10px 0 0 0;
                          font-size:11px;
                          line-height:1.7;
                          color:#9ca3af;
                        "
                      >
                        ${BUSINESS_EMAIL}
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    const htmlCliente = `
      ${wrapperStart}

      <tr>
        <td style="padding:38px 28px 34px 28px">
          <h2
            style="
              margin:0 0 12px 0;
              font-size:34px;
              line-height:1.08;
              color:#111827;
              letter-spacing:-0.04em;
            "
          >
            ${t("customer.thanks")} ${customerName}
          </h2>

          <p
            style="
              margin:0 0 30px 0;
              font-size:15px;
              line-height:1.9;
              color:#4b5563;
            "
          >
            ${t("customer.processing")}
          </p>

          ${productsHTML}

          <table
            width="100%"
            border="0"
            cellspacing="0"
            cellpadding="0"
            style="
              margin-top:24px;
              border:1px solid #fde7c8;
              border-radius:26px;
              overflow:hidden;
              background:#fffaf3;
            "
          >
            <tr>
              <td style="padding:24px">
                <p
                  style="
                    margin:0 0 6px 0;
                    font-size:11px;
                    font-weight:800;
                    color:#f97316;
                    letter-spacing:0.08em;
                    text-transform:uppercase;
                  "
                >
                  ${t("customer.totalPaid")}
                </p>

                <p
                  style="
                    margin:0;
                    font-size:40px;
                    line-height:1;
                    color:#111827;
                    font-weight:900;
                    letter-spacing:-0.05em;
                  "
                >
                  ${orderTotal}
                </p>
              </td>
            </tr>
          </table>

          <div
            style="
              margin-top:22px;
              padding:22px;
              border-radius:26px;
              border:1px solid #d1fae5;
              background:#f0fdf4;
            "
          >
            <p
              style="
                margin:0 0 10px 0;
                font-size:11px;
                font-weight:800;
                color:#059669;
                letter-spacing:0.08em;
                text-transform:uppercase;
              "
            >
              ${t("customer.address")}
            </p>

            <p
              style="
                margin:0;
                font-size:14px;
                line-height:1.9;
                color:#334155;
              "
            >
              ${customerAddress}${customerAddress2}<br />
              ${customerCity}, ${customerState}, ${t("customer.zip")} ${customerZip}
            </p>
          </div>
        </td>
      </tr>

      ${wrapperEnd}
    `;

    const htmlNegocio = `
      ${wrapperStart}

      <tr>
        <td style="padding:38px 28px 34px 28px">
          <div
            style="
              display:inline-block;
              padding:8px 14px;
              border-radius:999px;
              background:#eff6ff;
              color:#2563eb;
              font-size:11px;
              font-weight:800;
              text-transform:uppercase;
              letter-spacing:0.08em;
              margin-bottom:18px;
            "
          >
            ${t("business.newOrder")}
          </div>

          <h2
            style="
              margin:0 0 12px 0;
              font-size:34px;
              line-height:1.05;
              color:#111827;
              letter-spacing:-0.04em;
            "
          >
            ${formatCurrency(Number(amount), currencyLocale)} ${t("business.processed")}
          </h2>

          <p
            style="
              margin:0 0 28px 0;
              font-size:15px;
              line-height:1.9;
              color:#4b5563;
            "
          >
            ${t("header.description")}
          </p>

          <div
            style="
              padding:24px;
              border-radius:26px;
              border:1px solid #dbeafe;
              background:#f8fbff;
              margin-bottom:28px;
            "
          >
            <p
              style="
                margin:0 0 10px 0;
                font-size:11px;
                font-weight:800;
                color:#2563eb;
                letter-spacing:0.08em;
                text-transform:uppercase;
              "
            >
              ${t("business.customerInfo")}
            </p>

            <p
              style="
                margin:0;
                font-size:14px;
                line-height:1.95;
                color:#334155;
              "
            >
              <strong>${t("business.name")}</strong> ${customerName} ${customerLastName}<br />
              <strong>${t("business.email")}</strong> ${escapeHtml(customerEmail)}<br />
              <strong>${t("business.phone")}</strong> ${customerPhone}<br />
              <strong>${t("business.notes")}</strong> ${escapeHtml(
                metadata?.notes || t("business.none")
              )}
            </p>
          </div>

          ${productsHTML}
        </td>
      </tr>

      ${wrapperEnd}
    `;

    await Promise.all([
      resend.emails.send({
        from: "Byteza <ventas@byteza.com.mx>",
        to: [customerEmail],
        subject: `${t("subjects.customer")} #${safeOrderId} - Byteza`,
        html: htmlCliente,
      }),
      resend.emails.send({
        from: "Byteza <ventas@byteza.com.mx>",
        to: [BUSINESS_EMAIL],
        replyTo: customerEmail,
        subject: `${t("subjects.business")} #${safeOrderId}`,
        html: htmlNegocio,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("❌ Error enviando correos:", error);

    return NextResponse.json(
      {
        error: error?.message || "Error al procesar la solicitud",
      },
      { status: 500 }
    );
  }
}
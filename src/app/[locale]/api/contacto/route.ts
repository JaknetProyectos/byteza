import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getTranslations } from "next-intl/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const LOGO_URL = "https://byteza.com.mx/logo.png";

const BUSINESS_EMAIL = "ventas@byteza.com.mx";

function escapeHtml(value: string) {
  return String(value)
    .replaceAll("&", "&")
    .replaceAll("<", "<")
    .replaceAll(">", ">")
    .replaceAll('"', '"')
    .replaceAll("'", "'");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();


    const { nombre, email, mensaje, locale = "es" } = body;

    const t = await getTranslations({
      locale,
      namespace: "contactEmail",
    });

    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: t("errors.missingFields") },
        { status: 400 }
      );
    }

    const safeNombre = escapeHtml(nombre);
    const safeEmail = escapeHtml(email);
    const safeMensaje = escapeHtml(mensaje);

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
        style="
          background:#fffaf3;
          padding:36px 16px;
        "
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
                    padding:28px 28px 22px 28px;
                    background:#fffdf9;
                    border-bottom:1px solid #fde7c8;
                  "
                >
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="left" valign="middle">
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
                                  font-weight:700;
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
                    ${t("footer.copy")}
                  </p>

                  <p
                    style="
                      margin:10px 0 0 0;
                      font-size:11px;
                      line-height:1.7;
                      color:#9ca3af;
                    "
                  >
                    ${t("footer.contact")} ${BUSINESS_EMAIL}
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

    const htmlNegocio = `
  ${wrapperStart}

  <tr>
    <td style="padding:34px 28px 30px 28px">
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td valign="top" style="padding-bottom:18px">
            <div
              style="
                display:inline-block;
                padding:8px 14px;
                border-radius:999px;
                background:#fff7ed;
                color:#f97316;
                font-size:11px;
                font-weight:800;
                letter-spacing:0.1em;
                text-transform:uppercase;
                margin-bottom:18px;
              "
            >
              ${t("internal.badge")}
            </div>

            <h2
              style="
                margin:0 0 14px 0;
                font-size:30px;
                line-height:1.08;
                letter-spacing:-0.04em;
                color:#111827;
              "
            >
              ${t("internal.title")}
            </h2>

            <p
              style="
                margin:0;
                font-size:15px;
                line-height:1.8;
                color:#4b5563;
                max-width:540px;
              "
            >
              ${t("header.description")}
            </p>
          </td>
        </tr>
      </table>

      <table
        width="100%"
        border="0"
        cellspacing="0"
        cellpadding="0"
        style="
          margin:24px 0 22px 0;
          border:1px solid #fde7c8;
          border-radius:24px;
          overflow:hidden;
        "
      >
        <tr>
          <td style="background:#fffaf3; padding:18px 20px">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td valign="top" style="width:50%; padding-right:12px">
                  <p
                    style="
                      margin:0 0 7px 0;
                      font-size:11px;
                      font-weight:800;
                      color:#f97316;
                      letter-spacing:0.08em;
                      text-transform:uppercase;
                    "
                  >
                    ${t("internal.clientName")}
                  </p>
                  <p
                    style="
                      margin:0;
                      font-size:16px;
                      line-height:1.6;
                      font-weight:700;
                      color:#111827;
                    "
                  >
                    ${safeNombre}
                  </p>
                </td>

                <td valign="top" style="width:50%; padding-left:12px">
                  <p
                    style="
                      margin:0 0 7px 0;
                      font-size:11px;
                      font-weight:800;
                      color:#059669;
                      letter-spacing:0.08em;
                      text-transform:uppercase;
                    "
                  >
                    ${t("internal.emailAddress")}
                  </p>
                  <a
                    href="mailto:${safeEmail}"
                    style="
                      font-size:15px;
                      line-height:1.6;
                      color:#2563eb;
                      text-decoration:none;
                      font-weight:700;
                      word-break:break-word;
                    "
                  >
                    ${safeEmail}
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      <div
        style="
          border-radius:24px;
          border:1px solid #d1fae5;
          background:#f0fdf4;
          padding:24px;
        "
      >
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td valign="top" style="padding-bottom:12px">
              <span
                style="
                  display:inline-block;
                  padding:6px 10px;
                  border-radius:999px;
                  background:#ffffff;
                  color:#059669;
                  font-size:11px;
                  font-weight:800;
                  letter-spacing:0.08em;
                  text-transform:uppercase;
                  border:1px solid #bbf7d0;
                "
              >
                ${t("internal.messageContent")}
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <p
                style="
                  margin:0;
                  font-size:15px;
                  line-height:1.9;
                  color:#334155;
                  white-space:pre-wrap;
                "
              >
                ${safeMensaje}
              </p>
            </td>
          </tr>
        </table>
      </div>
    </td>
  </tr>

  ${wrapperEnd}
`;

    const htmlUsuario = `
  ${wrapperStart}

  <tr>
    <td style="padding:44px 28px 38px 28px; text-align:center">


      <div
        style="
          display:inline-block;
          margin-bottom:18px;
          padding:8px 14px;
          border-radius:999px;
          background:#ecfdf5;
          color:#059669;
          font-size:11px;
          font-weight:800;
          letter-spacing:0.1em;
          text-transform:uppercase;
        "
      >
        ${t("subjects.user")}
      </div>

      <h2
        style="
          margin:0 0 14px 0;
          font-size:34px;
          line-height:1.08;
          letter-spacing:-0.04em;
          color:#111827;
        "
      >
        ${t("user.greeting")} ${safeNombre}
      </h2>

      <p
        style="
          margin:0 auto 30px auto;
          max-width:520px;
          font-size:15px;
          line-height:1.9;
          color:#4b5563;
        "
      >
        ${t("user.line1")}
        <br />
        ${t("user.line2")}
      </p>

      <div
        style="
          text-align:left;
          border:1px solid #fde7c8;
          background:#fffaf3;
          border-radius:24px;
          padding:22px;
          max-width:540px;
          margin:0 auto;
        "
      >
        <p
          style="
            margin:0 0 10px 0;
            font-size:11px;
            font-weight:800;
            color:#f97316;
            letter-spacing:0.1em;
            text-transform:uppercase;
          "
        >
          ${t("user.messageTitle")}
        </p>

        <p
          style="
            margin:0;
            font-size:14px;
            line-height:1.9;
            color:#334155;
            font-style:italic;
            white-space:pre-wrap;
          "
        >
          "${safeMensaje}"
        </p>
      </div>

      <div style="margin-top:32px">
        <a
          href="https://byteza.com.mx"
          style="
            display:inline-block;
            padding:14px 22px;
            border-radius:16px;
            background:#059669;
            color:#ffffff;
            font-size:14px;
            font-weight:800;
            text-decoration:none;
            box-shadow:0 14px 30px rgba(5,150,105,0.18);
          "
        >
          ${t("user.button")}
        </a>
      </div>
    </td>
  </tr>

  ${wrapperEnd}
`;

    await Promise.all([
      resend.emails.send({
        from: "Byteza <ventas@byteza.com.mx>",
        to: [BUSINESS_EMAIL],
        replyTo: email,
        subject: `${t("subjects.internal")} ${nombre}`,
        html: htmlNegocio,
      }),

      resend.emails.send({
        from: "Byteza <ventas@byteza.com.mx>",
        to: [email],
        subject: t("subjects.user"),
        html: htmlUsuario,
      }),
    ]);

    return NextResponse.json({
      success: true,
    });


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

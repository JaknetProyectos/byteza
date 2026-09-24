"use client";

import { useLocale } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalStyle from "@/components/LegalStyle";

function LegalEs() {
    return (
        <div className="legal-container">
            <LegalStyle />

            <section>
                <h1>TÉRMINOS Y CONDICIONES</h1>
                <p>COMSORCIO Y DESARROLLO CAMHE, S.A.P.I. DE C.V.</p>
                <p>RFC CDC250123QF4</p>
                <p>Vigente desde: 02 de junio de 2026</p>
                <p>Condiciones generales de uso del sitio web y de contratación de servicios de catálogos digitales</p>
                <p>Los presentes Términos y Condiciones de Uso y Contratación (“Términos”) regulan el acceso y uso del sitio web de COMSORCIO Y DESARROLLO CAMHE, S.A.P.I. DE C.V. (el “Proveedor”) y la contratación de sus servicios de diseño y desarrollo de catálogos digitales estratégicos para el segmento mayorista. El uso del sitio web, la solicitud de una cotización o el pago de cualquier servicio constituyen actos de aceptación plena e incondicional de estos Términos por parte del usuario o cliente (“Cliente”). Si el Cliente no acepta alguna disposición, deberá abstenerse de utilizar el sitio y de contratar los servicios.</p>

                <h2>1 IDENTIFICACIÓN DEL PROVEEDOR</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Razón social:</td>
                            <td>COMSORCIO Y DESARROLLO CAMHE, S.A.P.I. DE C.V.</td>
                        </tr>
                        <tr>
                            <td>R.F.C.:</td>
                            <td>CDC250123QF4</td>
                        </tr>
                        <tr>
                            <td>Domicilio:</td>
                            <td>AVENIDA. HOMERO 538, INTERIOR 602, COLONIA POLANCO V SECCIÓN, ALCALDÍA MIGUEL HIDALGO, C.P. 11560, CIUDAD DE MÉXICO.</td>
                        </tr>
                        <tr>
                            <td>Teléfono:</td>
                            <td>+52 1 55 9717 2929</td>
                        </tr>
                        <tr>
                            <td>Correo electrónico:</td>
                            <td>ventas@byteza.com.mx</td>
                        </tr>
                    </tbody>
                </table>

                <h2>2 OBJETO DEL CONTRATO Y NATURALEZA DEL SERVICIO</h2>
                <p>El Proveedor tiene por objeto el diseño, estructuración y entrega de catálogos digitales estratégicos orientados a mejorar la operación comercial de negocios mayoristas. Los servicios comprenden desde catálogos básicos hasta plataformas de conversión con sistemas de solicitud de pedidos, automatización comercial y producción visual de productos. Los servicios del Proveedor son de naturaleza digital y profesional, lo que resulta relevante para la interpretación de las disposiciones relativas a cancelaciones y reembolsos.</p>

                <h2>3 ACEPTACIÓN Y VINCULACIÓN CONTRACTUAL</h2>
                <p>La contratación de los servicios del Proveedor genera obligaciones jurídicas para ambas partes. La aceptación de los presentes Términos opera de forma tácita mediante la navegación del sitio web y de forma expresa mediante: (i) la aprobación escrita o verbal de una propuesta o cotización; (ii) la realización de un pago; o (iii) el inicio del proceso de desarrollo del proyecto. Cuando el Cliente actúe en representación de una persona moral, declara contar con las facultades legales necesarias para obligarla contractualmente.</p>

                <h2>4 USO PERMITIDO Y CONDUCTAS PROHIBIDAS</h2>
                <p>El Cliente se compromete a utilizar el sitio web del Proveedor de conformidad con la legislación mexicana vigente y los presentes Términos. Se prohíbe expresamente:</p>
                <ul>
                    <li>Usar el sitio web con fines ilícitos, fraudulentos o contrarios al orden público o a las leyes aplicables en México</li>
                    <li>Reproducir, copiar, distribuir o explotar comercialmente, sin autorización escrita previa, la totalidad o parte del contenido del sitio (textos, imágenes, logotipos, diseños, metodologías o código)</li>
                    <li>Usar de forma no autorizada la denominación, imagen comercial o identidad visual del Proveedor</li>
                    <li>Difundir contenidos que lesionen derechos de terceros, sean discriminatorios o contravengan la legislación aplicable</li>
                    <li>Ejecutar acciones técnicas que deterioren, saturen o comprometan la seguridad del sitio web o sus sistemas informáticos</li>
                </ul>

                <h2>5 CATÁLOGO DE SERVICIOS Y PRECIOS</h2>
                <p>El Proveedor ofrece los siguientes servicios de catálogo digital. Todos los precios se expresan en pesos mexicanos (MXN) y no incluyen el Impuesto al Valor Agregado (IVA), el cual se calculará conforme a la tasa vigente al momento de la cotización o facturación.</p>
                <p>Las descripciones publicadas de cada modalidad tienen carácter indicativo. El Proveedor podrá realizar ajustes metodológicos o técnicos durante la ejecución, siempre que ello no implique reducción de los entregables acordados ni incumplimiento de las condiciones pactadas.</p>
                <p>La modalidad “Arquitectura Comercial Personalizada” tiene precio a convenir, conforme al análisis de la operación del Cliente; dicho monto será determinado en la propuesta correspondiente.</p>

                <h2>6 PROCESO DE COTIZACIÓN, CONTRATACIÓN Y CONFIRMACIÓN</h2>
                <ul>
                    <li>El Cliente envía su solicitud a través del formulario de contacto del sitio web o se comunica directamente al número +52 1 55 9717 2929</li>
                    <li>El Proveedor elabora y remite la propuesta con descripción del servicio, entregables, plazo estimado e importe</li>
                    <li>El Cliente aprueba la propuesta y efectúa el pago correspondiente</li>
                    <li>El Proveedor confirma el inicio del proyecto mediante comunicación al contacto registrado del Cliente, indicando el folio de operación y los términos acordados</li>
                    <li>A solicitud del Cliente y previa entrega de datos fiscales válidos, el Proveedor emite el CFDI correspondiente</li>
                </ul>

                <h2>7 PRECIOS, IMPUESTOS Y MÉTODOS DE PAGO</h2>
                <p>Los precios publicados en el sitio web y en las propuestas del Proveedor se expresan en pesos mexicanos (MXN) sin incluir IVA. El impuesto aplicable se añadirá al momento de la cotización formal o facturación, conforme a la tasa vigente. El Proveedor se reserva el derecho de actualizar sus precios, sin que ello afecte los servicios ya formalizados mediante pago.</p>
                <p>Medios de pago aceptados</p>
                <ul>
                    <li>Tarjeta de crédito Visa o Mastercard, procesada a través del proveedor de pagos autorizado por el Proveedor</li>
                    <li>Tarjeta de débito Visa o Mastercard, bajo las mismas condiciones de procesamiento seguro</li>
                </ul>
                <p>El Proveedor no acepta otros instrumentos de pago distintos a los expresamente señalados. Todos los cargos se procesan en pesos mexicanos.</p>

                <h2>8 PROPIEDAD INTELECTUAL</h2>
                <p>El contenido del sitio web del Proveedor —incluyendo textos, imágenes, logotipos, diseños, metodologías de estructuración de catálogos y demás elementos— es propiedad exclusiva de COMSORCIO Y DESARROLLO CAMHE, S.A.P.I. DE C.V. o se utiliza con la debida autorización, y se encuentra protegido por la Ley Federal del Derecho de Autor y la Ley de la Propiedad Industrial. Ningún elemento podrá ser reproducido, distribuido o usado comercialmente sin autorización previa y escrita.</p>
                <p>Respecto a los entregables del proyecto: salvo pacto expreso en contrario formalizado por escrito, los derechos patrimoniales sobre el catálogo digital desarrollado para el Cliente se transferirán a este una vez que se haya liquidado íntegramente el pago del servicio contratado. El Proveedor conservará sus derechos sobre las metodologías, estructuras de desarrollo y herramientas propias utilizadas.</p>

                <h2>9 LIMITACIÓN DE RESPONSABILIDAD</h2>
                <p>El Proveedor prestará sus servicios con el nivel de calidad técnica y estratégica que corresponde a un proveedor especializado en catálogos digitales mayoristas. Sin embargo, el desempeño comercial del catálogo entregado (volumen de ventas, conversión de clientes, rapidez en la toma de decisiones de compra) depende de factores externos al control del Proveedor, tales como las decisiones operativas del Cliente, la calidad de su oferta comercial y las condiciones de su mercado.</p>
                <p>La responsabilidad total del Proveedor derivada de la prestación de sus servicios no excederá, en ningún caso, el importe efectivamente pagado por el Cliente por el servicio que origina la reclamación. El Proveedor no asumirá responsabilidad por daños indirectos, pérdida de ingresos ni cualquier perjuicio consecuente alegado por el Cliente.</p>

                <h2>10 SUSPENSIÓN O TERMINACIÓN DEL SERVICIO</h2>
                <p>El Proveedor podrá suspender o dar por terminada la relación contractual, sin responsabilidad, en los supuestos siguientes:</p>
                <ul>
                    <li>Detección o confirmación de fraude, uso de instrumentos de pago no autorizados o contracargos injustificados</li>
                    <li>Incumplimiento del Cliente en sus obligaciones de pago dentro del plazo acordado</li>
                    <li>Uso del sitio web, de los entregables o de la información del Proveedor de manera contraria a los presentes Términos o a la legislación aplicable</li>
                    <li>Proporcionar información falsa, incompleta o engañosa que imposibilite la correcta ejecución del proyecto</li>
                </ul>

                <h2>11 MODIFICACIONES A LOS TÉRMINOS</h2>
                <p>El Proveedor podrá actualizar los presentes Términos en cualquier momento, publicando la versión vigente en su sitio web con la fecha de actualización correspondiente. El uso del sitio o la contratación de nuevos servicios tras la publicación implicará la aceptación de los Términos en su versión más reciente.</p>

                <h2>12 LEGISLACIÓN APLICABLE Y JURISDICCIÓN</h2>
                <p>Los presentes Términos y Condiciones se rigen por las leyes de los Estados Unidos Mexicanos, incluyendo de manera enunciativa el Código de Comercio, la Ley Federal de Protección al Consumidor y la Ley Federal de Protección de Datos Personales en Posesión de los Particulares. Para la resolución de cualquier controversia derivada de su interpretación o incumplimiento, las partes se someten expresamente a la jurisdicción de los Tribunales competentes con sede en la Ciudad de México, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.</p>
            </section>
        </div>
    );
}

function LegalEn() {
    return (
        <div className="legal-container">
            <LegalStyle />
            <section>
                <h1>TERMS AND CONDITIONS</h1>
                <p>COMSORCIO Y DESARROLLO CAMHE, S.A.P.I. DE C.V.</p>
                <p>RFC CDC250123QF4</p>
                <p>Effective as of: June 2, 2026</p>
                <p>General conditions for the use of the website and contracting of digital catalog services</p>
                <p>These Terms and Conditions of Use and Contracting (“Terms”) govern the access and use of the website of COMSORCIO Y DESARROLLO CAMHE, S.A.P.I. DE C.V. (the “Provider”) and the contracting of its design and development services for strategic digital catalogs for the wholesale segment. Use of the website, requesting a quote, or paying for any service constitute acts of full and unconditional acceptance of these Terms by the user or client (“Client”). If the Client does not accept any provision, they must refrain from using the site and from contracting the services.</p>

                <h2>1 IDENTIFICATION OF THE PROVIDER</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Corporate name:</td>
                            <td>COMSORCIO Y DESARROLLO CAMHE, S.A.P.I. DE C.V.</td>
                        </tr>
                        <tr>
                            <td>R.F.C.:</td>
                            <td>CDC250123QF4</td>
                        </tr>
                        <tr>
                            <td>Address:</td>
                            <td>AVENIDA. HOMERO 538, INTERIOR 602, COLONIA POLANCO V SECCIÓN, ALCALDÍA MIGUEL HIDALGO, C.P. 11560, CIUDAD DE MÉXICO.</td>
                        </tr>
                        <tr>
                            <td>Telephone:</td>
                            <td>+52 1 55 9717 2929</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>ventas@byteza.com.mx</td>
                        </tr>
                    </tbody>
                </table>

                <h2>2 PURPOSE OF THE CONTRACT AND NATURE OF THE SERVICE</h2>
                <p>The Provider’s purpose is the design, structuring, and delivery of strategic digital catalogs aimed at improving the commercial operation of wholesale businesses. The services range from basic catalogs to conversion platforms with order request systems, commercial automation, and visual product production. The Provider’s services are digital and professional in nature, which is relevant for the interpretation of the provisions relating to cancellations and refunds.</p>

                <h2>3 ACCEPTANCE AND CONTRACTUAL BINDING</h2>
                <p>Contracting the Provider’s services creates legal obligations for both parties. Acceptance of these Terms operates tacitly through browsing the website and expressly through: (i) written or verbal approval of a proposal or quote; (ii) making a payment; or (iii) starting the project development process. When the Client acts on behalf of a legal entity, they declare that they have the legal authority necessary to bind it contractually.</p>

                <h2>4 PERMITTED USE AND PROHIBITED CONDUCT</h2>
                <p>The Client undertakes to use the Provider’s website in accordance with current Mexican legislation and these Terms. The following are expressly prohibited:</p>
                <ul>
                    <li>Using the website for unlawful, fraudulent purposes or purposes contrary to public order or applicable laws in Mexico</li>
                    <li>Reproducing, copying, distributing, or commercially exploiting, without prior written authorization, all or part of the site’s content (texts, images, logos, designs, methodologies, or code)</li>
                    <li>Using the Provider’s name, commercial image, or visual identity without authorization</li>
                    <li>Disseminating content that infringes third-party rights, is discriminatory, or violates applicable legislation</li>
                    <li>Carrying out technical actions that deteriorate, overload, or compromise the security of the website or its computer systems</li>
                </ul>

                <h2>5 CATALOG OF SERVICES AND PRICES</h2>
                <p>The Provider offers the following digital catalog services. All prices are expressed in Mexican pesos (MXN) and do not include Value Added Tax (VAT), which will be calculated in accordance with the rate in effect at the time of the quote or invoice.</p>
                <p>The published descriptions of each modality are indicative in nature. The Provider may make methodological or technical adjustments during execution, provided that this does not imply a reduction in the agreed deliverables or breach of the agreed conditions.</p>
                <p>The “Custom Commercial Architecture” modality is priced by agreement, based on the analysis of the Client’s operation; such amount will be determined in the corresponding proposal.</p>

                <h2>6 QUOTATION, CONTRACTING, AND CONFIRMATION PROCESS</h2>
                <ul>
                    <li>The Client sends their request through the website’s contact form or communicates directly at the number +52 1 55 9717 2929</li>
                    <li>The Provider prepares and sends the proposal with a description of the service, deliverables, estimated term, and amount</li>
                    <li>The Client approves the proposal and makes the corresponding payment</li>
                    <li>The Provider confirms the start of the project through communication to the Client’s registered contact, indicating the transaction folio and the agreed terms</li>
                    <li>At the Client’s request and upon delivery of valid tax data, the Provider issues the corresponding CFDI</li>
                </ul>

                <h2>7 PRICES, TAXES, AND PAYMENT METHODS</h2>
                <p>The prices published on the website and in the Provider’s proposals are expressed in Mexican pesos (MXN) and do not include VAT. The applicable tax will be added at the time of the formal quote or invoice, in accordance with the rate in effect. The Provider reserves the right to update its prices, without this affecting services already formalized through payment.</p>
                <p>Accepted payment methods</p>
                <ul>
                    <li>Visa or Mastercard credit card, processed through the payment provider authorized by the Provider</li>
                    <li>Visa or Mastercard debit card, under the same secure processing conditions</li>
                </ul>
                <p>The Provider does not accept other payment instruments other than those expressly indicated. All charges are processed in Mexican pesos.</p>

                <h2>8 INTELLECTUAL PROPERTY</h2>
                <p>The content of the Provider’s website —including texts, images, logos, designs, catalog structuring methodologies, and other elements— is the exclusive property of COMSORCIO Y DESARROLLO CAMHE, S.A.P.I. DE C.V. or is used with due authorization, and is protected by the Federal Copyright Law and the Industrial Property Law. No element may be reproduced, distributed, or commercially used without prior written authorization.</p>
                <p>Regarding the project deliverables: unless expressly agreed otherwise in writing, the economic rights over the digital catalog developed for the Client will be transferred to the Client once payment for the contracted service has been paid in full. The Provider will retain its rights over the methodologies, development structures, and its own tools used.</p>

                <h2>9 LIMITATION OF LIABILITY</h2>
                <p>The Provider will provide its services with the level of technical and strategic quality corresponding to a provider specializing in wholesale digital catalogs. However, the commercial performance of the delivered catalog (sales volume, customer conversion, speed in purchasing decisions) depends on factors outside the Provider’s control, such as the Client’s operational decisions, the quality of its commercial offer, and the conditions of its market.</p>
                <p>The Provider’s total liability arising from the provision of its services will not exceed, under any circumstances, the amount effectively paid by the Client for the service giving rise to the claim. The Provider will not assume liability for indirect damages, loss of revenue, or any consequential damages alleged by the Client.</p>

                <h2>10 SUSPENSION OR TERMINATION OF THE SERVICE</h2>
                <p>The Provider may suspend or terminate the contractual relationship, without liability, in the following cases:</p>
                <ul>
                    <li>Detection or confirmation of fraud, use of unauthorized payment instruments, or unjustified chargebacks</li>
                    <li>Client’s breach of its payment obligations within the agreed term</li>
                    <li>Use of the website, the deliverables, or the Provider’s information in a manner contrary to these Terms or applicable legislation</li>
                    <li>Providing false, incomplete, or misleading information that makes the correct execution of the project impossible</li>
                </ul>

                <h2>11 MODIFICATIONS TO THE TERMS</h2>
                <p>The Provider may update these Terms at any time, publishing the current version on its website with the corresponding update date. Use of the site or contracting new services after publication will imply acceptance of the Terms in their most recent version.</p>

                <h2>12 APPLICABLE LEGISLATION AND JURISDICTION</h2>
                <p>These Terms and Conditions are governed by the laws of the United Mexican States, including by way of example the Commercial Code, the Federal Consumer Protection Law, and the Federal Law on Protection of Personal Data Held by Private Parties. For the resolution of any controversy arising from their interpretation or breach, the parties expressly submit to the jurisdiction of the competent Courts based in Mexico City, with express waiver of any other jurisdiction that may correspond to them.</p>
            </section>
        </div>
    );
}

export default function LegalPage() {
    const locale = useLocale();

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <main className="flex-grow container mx-auto px-6 py-20 max-w-4xl">
                {locale === "es" ? <LegalEs /> : <LegalEn />}
            </main>
            <Footer />
        </div>
    );
}
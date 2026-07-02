"use client";

import { useLocale } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalStyle from "@/components/LegalStyle";

function LegalEs() {
    return (
        <div className="legal-container">
            <LegalStyle />

            <>
                <h1>POLÍTICA DE CANCELACIONES Y REEMBOLSOS</h1>

                <p>OUTNET POST S.A. DE C.V.</p>

                <p>RFC OPO1907266W4</p>

                <p>Vigente desde: 02 de junio de 2026</p>

                <p>
                    Condiciones, plazos y procedimientos aplicables a solicitudes de
                    cancelación y devolución de importes pagados
                </p>

                <p>
                    La presente Política de Cancelaciones y Reembolsos (“Política”) establece
                    los derechos y obligaciones que corresponden al Cliente y a OUTNET POST
                    S.A. DE C.V. (en adelante el “Proveedor”) cuando se solicite dejar sin
                    efecto la contratación de un servicio o la devolución total o parcial del
                    importe pagado. Esta Política se fundamenta en la Ley Federal de Protección
                    al Consumidor (LFPC), el Código de Comercio y demás disposiciones
                    aplicables en México, y debe leerse de forma conjunta con los Términos y
                    Condiciones del Proveedor.
                </p>

                <p>
                    Los servicios del Proveedor implican trabajo técnico, estratégico y de
                    producción desde las fases iniciales del proyecto. Esta característica
                    define los tramos de retención establecidos en la presente Política, los
                    cuales reflejan el esfuerzo efectivamente invertido en cada etapa del
                    desarrollo del catálogo digital.
                </p>

                <h2>1 DERECHO DE CANCELACIÓN SIN CARGO</h2>

                <p>
                    El Cliente tendrá derecho a cancelar el servicio contratado y a recibir el
                    reintegro íntegro del importe pagado cuando se cumplan simultáneamente las
                    condiciones siguientes:
                </p>

                <ul>
                    <li>
                        La solicitud de cancelación sea presentada dentro de los cinco (5) días
                        hábiles contados a partir de la fecha en que el Proveedor confirme el
                        pago del servicio
                    </li>
                    <li>
                        El Proveedor no haya iniciado el trabajo de desarrollo, entendiendo por
                        inicio cualquier actividad de análisis comercial, estructuración de
                        categorías, diseño, producción visual o configuración técnica vinculada
                        al proyecto del Cliente
                    </li>
                </ul>

                <p>
                    Cuando el Cliente hubiera solicitado expresamente el inicio inmediato del
                    proyecto y el Proveedor hubiere comenzado el proceso de desarrollo dentro
                    del período señalado, el derecho al reembolso íntegro quedará extinguido,
                    siendo aplicable únicamente lo dispuesto en el numeral 3 de la presente
                    Política.
                </p>

                <h2>2 DERECHO DE REVOCACIÓN EN CONTRATACIONES EN LÍNEA</h2>

                <p>
                    Conforme al artículo 56 de la Ley Federal de Protección al Consumidor, el
                    Cliente que haya contratado servicios del Proveedor a través de su sitio
                    web tendrá derecho a revocar su consentimiento dentro de los cinco (5) días
                    hábiles siguientes a la celebración del contrato, sin necesidad de expresar
                    causa alguna y sin penalización, con derecho al reembolso total, siempre y
                    cuando el proceso de desarrollo del catálogo no haya sido iniciado. La
                    revocación deberá comunicarse por escrito a través del formulario de
                    contacto del sitio web o directamente al teléfono +52 1 55 5244 5687.
                </p>

                <h2>3 CANCELACIÓN CON DESARROLLO YA INICIADO</h2>

                <p>
                    Una vez que el Proveedor haya iniciado formalmente el trabajo de desarrollo
                    del catálogo digital, la cancelación quedará sujeta a la siguiente escala
                    de retención, determinada en función de la fase de ejecución acreditada:
                </p>

                <table>
                    <thead>
                        <tr>
                            <th>Condición de cancelación</th>
                            <th>Porcentaje a retener</th>
                            <th>Monto a devolver</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Antes del inicio formal del desarrollo</td>
                            <td>0 % (sin cargo)</td>
                            <td>100 % de lo pagado</td>
                        </tr>

                        <tr>
                            <td>
                                Análisis comercial y estructuración iniciados (hasta 25 %)
                            </td>
                            <td>25 % del total pagado</td>
                            <td>75 % del total pagado</td>
                        </tr>

                        <tr>
                            <td>
                                Diseño en proceso o primera versión entregada (26 % al 60 %)
                            </td>
                            <td>55 % del total pagado</td>
                            <td>45 % del total pagado</td>
                        </tr>

                        <tr>
                            <td>
                                Ajustes finales o entregables en validación (61 % al 90 %)
                            </td>
                            <td>85 % del total pagado</td>
                            <td>15 % del total pagado</td>
                        </tr>

                        <tr>
                            <td>Proyecto entregado en su totalidad (más de 90 %)</td>
                            <td>100 % del total pagado</td>
                            <td>Sin reembolso</td>
                        </tr>
                    </tbody>
                </table>

                <p>
                    El porcentaje de avance será determinado por el Proveedor mediante informe
                    escrito que describa las actividades realizadas, el cual se comunicará al
                    Cliente junto con la resolución de su solicitud. Si el Cliente considera
                    que el porcentaje indicado no corresponde al avance real, podrá acudir ante
                    la Procuraduría Federal del Consumidor (PROFECO) conforme al procedimiento
                    indicado en el numeral 7 de esta Política.
                </p>

                <h2>4 REEMBOLSO POR CAUSA IMPUTABLE AL PROVEEDOR</h2>

                <p>
                    Con independencia del avance del proyecto, el Proveedor procederá al
                    reintegro total del importe pagado cuando concurra alguno de los supuestos
                    siguientes:
                </p>

                <ul>
                    <li>
                        El Proveedor no pueda iniciar el proyecto dentro del plazo informado al
                        Cliente por causas exclusivamente atribuibles al Proveedor, y el Cliente
                        opte por no aguardar
                    </li>

                    <li>
                        Los entregables presenten deficiencias técnicas o estructurales graves,
                        objetivas y verificables, que no sean subsanadas por el Proveedor en un
                        plazo razonable de cinco (5) días hábiles contados desde la notificación
                        formal del Cliente
                    </li>

                    <li>
                        Así lo resuelva la Procuraduría Federal del Consumidor (PROFECO)
                        mediante resolución emitida en procedimiento de conciliación o arbitraje
                    </li>
                </ul>

                <h2>5 SUPUESTOS DE IMPROCEDENCIA DEL REEMBOLSO</h2>

                <p>
                    No procederá la devolución del importe pagado en los siguientes casos:
                </p>

                <ul>
                    <li>
                        El servicio haya sido entregado en su totalidad y conforme a las
                        especificaciones acordadas en la propuesta o cotización aprobada por el
                        Cliente
                    </li>

                    <li>
                        El avance del proyecto sea superior al noventa por ciento (90 %) y la
                        cancelación no obedezca a causa imputable al Proveedor
                    </li>

                    <li>
                        El retraso o la imposibilidad de ejecución sea consecuencia de falta de
                        entrega de información, imágenes de productos, validaciones o accesos por
                        parte del Cliente en los tiempos acordados
                    </li>

                    <li>
                        El Cliente haya incumplido con sus obligaciones de pago o con las
                        condiciones establecidas en los Términos y Condiciones
                    </li>

                    <li>
                        Proyectos personalizados en los que el análisis comercial y la
                        estructuración estratégica a medida hayan concluido
                    </li>
                </ul>

                <h2>6 PROCEDIMIENTO Y PLAZOS DE SOLICITUD</h2>

                <h3>¿Cómo presentar la solicitud?</h3>

                <p>
                    El Cliente deberá dirigir solicitud escrita al Proveedor a través del
                    formulario de contacto del sitio web o comunicarse directamente al teléfono
                    +52 1 55 5244 5687, indicando: nombre o denominación del Cliente,
                    modalidad de servicio contratada, referencia del pago, motivo detallado de
                    la solicitud y, en su caso, documentación de soporte.
                </p>

                <h3>Tiempos del proceso</h3>

                <ul>
                    <li>
                        Acuse de recibo por el Proveedor: dentro de los dos (2) días hábiles
                        siguientes a la recepción
                    </li>

                    <li>
                        Resolución motivada: dentro de los cinco (5) días hábiles posteriores al
                        acuse de recibo
                    </li>

                    <li>
                        Procesamiento del reembolso aprobado: dentro de los quince (15) días
                        hábiles contados desde la fecha de la resolución favorable
                    </li>
                </ul>

                <h3>Plazos para presentar la solicitud</h3>

                <ul>
                    <li>
                        Cancelación sin cargo: dentro de los cinco (5) días hábiles siguientes a
                        la confirmación del pago, antes del inicio del desarrollo
                    </li>

                    <li>
                        Reclamación por deficiencias en entregables: dentro de los siete (7)
                        días hábiles siguientes a la recepción del entregable observado
                    </li>
                </ul>

                <h3>Método de reembolso</h3>

                <p>
                    La devolución se efectuará al mismo instrumento de pago utilizado por el
                    Cliente al contratar el servicio (tarjeta de crédito o débito Visa o
                    Mastercard). Si por razones técnicas ello no fuera posible, el Proveedor y
                    el Cliente acordarán un mecanismo alternativo. Los costos de comisión
                    bancaria o de procesamiento, cuando la causa del reembolso no sea imputable
                    al Proveedor, serán descontados del monto a devolver.
                </p>

                <h2>7 ATENCIÓN A RECLAMACIONES E INSTANCIAS EXTERNAS</h2>

                <p>
                    El Proveedor atenderá toda reclamación relacionada con la ejecución de sus
                    servicios con diligencia y en los plazos señalados en el numeral anterior.
                    Los medios de contacto para presentar reclamaciones son los siguientes:
                </p>

                <table>
                    <tbody>
                        <tr>
                            <td>Formulario web:</td>
                            <td>byteza.com.mx</td>
                        </tr>

                        <tr>
                            <td>Teléfono:</td>
                            <td>+52 1 55 5244 5687</td>
                        </tr>

                        <tr>
                            <td>Domicilio:</td>
                            <td>
                                Avenida Homero No. 404, Piso 5, Colonia Polanco V Sección, Alcaldía
                                Miguel Hidalgo, C.P. 11560, Ciudad de México
                            </td>
                        </tr>
                    </tbody>
                </table>

                <p>
                    Si el Cliente no obtiene respuesta satisfactoria por parte del Proveedor,
                    podrá acudir ante la Procuraduría Federal del Consumidor (PROFECO) para
                    iniciar el procedimiento de conciliación previsto en los artículos 111 y
                    siguientes de la Ley Federal de Protección al Consumidor.
                </p>

                <h2>8 VIGENCIA Y ACTUALIZACIÓN</h2>

                <p>
                    La presente Política entra en vigor en la fecha señalada en el encabezado
                    de este documento y podrá ser actualizada por el Proveedor cuando resulte
                    necesario, publicando la nueva versión en su sitio web con indicación de la
                    fecha de vigencia. Los derechos del Cliente derivados de proyectos en
                    ejecución al momento de la actualización no se verán afectados por las
                    modificaciones.
                </p>

                <p>Fecha de entrada en vigor: 02 de junio 2026.</p>
            </>
        </div>
    );
}

function LegalEn() {
    return (
        <div className="legal-container">
            <LegalStyle />

            <>
                <h1>CANCELLATION AND REFUND POLICY</h1>

                <p>OUTNET POST S.A. DE C.V.</p>

                <p>RFC OPO1907266W4</p>

                <p>Effective as of: June 2, 2026</p>

                <p>
                    Conditions, deadlines and procedures applicable to cancellation requests
                    and refunds of paid amounts
                </p>

                <p>
                    This Cancellation and Refund Policy (“Policy”) establishes the rights and
                    obligations applicable to the Client and OUTNET POST S.A. DE C.V.
                    (hereinafter, the “Provider”) when a request is made to cancel a contracted
                    service or to obtain a total or partial refund of the amount paid. This
                    Policy is based on the Federal Consumer Protection Law (LFPC), the
                    Commercial Code and other applicable provisions in Mexico, and must be read
                    together with the Provider’s Terms and Conditions.
                </p>

                <p>
                    The Provider’s services involve technical, strategic and production work
                    from the initial phases of the project. This characteristic defines the
                    retention ranges established in this Policy, which reflect the effort
                    effectively invested at each stage of the digital catalog development.
                </p>

                <h2>1 RIGHT TO CANCEL WITHOUT CHARGE</h2>

                <p>
                    The Client shall have the right to cancel the contracted service and
                    receive a full refund of the amount paid when the following conditions are
                    met simultaneously:
                </p>

                <ul>
                    <li>
                        The cancellation request is submitted within five (5) business days from
                        the date on which the Provider confirms payment for the service
                    </li>

                    <li>
                        The Provider has not started the development work, where commencement
                        means any activity related to commercial analysis, category structuring,
                        design, visual production or technical configuration associated with the
                        Client’s project
                    </li>
                </ul>

                <p>
                    When the Client has expressly requested the immediate start of the project
                    and the Provider has begun the development process within the indicated
                    period, the right to a full refund shall be extinguished, and only the
                    provisions of Section 3 of this Policy shall apply.
                </p>

                <h2>2 RIGHT OF REVOCATION IN ONLINE CONTRACTING</h2>

                <p>
                    Pursuant to Article 56 of the Federal Consumer Protection Law, a Client who
                    has contracted the Provider’s services through its website shall have the
                    right to revoke consent within five (5) business days following the
                    execution of the agreement, without the need to state any cause and without
                    penalty, with the right to a full refund, provided that the catalog
                    development process has not begun. Revocation must be communicated in
                    writing through the website contact form or directly by phone at
                    +52 1 55 5244 5687.
                </p>

                <h2>3 CANCELLATION AFTER DEVELOPMENT HAS STARTED</h2>

                <p>
                    Once the Provider has formally started the digital catalog development
                    work, cancellation shall be subject to the following retention scale,
                    determined according to the proven execution phase:
                </p>

                <table>
                    <thead>
                        <tr>
                            <th>Cancellation condition</th>
                            <th>Percentage retained</th>
                            <th>Amount refunded</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Before formal development begins</td>
                            <td>0 % (no charge)</td>
                            <td>100 % of the amount paid</td>
                        </tr>

                        <tr>
                            <td>
                                Commercial analysis and structuring started (up to 25 %)
                            </td>
                            <td>25 % of the total amount paid</td>
                            <td>75 % of the total amount paid</td>
                        </tr>

                        <tr>
                            <td>
                                Design in progress or first version delivered (26 % to 60 %)
                            </td>
                            <td>55 % of the total amount paid</td>
                            <td>45 % of the total amount paid</td>
                        </tr>

                        <tr>
                            <td>
                                Final adjustments or deliverables under validation (61 % to 90 %)
                            </td>
                            <td>85 % of the total amount paid</td>
                            <td>15 % of the total amount paid</td>
                        </tr>

                        <tr>
                            <td>Project fully delivered (more than 90 %)</td>
                            <td>100 % of the total amount paid</td>
                            <td>No refund</td>
                        </tr>
                    </tbody>
                </table>

                <p>
                    The progress percentage shall be determined by the Provider through a
                    written report describing the activities performed, which shall be
                    communicated to the Client together with the resolution of the request. If
                    the Client considers that the indicated percentage does not correspond to
                    the actual progress, the Client may file a claim before the Federal Consumer
                    Protection Agency (PROFECO) according to the procedure indicated in Section
                    7 of this Policy.
                </p>

                <h2>4 REFUND FOR CAUSES ATTRIBUTABLE TO THE PROVIDER</h2>

                <p>
                    Regardless of the project’s progress, the Provider shall proceed with a
                    full refund of the amount paid when any of the following circumstances
                    occur:
                </p>

                <ul>
                    <li>
                        The Provider is unable to start the project within the period informed to
                        the Client due exclusively to causes attributable to the Provider, and
                        the Client chooses not to wait
                    </li>

                    <li>
                        The deliverables contain serious, objective and verifiable technical or
                        structural deficiencies that are not corrected by the Provider within a
                        reasonable period of five (5) business days counted from the Client’s
                        formal notice
                    </li>

                    <li>
                        Such refund is ordered by the Federal Consumer Protection Agency
                        (PROFECO) through a resolution issued in a conciliation or arbitration
                        proceeding
                    </li>
                </ul>

                <h2>5 CIRCUMSTANCES WHERE REFUNDS DO NOT APPLY</h2>

                <p>
                    Refunds of the amount paid shall not proceed in the following cases:
                </p>

                <ul>
                    <li>
                        The service has been fully delivered and in accordance with the
                        specifications agreed upon in the proposal or quotation approved by the
                        Client
                    </li>

                    <li>
                        The project progress exceeds ninety percent (90 %) and the cancellation
                        is not due to causes attributable to the Provider
                    </li>

                    <li>
                        The delay or impossibility of execution results from the Client’s failure
                        to provide information, product images, validations or access within the
                        agreed timeframes
                    </li>

                    <li>
                        The Client has failed to comply with payment obligations or with the
                        conditions established in the Terms and Conditions
                    </li>

                    <li>
                        Customized projects in which the commercial analysis and tailored
                        strategic structuring have been completed
                    </li>
                </ul>

                <h2>6 REQUEST PROCEDURE AND DEADLINES</h2>

                <h3>How to submit a request</h3>

                <p>
                    The Client must submit a written request to the Provider through the
                    website contact form or directly by phone at +52 1 55 5244 5687,
                    indicating: the Client’s name or business name, contracted service
                    modality, payment reference, detailed reason for the request and, where
                    applicable, supporting documentation.
                </p>

                <h3>Process timelines</h3>

                <ul>
                    <li>
                        Acknowledgment of receipt by the Provider: within two (2) business days
                        following receipt
                    </li>

                    <li>
                        Reasoned resolution: within five (5) business days following the
                        acknowledgment of receipt
                    </li>

                    <li>
                        Processing of the approved refund: within fifteen (15) business days from
                        the date of the favorable resolution
                    </li>
                </ul>

                <h3>Deadlines for submitting requests</h3>

                <ul>
                    <li>
                        Cancellation without charge: within five (5) business days following
                        payment confirmation, before development begins
                    </li>

                    <li>
                        Claims regarding deficiencies in deliverables: within seven (7) business
                        days following receipt of the questioned deliverable
                    </li>
                </ul>

                <h3>Refund method</h3>

                <p>
                    The refund shall be made to the same payment instrument used by the Client
                    when contracting the service (Visa or Mastercard credit or debit card). If
                    this is not technically possible, the Provider and the Client shall agree
                    on an alternative mechanism. Banking or processing commission costs, when
                    the cause of the refund is not attributable to the Provider, shall be
                    deducted from the refundable amount.
                </p>

                <h2>7 CLAIMS HANDLING AND EXTERNAL AUTHORITIES</h2>

                <p>
                    The Provider shall address all claims related to the execution of its
                    services diligently and within the periods indicated in the previous
                    section. The contact methods for submitting claims are as follows:
                </p>

                <table>
                    <tbody>
                        <tr>
                            <td>Web form:</td>
                            <td>byteza.com.mx</td>
                        </tr>

                        <tr>
                            <td>Phone number:</td>
                            <td>+52 1 55 5244 5687</td>
                        </tr>

                        <tr>
                            <td>Address:</td>
                            <td>
                                Avenida Homero No. 404, 5th Floor, Polanco V Sección Neighborhood,
                                Miguel Hidalgo Borough, ZIP Code 11560, Mexico City
                            </td>
                        </tr>
                    </tbody>
                </table>

                <p>
                    If the Client does not obtain a satisfactory response from the Provider,
                    the Client may file a claim before the Federal Consumer Protection Agency
                    (PROFECO) to initiate the conciliation procedure established in Articles
                    111 and following of the Federal Consumer Protection Law.
                </p>

                <h2>8 VALIDITY AND UPDATES</h2>

                <p>
                    This Policy enters into force on the date indicated in the heading of this
                    document and may be updated by the Provider whenever necessary by
                    publishing the new version on its website together with the effective date.
                    The Client’s rights arising from projects in progress at the time of the
                    update shall not be affected by such modifications.
                </p>

                <p>Effective date: June 2, 2026.</p>
            </>
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
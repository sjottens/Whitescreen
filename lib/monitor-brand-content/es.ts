// lib/monitor-brand-content/es.ts - Spanish content for /monitor-test/[brand]
// pages. Faithful translation of en.ts, not new claims - see the note in
// index.ts for the factual-accuracy caveat that applies to every locale.
// Brand names, model numbers, and technical/panel terms (IPS, VA, TN,
// OLED, QD-OLED, Nano IPS, Mini-LED, Delta E, ISO 13406-2, USB-C, DCI-P3,
// AdobeRGB, sRGB, HDR, G-Sync, FreeSync, etc.) are kept in their original
// form, as is standard in Spanish tech writing.

import type { MonitorBrandContent } from './index';

const GENERIC_WARRANTY =
  'Los fabricantes suelen clasificar los defectos de píxeles según convenciones derivadas de la antigua norma ISO 13406-2, que define "clases" de fallos de píxeles: la Clase I no permite ningún defecto, mientras que las Clases II y III permiten un pequeño número de subpíxeles brillantes, oscuros o atascados. Muy pocos monitores de consumo se venden bajo una política de Clase I (cero defectos); la mayoría se rige por una política equivalente a la Clase II, que permite un puñado de defectos antes de ofrecer una sustitución. La cifra exacta, y si se cuentan píxeles completos o subpíxeles, varía según el fabricante, la línea de producto y la región, y puede cambiar entre modelos - consulte las condiciones de garantía específicas de su monitor en lugar de asumir una cifra.';

export const MONITOR_BRAND_CONTENT_ES: Record<string, MonitorBrandContent> = {
  // ---------------------------------------------------------------------
  // Marcas principales
  // ---------------------------------------------------------------------
  asus: {
    panelTech:
      "ASUS vende monitores con casi todos los tipos de panel: los modelos económicos y de oficina suelen usar paneles VA o IPS de gama inicial, mientras que sus líneas ROG y TUF Gaming se apoyan en Fast IPS para tiempos de respuesta más bajos, y la línea ProArt usa paneles IPS calibrados de fábrica orientados al trabajo con colores precisos. Un pequeño número de modelos ROG de gama alta usan paneles QD-OLED. Como la marca ASUS abarca una gama tan amplia, la tecnología del panel de su modelo específico importa más que el nombre de la marca a la hora de juzgar qué color y contraste 'normales' deberían verse.",
    commonIssues:
      "Como ASUS abarca desde gama económica hasta gama alta, los problemas de calidad de imagen que conviene revisar varían según el segmento: los paneles VA de gama inicial son más propensos a mostrar arrastre negro visible en movimiento rápido, mientras que los modelos ROG/ProArt basados en IPS tienen más probabilidades de mostrar un ligero resplandor IPS o fuga de retroiluminación cerca de los bordes en una habitación oscura. Los reportes de estos problemas varían según el modelo específico y el lote de producción, así que considérelo algo a revisar en su unidad, no un defecto esperado.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: '¿La línea de monitores ASUS usa el mismo panel en todos sus productos?',
        a: "No. ASUS monta paneles VA, IPS, TN, Fast IPS y (en algunos modelos ROG) QD-OLED, según la serie y el rango de precio. Consulte el número de modelo exacto: el tipo de panel que usa determina qué cambio de color por ángulo de visión o comportamiento del nivel de negro es normal frente a un defecto.",
      },
      {
        q: '¿El resplandor IPS en un monitor ASUS es lo mismo que un píxel muerto?',
        a: "No. El resplandor IPS es un brillo tenue y difuso cerca de las esquinas de una pantalla con panel IPS al verla en una habitación oscura, causado por cómo los paneles IPS gestionan la retroiluminación y el ángulo de visión: se desplaza o cambia de intensidad al cambiar el ángulo de visión. Un píxel muerto o atascado es un punto fijo único que no se mueve y mantiene el mismo color sin importar lo que se muestre detrás.",
      },
      {
        q: '¿Dónde compruebo el tipo de panel de mi modelo ASUS específico antes de la prueba?',
        a: "ASUS indica el tipo de panel (IPS, VA, TN, Fast IPS, OLED) en la ficha técnica oficial de cada producto en asus.com, normalmente bajo las especificaciones de 'Panel' o 'Pantalla'. Saber esto antes de ejecutar la prueba de color le ayuda a juzgar si algo que ve es una característica normal de ese tipo de panel o merece más investigación.",
      },
    ],
  },
  lg: {
    panelTech:
      'LG es una de las pocas empresas que fabrica paneles de pantalla (a través de LG Display) y vende monitores terminados, por lo que su propia gama se apoya mucho en paneles Nano IPS e IPS estándar, con paneles OLED presentes en sus modelos de gama alta UltraGear para gaming y en la línea profesional UltraFine. Esta integración vertical es una diferencia real frente a marcas que solo obtienen paneles de terceros, aunque por sí sola no garantiza una unidad sin defectos.',
    commonIssues:
      "En los monitores basados en IPS de LG, el problema estético más reportado en foros de usuarios es la fuga de retroiluminación irregular o el 'nublado' cerca de los bordes de la pantalla, más notorio en fondos oscuros y que varía de una unidad a otra en lugar de ser un defecto de toda la línea. En los monitores gaming OLED de LG, la propia tecnología del panel elimina por completo la cuestión de la fuga de retroiluminación, pero introduce otras consideraciones a largo plazo como el riesgo de quemado de imagen estática, algo que una prueba única de píxeles muertos no puede detectar.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: '¿El hecho de que LG fabrique sus propios paneles afecta la tasa de píxeles muertos?',
        a: "LG Display fabrica paneles tanto para los monitores propios de LG como para muchas otras marcas, pero fabricar el propio panel no elimina la variación normal de producción: siguen apareciendo unidades defectuosas en toda la industria. Principalmente significa que LG puede ofrecer tipos de panel (como Nano IPS o sus variantes OLED) que no están tan disponibles en marcas que solo obtienen paneles de terceros.",
      },
      {
        q: '¿En qué se diferencia probar un monitor OLED de LG frente a uno IPS para detectar defectos de píxeles?',
        a: "La prueba de ciclos de color funciona igual en ambos, pero los paneles OLED producen negro verdadero apagando los píxeles por completo, así que un píxel 'muerto' (uno atascado apagado) puede ser más difícil de distinguir del contenido negro normal: probar con colores saturados como rojo, verde y azul es más revelador que probar con negro en paneles OLED.",
      },
      {
        q: '¿Qué significa "Nano IPS" para las pruebas de color en un monitor LG?',
        a: "Nano IPS es el nombre comercial de LG para una variante de IPS que usa una capa de nanopartículas para filtrar longitudes de onda de luz, orientada a una cobertura de gama de color más amplia, no a cambiar cómo aparecen los píxeles muertos o atascados. Para efectos de la prueba de defectos de píxeles, se comporta igual que cualquier otro panel IPS: los defectos siguen apareciendo como puntos de color estático que no cambian con el fondo.",
      },
    ],
  },
  samsung: {
    panelTech:
      "La propia división de pantallas de Samsung fabrica paneles VA a gran escala, y su línea gaming Odyssey está construida casi enteramente sobre tecnología VA (incluidos paneles VA curvos 1000R), con un número menor de modelos insignia Odyssey OLED que usan los paneles QD-OLED propios de Samsung. Los monitores de uso general y empresariales de Samsung combinan VA e IPS según la serie, así que conviene comprobar el tipo de panel del modelo específico en lugar de asumirlo.",
    commonIssues:
      "Los paneles VA, que dominan la línea gaming de Samsung, son conocidos en toda la industria por un tipo de fallo distinto al de IPS: en lugar de resplandor en las esquinas, los paneles VA son más propensos a mostrar 'aplastamiento de negros' o 'arrastre' visibles en escenas oscuras con movimiento rápido, y pueden mostrar un cambio de color/contraste más pronunciado en ángulos de visión cerrados. Estas son características inherentes al panel VA, no defectos, pero conviene distinguirlas de un píxel muerto o atascado real durante la prueba.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: '¿Por qué mi monitor curvo Samsung se ve ligeramente distinto de color en los bordes?',
        a: "Esto es una característica normal de los paneles VA curvos, no un defecto: el ángulo de visión afecta más al color y contraste de un panel VA que a uno IPS, y los bordes de una pantalla curva forman un ángulo distinto respecto a sus ojos que el centro. Es algo distinto de los píxeles muertos o atascados, que mantienen el mismo color sin importar el ángulo de visión.",
      },
      {
        q: '¿Los monitores Samsung Odyssey OLED necesitan una prueba de píxeles muertos distinta a los modelos VA?',
        a: 'El mismo método de ciclos de color funciona para ambos, pero en los modelos OLED ayuda prestar especial atención a los colores saturados en lugar de a las pantallas negras, ya que el OLED produce negro apagando los píxeles: un píxel atascado apagado se confunde con el contenido negro y es mucho más visible contra rojo, verde, azul o blanco.',
      },
      {
        q: '¿Un punto brillante en mi monitor Samsung es un píxel muerto o un problema de retroiluminación?',
        a: "Un único punto brillante fijo que aparece del mismo color sin importar lo que haya en pantalla suele ser un píxel atascado (no muerto). Una zona más amplia de brillo que cambia con el ángulo de visión o que se ve más en una pantalla negra es más probablemente fuga de retroiluminación o nublado, un problema distinto de los defectos individuales de píxeles.",
      },
    ],
  },
  dell: {
    panelTech:
      "La gama de monitores Dell se divide con bastante claridad por serie: la línea UltraSharp (serie U) usa paneles IPS o IPS Black con calibración de color de fábrica orientada al trabajo de oficina y creativo, los monitores gaming de marca Alienware (vendidos bajo el paraguas corporativo de Dell) usan paneles IPS o QD-OLED, y los monitores de oficina más básicos de Dell, series P y E, usan IPS estándar. No existe un único 'panel Dell': el nombre de la serie es el mejor indicador de qué tecnología está probando.",
    commonIssues:
      "En la línea UltraSharp de Dell, la queja estética más común en reportes de usuarios es una leve fuga de retroiluminación o resplandor IPS visible en pantalla negra en una habitación oscura, una característica conocida de los paneles IPS en general, no específica de Dell. En los modelos gaming QD-OLED de Alienware, la preocupación pasa de la fuga de retroiluminación (que no aplica a OLED) a bandas de color cerca del negro en cierto contenido, un fenómeno distinto de un píxel muerto o atascado.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: '¿Cuál es la diferencia entre los monitores serie U, serie P y Alienware de Dell a efectos de prueba?',
        a: "La prueba de ciclos de color funciona igual en los tres, pero lo que cuenta como característica estética 'normal' difiere: los modelos IPS de la serie U y Alienware pueden mostrar un ligero resplandor IPS cerca de las esquinas en pantalla oscura, mientras que los monitores de oficina de la serie P (a menudo IPS estándar o VA) tienen más probabilidades de mostrar simple fuga de retroiluminación. Ninguno de estos es lo mismo que un píxel muerto o atascado.",
      },
      {
        q: '¿Dell calibra de fábrica todos los monitores UltraSharp?',
        a: "Dell promociona la calibración de fábrica (incluido un informe de precisión de color por unidad en algunos modelos UltraSharp) como una característica de esa línea específica, no algo aplicado uniformemente a todos los monitores Dell. Consulte la página de producto de su modelo o la documentación incluida para confirmar si su unidad incluyó datos de calibración de fábrica.",
      },
      {
        q: '¿Cómo pruebo un monitor Alienware QD-OLED de forma distinta a un Dell IPS?',
        a: 'Recorra los mismos colores saturados, pero preste más atención a cómo la pantalla reproduce contenido casi negro y grises oscuros, ya que los paneles QD-OLED los gestionan de forma distinta a los IPS: un píxel atascado en un color fijo se detecta más fácilmente contra rojo, verde o azul que contra negro en un panel OLED.',
      },
    ],
  },
  benq: {
    panelTech:
      "La gama de BenQ está organizada en torno a casos de uso bastante diferenciados: la serie SW (fotografía/diseño) usa paneles IPS con calibración por hardware y cobertura de gama de color amplia validada según los estándares Pantone y Calman, la serie PD se dirige al uso profesional/de diseño general con una calibración IPS similar, y las submarcas Mobiuz y Zowie cubren respectivamente el gaming de consumo y de esports, con Zowie en particular favoreciendo paneles TN o IPS mate de baja latencia de entrada, ajustados para el juego competitivo por encima de la precisión de color.",
    commonIssues:
      "BenQ promociona varios de sus monitores profesionales (SW/PD) y gaming (Mobiuz) con retroiluminación sin parpadeo y modos de baja luz azul orientados a reducir la fatiga visual en sesiones largas: son funciones de pantalla, no prevención de defectos de píxeles, y no cambian cómo se vería un píxel muerto o atascado durante la prueba. En los paneles IPS de BenQ en general, aplican las características habituales del IPS (ligero resplandor cerca de las esquinas en habitaciones oscuras) igual que en cualquier monitor basado en IPS.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: '¿La tecnología sin parpadeo de BenQ afecta la prueba de píxeles muertos?',
        a: "No. La tecnología de retroiluminación sin parpadeo aborda cómo se atenúa la retroiluminación (usando atenuación DC en lugar de parpadeo PWM) para reducir la fatiga visual: no tiene efecto en el comportamiento de píxeles individuales. Un píxel muerto o atascado aparecerá igual en un monitor BenQ sin parpadeo que en cualquier otro.",
      },
      {
        q: '¿Un monitor BenQ Zowie se prueba de forma distinta a un BenQ SW?',
        a: "El procedimiento de prueba es idéntico: recorra colores sólidos en pantalla completa y busque píxeles que no coincidan con el fondo. Lo que difiere son las prioridades del panel: los modelos Zowie priorizan el tiempo de respuesta y la latencia de entrada sobre la precisión de color, así que no espere la misma vivacidad de color que vería en un panel calibrado de la serie SW.",
      },
      {
        q: '¿Qué tipo de panel usa la serie BenQ PD?',
        a: 'La serie PD (Designer) de BenQ usa paneles IPS, generalmente con una cobertura de gama de color más amplia que los monitores de oficina económicos de BenQ, pero sin el paquete completo de calibración por hardware que BenQ reserva para su serie SW (fotografía): consulte el número de modelo PD específico para conocer sus especificaciones exactas de panel y gama.',
      },
    ],
  },
  alienware: {
    panelTech:
      "La gama actual de monitores Alienware se centra en dos tecnologías de panel: paneles IPS (incluidos algunos con Fast IPS para tasas de refresco más altas) en sus modelos gaming más asequibles, y paneles QD-OLED en sus monitores ultrawide curvos insignia (el AW3423DW y el AW3423DWF son los ejemplos más conocidos), con los que Alienware fue una de las primeras marcas de monitores para PC en llevarlos al mercado a gran escala.",
    commonIssues:
      "En los modelos QD-OLED de Alienware, la consideración relevante a largo plazo es el riesgo de quemado de imagen estática (común a toda la tecnología OLED, no exclusivo de Alienware), que una prueba única de ciclos de color no puede revelar: solo puede confirmar si un píxel está muerto o atascado ahora mismo, no predecir un quemado futuro. En los modelos gaming IPS de Alienware, aplican las características habituales de resplandor IPS y fuga de retroiluminación igual que en cualquier panel IPS.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: '¿Una prueba de píxeles muertos puede detectar el quemado OLED en un monitor Alienware?',
        a: "No. Una prueba de píxeles muertos recorre colores sólidos para revelar píxeles atascados encendidos o apagados en este momento: no puede detectar el quemado, que es un oscurecimiento gradual y dependiente del contenido de píxeles específicos por la visualización prolongada de imágenes estáticas. El quemado suele mostrarse como un fantasma tenue de elementos de interfaz (como una barra de tareas o una mira) en lugar de un único punto de color fijo.",
      },
      {
        q: '¿Los monitores Alienware QD-OLED tienen la misma política de píxeles muertos que sus modelos IPS?',
        a: "Las políticas de garantía por defectos de píxeles pueden variar según la línea de producto y las establece Dell (propietaria de Alienware) por modelo, sin aplicarse uniformemente a toda la gama Alienware. Consulte la documentación de garantía específica de su modelo en lugar de asumir que la política es la misma en los monitores Alienware IPS y QD-OLED.",
      },
      {
        q: '¿Cuál es la forma más rápida de probar un ultrawide curvo Alienware para detectar defectos de píxeles?',
        a: 'Use el modo de pantalla completa y recorra cada color sólido, prestando especial atención a los bordes exteriores del panel curvo: en pantallas curvas muy anchas es fácil pasar por alto un defecto cerca de los bordes exteriores si se centra solo en el centro de la pantalla.',
      },
    ],
  },
  msi: {
    panelTech:
      'La gama de monitores gaming de MSI (series MAG y MPG) está construida principalmente sobre paneles VA e IPS, con modelos VA curvos comunes en la gama media MAG y paneles Fast IPS más planos en los modelos MPG de mayor refresco orientados al juego competitivo. MSI es un recién llegado relativo al mercado de monitores comparado con marcas como LG o Samsung, y obtiene los paneles de fabricantes externos en lugar de producirlos.',
    commonIssues:
      "Como los monitores gaming curvos de MSI se apoyan en paneles VA, aplican aquí las mismas características VA que en otras marcas basadas en VA: posible arrastre en escenas oscuras durante movimiento rápido y un cambio de contraste más notorio en ángulos de visión cerrados, ambas características del panel, no defectos. En los modelos gaming Fast IPS más planos de MSI, el resplandor IPS habitual cerca de las esquinas en habitaciones oscuras es la característica más relevante para distinguir de un defecto real.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: '¿MSI fabrica sus propios paneles de monitor?',
        a: 'No. MSI, como la mayoría de las marcas de monitores gaming aparte de LG y Samsung, obtiene sus paneles de fabricantes externos y los integra en sus propios diseños de monitor con electrónica, firmware e iluminación RGB propios de MSI. La tecnología de panel subyacente (VA o IPS) es lo que determina el comportamiento del color y del ángulo de visión, no la marca MSI en sí.',
      },
      {
        q: '¿Cómo sé si el borde de mi monitor curvo MSI es un artefacto de la curvatura o un defecto de píxel?',
        a: "Un cambio de color o brillo relacionado con la curvatura cambia de forma gradual y consistente a lo largo del borde y se ve igual sin importar el contenido en pantalla. Un defecto de píxel es un punto fijo único: mantiene el mismo tamaño y color tanto si mira el borde como el centro de la curva, y no se difumina gradualmente hacia el entorno.",
      },
      {
        q: '¿La iluminación RGB Mystic Light de MSI interfiere con la prueba de píxeles?',
        a: "No. Mystic Light controla la iluminación RGB del chasis y el soporte del monitor, no el panel de pantalla en sí, por lo que no tiene efecto en cómo el panel reproduce el color ni en la visibilidad de píxeles muertos/atascados durante una prueba de ciclos de color.",
      },
    ],
  },
  acer: {
    panelTech:
      "Acer cubre un rango inusualmente amplio para una sola marca: su línea Predator (gaming) usa paneles IPS, VA y, en algunos modelos insignia, Mini-LED u OLED, mientras que su línea económica Nitro se apoya sobre todo en VA e IPS de gama inicial, y sus monitores generales de oficina/consumo usan una mezcla de TN, VA e IPS según el rango de precio. El nombre Acer por sí solo no indica el tipo de panel: consulte el modelo específico.",
    commonIssues:
      "Dado lo amplia que es la gama de Acer, las características de imagen que conviene revisar varían mucho según el nivel: los paneles VA de la línea económica Nitro tienen más probabilidades de mostrar arrastre visible en contenido oscuro y con movimiento rápido, mientras que los modelos IPS y Mini-LED de gama alta Predator tienen más probabilidades de mostrar un ligero 'blooming' de retroiluminación (halo visible alrededor de objetos brillantes sobre fondo oscuro) en lugar del resplandor uniforme en los bordes típico del IPS estándar.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: '¿Acer Nitro usa la misma tecnología de panel que Acer Predator?',
        a: "No. Nitro es la línea gaming económica de Acer y suele usar paneles VA o IPS de gama inicial, mientras que Predator es la línea de gama alta de Acer y abarca IPS, VA, Mini-LED y algunos modelos OLED según el producto específico. Consulte la ficha técnica de su modelo exacto en lugar de asumir según el nombre de la línea.",
      },
      {
        q: '¿Qué es el blooming de retroiluminación y es lo mismo que un píxel muerto?',
        a: "El blooming es un halo de luz suave visible alrededor de objetos brillantes sobre un fondo oscuro, causado por cómo se zonifica una retroiluminación Mini-LED o LED estándar: es más notorio en los modelos Predator Mini-LED de Acer. Es una característica de la retroiluminación, no un defecto de píxel: un píxel muerto o atascado es un único punto fijo sin relación con lo que se muestra cerca.",
      },
      {
        q: '¿Los monitores Acer vienen con garantía de píxeles muertos en la compra?',
        a: "La política de defectos de píxeles de Acer se establece por línea de producto y región en lugar de ser una garantía única para toda la empresa, y puede cambiar con el tiempo. Consulte la documentación de garantía de su modelo y región específicos, o el sitio de soporte regional de Acer, en lugar de asumir que un número fijo de defectos aceptables aplica a toda la gama.",
      },
    ],
  },
  corsair: {
    panelTech:
      "Corsair entró en el mercado de monitores más recientemente que la mayoría de las marcas de esta lista, con su línea XENEON construida sobre paneles IPS y QD-OLED (el XENEON Flex es un modelo QD-OLED flexible destacado), orientada al gaming de alto refresco y comercializada junto al ecosistema existente de periféricos y componentes de PC de Corsair. Corsair obtiene sus paneles de fabricantes externos en lugar de producirlos.",
    commonIssues:
      "En los modelos XENEON basados en IPS de Corsair, aplican las características IPS habituales (ligero resplandor cerca de las esquinas en una habitación oscura) igual que en cualquier panel IPS de otra marca. En los modelos XENEON QD-OLED, aplican las mismas consideraciones específicas de OLED que en otros monitores QD-OLED: una prueba de color única puede revelar un píxel muerto o atascado actual, pero no el riesgo de quemado a largo plazo por contenido estático.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: '¿El software iCUE de Corsair afecta cómo el monitor muestra el color?',
        a: "iCUE controla principalmente la iluminación RGB y la integración de periféricos en todo el ecosistema de productos de Corsair; en los monitores Corsair, algunos ajustes del menú en pantalla pueden ser accesibles a través de él, pero la calibración del panel y la reproducción de color subyacentes son independientes de iCUE y no se ven afectadas por si está en ejecución.",
      },
      {
        q: '¿El XENEON Flex se prueba igual que un monitor plano estándar?',
        a: "Sí, el procedimiento de prueba de ciclos de color es el mismo sin importar si el panel es plano o flexible. Como el Flex es QD-OLED, priorice las pruebas con colores saturados (rojo, verde, azul) sobre pantallas negras, ya que el OLED reproduce el negro apagando los píxeles, lo que hace más difícil detectar un píxel atascado apagado precisamente contra contenido negro.",
      },
      {
        q: '¿Qué tan nuevo es Corsair en el mercado de monitores comparado con marcas como LG o Dell?',
        a: "Corsair lanzó sus primeros monitores XENEON en 2021, lo que lo convierte en uno de los participantes más recientes comparado con empresas como LG, Samsung o Dell, que llevan décadas vendiendo monitores. Esto no afecta inherentemente las tasas de defectos, pero sí significa que hay menos historial de datos de fiabilidad a largo plazo disponible específicamente para las pantallas Corsair.",
      },
    ],
  },
  eizo: {
    panelTech:
      "EIZO es un fabricante japonés especializado casi exclusivamente en monitores profesionales de precisión de color, no en pantallas de consumo o gaming. Su línea ColorEdge usa paneles IPS combinados con un sensor de calibración por hardware integrado, y su línea RadiForce está diseñada específicamente para imagenología médica (radiología) con requisitos de escala de grises y uniformidad de luminancia muy por encima de los monitores típicos de oficina o gaming. EIZO no fabrica sus propios paneles, sino que los adquiere y añade hardware y firmware de calibración propios.",
    commonIssues:
      "Como el mercado objetivo de EIZO es el trabajo profesional y médico de precisión de color, los propios procesos de control de calidad y calibración de la empresa suelen ser más rigurosos que las normas de los monitores de consumo, y la documentación propia de EIZO es una mejor fuente de especificaciones de uniformidad del panel que los reportes generales de foros. Lo principal a revisar en cualquier monitor EIZO es lo mismo que en cualquier panel IPS: un ligero resplandor cerca de las esquinas en una habitación oscura es un comportamiento IPS normal y distinto de un píxel muerto o atascado.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: '¿El sensor de calibración integrado de EIZO previene los píxeles muertos?',
        a: "No. El sensor integrado en los monitores ColorEdge recalibra la salida de color y brillo con el tiempo para contrarrestar la deriva natural del panel: no tiene capacidad para detectar ni prevenir fallos de hardware de píxeles individuales como píxeles muertos o atascados, que son defectos físicos en los transistores del panel, no cuestiones de calibración.",
      },
      {
        q: '¿Por qué EIZO se centra en paneles IPS en lugar de OLED para el trabajo profesional?',
        a: "Los paneles IPS no conllevan el riesgo de quemado por imagen estática que sí tiene el OLED, algo relevante para el software profesional con barras de herramientas y paletas fijas mostradas durante largos periodos. El IPS también tiene un largo historial de comportamiento de color estable y predecible a lo largo de años de uso, algo que los clientes profesionales y médicos de EIZO priorizan sobre los niveles de negro más profundos del OLED.",
      },
      {
        q: '¿Un monitor médico RadiForce se prueba igual que un monitor ColorEdge?',
        a: "La prueba básica de ciclos de color para píxeles muertos funciona igual en ambos, pero los monitores RadiForce suelen centrarse en escala de grises para trabajo de radiología, así que probar con un gradiente completo de escala de grises además del conjunto de colores estándar es más relevante para detectar sutiles problemas de uniformidad de luminancia específicos de ese uso.",
      },
    ],
  },
  hp: {
    panelTech:
      "La gama de monitores HP se divide en tres grupos generales: su serie E y monitores empresariales usan paneles IPS estándar orientados al uso de oficina, su línea gaming OMEN usa paneles IPS o VA según el modelo con algunas opciones Fast IPS de mayor refresco, y su línea DreamColor (usada en cine, animación y producción de retransmisión) usa paneles IPS calibrados profesionalmente con validación de precisión de color ampliada más allá de la gama de consumo general de HP.",
    commonIssues:
      "En los monitores IPS de la serie E y OMEN de HP, aplican las características IPS estándar: un ligero resplandor cerca de las esquinas visible en pantalla oscura en una habitación tenue es una característica del panel, no un defecto. En los modelos OMEN basados en VA de HP, aplica la típica contrapartida de VA: mayor contraste nativo pero más posibilidad de arrastre en escenas oscuras durante movimiento rápido.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: '¿Qué es HP DreamColor y en qué se diferencia de los monitores normales de HP?',
        a: 'DreamColor es la línea profesional de precisión de color de HP, calibrada de fábrica y validada para uso en cine, animación y corrección de color de retransmisión: es una línea de producto distinta de los monitores generales de oficina (serie E) y gaming (OMEN) de HP, con tolerancias de precisión de color más estrictas y, por lo general, un precio más alto.',
      },
      {
        q: '¿HP OMEN usa los mismos paneles que los monitores de oficina de HP?',
        a: 'No. OMEN es la línea gaming de HP y prioriza la tasa de refresco y el tiempo de respuesta, usando paneles IPS o VA seleccionados por rendimiento en juegos, mientras que los monitores de oficina de la serie E de HP priorizan funciones de productividad (como soportes ajustables y múltiples puertos) con paneles generalmente no ajustados para altas tasas de refresco.',
      },
      {
        q: '¿Un píxel muerto en un monitor HP se cubre de forma distinta que en la pantalla de un portátil empresarial?',
        a: "HP establece condiciones de garantía distintas para sus monitores independientes frente a sus pantallas de portátil, y la política de defectos de píxeles puede diferir entre ellos y entre líneas de producto de monitores. Consulte la documentación de garantía específica de su modelo de monitor en lugar de asumir que las mismas condiciones aplican a toda la gama de productos de HP.",
      },
    ],
  },
  iiyama: {
    panelTech:
      'IIYAMA (una marca de origen japonés con fuerte presencia en el mercado europeo) vende una amplia gama bajo sus líneas ProLite (general/profesional) y G-Master (gaming), usando paneles TN, VA e IPS según el modelo y el rango de precio específicos, obtenidos de fabricantes externos de paneles en lugar de producidos internamente.',
    commonIssues:
      "Como la gama de IIYAMA abarca desde paneles TN económicos hasta modelos IPS de gama alta, las características que conviene revisar varían significativamente según el modelo: los paneles TN (comunes en los monitores más asequibles de IIYAMA) muestran el cambio de color y contraste más pronunciado en ángulos de visión descentrados de cualquier tipo de panel, una característica normal del TN, no un defecto, mientras que los modelos IPS de IIYAMA muestran el resplandor leve típico en las esquinas en habitaciones oscuras.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: '¿Cómo sé si mi monitor IIYAMA es TN, VA o IPS?',
        a: "IIYAMA indica el tipo de panel en la ficha técnica oficial de cada modelo en iiyama.com, normalmente bajo 'Tipo de panel' en las especificaciones de pantalla. Esto importa para la prueba porque los paneles TN muestran mucho más cambio de color en ángulo que IPS o VA, algo normal en TN y que no debe confundirse con un defecto.",
      },
      {
        q: '¿La política de píxeles muertos de IIYAMA es la misma en sus líneas ProLite y G-Master?',
        a: "IIYAMA establece las condiciones de garantía por producto y región en lugar de una política única para toda la empresa, y las condiciones pueden diferir entre la línea general ProLite y la línea gaming G-Master. Consulte la documentación o la página de soporte regional de su modelo específico.",
      },
      {
        q: '¿Un panel TN hace más difícil detectar píxeles muertos?',
        a: "No particularmente: un píxel muerto o atascado sigue apareciendo como un punto de color fijo sin importar el tipo de panel. Lo que los paneles TN dificultan es juzgar la precisión y uniformidad de color en general, ya que el color de toda la pantalla cambia más con el ángulo de visión que en IPS o VA, así que probar mirando de frente en lugar de desde un ángulo da una lectura más fiable.",
      },
    ],
  },
  lenovo: {
    panelTech:
      "La línea ThinkVision de Lenovo (su línea principal de monitores, que extiende la identidad de marca ThinkPad) usa paneles IPS casi exclusivamente, orientada al uso de oficina y empresarial con énfasis en el acoplamiento USB-C y configuraciones multimonitor. La submarca gaming Legion de Lenovo usa paneles IPS y VA según el modelo, posicionada para complementar los portátiles y equipos de escritorio gaming Legion de Lenovo.",
    commonIssues:
      "En la línea ThinkVision de Lenovo, dominada por IPS, aplican las características IPS estándar: un ligero resplandor cerca de las esquinas de la pantalla sobre un fondo oscuro en una habitación tenue es un rasgo normal del panel, no un defecto. En los modelos gaming Legion con paneles VA, aplica la típica contrapartida de VA de mayor contraste frente a más posible arrastre en escenas oscuras.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: '¿El acoplamiento USB-C de ThinkVision afecta la calidad de imagen o el comportamiento de los píxeles?',
        a: "No. El acoplamiento USB-C (suministro de energía, datos y vídeo por un solo cable) es una función de conectividad y no tiene efecto en la reproducción de color del panel ni en si los píxeles individuales están muertos o atascados: eso lo determina por completo el hardware físico del panel.",
      },
      {
        q: '¿Lenovo Legion tiene la misma calidad de panel que ThinkVision?',
        a: "Sirven propósitos distintos: ThinkVision prioriza paneles IPS ajustados para precisión de color y ángulos de visión de oficina/productividad, mientras que Legion prioriza el rendimiento en juegos (tasa de refresco, tiempo de respuesta) y usa paneles IPS o VA seleccionados para ese fin. Ninguno es estrictamente 'de mayor calidad': están optimizados de forma diferente.",
      },
      {
        q: '¿Cuál es la forma más rápida de probar un monitor Lenovo ThinkVision en un puesto con varios monitores?',
        a: 'Ejecute la prueba de pantalla completa en un monitor a la vez en lugar de intentar juzgar el color en un escritorio extendido con varios monitores a la vez: el modo de pantalla completa del navegador apunta a una sola pantalla, así que probar cada monitor ThinkVision individualmente da una lectura más clara que compararlos uno junto al otro durante la prueba.',
      },
    ],
  },
  nec: {
    panelTech:
      "NEC (cuyo negocio de pantallas opera ahora como Sharp/NEC Display Solutions en algunas regiones) se centra en monitores profesionales y especializados en lugar de pantallas de consumo o gaming, con su línea MultiSync cubriendo uso empresarial y de señalización pública y su línea SpectraView orientada al trabajo creativo y de imprenta de precisión de color, en una posición de mercado similar a EIZO. Los monitores profesionales de NEC usan paneles IPS con hardware de calibración interno en los modelos SpectraView de gama alta.",
    commonIssues:
      "Como el mercado objetivo de NEC es el uso profesional y de señalización en lugar del gaming de consumo, sus monitores suelen someterse a estándares de control de calidad de fábrica más estrictos en cuanto a uniformidad de color que las pantallas de consumo económicas, aunque esto no elimina la posibilidad normal de una unidad individual defectuosa. La principal característica del panel IPS a distinguir de un defecto es el habitual resplandor leve cerca de las esquinas visible en una pantalla oscura en una habitación tenue.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: '¿NEC SpectraView es similar a EIZO ColorEdge?',
        a: 'Sí, ocupan una posición de mercado similar: ambas son líneas de monitores IPS profesionales calibrados de fábrica orientadas al trabajo de precisión de color en foto, vídeo e imprenta, ambas usaron hardware de calibración interno en modelos de gama alta, y ambas se posicionan por encima de las líneas de monitores de consumo general en especificaciones de precisión de color.',
      },
      {
        q: '¿NEC vende monitores gaming?',
        a: "La gama de monitores de NEC se centra en el trabajo empresarial, de señalización y profesional de precisión de color en lugar del gaming: no compite en el segmento de monitores gaming de alta tasa de refresco como lo hacen marcas como ASUS, MSI o Acer, así que en general no encontrará monitores NEC promocionados por tasa de refresco o tiempo de respuesta.",
      },
      {
        q: '¿Dónde encuentro la política específica de píxeles muertos de NEC para mi modelo?',
        a: "NEC/Sharp NEC Display Solutions publica las condiciones de garantía por línea de producto y región en su sitio de soporte oficial en lugar de una política universal única: consulte la documentación de su modelo específico MultiSync o SpectraView en lugar de asumir un umbral fijo.",
      },
    ],
  },
  viewsonic: {
    panelTech:
      'ViewSonic vende una amplia gama que va desde monitores de oficina económicos hasta su línea ColorPro, que usa paneles IPS con calibración de fábrica orientada a profesionales de foto y vídeo, posicionada de forma similar a las líneas SW/PD de BenQ. ViewSonic también tiene una larga historia en proyectores y pantallas para el mercado educativo, una diferencia notable frente a marcas centradas puramente en monitores.',
    commonIssues:
      "En los modelos ColorPro y otros basados en IPS de ViewSonic, aplican las características IPS estándar: un ligero resplandor cerca de las esquinas visible en pantalla oscura en una habitación tenue es normal para ese tipo de panel, no un defecto. En los modelos de oficina económicos y basados en VA de ViewSonic, aplica la típica contrapartida de VA de mayor contraste frente a posible arrastre en escenas oscuras.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: '¿Qué es ViewSonic ColorPro y en qué se diferencia de los monitores estándar de ViewSonic?',
        a: "ColorPro es la línea profesional calibrada de fábrica de ViewSonic orientada al trabajo de precisión de color en foto y vídeo, posicionada de forma similar a la serie SW/PD de BenQ o ASUS ProArt: conlleva una validación de precisión de color más estricta que los monitores generales de oficina o económicos de ViewSonic.",
      },
      {
        q: '¿El pasado de ViewSonic en proyectores afecta la calidad de sus monitores?',
        a: "No directamente: monitores y proyectores usan tecnologías de pantalla distintas (paneles LCD de visión directa frente a luz proyectada), así que la larga historia de ViewSonic en proyectores no se traduce en una ventaja específica de panel de monitor. Sus paneles de monitor se obtienen y evalúan por separado de su negocio de proyectores.",
      },
      {
        q: '¿La política de píxeles muertos de un monitor ViewSonic aparece en la caja o solo en línea?',
        a: "Los detalles de la política de garantía y defectos de píxeles se encuentran de forma más fiable en el sitio de soporte oficial de ViewSonic para su modelo y región específicos que impresos en el embalaje minorista, ya que las políticas pueden actualizarse después de que un producto sale al mercado. Consulte la sección de soporte de viewsonic.com para el número de su modelo.",
      },
    ],
  },

  // ---------------------------------------------------------------------
  // Sublíneas de marca
  // ---------------------------------------------------------------------
  rog_asus: {
    panelTech:
      "ASUS ROG Swift, el nivel insignia de la línea gaming ROG, usa paneles Fast IPS en la mayor parte de su gama para combinar alta tasa de refresco con una precisión de color razonable, con un pequeño número de modelos de gama alta (como el PG27AQDM) que usan paneles QD-OLED en su lugar. Los monitores ROG Swift suelen posicionarse por encima de la línea ASUS TUF Gaming tanto en precio como en calidad de panel.",
    commonIssues:
      'En los modelos Fast IPS de ROG Swift, aplica la característica IPS habitual de ligero resplandor cerca de las esquinas en pantalla oscura en una habitación tenue. En los modelos QD-OLED de ROG Swift, la consideración relevante pasa al comportamiento específico de OLED: una prueba de color única puede detectar un píxel muerto o atascado actual, pero no el riesgo de quemado a largo plazo por elementos estáticos en pantalla como HUDs o miras.',
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: '¿ROG Swift siempre es OLED, o también usa IPS?',
        a: "La mayoría de los monitores ROG Swift usan paneles Fast IPS; solo un pequeño número de modelos insignia (como el PG27AQDM) usan QD-OLED. Verifique el número de modelo específico frente a la ficha técnica de ASUS en asus.com/rog para confirmar qué tipo de panel usa su unidad antes de probar.",
      },
      {
        q: '¿El hardware del módulo G-Sync afecta la prueba de píxeles muertos en monitores ROG Swift?',
        a: 'No. Algunos modelos ROG Swift incluyen un módulo de hardware NVIDIA G-Sync dedicado para tasa de refresco variable: esto controla el ritmo de fotogramas y no tiene efecto en el comportamiento de píxeles individuales ni en cómo aparece un píxel muerto/atascado durante una prueba de ciclos de color.',
      },
      {
        q: '¿Los monitores ROG Swift se someten a un estándar de píxeles muertos más estricto que TUF Gaming?',
        a: "ASUS establece la política de defectos de píxeles por línea de producto, y las líneas premium a veces se cubren con condiciones distintas a las líneas económicas, pero esto no está garantizado para toda comparación entre ROG y TUF: consulte la documentación de garantía específica de su modelo en lugar de asumir que aplica un estándar más estricto solo por ser la línea insignia.",
      },
    ],
  },
  acer_nitro: {
    panelTech:
      "Acer Nitro es la línea gaming económica a media de Acer, con paneles VA en la mayoría de los modelos curvos y paneles IPS de gama inicial en los modelos planos, priorizando un precio accesible sobre las tasas de refresco más altas o la tecnología de panel premium (Mini-LED, OLED) reservada para la línea de gama alta Predator de Acer.",
    commonIssues:
      "Como los modelos curvos de Nitro se apoyan en paneles VA, aplica la contrapartida VA estándar: mayor contraste nativo pero más posibilidad de arrastre visible durante movimiento rápido en escenas oscuras, y un cambio de color/contraste más pronunciado en ángulos de visión cerrados que en IPS. Estas son características del panel, no defectos, pero conviene distinguirlas de un píxel muerto o atascado real durante la prueba.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: '¿Acer Nitro es la versión económica de Predator?',
        a: 'Sí, en posicionamiento general: Nitro apunta a un precio más accesible con paneles VA o IPS de gama inicial, mientras que Predator abarca una gama más amplia hasta modelos premium Mini-LED y OLED. Ambas son líneas gaming de Acer, pero Nitro suele situarse por debajo de Predator en precio y tecnología de panel.',
      },
      {
        q: '¿Por qué mi monitor curvo Acer Nitro muestra brillo distinto en los bordes?',
        a: "Una ligera variación de brillo en un panel VA curvo, especialmente cerca de los bordes, es una característica común de la fabricación de paneles curvos y no necesariamente un defecto: conviene comprobarlo con una prueba de pantalla completa blanca o gris sólida, pero un cambio gradual a lo largo de la curva es distinto de un único píxel muerto o atascado fijo.",
      },
      {
        q: '¿Acer Nitro tiene una garantía más corta que los monitores Predator?',
        a: "La duración y condiciones de la garantía las establece Acer por producto y región, y pueden diferir entre Nitro y Predator, pero conviene verificarlo con la documentación de soporte regional actual de Acer para su modelo específico en lugar de asumir una relación fija entre ambas líneas.",
      },
    ],
  },
  dell_ips: {
    panelTech:
      "Los monitores de la serie P de Dell (los monitores 'Dell IPS' más comunes en oficinas) usan paneles IPS estándar orientados al uso productivo, sin la validación de calibración de color ampliada que Dell reserva para su línea de gama alta UltraSharp serie U. Suelen posicionarse como pantallas empresariales fiables y sin lujos, no como monitores de precisión de color o gaming.",
    commonIssues:
      "En los monitores IPS de la serie P de Dell, aplica la característica IPS estándar: un ligero resplandor cerca de las esquinas visible en pantalla oscura en una habitación tenue es normal para ese tipo de panel. Como suelen posicionarse como monitores de oficina básicos en lugar de modelos premium, las tolerancias de precisión de color suelen ser más amplias que en la línea UltraSharp de Dell, aunque esto afecta la consistencia del color más que la probabilidad de defectos de píxeles específicamente.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: '¿La serie P de Dell tiene la misma calidad de panel que UltraSharp?',
        a: "No. Los monitores serie P usan paneles IPS estándar orientados a la productividad de oficina general, mientras que los monitores UltraSharp (serie U) usan paneles IPS o IPS Black con calibración de color de fábrica más estricta orientada al trabajo creativo y profesional. La serie P es el nivel IPS más básico y económico de Dell.",
      },
      {
        q: '¿Los monitores Dell serie P vienen con un informe de precisión de color como UltraSharp?',
        a: 'Generalmente no: los informes de precisión de color por unidad son una característica que Dell promociona específicamente en algunos modelos UltraSharp, no algo que suela incluirse con la línea serie P más básica. Consulte la documentación incluida de su modelo específico para confirmarlo.',
      },
      {
        q: '¿Qué debo revisar en un monitor de oficina Dell IPS además de los píxeles muertos?',
        a: "Más allá de los píxeles muertos/atascados, conviene revisar el brillo irregular de la retroiluminación en una pantalla completa gris o blanca sólida y cualquier nublado visible en las esquinas en pantalla negra en una habitación tenue: ambos son independientes de los defectos individuales de píxeles pero afectan la uniformidad general de la imagen.",
      },
    ],
  },
  lg_ultrawide: {
    panelTech:
      "Los monitores ultrawide de LG (21:9 y más anchos) están construidos casi por completo sobre paneles IPS, basándose en la propia fabricación de LG Display, y abarcan tanto modelos orientados a la productividad (como las líneas UltraWide y UltraFine) como modelos ultrawide orientados al gaming dentro de la gama UltraGear que usan Nano IPS para tiempos de respuesta más rápidos.",
    commonIssues:
      "Los paneles ultrawide son físicamente más anchos que los monitores estándar 16:9, lo que significa que hay más superficie de panel donde puede variar la tolerancia de fabricación: conviene revisar el brillo y la uniformidad de color en toda la anchura con una pantalla completa gris o blanca sólida, no solo en el centro, además de comprobar píxeles muertos o atascados individuales.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: '¿Es más probable encontrar defectos en un monitor ultrawide por ser más grande?',
        a: "No necesariamente más píxeles muertos específicamente, pero la mayor superficie física del panel sí significa que hay más superficie donde el brillo o la uniformidad de color pueden variar, algo independiente de los defectos individuales de píxeles. Probar toda la anchura con un color sólido, no solo el centro, vale la pena en cualquier ultrawide.",
      },
      {
        q: '¿La línea gaming ultrawide de LG usa paneles distintos a sus ultrawide de productividad?',
        a: "Los modelos gaming ultrawide UltraGear de LG suelen usar Nano IPS para tiempos de respuesta más rápidos, mientras que las líneas ultrawide no gaming y UltraFine de LG usan IPS estándar ajustado más hacia la precisión de color y la productividad que hacia la tasa de refresco: consulte la ficha técnica de su modelo específico para confirmarlo.",
      },
      {
        q: '¿Cómo ejecuto una prueba de píxeles muertos en pantalla completa en una relación de aspecto ultrawide?',
        a: "La prueba de pantalla completa del navegador llena automáticamente la relación de aspecto que use su pantalla y ventana del navegador, incluidas las pantallas ultrawide de 21:9 o más anchas: solo asegúrese de que la ventana del navegador esté en la pantalla ultrawide (no en un monitor secundario estándar) antes de iniciar la prueba.",
      },
    ],
  },
  samsung_curved: {
    panelTech:
      "Los monitores gaming curvos de Samsung (la línea Odyssey, incluidos los modelos con curvatura 1000R) están construidos sobre paneles VA fabricados por la propia división de pantallas de Samsung, elegidos por la mayor relación de contraste nativo de VA, que Samsung promociona como complemento del efecto inmersivo de la curvatura.",
    commonIssues:
      "Los paneles VA curvos combinan dos características independientes que conviene distinguir de un píxel muerto o atascado durante la prueba: la posible tendencia VA al arrastre en escenas oscuras y el cambio de color por ángulo de visión, además de que la propia curvatura puede hacer que el brillo o el color se vean ligeramente distintos en los bordes frente al centro de la pantalla al verse fuera del eje, simplemente por la geometría física de la curva.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: '¿La curvatura en un monitor Samsung Odyssey dificulta detectar píxeles muertos?',
        a: "No fundamentalmente: un píxel muerto o atascado sigue siendo un único punto de color fijo sin importar la curvatura de la pantalla. Lo que sí afecta la curvatura es cómo se ve de uniforme el brillo y el color en los bordes frente al centro al verse fuera de centro, un efecto distinto y gradual, no un defecto agudo de un solo píxel.",
      },
      {
        q: '¿Qué significa 1000R y afecta a la tecnología del panel?',
        a: "1000R describe el radio de curvatura (un círculo de 1000 mm de radio, que coincide aproximadamente con la visión periférica natural humana): es una especificación física de curvatura, no una tecnología de panel. El panel subyacente sigue siendo VA en la línea Odyssey de Samsung; el número de curvatura no cambia cómo funciona la prueba de píxeles muertos.",
      },
      {
        q: '¿Debo probar un monitor curvo Samsung sentado a la distancia de visión normal?',
        a: "Sí: los monitores curvos están diseñados para verse a una distancia específica donde la curva coincide con el arco natural de su ojo, y probar desde demasiado lejos o en ángulo puede hacer que la variación de brillo normal relacionada con la curva parezca más pronunciada de lo que sería en la posición de visión prevista.",
      },
    ],
  },
  asus_tuf: {
    panelTech:
      "ASUS TUF Gaming se sitúa por debajo de ROG Swift en la gama gaming de ASUS, con paneles VA e IPS estándar en lugar de los paneles Fast IPS o QD-OLED de los modelos insignia ROG, orientado a un precio competitivo en lugar de tecnología de panel de primer nivel. ASUS promociona la línea TUF en torno a pruebas de durabilidad de componentes, aunque eso es una afirmación de calidad de construcción independiente de la tecnología del panel en sí.",
    commonIssues:
      "En los modelos VA de TUF Gaming, aplica la contrapartida VA estándar: mayor contraste nativo frente a más posibilidad de arrastre en escenas oscuras y cambio de color por ángulo de visión. En los modelos TUF basados en IPS, el resplandor leve habitual en las esquinas en pantalla oscura en una habitación tenue es la característica IPS relevante a distinguir de un defecto real.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: '¿ASUS TUF Gaming es la versión económica de ROG?',
        a: "Sí, en general: TUF Gaming apunta a un precio más bajo que ROG Swift, con paneles VA o IPS estándar en lugar de las opciones Fast IPS o QD-OLED de ROG. Ambas son líneas gaming de ASUS, pero TUF se sitúa por debajo de ROG en precio y nivel de panel.",
      },
      {
        q: '¿Las pruebas de durabilidad de ASUS para los monitores TUF reducen el riesgo de píxeles muertos?',
        a: "ASUS promociona los productos TUF Gaming en torno a pruebas de durabilidad de componentes y construcción (cosas como la durabilidad de condensadores y el soporte), lo cual es una afirmación independiente de la fabricación a nivel de panel, y las pruebas de durabilidad no se dirigen específicamente a eliminar el riesgo de defectos individuales de píxeles, que proviene de la fabricación del panel, no del hardware circundante.",
      },
      {
        q: '¿Qué tipo de panel usa mi modelo TUF Gaming específico?',
        a: "TUF Gaming abarca tanto paneles VA como IPS según el modelo específico: consulte el campo 'Tipo de panel' en la ficha técnica oficial de ASUS de su modelo en asus.com/tuf-gaming para confirmar cuál tiene antes de juzgar qué comportamiento de ángulo de visión o contraste es normal.",
      },
    ],
  },
  lg_gaming: {
    panelTech:
      "La línea gaming UltraGear de LG abarca paneles Nano IPS (la mayoría de la gama, elegidos por tiempos de respuesta rápidos con mejor precisión de color que los paneles gaming TN o VA típicos) y un número menor de modelos OLED UltraGear en la gama alta, basándose en la propia fabricación de paneles de LG Display.",
    commonIssues:
      "En los modelos Nano IPS UltraGear, aplica la característica IPS habitual de ligero resplandor cerca de las esquinas en pantalla oscura en una habitación tenue. En los modelos OLED UltraGear, la consideración relevante es distinta: una prueba de ciclos de color puede confirmar si un píxel está muerto o atascado ahora mismo, pero no puede predecir el riesgo de quemado por visualización prolongada de imágenes estáticas como los HUD de juegos.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: '¿LG UltraGear es lo mismo que la línea de monitores regular de LG?',
        a: "No. UltraGear es la submarca gaming dedicada de LG, con paneles Nano IPS u OLED seleccionados por alta tasa de refresco y tiempo de respuesta rápido, mientras que la gama general de monitores de LG (UltraWide, UltraFine, modelos IPS estándar) prioriza la productividad o la precisión de color sobre el rendimiento específico para gaming.",
      },
      {
        q: '¿Nano IPS cambia cómo se ven los píxeles muertos comparado con el IPS estándar?',
        a: "No. Nano IPS es una mejora de la gama de color (una capa de nanopartículas que filtra longitudes de onda de luz) en lugar de un cambio en la estructura de píxeles subyacente: los píxeles muertos y atascados aparecen igual en Nano IPS que en cualquier otra variante de IPS: un punto de color fijo que no cambia con el fondo.",
      },
      {
        q: '¿Debo probar un monitor OLED UltraGear de forma distinta a uno Nano IPS?',
        a: 'Use el mismo proceso de ciclos de color, pero dirija su atención más hacia colores saturados (rojo, verde, azul) que hacia pantallas negras en el modelo OLED, ya que el OLED reproduce el negro apagando los píxeles por completo, lo que puede enmascarar un píxel atascado apagado que sería obvio contra un color brillante.',
      },
    ],
  },
  dell_gaming: {
    panelTech:
      "Los esfuerzos gaming de Dell se canalizan en gran parte a través de la submarca Alienware (vendida bajo el paraguas corporativo de Dell), que usa paneles IPS y QD-OLED según el modelo: Dell no mantiene una línea gaming grande separada fuera de Alienware como sí hacen algunos competidores.",
    commonIssues:
      'En los modelos gaming IPS de Alienware, aplica la característica IPS estándar de ligero resplandor en las esquinas en pantalla oscura en una habitación tenue. En los modelos QD-OLED de Alienware (como el AW3423DW), la consideración relevante pasa al comportamiento específico de OLED: una prueba de color revela píxeles muertos o atascados actuales pero no el riesgo futuro de quemado por contenido estático.',
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: '¿Dell vende monitores gaming fuera de la marca Alienware?',
        a: "Los monitores orientados al gaming de Dell se venden principalmente bajo el nombre Alienware en lugar de directamente bajo la marca Dell, aunque Alienware opera dentro de la estructura corporativa de Dell. Si busca un 'monitor gaming Dell', lo más probable es que sea un modelo de marca Alienware.",
      },
      {
        q: '¿La garantía es distinta para los monitores Alienware frente a Dell UltraSharp?',
        a: "Dell establece la política de defectos de píxeles y garantía por línea de producto, y las condiciones de Alienware no están garantizadas para coincidir con las de UltraSharp: consulte la documentación de garantía específica de su modelo Alienware en lugar de asumir que coincide con la línea profesional de monitores de Dell.",
      },
      {
        q: '¿Qué debo revisar primero en un monitor Alienware QD-OLED nuevo?',
        a: 'Ejecute la prueba de ciclos de color en pantalla completa en todos los colores, prestando especial atención al rojo, verde y azul en lugar de al negro, ya que los paneles OLED reproducen el negro apagando los píxeles: un píxel atascado apagado se confunde con el contenido negro y destaca mucho más claramente contra un color saturado.',
      },
    ],
  },
  benq_gaming: {
    panelTech:
      "Los monitores gaming de BenQ se dividen entre la línea Mobiuz (gaming de consumo, paneles IPS o VA que equilibran precisión de color y tasa de refresco) y la línea Zowie (orientada a esports, generalmente paneles TN o IPS mate ajustados para latencia de entrada mínima y claridad de movimiento consistente por encima de la vivacidad de color, popular entre jugadores competitivos de FPS).",
    commonIssues:
      "En los modelos IPS de Mobiuz, aplica el resplandor IPS estándar cerca de las esquinas en una habitación oscura. En los modelos basados en TN de Zowie, espere un cambio de color y contraste más pronunciado en ángulos de visión descentrados que en IPS o VA: una característica normal del TN, no un defecto, aunque conviene probar mirando de frente para una lectura más fiable de los defectos de píxeles reales.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: '¿Cuál es la diferencia entre BenQ Mobiuz y BenQ Zowie?',
        a: "Mobiuz es la línea gaming de consumo de BenQ que equilibra precisión de color con rendimiento en juegos, mientras que Zowie es la línea orientada a esports de BenQ que prioriza la latencia de entrada mínima y la claridad de movimiento (a menudo con paneles TN mate) para jugadores competitivos, generalmente a costa de la vivacidad de color y los ángulos de visión comparado con Mobiuz.",
      },
      {
        q: '¿Por qué el color se ve distinto en ángulo en mi monitor BenQ Zowie?',
        a: "Si su modelo Zowie usa un panel TN, un cambio de color y contraste más pronunciado en ángulos de visión descentrados es una característica normal de la tecnología TN, elegida por Zowie específicamente por su baja latencia de entrada en lugar de la precisión de color: no es un defecto, pero sí significa que probar mirando directamente a la pantalla da una lectura más fiable.",
      },
      {
        q: '¿La tecnología de cuidado visual de BenQ en los monitores Mobiuz afecta la prueba de píxeles?',
        a: "No. Las funciones Eye-Care de BenQ (retroiluminación sin parpadeo, modos de baja luz azul) ajustan cómo se controla la retroiluminación y la temperatura de color: no afectan el hardware de píxeles individuales, así que un píxel muerto o atascado aparecerá igual sin importar si estos modos están activados.",
      },
    ],
  },
  msi_curved: {
    panelTech:
      "Los monitores gaming curvos de MSI (principalmente en las series MAG y MPG) están construidos sobre paneles VA, elegidos por el mayor contraste nativo que ofrece VA, que MSI posiciona como complemento del efecto inmersivo del formato curvo: un razonamiento similar al de otras marcas de monitores gaming curvos como la línea Odyssey de Samsung.",
    commonIssues:
      "La contrapartida VA estándar aplica en los modelos curvos de MSI: mayor contraste nativo frente a más posibilidad de arrastre en escenas oscuras durante movimiento rápido y un cambio de color/contraste más pronunciado en ángulos de visión cerrados. La propia curvatura también puede hacer que el brillo se vea ligeramente irregular en los bordes frente al centro al verse fuera del eje, algo independiente de un píxel muerto o atascado real.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: '¿Por qué los monitores gaming curvos como los de MSI suelen usar VA en lugar de IPS?',
        a: "Los paneles VA ofrecen relaciones de contraste nativo más profundas que IPS, algo que fabricantes incluido MSI promocionan como buen complemento del efecto inmersivo de una pantalla curva. Los paneles IPS técnicamente se pueden curvar, pero son menos comunes en monitores gaming curvos en toda la industria, en parte por costo y en parte por esta preferencia de contraste.",
      },
      {
        q: '¿El radio de curvatura de MSI afecta dónde debo buscar píxeles muertos?',
        a: "No específicamente: los píxeles muertos y atascados pueden ocurrir en cualquier parte del panel sin importar el radio de curvatura. Vale la pena revisar deliberadamente los bordes exteriores de una pantalla curva además del centro, simplemente porque es más fácil pasar por alto los bordes en una pantalla curva ancha que en una plana.",
      },
      {
        q: '¿La iluminación RGB Mystic Light de MSI forma parte del panel de pantalla?',
        a: "No. Mystic Light es iluminación del chasis y el soporte, independiente del panel de pantalla en sí: no tiene efecto en la reproducción de píxeles ni en cómo aparecería un píxel muerto/atascado durante una prueba de ciclos de color.",
      },
    ],
  },
  corsair_gaming: {
    panelTech:
      "Los monitores gaming XENEON de Corsair usan paneles IPS en la mayor parte de la gama, siendo el XENEON Flex una notable excepción QD-OLED flexible, generalmente orientados al gaming de alto refresco con énfasis en la integración con el ecosistema más amplio iCUE de periféricos y componentes de PC de Corsair.",
    commonIssues:
      "En los modelos IPS de XENEON, aplica el resplandor IPS estándar cerca de las esquinas en pantalla oscura en una habitación tenue. En el QD-OLED XENEON Flex, la consideración relevante pasa al comportamiento específico de OLED: probar con colores saturados es más revelador que probar con negro, ya que el OLED reproduce el negro apagando los píxeles por completo.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: '¿Qué panel usa el Corsair XENEON Flex?',
        a: 'El XENEON Flex usa un panel QD-OLED flexible, notable por ser ajustable a mano entre un formato plano y curvo: es una tecnología de panel distinta de los paneles IPS estándar usados en la mayor parte del resto de la gama XENEON de Corsair.',
      },
      {
        q: '¿Doblar el XENEON Flex aumenta el riesgo de píxeles muertos?',
        a: 'Corsair diseñó el mecanismo de flexión del Flex para operar dentro de la tolerancia de flexión especificada del panel, pero como con cualquier componente mecánico móvil, vale la pena seguir las indicaciones del fabricante sobre cuánto y con qué frecuencia doblarlo: consulte la documentación oficial de Corsair sobre los límites específicos de flexión del panel en lugar de asumirlo.',
      },
      {
        q: '¿La garantía del monitor Corsair está vinculada al registro del software iCUE?',
        a: "La cobertura de garantía de hardware estándar generalmente es independiente de si ha instalado o se ha registrado con el software iCUE: consulte su documentación de compra específica y el sitio de soporte de Corsair para confirmar las condiciones de garantía de su modelo y región.",
      },
    ],
  },
  asus_4k: {
    panelTech:
      "La línea profesional 4K de ASUS, ProArt, usa paneles IPS con calibración de color de fábrica verificada por Calman, orientada a profesionales de foto y vídeo, generalmente validada para tolerancias de precisión de color más estrictas (a menudo promocionadas en torno a Delta E < 2) que los monitores 4K de consumo o gaming general de ASUS.",
    commonIssues:
      "En los paneles IPS de ProArt, aplica la característica IPS estándar de ligero resplandor cerca de las esquinas en pantalla oscura en una habitación tenue. En resolución 4K específicamente, los píxeles individuales son físicamente más pequeños que en un panel 1080p o 1440p del mismo tamaño, lo que puede hacer que un solo píxel muerto o atascado sea algo más difícil de detectar a simple vista y merezca un escaneo más cercano y deliberado.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: '¿La resolución 4K dificulta encontrar píxeles muertos?',
        a: "Un solo píxel muerto o atascado es físicamente más pequeño en un panel 4K que en un panel de menor resolución del mismo tamaño de pantalla, ya que hay más píxeles comprimidos en el mismo espacio. Sigue siendo visible de cerca, pero un escaneo más lento y deliberado en la prueba de color de pantalla completa vale la pena en monitores 4K comparado con los de menor resolución.",
      },
      {
        q: '¿La calibración ASUS ProArt se realiza en cada unidad o solo para la línea de producto en general?',
        a: "Consulte la documentación de su modelo ProArt específico: algunos monitores ProArt incluyen un informe de calibración de fábrica por unidad, mientras que en otros la afirmación de verificación Calman se refiere a la validación de diseño de la línea de producto en lugar de a cada unidad enviada individualmente. Este detalle varía según el modelo.",
      },
      {
        q: '¿Qué valor de Delta E debería esperar de un monitor ASUS ProArt 4K?',
        a: "ASUS promociona varios modelos ProArt en torno a un objetivo de precisión Delta E < 2, generalmente considerado lo bastante preciso como para que las diferencias de color no sean perceptibles al ojo humano. La cifra exacta y si está garantizada por unidad o como objetivo de diseño varía según el modelo: consulte la ficha técnica de su modelo específico.",
      },
    ],
  },
  lg_4k: {
    panelTech:
      "La oferta 4K de LG se divide entre la línea UltraFine (paneles IPS, conectividad USB-C, históricamente orientada a la compatibilidad con Mac) y los modelos 4K dentro de la gama gaming UltraGear (Nano IPS, mayores tasas de refresco), además de monitores IPS 4K generales fuera de cualquiera de las dos submarcas, todos basados en la propia fabricación de paneles de LG Display.",
    commonIssues:
      "En cualquiera de los modelos IPS 4K de LG, aplica la característica IPS estándar de ligero resplandor en las esquinas en pantalla oscura en una habitación tenue. En resolución 4K, los píxeles individuales son físicamente más pequeños que en un panel de menor resolución del mismo tamaño, lo que puede hacer que un solo píxel muerto o atascado sea algo menos evidente a simple vista y merezca un escaneo más lento y deliberado durante la prueba.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: '¿Cuál es la diferencia entre LG UltraFine y los otros monitores 4K de LG?',
        a: "UltraFine es la línea de LG históricamente orientada a la compatibilidad con Mac y la conectividad USB-C, mientras que LG también vende monitores IPS 4K generales fuera de esa submarca y modelos gaming 4K dentro de UltraGear. Todos usan paneles de la familia IPS, pero el posicionamiento de UltraFine es específicamente productivo/creativo, no gaming.",
      },
      {
        q: '¿Un monitor 4K LG necesita una tarjeta gráfica más potente para probarse correctamente?',
        a: "La prueba de píxeles muertos en sí es solo renderizado de color sólido en pantalla completa, lo cual supone una carga mínima para cualquier hardware gráfico moderno sin importar la resolución: no necesita una GPU potente para ejecutar la prueba en sí, aunque manejar contenido 4K en general para el uso diario sí se beneficia de más rendimiento gráfico.",
      },
      {
        q: '¿Debo probar en resolución nativa 4K o en una resolución escalada?',
        a: "Pruebe en la resolución nativa 4K de su monitor si es posible, ya que ejecutar a una resolución escalada o menor significa que la pantalla está escalando la imagen, lo que puede dificultar juzgar si un defecto está en un píxel físico individual o es un artefacto del escalado.",
      },
    ],
  },
  dell_4k: {
    panelTech:
      "Los monitores profesionales 4K de Dell se concentran en la serie U UltraSharp, con paneles IPS o IPS Black con calibración de color de fábrica orientada al trabajo profesional de foto, vídeo y creativo en general, generalmente el nivel de monitor de Dell más enfocado en la precisión de color.",
    commonIssues:
      "En los paneles IPS de UltraSharp, aplica la característica IPS estándar de ligero resplandor en las esquinas en pantalla oscura en una habitación tenue. En resolución 4K, los píxeles individuales son físicamente más pequeños que en un panel de menor resolución del mismo tamaño, haciendo que un solo píxel muerto o atascado sea algo menos evidente a simple vista: un escaneo más lento y deliberado durante la prueba vale la pena en cualquier monitor 4K.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: '¿Todos los monitores Dell UltraSharp 4K incluyen un informe de calibración de fábrica?',
        a: "No universalmente: los informes de calibración de fábrica son una característica que Dell promociona en modelos UltraSharp específicos, no en toda la serie U. Consulte la página de producto de su modelo específico o la documentación incluida para confirmar si se incluyó un informe de calibración por unidad.",
      },
      {
        q: '¿IPS Black es lo mismo que IPS estándar a efectos de defectos de píxeles?',
        a: "IPS Black es el nombre comercial de Dell para una variante de IPS con relación de contraste nativo mejorada comparada con el IPS estándar: no cambia cómo se detectan los píxeles muertos o atascados, ya que la estructura de píxeles subyacente y el método de prueba son los mismos que en cualquier otro panel IPS.",
      },
      {
        q: '¿A qué resolución debe estar el navegador al probar un monitor Dell 4K?',
        a: "Asegúrese de que la ventana del navegador esté maximizada en la pantalla 4K (no en un monitor secundario) y de que el escalado de pantalla de su sistema operativo no esté haciendo que el navegador renderice a una resolución efectiva reducida: la prueba de pantalla completa funciona mejor cuando realmente llena el panel 4K nativo.",
      },
    ],
  },
  benq_4k: {
    panelTech:
      "Los monitores profesionales 4K de BenQ se dividen entre la serie SW (orientada a fotografía, gama amplia, calibración por hardware validada contra Pantone) y la serie PD (trabajo general de diseño/profesional), ambas con paneles IPS, aunque los modelos SW suelen llevar una validación de precisión de color más estricta orientada específicamente a fotógrafos.",
    commonIssues:
      "En los modelos 4K SW y PD basados en IPS de BenQ, aplica el resplandor IPS estándar cerca de las esquinas en pantalla oscura en una habitación tenue. En resolución 4K, los píxeles individuales son físicamente más pequeños que en paneles de menor resolución del mismo tamaño, lo que puede hacer que un solo píxel muerto o atascado sea menos evidente a simple vista y merezca un escaneo más lento y deliberado.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: '¿Debo comprar BenQ SW o PD para edición fotográfica 4K?',
        a: "BenQ posiciona SW específicamente para fotografía con validación de color más estricta y cobertura de gama más amplia, mientras que PD apunta más ampliamente al diseño general y trabajo profesional: si la fotografía de precisión de color es su uso principal, SW es la opción más especializada de BenQ, pero consulte las especificaciones actuales del modelo ya que la gama cambia con el tiempo.",
      },
      {
        q: '¿La calibración por hardware de BenQ significa que mi monitor 4K no necesita prueba de color?',
        a: "La calibración por hardware aborda la precisión y consistencia general del color, pero es un proceso independiente de comprobar píxeles muertos o atascados, que son defectos individuales de hardware no relacionados con la calibración de color. Sigue valiendo la pena ejecutar una prueba de ciclos de color para píxeles incluso en una unidad calibrada.",
      },
      {
        q: '¿La validación Pantone es lo mismo que un informe de calibración de fábrica?',
        a: "Pantone Validated es una certificación que indica que la pantalla cumple con los estándares de precisión de color de Pantone como línea de producto, una afirmación distinta (aunque relacionada) de un informe de calibración de fábrica por unidad: consulte la documentación de su modelo específico para ver cuál aplica a su unidad.",
      },
    ],
  },
  samsung_4k: {
    panelTech:
      "Los monitores 4K de Samsung se dividen entre modelos orientados al gaming en la serie Odyssey Neo G (con paneles VA retroiluminados Mini-LED) y modelos 4K de propósito general o smart monitor (la serie M), con la tecnología de panel variando más por línea de producto que solo por resolución.",
    commonIssues:
      "En los modelos VA Mini-LED, el blooming (un halo de luz suave alrededor de objetos brillantes sobre un fondo oscuro, por cómo está zonificada la retroiluminación Mini-LED) es la característica relevante a distinguir de un píxel muerto o atascado: el blooming es un efecto de retroiluminación ligado al contenido brillante cercano, mientras que un defecto de píxel es un único punto fijo sin relación con lo que se muestra alrededor. En resolución 4K en general, los píxeles individuales también son físicamente más pequeños, haciendo que un escaneo más lento y deliberado valga la pena.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: '¿Qué es Mini-LED y en qué se diferencia de un píxel muerto?',
        a: "Mini-LED se refiere a la tecnología de retroiluminación (muchas zonas LED pequeñas detrás de un panel VA o IPS, que permiten una atenuación local más precisa), no a los píxeles en sí. Un artefacto Mini-LED llamado 'blooming' (un halo alrededor de objetos brillantes sobre fondos oscuros) es un efecto de retroiluminación, mientras que un píxel muerto o atascado es un único punto de color fijo en la propia capa del panel.",
      },
      {
        q: '¿El smart monitor 4K de la serie M de Samsung se prueba igual que un monitor gaming Odyssey?',
        a: "Sí, el procedimiento de prueba de ciclos de color en pantalla completa es idéntico sin importar si es un modelo Odyssey orientado al gaming o un smart monitor de propósito general de la serie M: lo que difiere es la tecnología de panel detrás (Mini-LED VA frente a VA o IPS estándar), lo que afecta qué otras características (como el blooming) son normales de esperar.",
      },
      {
        q: '¿La serie Odyssey Neo G 4K usa el mismo panel VA que los modelos Odyssey sin Mini-LED?',
        a: "No: la serie Neo G combina la tecnología de panel VA con una retroiluminación Mini-LED para una atenuación local más precisa, mientras que los modelos Odyssey estándar (sin Neo) de Samsung usan paneles VA con retroiluminación convencional. Ambos son VA a nivel de panel, pero los sistemas de retroiluminación difieren significativamente.",
      },
    ],
  },

  // ---------------------------------------------------------------------
  // Páginas de categoría (no vinculadas a una sola marca)
  // ---------------------------------------------------------------------
  portable_monitor: {
    panelTech:
      "Los monitores portátiles, alimentados y controlados mediante un único cable USB-C, están construidos casi exclusivamente sobre paneles IPS con resolución 1080p o 1440p, priorizando una construcción delgada y ligera sobre las tasas de refresco más altas o la tecnología de panel premium (VA, OLED) de los monitores de escritorio, en marcas como ASUS ZenScreen, Lenovo y una amplia gama de fabricantes más pequeños.",
    commonIssues:
      "Como los monitores portátiles son más delgados y están diseñados para transportarse y conectarse/desconectarse repetidamente, conviene revisar la conexión y el puerto USB-C por problemas de fiabilidad (como caídas intermitentes de señal) por separado de comprobar píxeles muertos o atascados, ya que una conexión suelta a veces puede parecer un problema de pantalla pero en realidad es un problema de cable o puerto.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: '¿Una pantalla parpadeante en un monitor portátil puede confundirse con un problema de píxel muerto?',
        a: "Sí, pero son problemas distintos: el parpadeo en toda la pantalla suele apuntar a un problema de suministro de energía USB-C o de cable, ya que los monitores portátiles se alimentan por el mismo cable que la señal de vídeo, mientras que un píxel muerto o atascado es un punto fijo único que no parpadea y se mantiene igual sin importar el resto de la pantalla.",
      },
      {
        q: '¿Un monitor portátil necesita un portátil con USB-C de alto vataje para probarse correctamente?',
        a: "La mayoría de los monitores portátiles necesitan un vataje mínimo de suministro de energía USB-C del dispositivo conectado para funcionar en absoluto: si la pantalla no enciende o está tenue/inestable, compruebe el requisito de energía de su monitor portátil frente a lo que suministra el puerto USB-C de su portátil antes de asumir que es un defecto del panel.",
      },
      {
        q: '¿Los monitores portátiles son más propensos a píxeles muertos que los de escritorio?',
        a: "No hay una razón bien establecida por la que los paneles de monitores portátiles tendrían tasas de defectos inherentemente más altas que los paneles de escritorio de la misma resolución y tipo de panel: el proceso de fabricación del panel LCD en sí es en gran medida similar. Lo que difiere es el chasis más delgado y móvil, que afecta la durabilidad por el manejo, no la fabricación a nivel de píxel.",
      },
    ],
  },
  touchscreen_monitor: {
    panelTech:
      "Los monitores táctiles añaden una capa táctil capacitiva (o, menos común, resistiva) sobre un panel de pantalla IPS, VA o TN estándar: la tecnología táctil y la tecnología de panel subyacente son sistemas independientes, y la funcionalidad táctil no cambia qué tipo de panel proporciona la imagen real.",
    commonIssues:
      "Como los monitores táctiles tienen dos sistemas independientes (el panel de pantalla y la capa táctil), conviene revisarlos por separado: un píxel muerto o atascado es un problema del panel de pantalla, mientras que la descalibración táctil, las zonas muertas o las áreas táctiles no receptivas son un problema independiente de la capa táctil que una prueba de pantalla de ciclos de color no revela ni afecta.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: '¿Una prueba de píxeles muertos también comprueba la precisión táctil?',
        a: "No. La prueba de ciclos de color en pantalla completa solo comprueba el panel de pantalla en busca de píxeles muertos, atascados o calientes: no prueba la capa táctil. La precisión y capacidad de respuesta táctil deben comprobarse por separado, generalmente mediante la herramienta de calibración táctil de su sistema operativo o una utilidad de prueba táctil dedicada.",
      },
      {
        q: '¿La capa táctil puede causar puntos visibles que parezcan píxeles muertos?',
        a: "En uso normal, no: la capa táctil es transparente y no debería introducir artefactos visibles por sí sola. Si ve un punto de color fijo durante la prueba de color, es casi seguro un problema del panel de pantalla (píxel muerto o atascado) y no algo relacionado con la capa táctil.",
      },
      {
        q: '¿La tecnología de panel en un monitor táctil es distinta de la de un monitor sin táctil?',
        a: "No inherentemente: los monitores táctiles usan la misma gama de tecnologías de panel (IPS, VA, TN) que los monitores sin táctil, con el sensor táctil añadido como capa adicional encima. El tipo de panel específico varía según el modelo, igual que en un monitor sin táctil.",
      },
    ],
  },
  curved_monitor: {
    panelTech:
      'Los monitores curvos están construidos predominantemente sobre paneles VA, ya que el proceso de fabricación de VA se presta más fácilmente a la curvatura que el IPS, aunque también existe un número menor de monitores IPS curvos, normalmente a un precio más alto. El radio de curvatura (expresado en milímetros, como 1800R o 1000R) varía según el modelo y determina lo cerrada que es la curva, independientemente de la tecnología de panel.',
    commonIssues:
      "En los monitores curvos basados en VA, aplica la contrapartida VA estándar: mayor contraste nativo frente a más posibilidad de arrastre en escenas oscuras y cambio de color por ángulo de visión. La propia curvatura también puede hacer que el brillo o el color se vean ligeramente distintos en los bordes frente al centro al verse fuera del eje: un efecto gradual relacionado con la curva, distinto de un único píxel muerto o atascado fijo.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: '¿Qué significa el número R (como 1800R) en un monitor curvo?',
        a: "El número R describe el radio de curvatura en milímetros: un monitor 1800R, si se extendiera a un círculo completo, tendría un radio de 1800 mm. Números más bajos significan una curva más cerrada. Es una especificación física de curvatura y no indica tecnología de panel ni afecta cómo funciona la prueba de píxeles muertos.",
      },
      {
        q: '¿Los monitores curvos son más propensos a tener píxeles muertos que los planos?',
        a: "No hay una razón bien establecida por la que curvar un panel durante la fabricación aumentaría inherentemente las tasas de defectos individuales de píxeles: el proceso de fabricación a nivel de píxel es similar sin importar la curvatura final. Lo que sí afecta la curvatura es la percepción de uniformidad entre borde y centro, algo independiente de los píxeles muertos o atascados individuales.",
      },
      {
        q: '¿Debo sentarme a una distancia específica para probar correctamente un monitor curvo?',
        a: "Sí: los monitores curvos están diseñados para una distancia de visión específica donde la curva coincide aproximadamente con el campo de visión natural de su ojo. Probar desde demasiado cerca, demasiado lejos o en un ángulo pronunciado puede hacer que la variación de brillo normal relacionada con la curva parezca más pronunciada de lo que sería en la posición de visión prevista.",
      },
    ],
  },
  ultrawide_monitor: {
    panelTech:
      'Los monitores ultrawide (relaciones de aspecto 21:9 y más anchas, comúnmente de 34 a 49 pulgadas) están construidos predominantemente sobre paneles IPS, elegidos por un color más consistente en el campo de visión más amplio de lo que suele ofrecer VA, aunque también existen ultrawide curvos VA, especialmente en modelos orientados al gaming.',
    commonIssues:
      "Como los paneles ultrawide son físicamente más anchos que los monitores estándar 16:9, hay más superficie de panel donde puede variar la tolerancia de fabricación: revisar el brillo y la uniformidad de color en toda la anchura con una pantalla completa gris o blanca sólida, no solo el centro, vale la pena además de comprobar píxeles muertos o atascados individuales.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: '¿Un super-ultrawide de 49 pulgadas se prueba de forma distinta a un ultrawide de 34 pulgadas?',
        a: "El procedimiento de prueba es el mismo sin importar el tamaño: recorra colores sólidos en pantalla completa y escanee en busca de píxeles que no coincidan con el fondo. En un super-ultrawide más grande, vale la pena tomarse más tiempo y escanear físicamente toda la anchura, ya que es más fácil pasar por alto un defecto en los bordes lejanos de una pantalla muy ancha.",
      },
      {
        q: '¿Un monitor ultrawide necesita una tarjeta gráfica específica para mostrarse correctamente?',
        a: "Las resoluciones ultrawide (como 3440x1440 o 5120x1440) requieren más procesamiento gráfico para aplicaciones exigentes como juegos, pero la prueba de píxeles muertos en sí es solo renderizado de color sólido en pantalla completa, una carga mínima para cualquier GPU moderna sin importar la relación de aspecto o resolución del monitor.",
      },
      {
        q: '¿Por qué mi monitor ultrawide se ve un poco distinto de brillo en los extremos izquierdo y derecho?',
        a: "Una ligera variación de brillo en un panel ancho, especialmente hacia los bordes, puede ocurrir en cualquier pantalla de gran formato por la tolerancia normal de fabricación de retroiluminación y panel. Es un efecto gradual en toda el área, distinto de un píxel muerto o atascado, que es un punto fijo único sin relación con su posición en el panel.",
      },
    ],
  },
  gaming_144hz: {
    panelTech:
      '144Hz se sitúa en el nivel inicial a medio de las tasas de refresco gaming y está disponible en tipos de panel TN, VA e IPS según el monitor específico: a diferencia de 240Hz o 360Hz, que se inclinan más hacia TN o Fast IPS por razones de tiempo de respuesta, los monitores de 144Hz ofrecen la gama más amplia de opciones de tipo de panel para un presupuesto dado.',
    commonIssues:
      "Como los monitores de 144Hz abarcan los tres tipos de panel principales, lo que conviene revisar varía según el panel específico: los modelos TN muestran un cambio de color por ángulo de visión más pronunciado, los modelos VA pueden mostrar arrastre en escenas oscuras durante movimiento rápido, y los modelos IPS muestran un ligero resplandor en las esquinas en pantalla oscura en una habitación tenue: ninguno de estos es lo mismo que un píxel muerto o atascado, que es un defecto fijo sin relación con el tipo de panel o el contenido.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: '¿La tasa de refresco afecta la visibilidad de los píxeles muertos?',
        a: "No. Un píxel muerto o atascado es un defecto de hardware estático, visible de la misma forma sin importar si el monitor funciona a 60Hz o 144Hz: la tasa de refresco afecta cómo de fluido se muestra el movimiento, no si los píxeles individuales funcionan correctamente.",
      },
      {
        q: '¿Debo probar a 144Hz o a una tasa de refresco menor?',
        a: "No importa específicamente para la prueba de píxeles muertos, ya que la prueba usa colores sólidos estáticos en lugar de movimiento: pruebe con la tasa de refresco que tenga configurada actualmente su monitor. La tasa de refresco importa más para evaluar la claridad del movimiento, algo independiente de comprobar defectos de píxeles.",
      },
      {
        q: '¿Qué tipo de panel debo revisar en un monitor de 144Hz antes de comprarlo?',
        a: "144Hz está disponible en paneles TN (tiempo de respuesta más rápido, mayor compromiso de color/ángulo de visión), VA (mayor contraste, algo de arrastre en movimiento) e IPS (mejor color y ángulos de visión, respuesta ligeramente más lenta que TN): cuál le conviene depende de si prioriza la precisión de color, el contraste o el tiempo de respuesta más rápido posible.",
      },
    ],
  },
  gaming_240hz: {
    panelTech:
      "Los monitores gaming de 240Hz históricamente se han inclinado hacia paneles TN por sus tiempos de respuesta rápidos, aunque los paneles Fast IPS se han vuelto cada vez más comunes en este nivel de refresco a medida que la tecnología de panel ha mejorado, ofreciendo mejor precisión de color y ángulos de visión que TN mientras siguen alcanzando 240Hz. Los paneles VA a 240Hz son menos comunes que a 144Hz.",
    commonIssues:
      'En los modelos 240Hz basados en TN, espere un cambio de color y contraste más pronunciado en ángulos de visión descentrados: una característica normal de TN, no un defecto. En los modelos Fast IPS de 240Hz, aplica el resplandor leve habitual en las esquinas en pantalla oscura en una habitación tenue. Probar mirando directamente a la pantalla (en lugar de en ángulo) da la lectura más fiable de defectos de píxeles reales en cualquiera de los dos tipos de panel.',
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: '¿Un monitor de 240Hz es más propenso a defectos de panel que uno de 144Hz?',
        a: "No hay un vínculo bien establecido entre la capacidad de tasa de refresco y la tasa de defectos de píxeles muertos: ambos son aspectos independientes de la fabricación y el diseño del panel. Un panel de 240Hz no es inherentemente más ni menos propenso a defectos individuales de píxeles que un panel de 144Hz de calidad de construcción similar.",
      },
      {
        q: '¿Por qué el color TN se ve peor que el IPS en algunos monitores de 240Hz?',
        a: "Los paneles TN históricamente han ofrecido los tiempos de respuesta más rápidos, por lo que muchos monitores de 240Hz usaban TN, pero la tecnología TN tiene inherentemente más compromiso de color y ángulo de visión que IPS. Esta es una contrapartida entre tipos de panel, no un defecto, y los modelos más nuevos Fast IPS de 240Hz cierran gran parte de esa brecha.",
      },
      {
        q: '¿Un monitor de 240Hz necesita ajustes especiales activados para probar píxeles muertos?',
        a: "No se necesitan ajustes especiales: la prueba de color en pantalla completa funciona sin importar si están activadas la alta tasa de refresco, G-Sync/FreeSync o los ajustes de overdrive, ya que comprueba el comportamiento estático de píxeles en colores sólidos, no el rendimiento en movimiento.",
      },
    ],
  },
  gaming_360hz: {
    panelTech:
      '360Hz se sitúa en el extremo de las tasas de refresco gaming de consumo, históricamente dominado por paneles TN y más recientemente por paneles Fast IPS diseñados específicamente para alcanzar ese límite de tiempo de respuesta; las opciones OLED a 360Hz han sido más limitadas en toda la industria debido a diferentes compensaciones de ingeniería a tasas de refresco muy altas, aunque esto cambia a medida que avanza la tecnología de panel.',
    commonIssues:
      "En los modelos de 360Hz basados en TN, espere un cambio de color y ángulo de visión más pronunciado que en IPS: una característica normal del tipo de panel elegido específicamente por el tiempo de respuesta. En los modelos Fast IPS de 360Hz, aplica el resplandor leve estándar en las esquinas en pantalla oscura. Como los monitores de 360Hz son una categoría de producto estrecha y especializada, probar de frente en lugar de en ángulo da la lectura más clara de los defectos de píxeles reales.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: '¿Quién realmente necesita un monitor de 360Hz, y eso afecta la prueba?',
        a: "Los monitores de 360Hz están dirigidos específicamente a jugadores competitivos de esports en títulos rápidos donde minimizar la latencia de entrada a fotón importa: el uso previsto no cambia cómo funciona la prueba de píxeles muertos, que es el mismo proceso de ciclos de color en pantalla completa sin importar el límite de tasa de refresco del monitor.",
      },
      {
        q: '¿Los monitores de 360Hz son más caros de reemplazar si tienen píxeles muertos?',
        a: "Los monitores de 360Hz suelen tener un precio premium sobre los modelos de 144Hz o 240Hz debido a la ingeniería de panel especializada requerida, algo que vale la pena saber al decidir entre buscar una sustitución por garantía o una reparación, pero la política de defectos de píxeles en sí la establece el fabricante por modelo, no específicamente por la tasa de refresco.",
      },
      {
        q: '¿Probar un monitor de 360Hz en busca de píxeles muertos requiere hardware especial?',
        a: "No: la prueba de color en pantalla completa basada en navegador funciona en cualquier monitor y cualquier configuración gráfica capaz de mostrar una página web en pantalla completa. No necesita tener el monitor funcionando a sus 360Hz completos para comprobar píxeles muertos o atascados, ya que la prueba no depende del movimiento ni de altas tasas de fotogramas.",
      },
    ],
  },
  professional_monitor: {
    panelTech:
      "Los monitores profesionales usan mayoritariamente paneles IPS por su color consistente y amplios ángulos de visión, con un número creciente de opciones de gama alta que adoptan OLED por su mayor contraste, en líneas profesionales dedicadas como EIZO ColorEdge, NEC SpectraView, BenQ SW/PD, ASUS ProArt, Dell UltraSharp y ViewSonic ColorPro: estas líneas compiten principalmente en precisión y consistencia de calibración más que solo en tecnología de panel.",
    commonIssues:
      "Como los monitores profesionales se promocionan por su precisión de color, la comprobación de calidad más relevante más allá de los píxeles muertos o atascados individuales es el brillo y la uniformidad de color en toda la pantalla con una prueba de pantalla completa gris o blanca sólida: los paneles de grado profesional suelen someterse a tolerancias de uniformidad más estrictas que los monitores de consumo económicos, aunque esto varía según el modelo y fabricante específicos.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: '¿Cuál es la diferencia entre un monitor profesional y un monitor de oficina normal?',
        a: "Los monitores profesionales suelen estar calibrados de fábrica para precisión de color (a menudo con un informe de calibración por unidad), cubren una gama de color más amplia (como AdobeRGB o DCI-P3), y se someten a tolerancias de uniformidad más estrictas que los monitores de oficina generales, que priorizan el costo y la funcionalidad básica sobre la precisión de color calibrada.",
      },
      {
        q: '¿La calibración de fábrica significa que un monitor profesional no tendrá píxeles muertos?',
        a: "No. La calibración de fábrica aborda la precisión y consistencia del color en el panel: es un proceso independiente del hardware individual de píxeles, que aún puede tener defectos de fabricación sin importar lo bien calibrada que esté la salida de color general. Sigue valiendo la pena ejecutar una prueba de píxeles muertos en cualquier monitor profesional recién comprado.",
      },
      {
        q: '¿En qué se diferencia habitualmente la política de píxeles muertos de un monitor profesional de la de uno de consumo?',
        a: "Algunas líneas de monitores profesionales se promocionan con políticas de defectos de píxeles más estrictas que las líneas de consumo general del mismo fabricante, reflejando el precio más alto y el uso crítico de color, pero esto no es universal: consulte la documentación de garantía específica de su modelo en lugar de asumir que aplica una política más estricta solo porque se promociona como de grado profesional.",
      },
    ],
  },
  photo_editing_monitor: {
    panelTech:
      'Los monitores promocionados para edición fotográfica priorizan una amplia cobertura de gama de color (comúnmente AdobeRGB y sRGB, a veces DCI-P3) en paneles IPS con calibración por hardware, en líneas como BenQ SW, ASUS ProArt, Dell UltraSharp, EIZO ColorEdge y ViewSonic ColorPro: la tecnología de panel en sí suele ser la misma familia IPS usada en otros lugares, con la cobertura de gama y la precisión de calibración como diferenciador.',
    commonIssues:
      "Para el trabajo de edición fotográfica específicamente, el brillo y la uniformidad de color en toda la pantalla importan tanto como los píxeles muertos o atascados individuales, ya que el brillo irregular puede afectar visiblemente cómo juzga la exposición y el balance de color al editar. Pruebe con una pantalla completa gris o blanca sólida para comprobar la uniformidad general además de la prueba estándar de ciclos de color para píxeles muertos.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: '¿Qué cobertura de gama de color debo buscar en un monitor de edición fotográfica?',
        a: 'La cobertura de AdobeRGB (a menudo citada como 95-99% en monitores orientados a edición fotográfica) es la especificación más referenciada para el trabajo de fotografía, ya que es el espacio de color sobre el que se construyen muchos flujos de trabajo de edición fotográfica, aunque la cobertura de sRGB y DCI-P3 también es relevante según su formato de salida específico. Consulte los porcentajes de gama específicos que se afirman para su modelo en lugar de asumir según la etiqueta "edición fotográfica" por sí sola.',
      },
      {
        q: '¿Un monitor de gama amplia hace que la prueba de píxeles muertos sea distinta?',
        a: "No, el procedimiento de prueba es el mismo sin importar la cobertura de gama: recorra colores sólidos en pantalla completa y busque píxeles que no coincidan con el fondo. La cobertura de gama afecta la precisión con que se reproducen los colores en general, no cómo aparecen los defectos individuales de píxeles.",
      },
      {
        q: '¿Debo calibrar mi monitor de edición fotográfica antes o después de comprobar píxeles muertos?',
        a: "Cualquier orden funciona para la comprobación de píxeles muertos en sí, ya que no depende del estado de calibración, pero generalmente es más eficiente comprobar primero los píxeles muertos o atascados: si encuentra un defecto lo bastante grave como para justificar una devolución, tiene poco sentido calibrar un monitor que quizás vaya a devolver.",
      },
    ],
  },
  video_editing_monitor: {
    panelTech:
      'Los monitores promocionados para edición de vídeo y corrección de color enfatizan una amplia cobertura de gama (especialmente DCI-P3, dado su uso en producción cinematográfica) y soporte HDR en paneles IPS u OLED, con el nivel más alto acercándose (pero generalmente sin igualar) a los monitores de referencia de retransmisión dedicados usados en instalaciones profesionales de posproducción.',
    commonIssues:
      "Para el trabajo de corrección de color, vale la pena comprobar el brillo y la uniformidad de color en toda la pantalla además de los píxeles muertos o atascados individuales, ya que el brillo irregular puede afectar visiblemente cómo se juzgan las sombras y las luces altas al corregir. En los modelos con capacidad HDR, también vale la pena señalar que la afirmación de brillo máximo HDR de un monitor no afecta cómo aparece un píxel muerto o atascado durante una prueba de color estándar en pantalla completa SDR.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: '¿Un monitor de edición de vídeo es lo mismo que un monitor de referencia de retransmisión?',
        a: "Generalmente no: los monitores de edición de vídeo de consumo y prosumer (incluso los de precisión de color) suelen estar un escalón por debajo de los monitores de referencia de retransmisión dedicados usados en posproducción profesional, que tienen precios mucho más altos y garantías de calibración y uniformidad aún más estrictas. Los monitores de edición de vídeo buscan aproximarse a esa precisión a un precio más accesible.",
      },
      {
        q: '¿El soporte HDR cambia cómo debo probar los píxeles muertos?',
        a: "No: ejecute la prueba estándar de ciclos de color en pantalla completa en modo normal (SDR). El modo HDR cambia cómo se representan el brillo y el contraste específicamente para contenido HDR, pero un píxel muerto o atascado es un defecto a nivel de hardware que aparece igual sin importar si el HDR está activo.",
      },
      {
        q: '¿Qué espacio de color debo comprobar en un monitor de edición de vídeo?',
        a: "La cobertura DCI-P3 es la especificación más referenciada para trabajo de vídeo/cine, ya que es el estándar usado en cine digital, aunque Rec.709 (retransmisión/vídeo web) y Rec.2020 (algunos flujos de trabajo HDR) también son relevantes según su formato de entrega específico: consulte qué gama(s) requiere realmente su formato de salida objetivo.",
      },
    ],
  },
};

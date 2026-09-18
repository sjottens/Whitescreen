// lib/monitor-brand-content/en.ts - English content for /monitor-test/[brand]
// pages. See index.ts for why this exists and how locales are selected.
//
// Factual accuracy note: panel technology descriptions (IPS/VA/OLED, which
// lines use which panels) reflect well-established, publicly documented
// product positioning for these brands. Specific numeric warranty
// thresholds are NOT asserted per-brand here, because exact dead-pixel
// policies vary by SKU, region, and change over time - instead the
// `warranty` field explains the general ISO 13406-2 class convention the
// industry commonly references and tells the reader to verify the number
// against their specific model. Anything more brand-specific than that
// should be verified against the manufacturer's current published policy
// before being treated as fact. The nl/es/de translations carry the same
// caveat - they are faithful translations of these claims, not new ones.

import type { MonitorBrandContent } from './index';

const GENERIC_WARRANTY =
  'Manufacturers typically classify pixel defects using conventions derived from the old ISO 13406-2 standard, which defines pixel-fault "classes" - Class I allows zero defects, while Class II and III permit a small number of bright, dark, or stuck sub-pixels. Very few consumer monitors are sold under a Class I (zero-defect) policy; most fall under a Class II-equivalent policy that allows a handful of defects before a replacement is offered. The exact number, and whether it counts full pixels or sub-pixels, varies by manufacturer, product line, and region, and can change between models - check the specific warranty terms for your monitor rather than assuming a figure.';

export const MONITOR_BRAND_CONTENT_EN: Record<string, MonitorBrandContent> = {
  // ---------------------------------------------------------------------
  // Core brands
  // ---------------------------------------------------------------------
  asus: {
    panelTech:
      "ASUS sells monitors across nearly every panel type - budget and office models commonly use VA or entry-level IPS panels, while its ROG and TUF Gaming lines lean on Fast IPS for lower response times, and the ProArt line uses factory-calibrated IPS aimed at color-accurate work. A small number of high-end ROG models use QD-OLED panels. Because the ASUS badge covers such a wide range, the panel technology in your specific model matters more than the brand name when judging what 'normal' color and contrast should look like.",
    commonIssues:
      "Because ASUS spans budget to flagship tiers, the display quality issues worth checking for differ by segment: entry-level VA panels are more prone to visible black smearing during fast motion, while IPS-based ROG/ProArt models are more likely to show minor IPS glow or backlight bleed near the edges in a dark room. Reports of these issues vary by specific model and production batch, so treat this as something to check for on your unit rather than an expected defect.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Does the ASUS monitor line use the same panel across its products?',
        a: "No. ASUS badges monitors built on VA, IPS, TN, Fast IPS, and (in a few ROG models) QD-OLED panels, depending on the series and price tier. Check your exact model number - the panel type it uses affects what viewing-angle color shift or black-level behavior is normal versus a defect.",
      },
      {
        q: 'Is IPS glow on an ASUS monitor the same thing as a dead pixel?',
        a: "No. IPS glow is a faint, diffuse brightening near the corners of an IPS-panel display when viewed in a dark room, caused by how IPS panels handle backlight and viewing angle - it moves or changes intensity as you change viewing angle. A dead or stuck pixel is a single fixed point that doesn't move and stays the same color regardless of what's displayed behind it.",
      },
      {
        q: 'Where do I check my specific ASUS model’s panel type before testing?',
        a: "ASUS lists the panel type (IPS, VA, TN, Fast IPS, OLED) on each product's official spec sheet on asus.com, usually under 'Panel' or 'Display' specifications. Knowing this before you run the color test helps you judge whether something you're seeing is a normal characteristic of that panel type or worth investigating further.",
      },
    ],
  },
  lg: {
    panelTech:
      'LG is one of a small number of companies that both manufactures display panels (through LG Display) and sells finished monitors, so its own lineup draws heavily on Nano IPS and standard IPS panels, with OLED panels appearing in its higher-end UltraGear gaming models and UltraFine professional line. This vertical integration is a genuine differentiator versus brands that only source panels from third parties, though it does not by itself guarantee a defect-free unit.',
    commonIssues:
      "On LG's IPS-based monitors, the most commonly reported cosmetic issue in user forums is uneven backlight bleed or clouding near the screen edges, which is more noticeable on dark backgrounds and varies unit to unit rather than being a defect of the whole line. On LG's OLED gaming monitors, the panel technology itself removes the backlight-bleed question entirely, but introduces different long-term considerations like static-image burn-in risk, which isn't something a one-time dead pixel test can detect.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Does LG making its own display panels affect dead pixel rates?',
        a: "LG Display manufactures panels for LG's own monitors as well as for many other brands, but manufacturing your own panel doesn't eliminate normal production variance - defective units still occur industry-wide. It mainly means LG can offer panel types (like Nano IPS or its OLED variants) that aren't as widely available from brands that only source third-party panels.",
      },
      {
        q: 'How is testing an LG OLED monitor for pixel defects different from testing an IPS one?',
        a: "The color-cycling test works the same way on both, but OLED panels produce true black by turning pixels off entirely, so a 'dead' pixel (one stuck off) can be harder to distinguish from normal black content - testing on saturated colors like red, green, and blue is more revealing than testing on black for OLED panels.",
      },
      {
        q: 'What does "Nano IPS" mean for color testing on an LG monitor?',
        a: "Nano IPS is LG's marketing name for an IPS variant using a nanoparticle layer to filter light wavelengths, aimed at wider color gamut coverage rather than changing how dead or stuck pixels appear. For pixel-defect testing purposes, it behaves the same as any other IPS panel - defects still show up as static-colored dots that don't change with the background.",
      },
    ],
  },
  samsung: {
    panelTech:
      "Samsung's own display division manufactures VA panels extensively, and its Odyssey gaming line is built almost entirely on VA technology (including curved 1000R VA panels), with a smaller number of flagship Odyssey OLED models using Samsung's own QD-OLED panels. Samsung's general-purpose and business monitors mix VA and IPS depending on the series, so the panel type is worth checking against the specific model rather than assuming.",
    commonIssues:
      "VA panels, which dominate Samsung's gaming line, are known industry-wide for a different failure mode than IPS: rather than corner glow, VA panels are more prone to visible 'black crush' or 'smearing' in fast-motion dark scenes, and can show more pronounced color/contrast shift at steep viewing angles. These are inherent VA panel characteristics rather than defects, but they're worth distinguishing from an actual dead or stuck pixel during testing.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Why does my Samsung curved monitor look slightly different in color at the edges?',
        a: "This is a normal characteristic of curved VA panels rather than a defect - viewing angle affects VA panel color and contrast more than it affects IPS, and the edges of a curved screen are angled differently relative to your eyes than the center. It's separate from dead or stuck pixels, which stay the same color regardless of viewing angle.",
      },
      {
        q: 'Do Samsung Odyssey OLED monitors need a different dead pixel test than VA models?',
        a: 'The same color-cycling approach works for both, but on the OLED models it helps to pay particular attention to saturated colors rather than black screens, since OLED produces black by switching pixels off - a stuck-off pixel blends into black content and is far more visible against red, green, blue, or white.',
      },
      {
        q: 'Is a bright spot on my Samsung monitor a dead pixel or a backlight issue?',
        a: "A single fixed bright dot that appears the same color regardless of what's on screen is usually a stuck (not dead) pixel. A broader patch of brightness that shifts as you change viewing angle or that's most visible on a black screen is more likely backlight bleed or clouding, which is a separate issue from individual pixel defects.",
      },
    ],
  },
  dell: {
    panelTech:
      "Dell's monitor range splits fairly cleanly by series: the UltraSharp (U-series) line uses IPS or IPS Black panels with factory color calibration aimed at office and creative work, the Alienware-branded gaming monitors (sold under the Dell corporate umbrella) use IPS or QD-OLED panels, and Dell's more basic P-series and E-series office monitors use standard IPS. There is no single 'Dell panel' - the series name is the better indicator of what technology you're testing.",
    commonIssues:
      "On Dell's UltraSharp line, the most common cosmetic complaint in user reports is minor backlight bleed or IPS glow visible on a black screen in a dark room, which is a known characteristic of IPS panels generally rather than specific to Dell. On the Alienware QD-OLED gaming models, the concern shifts from backlight bleed (which doesn't apply to OLED) to near-black color banding in some content, which is a different phenomenon from a dead or stuck pixel.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: "What's the difference between Dell's U-series, P-series, and Alienware monitors for testing purposes?",
        a: "The color-cycling test itself works identically across all three, but what counts as a 'normal' cosmetic characteristic differs: U-series and Alienware IPS models can show mild IPS glow near the corners on a dark screen, while P-series office monitors (often standard IPS or VA) are more likely to show simple backlight bleed. None of these is the same as a dead or stuck pixel.",
      },
      {
        q: 'Does Dell factory-calibrate every UltraSharp monitor?',
        a: "Dell markets factory calibration (including a per-unit color-accuracy report on some UltraSharp models) as a feature of that specific line, not something applied uniformly across all Dell monitors. Check your model's product page or included documentation to confirm whether factory calibration data was included with your unit.",
      },
      {
        q: 'How do I test an Alienware QD-OLED monitor differently from an IPS Dell monitor?',
        a: 'Cycle through the same saturated colors, but pay closer attention to how the screen renders near-black content and dark grays, since QD-OLED panels handle those differently than IPS - a pixel stuck at a fixed color is easiest to spot against red, green, or blue rather than black on an OLED panel.',
      },
    ],
  },
  benq: {
    panelTech:
      "BenQ's lineup is organized around fairly distinct use cases: the SW series (photography/design) uses IPS panels with hardware calibration and wide-gamut coverage validated against Pantone and Calman standards, the PD series targets general professional/design use with similar IPS calibration, and the Mobiuz and Zowie sub-brands cover consumer and esports gaming respectively, with Zowie in particular favoring matte, low-input-lag TN or IPS panels tuned for competitive play over color accuracy.",
    commonIssues:
      "BenQ markets several of its professional (SW/PD) and gaming (Mobiuz) monitors around flicker-free backlights and low blue-light modes aimed at reducing eye strain during long sessions - these are display features, not pixel-defect prevention, and don't change how a dead or stuck pixel would appear during testing. On BenQ's IPS panels generally, the usual IPS characteristics (mild glow near corners in dark rooms) apply the same way they would on any IPS-based monitor.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Does BenQ’s flicker-free technology affect dead pixel testing?',
        a: "No. Flicker-free backlight technology addresses how the backlight is dimmed (using DC dimming instead of PWM flickering) to reduce eye strain - it has no effect on individual pixel behavior. A dead or stuck pixel will show up the same way on a flicker-free BenQ monitor as on any other.",
      },
      {
        q: 'Is a BenQ Zowie monitor tested differently than a BenQ SW monitor?',
        a: "The test procedure is identical - cycle through solid colors in fullscreen and look for pixels that don't match the background. What differs is the panel priorities: Zowie models prioritize response time and input lag over color accuracy, so don't expect the same color vibrancy you'd see on an SW-series color-calibrated panel.",
      },
      {
        q: 'What panel type does the BenQ PD series use?',
        a: 'BenQ\'s PD (Designer) series uses IPS panels, generally with wider color gamut coverage than BenQ\'s budget office monitors but without the full hardware-calibration package BenQ reserves for its SW (photography) series - check the specific PD model number for its exact panel and gamut specifications.',
      },
    ],
  },
  alienware: {
    panelTech:
      "Alienware's current monitor lineup centers on two panel technologies: IPS panels (including some using Fast IPS for higher refresh rates) across its more affordable gaming models, and QD-OLED panels in its flagship curved ultrawide monitors (the AW3423DW and AW3423DWF are the best-known examples), which Alienware was among the first PC monitor brands to bring to market at scale.",
    commonIssues:
      "On Alienware's QD-OLED models, the relevant long-term consideration is static-image burn-in risk (common to all OLED technology, not unique to Alienware), which a one-time color-cycling test cannot reveal - it can only confirm whether a pixel is currently dead or stuck, not predict future burn-in. On Alienware's IPS gaming models, standard IPS glow and backlight-bleed characteristics apply the same way they would on any IPS panel.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Can a dead pixel test detect OLED burn-in on an Alienware monitor?',
        a: "No. A dead pixel test cycles through solid colors to reveal pixels that are stuck on or off right now - it can't detect burn-in, which is a gradual, content-dependent dimming of specific pixels from prolonged static image display. Burn-in typically shows as faint ghosting of UI elements (like a taskbar or crosshair) rather than a single fixed-color dot.",
      },
      {
        q: 'Do Alienware QD-OLED monitors have the same dead pixel policy as their IPS models?',
        a: "Warranty pixel-defect policies can differ by product line and are set by Dell (which owns Alienware) per model, not applied uniformly across the whole Alienware range. Check the specific warranty documentation for your model rather than assuming the policy is the same across IPS and QD-OLED Alienware monitors.",
      },
      {
        q: "What's the fastest way to test an Alienware curved ultrawide for pixel defects?",
        a: 'Use fullscreen mode and cycle through each solid color, paying extra attention to the far edges of the curved panel - on very wide curved screens it\'s easy to miss a defect near the outer edges if you focus only on the center of the display.',
      },
    ],
  },
  msi: {
    panelTech:
      'MSI\'s gaming monitor range (MAG and MPG series) is built primarily on VA and IPS panels, with curved VA models common in the mid-range MAG lineup and flatter Fast IPS panels appearing in higher-refresh MPG models aimed at competitive play. MSI is a relative newcomer to monitors compared to brands like LG or Samsung, sourcing panels from third-party manufacturers rather than producing its own.',
    commonIssues:
      "Because MSI's curved gaming monitors lean on VA panels, the same VA characteristics that apply to other VA-based brands apply here: potential dark-scene smearing during fast motion and more noticeable contrast shift at steep viewing angles, both of which are panel characteristics rather than defects. On MSI's flatter Fast IPS gaming models, standard IPS glow near the corners in dark rooms is the more relevant characteristic to distinguish from an actual defect.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Does MSI manufacture its own monitor panels?',
        a: 'No. MSI, like most gaming monitor brands other than LG and Samsung, sources its panels from third-party panel manufacturers and builds them into its own monitor designs with MSI-specific electronics, firmware, and RGB lighting. The underlying panel technology (VA or IPS) is what determines color and viewing-angle behavior, not the MSI brand itself.',
      },
      {
        q: "How do I know if my MSI curved monitor's edge is a curve artifact or a pixel defect?",
        a: "A curve-related color or brightness shift changes gradually and consistently along the edge and looks the same regardless of what content is on screen. A pixel defect is a single fixed point - it stays the same size and color whether you're viewing the edge or center of the curve, and doesn't blend gradually into the surrounding area.",
      },
      {
        q: "Does MSI's Mystic Light RGB lighting interfere with pixel testing?",
        a: "No. Mystic Light controls RGB lighting on the monitor's chassis and stand, not the display panel itself, so it has no effect on how the panel renders color or on dead/stuck pixel visibility during a color-cycling test.",
      },
    ],
  },
  acer: {
    panelTech:
      "Acer covers an unusually wide span for a single brand: its Predator line (gaming) uses IPS, VA, and in a few flagship models Mini-LED or OLED panels, while its budget-friendly Nitro line relies mostly on VA and entry-level IPS, and its general office/consumer monitors use a mix of TN, VA, and IPS depending on price point. The Acer name alone doesn't indicate panel type - check the specific model.",
    commonIssues:
      "Given how wide Acer's range is, the display characteristics worth checking for vary a lot by tier: budget Nitro-line VA panels are more likely to show visible smearing in dark, fast-moving content, while higher-end Predator IPS and Mini-LED models are more likely to show minor backlight blooming (visible haloing around bright objects on a dark background) rather than the uniform edge glow typical of standard IPS.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Is Acer Nitro the same panel technology as Acer Predator?',
        a: "No. Nitro is Acer's budget gaming line and typically uses VA or entry-level IPS panels, while Predator is Acer's higher-end line spanning IPS, VA, Mini-LED, and some OLED models depending on the specific product. Check your exact model's spec sheet rather than assuming based on the line name alone.",
      },
      {
        q: 'What is backlight blooming and is it the same as a dead pixel?',
        a: "Blooming is a soft halo of light visible around bright objects on a dark background, caused by how a Mini-LED or standard LED backlight is zoned - it's most noticeable on Acer's Mini-LED Predator models. It's a backlight characteristic, not a pixel defect: a dead or stuck pixel is a single fixed dot unrelated to what's displayed nearby.",
      },
      {
        q: 'Do Acer monitors ship with a dead-pixel guarantee at purchase?',
        a: "Acer's pixel-defect policy is set per product line and region rather than being a single company-wide guarantee, and can change over time. Check the warranty documentation for your specific model and region, or Acer's regional support site, rather than assuming a fixed number of acceptable defects applies across the whole lineup.",
      },
    ],
  },
  corsair: {
    panelTech:
      "Corsair entered the monitor market more recently than most brands on this list, with its XENEON line built on IPS and QD-OLED panels (the XENEON Flex is a notable bendable QD-OLED model), aimed at high-refresh gaming and marketed alongside Corsair's existing peripheral and PC-component ecosystem. Corsair sources its panels from third-party manufacturers rather than producing its own.",
    commonIssues:
      "On Corsair's IPS-based XENEON models, standard IPS characteristics (mild glow near corners in a dark room) apply the same way they would on any IPS panel from another brand. On the QD-OLED XENEON models, the same OLED-specific considerations apply as with other QD-OLED monitors - a one-time color test can reveal a currently dead or stuck pixel, but not longer-term burn-in risk from static content.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: "Does Corsair's iCUE software affect how the monitor displays color?",
        a: "iCUE primarily controls RGB lighting and peripheral integration across Corsair's product ecosystem; on Corsair monitors, some on-screen-display settings may be accessible through it, but the underlying panel calibration and color rendering are separate from iCUE and unaffected by whether it's running.",
      },
      {
        q: 'Is the XENEON Flex tested the same way as a standard flat monitor?',
        a: "Yes, the color-cycling test procedure is the same regardless of whether the panel is flat or bendable. Since the Flex is QD-OLED, prioritize testing with saturated colors (red, green, blue) over black screens, since OLED renders black by turning pixels off, making a stuck-off pixel harder to spot against black content specifically.",
      },
      {
        q: 'How new is Corsair to the monitor market compared to brands like LG or Dell?',
        a: "Corsair launched its first XENEON monitors in 2021, making it one of the newer entrants compared to companies like LG, Samsung, or Dell that have sold monitors for decades. This doesn't inherently affect defect rates, but means there's a shorter track record of long-term reliability data available for Corsair displays specifically.",
      },
    ],
  },
  eizo: {
    panelTech:
      "EIZO is a Japanese manufacturer that specializes almost exclusively in color-critical professional monitors rather than consumer or gaming displays. Its ColorEdge line uses IPS panels paired with a built-in hardware calibration sensor, and its RadiForce line is purpose-built for medical imaging (radiology) with grayscale and luminance-uniformity requirements well beyond typical office or gaming monitors. EIZO does not manufacture its own panels but sources them and adds proprietary calibration hardware and firmware.",
    commonIssues:
      "Because EIZO's target market is color-critical professional and medical work, the company's own quality-control and calibration processes are generally more rigorous than consumer-monitor norms, and EIZO's own documentation is a better source for panel-uniformity specifications than general forum reports. The main thing worth checking on any EIZO monitor is the same as any IPS panel: mild glow near the corners in a dark room is normal IPS behavior and distinct from a dead or stuck pixel.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Does EIZO’s built-in calibration sensor prevent dead pixels?',
        a: "No. The built-in sensor on ColorEdge monitors recalibrates color and brightness output over time to counteract natural panel drift - it has no ability to detect or prevent individual pixel hardware failures like dead or stuck pixels, which are physical defects in the panel's transistors, not calibration issues.",
      },
      {
        q: 'Why does EIZO focus on IPS panels instead of OLED for professional work?',
        a: "IPS panels don't carry the static-image burn-in risk that OLED does, which matters for professional software with fixed toolbars and palettes displayed for long periods. IPS also has a long track record of stable, predictable color behavior over years of use, which EIZO's professional and medical customers prioritize over OLED's deeper black levels.",
      },
      {
        q: 'Is a RadiForce medical monitor tested the same way as a ColorEdge monitor?',
        a: "The basic color-cycling dead pixel test works the same way on both, but RadiForce monitors are typically grayscale-focused for radiology work, so testing with a full grayscale gradient in addition to the standard color set is more relevant for catching subtle luminance-uniformity issues specific to that use case.",
      },
    ],
  },
  hp: {
    panelTech:
      "HP's monitor range splits into three general groups: its E-series and business monitors use standard IPS panels aimed at office use, its OMEN gaming line uses IPS or VA panels depending on the model with some higher-refresh Fast IPS options, and its DreamColor line (used in film, animation, and broadcast production) uses professionally calibrated IPS panels with extended color-accuracy validation beyond HP's general consumer range.",
    commonIssues:
      "On HP's IPS-based E-series and OMEN monitors, standard IPS characteristics apply - mild glow near the corners visible on a dark screen in a dim room is a panel characteristic, not a defect. On HP's VA-based OMEN models, the usual VA trade-off applies: deeper native contrast but more potential for dark-scene smearing during fast motion.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'What is HP DreamColor and is it different from HP’s regular monitors?',
        a: 'DreamColor is HP\'s professional color-accuracy line, factory-calibrated and validated for use in film, animation, and broadcast color grading - it\'s a distinct product line from HP\'s general office (E-series) and gaming (OMEN) monitors, with tighter color-accuracy tolerances and typically a higher price point.',
      },
      {
        q: 'Does HP OMEN use the same panels as HP’s office monitors?',
        a: 'No. OMEN is HP\'s gaming line and prioritizes refresh rate and response time, using IPS or VA panels selected for gaming performance, while HP\'s E-series office monitors prioritize productivity features (like adjustable stands and multiple ports) with panels generally not tuned for high refresh rates.',
      },
      {
        q: 'Is a dead pixel on an HP monitor covered differently than on a business laptop screen?',
        a: "HP sets separate warranty terms for its standalone monitors versus its laptop displays, and the pixel-defect policy can differ between them and between monitor product lines. Check the warranty documentation specific to your monitor model rather than assuming the same terms apply across HP's whole product range.",
      },
    ],
  },
  iiyama: {
    panelTech:
      'IIYAMA (a Japanese-founded brand with a strong presence in the European market) sells across a wide range under its ProLite (general/professional) and G-Master (gaming) lines, using TN, VA, and IPS panels depending on the specific model and price tier, sourced from third-party panel manufacturers rather than produced in-house.',
    commonIssues:
      "Because IIYAMA's range spans budget TN panels through higher-end IPS models, the characteristics worth checking for vary significantly by model: TN panels (common in IIYAMA's most affordable monitors) show the most pronounced color and contrast shift at off-center viewing angles of any panel type, which is a normal TN characteristic rather than a defect, while IIYAMA's IPS models show the more typical mild corner glow in dark rooms.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'How do I tell if my IIYAMA monitor is TN, VA, or IPS?',
        a: "IIYAMA lists the panel type on the official spec sheet for each model on iiyama.com, usually under 'Panel Type' in the display specifications. This matters for testing because TN panels show much more color shift at an angle than IPS or VA, which is normal for TN and not something to mistake for a defect.",
      },
      {
        q: 'Is IIYAMA’s dead pixel policy the same across its ProLite and G-Master lines?',
        a: "IIYAMA sets warranty terms per product and region rather than a single company-wide policy, and terms can differ between the general-purpose ProLite line and the G-Master gaming line. Check the documentation or regional support page for your specific model.",
      },
      {
        q: 'Does a TN panel make dead pixels harder to spot?',
        a: "Not particularly - a dead or stuck pixel still appears as a fixed-color dot regardless of panel type. What TN panels make harder to judge is color accuracy and uniformity generally, since the whole screen's color shifts more with viewing angle than on IPS or VA, so testing while looking straight-on rather than from an angle gives a more reliable read.",
      },
    ],
  },
  lenovo: {
    panelTech:
      "Lenovo's ThinkVision line (its primary monitor line, extending the ThinkPad brand identity) uses IPS panels almost exclusively, aimed at office and business use with an emphasis on USB-C docking and multi-monitor setups. Lenovo's Legion gaming sub-brand uses IPS and VA panels depending on the model, positioned to complement Lenovo's Legion gaming laptops and desktops.",
    commonIssues:
      "On Lenovo's IPS-dominant ThinkVision line, standard IPS characteristics apply - mild glow near the screen corners on a dark background in a dim room is a normal panel trait rather than a defect. On Legion gaming models using VA panels, the usual VA trade-off of deeper contrast against more potential dark-scene smearing applies.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Does ThinkVision’s USB-C docking affect display quality or pixel behavior?',
        a: "No. USB-C docking (power delivery, data, and video over one cable) is a connectivity feature and has no effect on the panel's color rendering or on whether individual pixels are dead or stuck - that's determined entirely by the physical panel hardware.",
      },
      {
        q: 'Is Lenovo Legion the same panel quality as ThinkVision?',
        a: "They serve different purposes: ThinkVision prioritizes IPS panels tuned for office/productivity color accuracy and viewing angles, while Legion prioritizes gaming performance (refresh rate, response time) and uses IPS or VA panels selected for that purpose. Neither is strictly 'higher quality' - they're optimized differently.",
      },
      {
        q: "What's the fastest way to test a Lenovo ThinkVision monitor at a desk setup with multiple monitors?",
        a: 'Run the fullscreen test on one monitor at a time rather than trying to judge color across an extended multi-monitor desktop at once - browser fullscreen mode targets a single display, so testing each ThinkVision monitor individually gives a cleaner read than comparing them side by side mid-test.',
      },
    ],
  },
  nec: {
    panelTech:
      "NEC (whose display business now operates as Sharp/NEC Display Solutions in some regions) focuses on professional and specialty monitors rather than consumer or gaming displays, with its MultiSync line covering business and public-signage use and its SpectraView line targeting color-critical creative and print work, similar in market position to EIZO. NEC's professional monitors use IPS panels with internal calibration hardware on higher-end SpectraView models.",
    commonIssues:
      "Because NEC's target market is professional and signage use rather than consumer gaming, its monitors are generally held to tighter factory quality-control standards for color uniformity than budget consumer displays, though this doesn't eliminate the normal possibility of an individual defective unit. The main IPS-panel characteristic to distinguish from a defect is the usual mild glow near the corners visible on a dark screen in a dim room.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Is NEC SpectraView similar to EIZO ColorEdge?',
        a: 'Yes, they occupy a similar market position - both are professional, factory-calibrated IPS monitor lines aimed at color-critical photo, video, and print work, both used internal calibration hardware on higher-end models, and both are positioned above general consumer monitor lines on color-accuracy specifications.',
      },
      {
        q: 'Does NEC sell gaming monitors?',
        a: "NEC's monitor lineup is focused on business, signage, and color-critical professional work rather than gaming - it doesn't compete in the high-refresh-rate gaming monitor segment the way brands like ASUS, MSI, or Acer do, so you generally won't find NEC monitors marketed around refresh rate or response time.",
      },
      {
        q: 'Where do I find NEC’s specific dead pixel policy for my model?',
        a: "NEC/Sharp NEC Display Solutions publishes warranty terms per product line and region on its official support site rather than a single universal policy - check the documentation for your specific MultiSync or SpectraView model rather than assuming a fixed threshold.",
      },
    ],
  },
  viewsonic: {
    panelTech:
      'ViewSonic sells across a broad range spanning budget office monitors through its ColorPro line, which uses IPS panels with factory calibration aimed at photo and video professionals, positioned similarly to BenQ\'s SW/PD lines. ViewSonic also has a long history in projectors and education-market displays, which is a notable difference from brands that focus purely on monitors.',
    commonIssues:
      'On ViewSonic\'s ColorPro and other IPS-based models, standard IPS characteristics apply - mild glow near the corners visible on a dark screen in a dim room is normal for the panel type rather than a defect. On ViewSonic\'s budget office and VA-based models, the usual VA trade-off of deeper contrast against potential dark-scene smearing applies.',
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'What is ViewSonic ColorPro and how is it different from ViewSonic’s standard monitors?',
        a: "ColorPro is ViewSonic's factory-calibrated professional line aimed at color-critical photo and video work, similar in positioning to BenQ's SW/PD series or ASUS ProArt - it carries tighter color-accuracy validation than ViewSonic's general office or budget monitors.",
      },
      {
        q: 'Does ViewSonic’s projector background affect its monitor quality?',
        a: "Not directly - monitors and projectors use different display technologies (direct-view LCD panels versus projected light), so ViewSonic's long history in projectors doesn't translate into a specific monitor-panel advantage. Its monitor panels are sourced and evaluated separately from its projector business.",
      },
      {
        q: 'Is a ViewSonic monitor’s dead pixel policy listed on the box or only online?',
        a: "Warranty and pixel-defect policy details are more reliably found on ViewSonic's official support site for your specific model and region than printed on retail packaging, since policies can be updated after a product ships. Check viewsonic.com's support section for your model number.",
      },
    ],
  },

  // ---------------------------------------------------------------------
  // Brand sub-lines
  // ---------------------------------------------------------------------
  rog_asus: {
    panelTech:
      "ASUS ROG Swift, the flagship tier of the ROG gaming line, uses Fast IPS panels across most of its lineup for a combination of high refresh rate and reasonable color accuracy, with a small number of top-tier models (like the PG27AQDM) using QD-OLED panels instead. ROG Swift monitors are generally positioned above the ASUS TUF Gaming line on both price and panel quality.",
    commonIssues:
      'On ROG Swift\'s Fast IPS models, the usual IPS characteristic of mild glow near the corners on a dark screen in a dim room applies. On the QD-OLED ROG Swift models, the relevant consideration shifts to OLED-specific behavior - a one-time color test can catch a currently dead or stuck pixel, but not long-term burn-in risk from static on-screen elements like HUDs or crosshairs.',
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Is ROG Swift always OLED, or does it also use IPS?',
        a: "Most ROG Swift monitors use Fast IPS panels; only a small number of flagship models (like the PG27AQDM) use QD-OLED. Check your specific model number against ASUS's spec sheet on asus.com/rog to confirm which panel type your unit uses before testing.",
      },
      {
        q: 'Does G-Sync module hardware affect dead pixel testing on ROG Swift monitors?',
        a: 'No. Some ROG Swift models include a dedicated NVIDIA G-Sync hardware module for variable refresh rate - this controls frame pacing and has no effect on individual pixel behavior or how a dead/stuck pixel appears during a color-cycling test.',
      },
      {
        q: 'Are ROG Swift monitors held to a stricter dead pixel standard than TUF Gaming?',
        a: "ASUS sets pixel-defect policy per product line, and premium lines are sometimes covered by different terms than budget lines, but this isn't guaranteed to be true for every ROG versus TUF comparison - check the specific warranty documentation for your model rather than assuming a stricter standard applies just because it's the flagship line.",
      },
    ],
  },
  acer_nitro: {
    panelTech:
      "Acer Nitro is Acer's budget-to-midrange gaming line, using VA panels in most curved models and entry-level IPS panels in flatter models, prioritizing an accessible price point over the higher refresh rates or premium panel technology (Mini-LED, OLED) reserved for Acer's higher-end Predator line.",
    commonIssues:
      "Because Nitro's curved models lean on VA panels, the standard VA trade-off applies: deeper native contrast but more potential for visible smearing during fast dark-scene motion, and more pronounced color/contrast shift at steep viewing angles than IPS. These are panel characteristics rather than defects, but worth distinguishing from an actual dead or stuck pixel during testing.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Is Acer Nitro the budget version of Predator?',
        a: 'Yes, in general positioning - Nitro targets a more accessible price point with VA or entry-level IPS panels, while Predator spans a wider range up to premium Mini-LED and OLED models. Both are Acer gaming lines, but Nitro generally sits below Predator on price and panel technology.',
      },
      {
        q: 'Why does my curved Acer Nitro monitor show different brightness at the edges?',
        a: "Slight brightness variation across a curved VA panel, especially near the edges, is a common characteristic of curved-panel manufacturing rather than necessarily a defect - it's worth checking with a solid white or gray fullscreen test, but a gradual shift across the curve is different from a single fixed dead or stuck pixel.",
      },
      {
        q: 'Does Acer Nitro have a shorter warranty than Predator monitors?',
        a: "Warranty length and terms are set per product and region by Acer, and can differ between Nitro and Predator, but you should verify this against Acer's current regional support documentation for your specific model rather than assuming a fixed relationship between the two lines.",
      },
    ],
  },
  dell_ips: {
    panelTech:
      "Dell's P-series monitors (the most common 'Dell IPS' monitors in offices) use standard IPS panels aimed at productivity use, without the extended color-calibration validation Dell reserves for its higher-end UltraSharp U-series. They're generally positioned as reliable, no-frills business displays rather than color-critical or gaming-focused monitors.",
    commonIssues:
      'On Dell\'s P-series IPS monitors, the standard IPS characteristic applies: mild glow near the corners visible on a dark screen in a dim room is normal for the panel type. Because these are typically positioned as basic office monitors rather than premium models, color-accuracy tolerances are generally looser than on Dell\'s UltraSharp line, though this affects color consistency rather than pixel-defect likelihood specifically.',
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Is Dell’s P-series the same panel quality as UltraSharp?',
        a: "No. P-series monitors use standard IPS panels aimed at general office productivity, while UltraSharp (U-series) monitors use IPS or IPS Black panels with tighter factory color calibration aimed at creative and professional work. P-series is Dell's more basic, budget-friendly IPS tier.",
      },
      {
        q: 'Do Dell P-series monitors come with a color-accuracy report like UltraSharp?',
        a: 'Generally no - per-unit factory color-accuracy reports are a feature Dell markets specifically for some UltraSharp models, not something typically included with the more basic P-series line. Check your specific model’s included documentation to confirm.',
      },
      {
        q: 'What should I look for on a Dell IPS office monitor besides dead pixels?',
        a: "Beyond dead/stuck pixels, it's worth checking for uneven backlight brightness across a solid gray or white fullscreen screen and any visible clouding in the corners on a black screen in a dim room - both are separate from individual pixel defects but affect overall picture uniformity.",
      },
    ],
  },
  lg_ultrawide: {
    panelTech:
      "LG's ultrawide monitors (21:9 and wider) are built almost entirely on IPS panels, drawing on LG Display's own manufacturing, and span both productivity-focused models (like the UltraWide and UltraFine lines) and gaming-focused ultrawide models within the UltraGear range that use Nano IPS for faster response times.",
    commonIssues:
      "Ultrawide panels are physically wider than standard 16:9 monitors, which means there's more panel surface for manufacturing tolerance to vary across - it's worth checking brightness and color uniformity across the full width on a solid gray or white fullscreen screen, not just the center, in addition to checking for individual dead or stuck pixels.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: "Is it more likely to find defects on an ultrawide monitor because it's bigger?",
        a: "Not necessarily more dead pixels specifically, but the larger physical panel area does mean there's more surface for brightness or color uniformity to vary across, which is a separate consideration from individual pixel defects. Testing the full width with a solid color, not just the center, is worth doing on any ultrawide.",
      },
      {
        q: 'Does LG’s ultrawide gaming line use different panels than its productivity ultrawides?',
        a: "LG's UltraGear ultrawide gaming models generally use Nano IPS for faster response times, while LG's non-gaming ultrawide and UltraFine lines use standard IPS tuned more for color accuracy and productivity than refresh rate - check your specific model's spec sheet to confirm.",
      },
      {
        q: 'How do I run a fullscreen dead pixel test on an ultrawide aspect ratio?',
        a: "The fullscreen browser test automatically fills whatever aspect ratio your display and browser window use, including 21:9 or wider ultrawide screens - just make sure your browser window is on the ultrawide display (not a secondary standard monitor) before starting the test.",
      },
    ],
  },
  samsung_curved: {
    panelTech:
      "Samsung's curved gaming monitors (the Odyssey line, including 1000R curvature models) are built on VA panels manufactured by Samsung's own display division, chosen for VA's deeper native contrast ratio, which Samsung markets as complementing the immersive effect of the curve.",
    commonIssues:
      "Curved VA panels combine two separate characteristics worth distinguishing from a dead or stuck pixel during testing: the VA-typical potential for dark-scene smearing and viewing-angle color shift, plus the curve itself can make brightness or color look slightly different at the edges versus the center of the screen when viewed off-axis, purely as a function of the physical curve geometry.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Does the curve on a Samsung Odyssey monitor make dead pixels harder to spot?',
        a: "Not fundamentally - a dead or stuck pixel is still a single fixed-color dot regardless of screen curvature. What the curve does affect is how uniform brightness and color look at the edges versus center when viewed off-center, which is a separate, gradual effect rather than a sharp single-pixel defect.",
      },
      {
        q: 'What does 1000R mean and does it affect the panel technology?',
        a: "1000R describes the curve radius (a 1000mm radius circle, roughly matching natural human peripheral vision) - it's a physical curvature specification, not a panel technology. The panel underneath is still VA on Samsung's Odyssey line; the curve number doesn't change how dead pixel testing works.",
      },
      {
        q: 'Should I test a Samsung curved monitor sitting at normal viewing distance?',
        a: "Yes - curved monitors are designed to be viewed at a specific distance where the curve matches your eye's natural arc, and testing from too far away or at an angle can make normal curve-related brightness variation look more pronounced than it would at the intended viewing position.",
      },
    ],
  },
  asus_tuf: {
    panelTech:
      "ASUS TUF Gaming sits below ROG Swift in ASUS's gaming lineup, using VA and standard IPS panels rather than the Fast IPS or QD-OLED panels found in flagship ROG models, aimed at competitive pricing rather than top-tier panel technology. ASUS markets the TUF line around component durability testing, though that's a build-quality claim separate from panel technology itself.",
    commonIssues:
      "On TUF Gaming's VA models, the standard VA trade-off applies: deeper native contrast against more potential for dark-scene smearing and viewing-angle color shift. On IPS-based TUF models, the usual mild corner glow on a dark screen in a dim room is the relevant IPS characteristic to distinguish from an actual defect.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Is ASUS TUF Gaming the budget version of ROG?',
        a: "Yes, generally - TUF Gaming targets a lower price point than ROG Swift, using VA or standard IPS panels rather than ROG's Fast IPS or QD-OLED options. Both are ASUS gaming lines, but TUF sits below ROG on price and panel tier.",
      },
      {
        q: 'Does ASUS’s durability testing for TUF monitors reduce dead pixel risk?',
        a: "ASUS markets TUF Gaming products around component and build-quality testing (things like capacitor and stand durability), which is a separate claim from panel-level manufacturing, and durability testing doesn't specifically target or eliminate individual pixel-defect risk, which comes from panel manufacturing rather than the surrounding hardware.",
      },
      {
        q: 'What panel type does my specific TUF Gaming model use?',
        a: "TUF Gaming spans both VA and IPS panels depending on the specific model - check the 'Panel Type' field on your model's official ASUS spec sheet at asus.com/tuf-gaming to confirm which one you have before judging what's normal viewing-angle or contrast behavior.",
      },
    ],
  },
  lg_gaming: {
    panelTech:
      "LG's UltraGear gaming line spans Nano IPS panels (the majority of the lineup, chosen for fast response times with better color accuracy than typical TN or VA gaming panels) and a smaller number of OLED UltraGear models at the high end, drawing on LG Display's own panel manufacturing.",
    commonIssues:
      "On Nano IPS UltraGear models, the usual IPS characteristic of mild glow near the corners on a dark screen in a dim room applies. On OLED UltraGear models, the relevant consideration is different: a color-cycling test can confirm whether a pixel is currently dead or stuck, but can't predict burn-in risk from extended static-image display like game HUDs.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Is LG UltraGear the same as LG’s regular monitor line?',
        a: "No. UltraGear is LG's dedicated gaming sub-brand, using Nano IPS or OLED panels selected for high refresh rate and fast response time, while LG's general monitor lineup (UltraWide, UltraFine, standard IPS models) prioritizes productivity or color accuracy over gaming-specific performance.",
      },
      {
        q: 'Does Nano IPS change how dead pixels look compared to standard IPS?',
        a: "No. Nano IPS is a color-gamut enhancement (a nanoparticle layer that filters light wavelengths) rather than a change to the underlying pixel structure - dead and stuck pixels appear the same way on Nano IPS as on any other IPS variant: a fixed-color dot that doesn't change with the background.",
      },
      {
        q: 'Should I test an OLED UltraGear monitor differently than a Nano IPS one?',
        a: 'Use the same color-cycling process, but weight your attention toward saturated colors (red, green, blue) rather than black screens on the OLED model, since OLED renders black by turning pixels off entirely, which can mask a stuck-off pixel that would be obvious against a bright color.',
      },
    ],
  },
  dell_gaming: {
    panelTech:
      "Dell's gaming monitor efforts are largely channeled through the Alienware sub-brand (sold under the Dell corporate umbrella), which uses IPS and QD-OLED panels depending on the model - Dell doesn't maintain a large separate non-Alienware gaming monitor line the way some competitors do.",
    commonIssues:
      'On Alienware\'s IPS gaming models, the standard IPS characteristic of mild corner glow on a dark screen in a dim room applies. On the QD-OLED Alienware models (like the AW3423DW), the relevant consideration shifts to OLED-specific behavior: a color test reveals currently dead or stuck pixels but not future burn-in risk from static content.',
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Does Dell sell gaming monitors outside of the Alienware brand?',
        a: "Dell's gaming-focused monitors are primarily sold under the Alienware name rather than the Dell brand directly, though Alienware operates within Dell's corporate structure. If you're looking at a 'Dell gaming monitor,' it's most likely an Alienware-branded model.",
      },
      {
        q: 'Is the warranty different for Alienware monitors versus Dell UltraSharp?',
        a: "Dell sets pixel-defect and warranty policy per product line, and Alienware's terms aren't guaranteed to match UltraSharp's - check the specific warranty documentation for your Alienware model rather than assuming it matches Dell's professional monitor line.",
      },
      {
        q: 'What should I check first on a new Alienware QD-OLED monitor?',
        a: 'Run the fullscreen color-cycling test across all colors, paying particular attention to red, green, and blue rather than black, since OLED panels render black by switching pixels off - a pixel stuck off blends into black content and stands out far more clearly against a saturated color.',
      },
    ],
  },
  benq_gaming: {
    panelTech:
      "BenQ's gaming monitors split between the Mobiuz line (consumer gaming, IPS or VA panels balancing color accuracy and refresh rate) and the Zowie line (esports-focused, typically matte TN or IPS panels tuned for minimal input lag and consistent motion clarity over color vibrancy, popular among competitive FPS players).",
    commonIssues:
      "On Mobiuz IPS models, standard IPS glow near the corners in a dark room applies. On Zowie's TN-based models, expect more pronounced color and contrast shift at off-center viewing angles than IPS or VA - a normal TN characteristic rather than a defect, though it's worth testing while looking straight-on for a more reliable read on actual pixel defects.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'What’s the difference between BenQ Mobiuz and BenQ Zowie?',
        a: "Mobiuz is BenQ's consumer gaming line balancing color accuracy with gaming performance, while Zowie is BenQ's esports-focused line prioritizing minimal input lag and motion clarity (often using matte TN panels) for competitive players, generally at the expense of color vibrancy and viewing angles compared to Mobiuz.",
      },
      {
        q: 'Why does color look different at an angle on my BenQ Zowie monitor?',
        a: "If your Zowie model uses a TN panel, more pronounced color and contrast shift at off-center viewing angles is a normal characteristic of TN technology, chosen by Zowie specifically for its low input lag rather than color accuracy - it's not a defect, but it does mean testing while looking straight at the screen gives a more reliable read.",
      },
      {
        q: 'Does BenQ’s eye-care technology on Mobiuz monitors affect pixel testing?',
        a: "No. BenQ's Eye-Care features (flicker-free backlight, low blue light modes) adjust how the backlight is driven and the color temperature - they don't affect individual pixel hardware, so a dead or stuck pixel will show up the same way regardless of whether these modes are enabled.",
      },
    ],
  },
  msi_curved: {
    panelTech:
      "MSI's curved gaming monitors (primarily in the MAG and MPG series) are built on VA panels, chosen for the deeper native contrast that VA offers, which MSI positions as complementing the immersive effect of the curved form factor - similar reasoning to other curved gaming monitor brands like Samsung's Odyssey line.",
    commonIssues:
      "The standard VA trade-off applies on MSI's curved models: deeper native contrast against more potential for dark-scene smearing during fast motion and more pronounced color/contrast shift at steep viewing angles. The curve itself can also cause brightness to look slightly uneven at the edges versus center when viewed off-axis, separate from an actual dead or stuck pixel.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Why do curved gaming monitors like MSI’s usually use VA instead of IPS?',
        a: "VA panels offer deeper native contrast ratios than IPS, which manufacturers including MSI market as pairing well with the immersive effect of a curved screen. IPS panels are technically possible to curve but are less common in curved gaming monitors industry-wide, partly due to cost and partly due to this contrast preference.",
      },
      {
        q: 'Does MSI’s curve radius affect where I should look for dead pixels?',
        a: "Not specifically - dead and stuck pixels can occur anywhere on the panel regardless of curve radius. It's worth deliberately checking the far edges of a curved screen in addition to the center, simply because it's easier to overlook the edges on a wide curved display than on a flat one.",
      },
      {
        q: 'Is MSI’s RGB Mystic Light lighting part of the display panel?',
        a: "No. Mystic Light is chassis and stand lighting, separate from the display panel itself - it has no effect on pixel rendering or how a dead/stuck pixel would appear during a color-cycling test.",
      },
    ],
  },
  corsair_gaming: {
    panelTech:
      "Corsair's XENEON gaming monitors use IPS panels across most of the lineup, with the XENEON Flex being a notable bendable QD-OLED exception, generally positioned for high refresh rate gaming with an emphasis on integration with Corsair's broader iCUE ecosystem of peripherals and PC components.",
    commonIssues:
      'On XENEON\'s IPS models, standard IPS glow near the corners on a dark screen in a dim room applies. On the QD-OLED XENEON Flex, the relevant consideration shifts to OLED-specific behavior - testing with saturated colors is more revealing than testing with black, since OLED renders black by switching pixels off entirely.',
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'What panel does the Corsair XENEON Flex use?',
        a: 'The XENEON Flex uses a bendable QD-OLED panel, notable for being adjustable between a flat and curved form factor by hand - it\'s a different panel technology from the standard IPS panels used across most of the rest of Corsair\'s XENEON lineup.',
      },
      {
        q: 'Does bending the XENEON Flex increase the risk of dead pixels?',
        a: 'Corsair designed the Flex\'s bending mechanism to operate within the panel\'s rated flex tolerance, but as with any moving mechanical component, following the manufacturer\'s guidance on how far and how often to bend it is worth doing - check Corsair\'s official documentation for the panel\'s specific flex limits rather than assuming.',
      },
      {
        q: 'Is Corsair’s monitor warranty tied to iCUE software registration?',
        a: "Standard hardware warranty coverage is generally independent of whether you've installed or registered with iCUE software - check your specific purchase documentation and Corsair's support site to confirm the warranty terms for your model and region.",
      },
    ],
  },
  asus_4k: {
    panelTech:
      "ASUS's 4K professional line, ProArt, uses IPS panels with factory Calman-verified color calibration aimed at photo and video professionals, generally validated for tighter color-accuracy tolerances (often marketed around Delta E < 2) than ASUS's general consumer or gaming 4K monitors.",
    commonIssues:
      "On ProArt's IPS panels, the standard IPS characteristic of mild glow near the corners on a dark screen in a dim room applies. At 4K resolution specifically, individual pixels are physically smaller than on a 1080p or 1440p panel of the same size, which can make a single dead or stuck pixel slightly harder to spot at a glance and worth a closer, more deliberate scan.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Does 4K resolution make dead pixels harder to find?',
        a: "A single dead or stuck pixel is physically smaller on a 4K panel than on a lower-resolution panel of the same screen size, since there are more pixels packed into the same space. It's still visible up close, but a slower, more deliberate scan across the fullscreen color test is worth doing on 4K monitors compared to lower-resolution ones.",
      },
      {
        q: 'Is ASUS ProArt calibration done for every unit or just the product line in general?',
        a: "Check your specific ProArt model's documentation - some ProArt monitors include a per-unit factory calibration report, while for others the Calman-verified claim refers to the product line's design validation rather than every individual unit shipped. This detail varies by model.",
      },
      {
        q: 'What Delta E value should I expect from an ASUS ProArt 4K monitor?',
        a: "ASUS markets several ProArt models around a Delta E < 2 accuracy target, which is generally considered accurate enough that color differences aren't perceptible to the human eye. The exact figure and whether it's guaranteed per-unit or as a design target varies by model - check your specific model's spec sheet.",
      },
    ],
  },
  lg_4k: {
    panelTech:
      "LG's 4K monitor offerings split between the UltraFine line (IPS panels, USB-C connectivity, historically positioned around Mac compatibility) and 4K models within the UltraGear gaming line (Nano IPS, higher refresh rates), plus general 4K IPS monitors outside either sub-brand, all drawing on LG Display's own panel manufacturing.",
    commonIssues:
      "On any of LG's 4K IPS models, the standard IPS characteristic of mild corner glow on a dark screen in a dim room applies. At 4K resolution, individual pixels are physically smaller than on a lower-resolution panel of the same size, which can make a single dead or stuck pixel slightly less obvious at a glance and worth a slower, more deliberate scan during testing.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'What’s the difference between LG UltraFine and LG’s other 4K monitors?',
        a: "UltraFine is LG's line historically positioned around Mac compatibility and USB-C connectivity, while LG also sells general 4K IPS monitors outside that sub-brand and 4K gaming models within UltraGear. All use IPS-family panels, but UltraFine's positioning is specifically productivity/creative rather than gaming.",
      },
      {
        q: 'Does a 4K LG monitor need a more powerful graphics card to test properly?',
        a: "The dead pixel test itself is just solid color fullscreen rendering, which is minimal load for any modern graphics hardware regardless of resolution - you don't need a powerful GPU to run the test itself, even though driving 4K content generally for everyday use does benefit from more graphics performance.",
      },
      {
        q: 'Should I test at native 4K resolution or a scaled resolution?',
        a: "Test at your monitor's native 4K resolution if possible, since running at a scaled or lower resolution means the display is upscaling the image, which can make it harder to judge whether a defect is on an individual physical pixel or an artifact of the scaling.",
      },
    ],
  },
  dell_4k: {
    panelTech:
      "Dell's 4K professional monitors are concentrated in the UltraSharp U-series, using IPS or IPS Black panels with factory color calibration aimed at photo, video, and general creative professional work, generally Dell's most color-accuracy-focused monitor tier.",
    commonIssues:
      "On UltraSharp's IPS panels, the standard IPS characteristic of mild corner glow on a dark screen in a dim room applies. At 4K resolution, individual pixels are physically smaller than on a lower-resolution panel of the same size, making a single dead or stuck pixel slightly less obvious at a glance - a slower, more deliberate scan during testing is worth doing on any 4K monitor.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Do all Dell UltraSharp 4K monitors include a factory calibration report?',
        a: "Not universally - factory calibration reporting is a feature Dell markets on specific UltraSharp models rather than the entire U-series line. Check your specific model's product page or included documentation to confirm whether a per-unit calibration report was included.",
      },
      {
        q: 'Is IPS Black the same as standard IPS for pixel-defect purposes?',
        a: "IPS Black is Dell's marketing name for an IPS variant with improved native contrast ratio compared to standard IPS - it doesn't change how dead or stuck pixels are detected, since the underlying pixel structure and testing method are the same as any other IPS panel.",
      },
      {
        q: 'What resolution should the browser be at when testing a 4K Dell monitor?',
        a: "Make sure your browser window is maximized on the 4K display (not a secondary monitor) and that your OS display scaling isn't causing the browser to render at a reduced effective resolution - the fullscreen test works best when it's genuinely filling the native 4K panel.",
      },
    ],
  },
  benq_4k: {
    panelTech:
      "BenQ's 4K professional monitors are split between the SW series (photography-focused, wide gamut, hardware calibration validated against Pantone) and the PD series (general design/professional work), both using IPS panels but with SW models generally carrying tighter color-accuracy validation aimed specifically at photographers.",
    commonIssues:
      "On BenQ's IPS-based SW and PD 4K models, standard IPS glow near the corners on a dark screen in a dim room applies. At 4K resolution, individual pixels are physically smaller than on lower-resolution panels of the same size, which can make a single dead or stuck pixel less obvious at a glance and worth a slower, more deliberate scan.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Should I buy BenQ SW or PD for 4K photo editing?',
        a: "BenQ positions SW specifically for photography with tighter color validation and wider gamut coverage, while PD targets general design and professional work more broadly - if color-critical photography is your primary use, SW is BenQ's more specialized option, but check current model specs since the lineup changes over time.",
      },
      {
        q: 'Does BenQ’s hardware calibration mean my 4K monitor won’t need color testing?',
        a: "Hardware calibration addresses overall color accuracy and consistency, but it's a separate process from checking for dead or stuck pixels, which are individual hardware defects unrelated to color calibration. Running a color-cycling pixel test is still worthwhile even on a calibrated unit.",
      },
      {
        q: 'Is Pantone validation the same as a factory calibration report?',
        a: 'Pantone Validated is a certification indicating the display meets Pantone\'s color-accuracy standards as a product line, which is a different (though related) claim from a per-unit factory calibration report - check your specific model’s documentation to see which applies to your unit.',
      },
    ],
  },
  samsung_4k: {
    panelTech:
      "Samsung's 4K monitors split between gaming-focused models in the Odyssey Neo G-series (using Mini-LED backlit VA panels) and general-purpose or smart-monitor 4K models (the M-series), with panel technology varying more by product line than by resolution alone.",
    commonIssues:
      "On Mini-LED VA models, blooming (a soft halo of light around bright objects on a dark background, from how the Mini-LED backlight is zoned) is the relevant characteristic to distinguish from a dead or stuck pixel - blooming is a backlight effect tied to nearby bright content, while a pixel defect is a single fixed dot unrelated to what's displayed around it. At 4K resolution generally, individual pixels are also physically smaller, making a slower, more deliberate scan worthwhile.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'What is Mini-LED and how is it different from a dead pixel?',
        a: "Mini-LED refers to the backlight technology (many small LED zones behind a VA or IPS panel, allowing more precise local dimming), not the pixels themselves. A Mini-LED artifact called 'blooming' - a halo around bright objects on dark backgrounds - is a backlight effect, while a dead or stuck pixel is a single fixed-color dot on the panel layer itself.",
      },
      {
        q: 'Is Samsung’s M-series 4K smart monitor tested the same way as an Odyssey gaming monitor?',
        a: "Yes, the fullscreen color-cycling test procedure is identical regardless of whether it's a gaming-focused Odyssey model or a general-purpose M-series smart monitor - what differs is the panel technology behind it (Mini-LED VA versus standard VA or IPS), which affects what other characteristics (like blooming) are normal to expect.",
      },
      {
        q: 'Does 4K Odyssey Neo G-series use the same VA panel as non-Mini-LED Odyssey models?',
        a: "No - the Neo G-series pairs VA panel technology with a Mini-LED backlight for more precise local dimming, while Samsung's standard (non-Neo) Odyssey models use VA panels with conventional backlighting. Both are VA at the panel level, but the backlight systems differ significantly.",
      },
    ],
  },

  // ---------------------------------------------------------------------
  // Category pages (not tied to a single brand)
  // ---------------------------------------------------------------------
  portable_monitor: {
    panelTech:
      "Portable monitors, powered and driven over a single USB-C cable, are built almost exclusively on IPS panels at 1080p or 1440p resolution, prioritizing thin, lightweight construction over the higher refresh rates or premium panel technology (VA, OLED) found in desktop monitors, across brands like ASUS ZenScreen, Lenovo, and a wide range of smaller manufacturers.",
    commonIssues:
      "Because portable monitors are thinner and designed to be carried and repeatedly connected/disconnected, it's worth checking the USB-C cable connection and port for reliability issues (like intermittent signal dropout) separately from checking for dead or stuck pixels, since a loose connection can sometimes look like a display problem but is actually a cable or port issue.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Can a flickering portable monitor screen be mistaken for a dead pixel issue?',
        a: "Yes, but they're different problems: flickering across the whole screen usually points to a USB-C power delivery or cable issue, since portable monitors are powered over the same cable as the video signal, while a dead or stuck pixel is a single fixed point that doesn't flicker and stays the same regardless of the rest of the screen.",
      },
      {
        q: 'Does a portable monitor need a laptop with high-wattage USB-C to test properly?',
        a: "Most portable monitors need a certain minimum USB-C power delivery wattage from the connected device to function at all - if the screen won't turn on or is dim/unstable, check your portable monitor's power requirement against what your laptop's USB-C port supplies before assuming it's a panel defect.",
      },
      {
        q: 'Are portable monitors more prone to dead pixels than desktop monitors?',
        a: "There isn't a well-established reason portable monitor panels would have inherently higher defect rates than desktop panels of the same resolution and panel type - the manufacturing process for the LCD panel itself is largely similar. What differs is the thinner, more mobile chassis, which affects durability from handling rather than pixel-level manufacturing.",
      },
    ],
  },
  touchscreen_monitor: {
    panelTech:
      "Touchscreen monitors add a capacitive (or, less commonly, resistive) touch layer on top of a standard IPS, VA, or TN display panel - the touch technology and the underlying panel technology are separate systems, and touch functionality doesn't change what panel type is providing the actual image.",
    commonIssues:
      "Because touchscreen monitors have two separate systems (the display panel and the touch overlay), it's worth checking them independently: a dead or stuck pixel is a display-panel issue, while touch miscalibration, dead zones, or unresponsive touch areas are a separate touch-layer issue that a color-cycling display test won't reveal or affect.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Does a dead pixel test also check touch accuracy?',
        a: "No. The fullscreen color-cycling test only checks the display panel for dead, stuck, or hot pixels - it doesn't test the touch overlay. Touch accuracy and responsiveness need to be checked separately, usually through your OS's touch calibration tool or a dedicated touch-test utility.",
      },
      {
        q: 'Can the touch overlay layer cause visible dots that look like dead pixels?',
        a: "Under normal use, no - the touch overlay is transparent and shouldn't introduce visible artifacts on its own. If you see a fixed-color dot during the color test, it's almost certainly a display panel issue (dead or stuck pixel) rather than something related to the touch layer.",
      },
      {
        q: 'Is the panel technology in a touchscreen monitor different from a non-touch monitor?',
        a: "Not inherently - touchscreen monitors use the same range of panel technologies (IPS, VA, TN) as non-touch monitors, with the touch sensor added as an additional layer on top. The specific panel type varies by model just as it would on a non-touch monitor.",
      },
    ],
  },
  curved_monitor: {
    panelTech:
      'Curved monitors are predominantly built on VA panels, since VA\'s manufacturing process lends itself more easily to curving than IPS, though a smaller number of curved IPS monitors do exist at a typically higher price point. Curve radius (expressed in millimeters, like 1800R or 1000R) varies by model and affects how tight the curve is, independent of panel technology.',
    commonIssues:
      "On VA-based curved monitors, the standard VA trade-off applies: deeper native contrast against more potential dark-scene smearing and viewing-angle color shift. The curve itself can also make brightness or color look slightly different at the edges versus center when viewed off-axis - a gradual, curve-related effect that's distinct from a single fixed dead or stuck pixel.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'What does the "R" number (like 1800R) mean on a curved monitor?',
        a: "The R number describes the curve radius in millimeters - a 1800R monitor, if extended into a full circle, would have an 1800mm radius. Lower numbers mean a tighter curve. It's a physical curvature specification and doesn't indicate panel technology or affect how dead pixel testing works.",
      },
      {
        q: 'Are curved monitors more likely to have dead pixels than flat monitors?',
        a: "There isn't a well-established reason curving a panel during manufacturing would inherently increase individual pixel defect rates - the pixel-level manufacturing process is similar regardless of final curvature. What the curve does affect is edge-to-center uniformity perception, which is a separate consideration from individual dead or stuck pixels.",
      },
      {
        q: 'Should I sit at a specific distance to test a curved monitor properly?',
        a: "Yes - curved monitors are designed for a specific viewing distance where the curve roughly matches your eye's natural field of view. Testing from too close or too far, or at a steep angle, can make normal curve-related brightness variation look more pronounced than it would at the intended viewing position.",
      },
    ],
  },
  ultrawide_monitor: {
    panelTech:
      'Ultrawide monitors (21:9 and wider aspect ratios, commonly 34-49 inches) are predominantly built on IPS panels, chosen for more consistent color across the wider field of view than VA typically provides, though curved VA ultrawides also exist, especially in gaming-focused models.',
    commonIssues:
      "Because ultrawide panels are physically wider than standard 16:9 monitors, there's more panel surface for manufacturing tolerance to vary across - checking brightness and color uniformity across the full width using a solid gray or white fullscreen screen, not just the center, is worth doing in addition to checking for individual dead or stuck pixels.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Is a 49-inch super-ultrawide tested differently than a 34-inch ultrawide?',
        a: "The test procedure is the same regardless of size - cycle through solid colors in fullscreen and scan for pixels that don't match the background. On a larger super-ultrawide, it's worth taking more time and physically scanning across the full width, since it's easier to miss a defect on the far edges of a very wide screen.",
      },
      {
        q: 'Does an ultrawide monitor need a specific graphics card to display properly?',
        a: "Ultrawide resolutions (like 3440x1440 or 5120x1440) require more graphics processing for demanding applications like games, but the dead pixel test itself is just solid-color fullscreen rendering, which is minimal load for any modern GPU regardless of the monitor's aspect ratio or resolution.",
      },
      {
        q: 'Why does my ultrawide monitor look slightly different in brightness at the far left and right edges?',
        a: "Minor brightness variation across a wide panel, especially toward the edges, can occur on any large-format display due to normal backlight and panel manufacturing tolerance. It's a gradual, whole-area effect - different from a dead or stuck pixel, which is a single fixed point unrelated to its position on the panel.",
      },
    ],
  },
  gaming_144hz: {
    panelTech:
      '144Hz sits at the entry-to-midrange tier of gaming refresh rates and is available across TN, VA, and IPS panel types depending on the specific monitor - unlike 240Hz or 360Hz, which lean more heavily toward TN or Fast IPS for response time reasons, 144Hz monitors offer the widest range of panel-type choices for a given budget.',
    commonIssues:
      "Because 144Hz monitors span all three major panel types, what to check for varies by specific panel: TN models show more pronounced viewing-angle color shift, VA models can show dark-scene smearing during fast motion, and IPS models show mild corner glow on a dark screen in a dim room - none of these is the same as a dead or stuck pixel, which is a fixed defect unrelated to panel type or content.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Does refresh rate affect how visible dead pixels are?',
        a: "No. A dead or stuck pixel is a static hardware defect, visible the same way regardless of whether the monitor is running at 60Hz or 144Hz - refresh rate affects how smoothly motion is displayed, not whether individual pixels are functioning correctly.",
      },
      {
        q: 'Should I test at 144Hz or a lower refresh rate?',
        a: "It doesn't matter for dead pixel testing specifically, since the test uses static solid colors rather than motion - test at whatever refresh rate your monitor is currently set to. Refresh rate matters more for evaluating motion clarity, which is a separate consideration from checking for pixel defects.",
      },
      {
        q: 'What panel type should I check for on a 144Hz monitor before buying?',
        a: "144Hz is available on TN (fastest response time, most color/viewing-angle compromise), VA (deeper contrast, some motion smearing), and IPS (best color and viewing angles, slightly slower response than TN) panels - which one suits you depends on whether you prioritize color accuracy, contrast, or the fastest possible response time.",
      },
    ],
  },
  gaming_240hz: {
    panelTech:
      "240Hz gaming monitors have historically leaned toward TN panels for their fast response times, though Fast IPS panels have become increasingly common at this refresh tier as panel technology has improved, offering better color accuracy and viewing angles than TN while still hitting 240Hz. VA panels at 240Hz are less common than at 144Hz.",
    commonIssues:
      'On TN-based 240Hz models, expect more pronounced color and contrast shift at off-center viewing angles - a normal TN characteristic rather than a defect. On Fast IPS 240Hz models, the usual mild corner glow on a dark screen in a dim room applies. Testing while looking straight at the screen (rather than at an angle) gives the most reliable read on actual pixel defects on either panel type.',
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Is a 240Hz monitor more likely to have panel defects than a 144Hz monitor?',
        a: "There isn't a well-established link between refresh rate capability and dead-pixel defect rate - both are separate aspects of panel manufacturing and design. A 240Hz panel isn't inherently more or less prone to individual pixel defects than a 144Hz panel of similar build quality.",
      },
      {
        q: 'Why does TN color look worse than IPS on some 240Hz monitors?',
        a: "TN panels have historically offered the fastest response times, which is why many 240Hz monitors used TN, but TN technology inherently has more color and viewing-angle compromise than IPS. This is a panel-type trade-off rather than a defect, and newer Fast IPS 240Hz models close much of that gap.",
      },
      {
        q: 'Does a 240Hz monitor need special settings enabled to test for dead pixels?',
        a: "No special settings are needed - the fullscreen color test works regardless of whether high refresh rate, G-Sync/FreeSync, or overdrive settings are enabled, since it's checking static pixel behavior on solid colors rather than motion performance.",
      },
    ],
  },
  gaming_360hz: {
    panelTech:
      '360Hz sits at the extreme end of consumer gaming refresh rates, historically dominated by TN panels and more recently by Fast IPS panels engineered specifically to hit that response-time ceiling; OLED options at 360Hz have been more limited industry-wide due to different engineering trade-offs at very high refresh rates, though this changes as panel technology advances.',
    commonIssues:
      "On TN-based 360Hz models, expect more pronounced color and viewing-angle shift than IPS - a normal characteristic of the panel type chosen specifically for response time. On Fast IPS 360Hz models, standard mild corner glow on a dark screen applies. Because 360Hz monitors are a narrow, specialized product category, testing straight-on rather than at an angle gives the clearest read on actual pixel defects.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Who actually needs a 360Hz monitor, and does that affect testing?',
        a: "360Hz monitors are aimed narrowly at competitive esports players in fast-paced titles where minimizing input-to-photon latency matters - the target use case doesn't change how dead pixel testing works, which is the same fullscreen color-cycling process regardless of the monitor's refresh rate ceiling.",
      },
      {
        q: 'Are 360Hz monitors more expensive to replace if they have dead pixels?',
        a: "360Hz monitors are generally priced at a premium over 144Hz or 240Hz models due to the specialized panel engineering required, which is worth knowing when deciding whether to pursue a warranty replacement versus repair, but the pixel-defect policy itself is set by the manufacturer per model, not by the refresh rate specifically.",
      },
      {
        q: 'Does testing a 360Hz monitor for dead pixels require special hardware?',
        a: "No - the browser-based fullscreen color test works on any monitor and any graphics setup capable of displaying a webpage in fullscreen. You don't need to be running the monitor at its full 360Hz to check for dead or stuck pixels, since the test doesn't rely on motion or high frame rates.",
      },
    ],
  },
  professional_monitor: {
    panelTech:
      "Professional monitors overwhelmingly use IPS panels for their consistent color and wide viewing angles, with a growing number of high-end options adopting OLED for deeper contrast, across dedicated professional lines like EIZO ColorEdge, NEC SpectraView, BenQ SW/PD, ASUS ProArt, Dell UltraSharp, and ViewSonic ColorPro - these lines compete primarily on calibration accuracy and consistency rather than panel technology alone.",
    commonIssues:
      "Because professional monitors are marketed on color accuracy, the more relevant quality check beyond individual dead or stuck pixels is brightness and color uniformity across the full screen using a solid gray or white fullscreen test - professional-grade panels are generally held to tighter uniformity tolerances than budget consumer monitors, though this varies by specific model and manufacturer.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'What’s the difference between a professional monitor and a regular office monitor?',
        a: "Professional monitors are typically factory-calibrated for color accuracy (often with a per-unit calibration report), cover a wider color gamut (like AdobeRGB or DCI-P3), and are held to tighter uniformity tolerances than general office monitors, which prioritize cost and basic functionality over calibrated color accuracy.",
      },
      {
        q: 'Does factory calibration mean a professional monitor won’t have dead pixels?',
        a: "No. Factory calibration addresses color accuracy and consistency across the panel - it's a separate process from individual pixel hardware, which can still have manufacturing defects regardless of how well the overall color output is calibrated. It's still worth running a dead pixel test on any newly purchased professional monitor.",
      },
      {
        q: 'How is a professional monitor’s dead pixel policy usually different from a consumer monitor’s?',
        a: "Some professional monitor lines are marketed with stricter pixel-defect policies than general consumer lines from the same manufacturer, reflecting the higher price point and color-critical use case, but this isn't universal - check the specific warranty documentation for your model rather than assuming a stricter policy applies just because it's marketed as professional-grade.",
      },
    ],
  },
  photo_editing_monitor: {
    panelTech:
      'Monitors marketed for photo editing prioritize wide color gamut coverage (commonly AdobeRGB and sRGB, sometimes DCI-P3) on IPS panels with hardware calibration, in lines like BenQ SW, ASUS ProArt, Dell UltraSharp, EIZO ColorEdge, and ViewSonic ColorPro - the panel technology itself is generally the same IPS family used elsewhere, with the differentiator being gamut coverage and calibration accuracy.',
    commonIssues:
      "For photo editing work specifically, brightness and color uniformity across the full screen matters as much as individual dead or stuck pixels, since uneven brightness can visibly throw off how you judge exposure and color balance while editing. Test with a solid gray or white fullscreen screen to check overall uniformity in addition to the standard color-cycling dead pixel test.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'What gamut coverage should I look for in a photo editing monitor?',
        a: 'AdobeRGB coverage (often cited as 95-99% on photo-editing-focused monitors) is the most commonly referenced spec for photography work, since it\'s the color space many photo editing workflows are built around, though sRGB and DCI-P3 coverage are also relevant depending on your specific output format. Check the specific gamut percentages claimed for your model rather than assuming based on the "photo editing" label alone.',
      },
      {
        q: 'Does a wide-gamut monitor make dead pixel testing different?',
        a: "No, the test procedure is the same regardless of gamut coverage - cycle through solid colors in fullscreen and look for pixels that don't match the background. Gamut coverage affects how accurately colors are reproduced overall, not how individual pixel defects appear.",
      },
      {
        q: 'Should I calibrate my photo editing monitor before or after checking for dead pixels?',
        a: "Either order works for the dead pixel check itself, since it doesn't depend on calibration state, but it's generally more efficient to check for dead or stuck pixels first - if you find a defect serious enough to warrant a return, there's little point calibrating a monitor you may be sending back.",
      },
    ],
  },
  video_editing_monitor: {
    panelTech:
      'Monitors marketed for video editing and color grading emphasize wide gamut coverage (DCI-P3 in particular, given its use in film production) and HDR support on IPS or OLED panels, with the highest tier approaching (but generally not matching) dedicated broadcast reference monitors used in professional post-production facilities.',
    commonIssues:
      "For color grading work, brightness and color uniformity across the full screen is worth checking in addition to individual dead or stuck pixels, since uneven brightness can visibly affect how shadows and highlights are judged while grading. On HDR-capable models, it's also worth noting that a monitor's peak-brightness HDR claim doesn't affect how a dead or stuck pixel appears during a standard SDR fullscreen color test.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Is a video editing monitor the same as a broadcast reference monitor?',
        a: "Generally no - consumer and prosumer video editing monitors (even color-accurate ones) are typically a step below dedicated broadcast reference monitors used in professional post-production, which carry far higher price points and even tighter calibration and uniformity guarantees. Video editing monitors aim to approximate that accuracy at a more accessible price.",
      },
      {
        q: 'Does HDR support change how I should test for dead pixels?',
        a: "No - run the standard fullscreen color-cycling test in normal (SDR) mode. HDR mode changes how brightness and contrast are rendered for HDR content specifically, but a dead or stuck pixel is a hardware-level defect that appears the same way regardless of whether HDR is active.",
      },
      {
        q: 'What color space should I check coverage for on a video editing monitor?',
        a: "DCI-P3 coverage is the most commonly referenced spec for video/film work, since it's the standard used in digital cinema, though Rec.709 (broadcast/web video) and Rec.2020 (some HDR workflows) are also relevant depending on your specific deliverable format - check which gamut(s) your target output format actually requires.",
      },
    ],
  },
};

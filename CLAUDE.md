# testascreen.com – projecthandleiding voor Claude

## Wat is dit project?
testascreen.com is een website met gratis browser-testtools:
- Schermtest / dead pixel-test
- Microfoontest
- Toetsenbordtest
- Webcamtest
- Click speed-test
- Tweedehands-check (begeleide test voor gebruikte laptops/monitors, verzamelt e-mailadressen via Brevo)

Doelen van de site: veel organisch verkeer uit Google, inkomsten via Google AdSense,
en een e-maillijst opbouwen via de tweedehands-check.

## Tech stack
- Next.js + React
- Tailwind CSS
- Gehost op Vercel
- <!-- VUL IN: App Router of Pages Router? TypeScript of JavaScript? -->

## Commando's
<!-- Controleer deze in package.json en pas aan indien nodig -->
- `npm run dev` – lokale ontwikkelserver
- `npm run build` – productiebuild (moet altijd slagen)
- `npm run lint` – linting (moet altijd slagen)

## Mappenstructuur
<!-- VUL IN of laat Claude dit aanvullen na /init -->
- Elke tool heeft een eigen route/pagina
- Gedeelde UI-componenten in /components
- Herbruikbare logica (hooks, helpers) in /lib of /hooks

## Werkregels
1. **Eerst lezen, dan bouwen.** Bekijk bestaande code en volg dezelfde stijl en structuur.
2. **Eerst een plan.** Leg bij grotere taken eerst kort uit wat je gaat doen en wacht op akkoord.
3. **Kleine stappen.** Eén taak per keer, geen ongevraagde refactors van andere onderdelen.
4. **Geen nieuwe dependencies** zonder het eerst te vragen.
5. **Controleer je werk.** Draai na elke wijziging `npm run build` en `npm run lint` en los fouten zelf op.
6. **Samenvatting.** Sluit af met een korte lijst van gewijzigde bestanden en wat er veranderd is.

## Frontend-richtlijnen
- **Mobile-first:** ontwerp eerst voor kleine schermen, schaal op met Tailwind-breakpoints (sm, md, lg).
- **Toegankelijkheid:** semantische HTML (button, nav, main, h1–h3), alt-teksten, labels bij formulieren, alles bedienbaar met toetsenbord, voldoende kleurcontrast.
- **Componenten:** klein en herbruikbaar, één component per bestand, duidelijke namen.
- **Styling:** alleen Tailwind-classes, geen losse CSS-bestanden of inline styles tenzij echt nodig.
- **Interactiviteit:** browser-API's (camera, microfoon, toetsenbord, schermkleuren) alleen in client components. Uitleg- en SEO-tekst blijft server-side gerenderd.
- **Permissies:** vraag camera/microfoon pas toegang na een klik van de gebruiker, en toon een duidelijke melding als toegang geweigerd wordt of niet ondersteund is.
- **Privacy:** testdata (beeld, geluid) blijft altijd in de browser en wordt nergens naartoe gestuurd. Vermeld dit ook zichtbaar op de pagina.

## SEO-regels (belangrijk voor deze site)
- Gebruik de Next.js Metadata API: elke pagina een unieke title en meta description.
- Precies één H1 per pagina, met het hoofdzoekwoord.
- Elke toolpagina: tool bovenaan, daaronder uitleg, stappenplan, veelvoorkomende problemen en een FAQ.
- JSON-LD structured data (WebApplication, FAQPage, BreadcrumbList) waar van toepassing.
- Interne links: broodkruimels + blok "Gerelateerde tests" op elke toolpagina.
- Gebruik next/image en next/font; voorkom layout shift.

## AdSense
- Reserveer altijd vaste ruimte (min-height) voor advertentieblokken, zodat de layout niet verspringt (CLS).
- Plaats advertenties nooit zo dat ze de tool zelf verdringen of per ongeluk aangeklikt worden.

## Taal en toon
- Volg de taal van de bestaande pagina's.
- Schrijf helder en vriendelijk, voor gewone gebruikers zonder technische kennis.
- Geen keyword-stuffing: schrijf voor de lezer, niet voor Google.

## Niet doen
- Geen API-keys of geheimen in de code; gebruik environment variables.
- Niet zelf deployen of naar main pushen; eerst vragen aan de eigenaar.
- Geen bestaande URL's wijzigen zonder 301-redirect.

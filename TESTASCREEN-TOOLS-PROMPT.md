# Opdracht: testascreen.com uitbreiden met vier hardware-testtools

## Context
testascreen.com is een live site met een schermtest / dead pixel-tool, gebouwd met **Next.js, React en Tailwind CSS**, gehost op **Vercel**. Het verkeer groeit.

We voegen vier nieuwe tools toe: **Mic Test, Keyboard Test, Webcam Test en Click Speed Test**. Doelen:
- Meer organisch verkeer via Google: elke tool krijgt een eigen, sterke pagina
- Klaar zijn voor Google AdSense-goedkeuring (unieke content, heldere navigatie, beleidspagina's)
- Inkomsten via advertenties en affiliate-links
- Minimaal onderhoud: alles draait in de browser, geen backend, geen database, geen accounts
- De site moet **sneller** worden, niet trager

Alle paginateksten staan onderaan dit document en zijn definitief. Gebruik ze letterlijk. Je mag ze alleen aanpassen om ze technisch te laten kloppen met wat je bouwt (bijvoorbeeld de naam van een knop).

---

## Stap 0: eerst analyseren, NIET direct bouwen

Onderzoek de codebase en rapporteer:
1. Next.js-versie, en of de site de **App Router** of de **Pages Router** gebruikt
2. Mappenstructuur, gedeelde layout/componenten, en hoe de huidige schermtest is opgebouwd
3. Tailwind-config: kleuren, fonts, dark mode, eigen componenten
4. Bestaande SEO: metadata, sitemap, robots, structured data, canonical tags
5. Of er al AdSense-code, een consent/cookie-oplossing en een privacybeleid-pagina zijn, en hoe die geladen worden
6. De taal van de site. De teksten hieronder zijn Engels. Is de site Nederlands, meld dat dan eerst voordat je iets doet
7. Huidige performance: draai een production build en noteer de bundle-grootte per route. Noem de drie grootste snelheidsproblemen die je ziet

Doe daarna een concreet voorstel voor bestanden, componenten en URL's. **Wacht op mijn akkoord.**

---

## Harde regels
- Werk op een aparte git-branch. Eén tool per keer: bouwen, testen, committen, dan pas de volgende
- De bestaande schermtest blijft inhoudelijk werken zoals nu. Alleen gedeelde layout/navigatie mag veranderen
- Volg de bestaande huisstijl. Je mag het design verbeteren (strakker, rustiger, sneller), maar het moet één consistente site blijven
- Geen nieuwe runtime-dependencies tenzij onvermijdelijk. Gebruik standaard browser-API's (getUserMedia, Web Audio, KeyboardEvent, MediaStreamTrack.getSettings)
- Alles gebeurt lokaal in de browser. Niets wordt geüpload of opgeslagen, behalve de beste click-score in localStorage
- Toegankelijk: bedienbaar met toetsenbord, zichtbare focus, aria-labels, voldoende contrast
- Geen emoji's, geen stockfoto's, geen onnodige animaties

---

## Performance-eisen (Next.js / Vercel)
Streefwaarden op mobiel: **LCP < 2,0 s, CLS < 0,05, INP < 200 ms, Lighthouse 95+** op Performance, SEO, Accessibility en Best Practices.

- Alle toolpagina's worden **statisch gegenereerd** (geen server-side rendering per request). App Router: server components voor alles behalve de tool zelf
- Alleen het interactieve deel van een tool is een client component (`"use client"`). Tekst, FAQ, links en JSON-LD blijven server-rendered HTML
- Laad de tool met `next/dynamic` alleen als dat de first load JS merkbaar verkleint. Reserveer altijd de juiste hoogte zodat er niets verspringt
- Fonts via `next/font` (self-hosted, `display: swap`), maximaal 2 gewichten
- AdSense via `next/script` met `strategy="lazyOnload"`. Advertentieplekken krijgen een vaste min-height zodat ze geen layout shift veroorzaken
- Geen iconenbibliotheek importeren voor een paar iconen: inline SVG
- De keyboard-layoutdata is een statische TypeScript-array, geen JSON die apart wordt opgehaald
- Metadata via de Metadata API (`export const metadata` / `generateMetadata`), sitemap via `app/sitemap.ts` (of het equivalent in de Pages Router)
- Controleer na afloop de bundle-grootte per route opnieuw en rapporteer voor/na
- Pak de drie snelheidsproblemen uit stap 0 aan, als dat kan zonder de bestaande schermtest te breken. Overleg eerst bij grotere ingrepen

---

## Gedeelde opbouw van elke toolpagina
Maak één herbruikbaar `ToolPage`-layoutcomponent:

1. **H1** + één korte intro-zin (uit de teksten hieronder)
2. **De tool zelf**, direct zichtbaar zonder scrollen, ook op mobiel
3. Advertentieplek 1 (onder de tool, **nooit** erboven of erin)
4. De uitlegtekst (H2/H3 zoals aangegeven)
5. **Affiliate-blok** (tekst hieronder)
6. **FAQ** als uitklapbare items (`<details>`, geen JavaScript nodig)
7. Advertentieplek 2
8. **"Other tests"**: kaarten naar alle andere tools, inclusief de schermtest

Per pagina verder:
- `title`, `description`, canonical, Open Graph en Twitter card (teksten hieronder)
- JSON-LD: `WebApplication` (applicationCategory `UtilitiesApplication`, offers price 0) en `FAQPage` met exact de FAQ-teksten van de pagina
- Maximaal 2 advertentieplekken per pagina

### Affiliate-configuratie
Maak één bestand, bijvoorbeeld `lib/affiliates.ts`, met per tool 2–3 producten: naam, korte omschrijving, URL, en een `enabled`-vlag. Zolang er geen URL is ingevuld, wordt het blok niet getoond. Links krijgen `rel="sponsored nofollow noopener"` en `target="_blank"`.

---

## Functionele specificaties

### 1. Mic Test — `/mic-test`
- Toegang pas vragen na klik op **Start microphone test** (nooit automatisch)
- Live volumemeter (horizontale balk met een groene, gele en rode zone) en een eenvoudige live golfvorm op canvas
- Dropdown met invoerapparaten (`enumerateDevices`), gevuld na toestemming; wisselen werkt zonder herladen
- Knop **Record 5 seconds**: opnemen met MediaRecorder, daarna direct lokaal afspelen via een blob-URL. Niets opslaan, URL vrijgeven na gebruik
- Knop **Stop**: stopt alle tracks (het microfoonlampje van de browser moet uitgaan)
- Duidelijke meldingen (teksten hieronder) bij: toestemming geweigerd, geen apparaat, apparaat in gebruik, geen HTTPS, browser niet ondersteund
- Stop alle tracks bij het verlaten van de pagina

### 2. Keyboard Test — `/keyboard-test`
- Visueel toetsenbord, standaard **ANSI** (US), met een toggle naar **ISO** (Europees, extra toets naast linker Shift en een hoge Enter)
- Kleuren: **ingedrukt** (accentkleur), **getest** (groen), niet getest (neutraal)
- Onder het toetsenbord: `event.key`, `event.code` van de laatste toets, en **hoe vaak** die toets is ingedrukt
- Teller "X of Y keys tested" en een **Reset**-knop
- Tijdens de test: `preventDefault` op spatie, Tab, pijltjes, F-toetsen waar mogelijk, Backspace en `/`, zodat de pagina niet scrolt of focus verliest. Laat een klik buiten het toetsenbord de test pauzeren, met de tekst "Click the keyboard to continue testing"
- Aparte weergave voor numpad (inklapbaar op kleine schermen)
- Op mobiel: toon de tekst voor mobiel (hieronder) boven een verkleinde weergave

### 3. Webcam Test — `/webcam-test`
- Start na klik op **Start webcam test**
- Live preview, standaard **gespiegeld**, met een toggle **Mirror preview**
- Dropdown met camera's; wisselen zonder herladen
- Vraag de hoogst mogelijke resolutie aan (ideal 1920×1080) en toon wat de camera **echt** levert: resolutie en framerate uit `track.getSettings()`. Meet de werkelijke framerate ook zelf via `requestVideoFrameCallback` waar beschikbaar, en toon die live
- Knop **Take a snapshot**: maakt een PNG via canvas en biedt die als download aan. Niets uploaden
- Knop **Stop**, en alle tracks stoppen bij verlaten van de pagina
- Zelfde foutafhandeling als de Mic Test

### 4. Click Speed Test — `/click-speed-test`
- Keuze voor de duur: **1, 5, 10 en 30 seconden** (standaard 5)
- De timer start bij de **eerste klik** in het klikvlak
- Live teller van klikken en resterende tijd. Na afloop: CPS met 2 decimalen, totaal aantal klikken, en een korte beoordeling (zie teksten)
- Het klikvlak is 1,5 seconde na afloop geblokkeerd, zodat een late klik niet direct een nieuwe test start
- Beste score per duur opslaan in localStorage (met try/catch; als opslag faalt werkt de test gewoon)
- Gebruik `pointerdown` in plaats van `click` voor nauwkeurigheid; werkt ook met touch
- **AdSense: minimaal 150 px afstand tussen klikvlak en welke advertentie dan ook.** Nooit een advertentie direct onder of naast het klikvlak

---

## Site-brede aanpassingen
- **Navigatie**: link naar alle vijf tools (Screen Test, Mic Test, Keyboard Test, Webcam Test, Click Speed Test)
- **Homepage**: voeg de sectie "All tests" toe (tekst hieronder), met een kaart per tool
- **Sitemap**: alle nieuwe pagina's toevoegen
- **Privacybeleid**: voeg de sectie toe die hieronder staat
- **Consent**: AdSense vereist voor bezoekers uit de EER een door Google gecertificeerd consent-platform (CMP). Controleer of dat er is. Ontbreekt het: meld het en doe een voorstel. Bouw geen eigen cookiebanner zonder overleg
- **404-pagina**: als die er niet is, maak er een die naar alle tools linkt

---

## Testen voordat je iets als klaar meldt
- Chrome, Firefox en Safari op desktop; Chrome op Android en Safari op iPhone (of via device-emulatie)
- Alle foutsituaties: toestemming geweigerd, geen apparaat, apparaat in gebruik door een andere app
- Microfoon- en cameralampje gaan uit na Stop en na het verlaten van de pagina
- `next build` zonder fouten of waarschuwingen, geen console-errors
- JSON-LD valideren (geldige JSON, juiste schema-types, FAQ komt exact overeen met de pagina)
- Lighthouse op mobiel per pagina; rapporteer de scores

## Oplevering per tool
Kort overzicht: aangemaakte en gewijzigde bestanden, hoe ik het lokaal test, Lighthouse-scores, en wat ik zelf nog moet invullen (affiliate-links, AdSense-slot-ID's).

## Als je zelf extra tekst moet schrijven
Bijvoorbeeld een foutmelding die hieronder ontbreekt: schrijf zoals de teksten hieronder. Kort, direct, met de lezer als "you". Geen marketingtaal en geen zinnen als "in today's digital world", "seamless", "unlock", "dive into" of "look no further". Liever één concrete tip dan drie algemene.

---
---

# PAGINATEKSTEN (definitief, letterlijk gebruiken)

---

## MIC TEST — `/mic-test`

**Title:** Mic Test – Check Your Microphone Online (Free & Private)
**Meta description:** Test your microphone in seconds. See live input levels, record a short clip and hear yourself back. Nothing is uploaded, it all runs in your browser.

**H1:** Microphone Test

**Intro:** Click Start, allow microphone access and say something. If the bar moves, your mic works. Everything happens in your browser, so we never hear or store a thing.

**Foutmeldingen:**
- *Toestemming geweigerd:* Your browser blocked the microphone. Click the lock or mic icon in the address bar, set Microphone to Allow, then reload the page.
- *Geen apparaat:* No microphone found. If you're using a headset or USB mic, unplug it, plug it back in and try again.
- *In gebruik:* Another app is using your microphone. Close Zoom, Teams, Discord or anything else that might have it open, then try again.
- *Geen HTTPS / niet ondersteund:* Your browser doesn't allow microphone access here. Try the latest version of Chrome, Edge, Firefox or Safari.

### How to read the result
The bar shows how loud your microphone hears you. Talk at a normal volume from about an arm's length away and you want it bouncing around the middle. Barely moving? Your input level is too low, or the browser picked a different mic than the one you're talking into. Constantly hitting the red? It's set too high, and people on your calls will hear distortion.

The meter only tells you that sound is coming in, not whether it sounds good. For that, hit **Record 5 seconds** and listen back. Five seconds of your own voice will reveal what a meter can't: background hiss, an echo from a bare room, or that muffled sound you get when a headset mic is pointing at your cheek.

### Mic not picked up at all?
Start with the browser. If you ever clicked "Block" on a permission pop-up, the site stays blocked until you change it yourself. Look for the small lock or microphone icon in the address bar. Then check the dropdown above the meter. A laptop with a headset plugged in can easily list three or four inputs, and the default isn't always the one you're using.

**Windows 10 and 11.** Open Settings > Privacy & security > Microphone and make sure microphone access is on, including access for desktop apps. Then go to Settings > System > Sound, pick your mic under Input and check its volume. A very common culprit is another app holding on to the mic. Discord, Teams and Zoom can all do this, even when they're minimized. Close them fully and test again.

**macOS.** Open System Settings > Privacy & Security > Microphone and switch your browser on. If you only just did that, quit the browser completely with Cmd+Q and open it again. macOS doesn't apply the change to an app that's already running.

**Android and iPhone.** On Android, long-press your browser's icon, tap App info > Permissions > Microphone. On iPhone, open Settings, find Chrome or Safari and check that Microphone is allowed.

### Bluetooth headset sounds terrible?
Your headset probably isn't broken. As soon as a Bluetooth headset uses its microphone, most computers switch it to a hands-free mode that drops the audio quality to phone-call level. Your voice sounds like it's coming through a tin can, and music playing at the same time suddenly sounds flat. It's a limitation of how Bluetooth handles audio in both directions. A wired headset or a USB microphone doesn't have this problem.

### What happens with your audio
Nothing leaves your device. The meter and the recording are handled entirely by your browser, and the recording is gone the moment you refresh or close the page.

**FAQ**
- **Is this mic test safe to use?** Yes. The test runs completely in your browser. Your audio isn't uploaded, saved or sent anywhere, and the recording disappears when you leave the page.
- **Why is my microphone so quiet?** Usually one of three things: the input volume is set low in your system settings, you're too far from the mic, or the browser is using a different microphone than you think, like the built-in laptop mic instead of your headset. Pick the right one in the dropdown and check the input volume.
- **My mic works here but not in Zoom or Teams. Why?** Every app has its own microphone setting. Open the audio settings in Zoom or Teams and select the same microphone that worked in this test.
- **Can I test my microphone on my phone?** Yes. Open this page in your phone's browser, tap Start and allow access. It works on Android and iPhone.
- **Why does my browser ask for permission?** Browsers never let a website use your microphone without asking first. That's a good thing. You can withdraw the permission at any time through the icon in the address bar.

**Affiliate-blok**
**Heading:** Is your microphone letting you down?
**Tekst:** If your mic is quiet, noisy or cutting out and the settings above didn't fix it, a decent USB microphone is often a cheaper fix than you'd expect. These are the ones we'd look at.

---

## KEYBOARD TEST — `/keyboard-test`

**Title:** Keyboard Test – Check Every Key Online
**Meta description:** Press every key and see which ones work. Find dead keys, double presses and ghosting in seconds. Works with laptop, mechanical and Mac keyboards.

**H1:** Keyboard Test

**Intro:** Press every key on your keyboard. Each key lights up while you hold it and turns green once it's tested, so you can see at a glance which ones never registered.

**Tekst voor mobiel:** This test is made for physical keyboards. If you have one connected to your phone or tablet, go ahead. Otherwise, open this page on a computer.

### What you're looking at
A key lights up while you hold it down and stays green once it's been tested. Below the keyboard you'll see the name and code of the last key you pressed, plus how many times you've pressed it.

The code is more useful than it looks. It tells you which physical key your computer thinks you pressed, whatever language layout you use. On an AZERTY or German keyboard, the letters on screen might not match the caps on your keys, but the codes will still line up with the right position.

### A key doesn't light up
First rule out software. Try the same key in a plain text editor like Notepad or TextEdit. If it's dead there too, the problem is the keyboard itself.

On a laptop, pay attention to the pattern. When a whole row or a block of keys fails at the same time, that usually points to the internal connector rather than the individual keys. That's a repair job. A single dead key on a mechanical keyboard is often just dust under the switch. On keyboards with hot-swap sockets, the switch may also have come loose slightly. Pull it out and push it back in firmly.

### A key types twice
This is called chattering. You press once and the computer registers two presses. It's caused by a worn or faulty switch and it's common on mechanical keyboards after a few years of use.

You can check it here. Tap the suspicious key slowly, ten times, and watch the counter below the keyboard. If it says 12 or 13, you've found your problem. Blowing compressed air under the key sometimes helps. Otherwise the switch needs replacing, or you're looking at a new keyboard.

### Keys don't register when pressed together
Hold down several keys at once and see how many light up. Cheaper keyboards often can't handle certain combinations of three or more keys. That's called ghosting, and it matters mostly in games where you hold movement keys while pressing something else. Keyboards advertised with "N-key rollover" (NKRO) should show every key you hold.

### Keys doing something strange
Before you blame the hardware, check a few settings that catch people out all the time:
- **F-keys change the volume or brightness instead.** Your keyboard's Fn lock is on. On many laptops you toggle it with Fn + Esc.
- **Keys respond slowly or not at all on Windows.** Filter Keys may be turned on. Search for "Filter Keys" in the Start menu and switch it off.
- **The numpad moves the cursor instead of typing numbers.** Num Lock is off.

**FAQ**
- **Does this work with Mac keyboards?** Yes. Command, Option and Control all register. Some Mac-specific function keys, such as brightness and Mission Control, are handled by macOS itself and never reach the browser.
- **Why doesn't the Fn key light up?** The Fn key is handled inside the keyboard itself and never sent to your computer. No website can detect it. That's normal, not a fault.
- **Does this test record what I type?** No. Keys are only shown on the screen while you test. Nothing is saved or sent anywhere.
- **Can I test my laptop keyboard?** Yes, this works exactly the same for laptop keyboards. It's a quick way to check a second-hand laptop before you buy it.
- **What's the difference between ANSI and ISO?** They're the two most common physical layouts. ANSI is standard in the US and has a wide, flat Enter key. ISO is common in Europe and has a tall Enter key plus an extra key next to the left Shift. Pick the one that matches your keyboard.

**Affiliate-blok**
**Heading:** Time for a new keyboard?
**Tekst:** Keys that chatter, stick or give up entirely usually won't recover. If your keyboard is a few years old, replacing it is often less hassle than repairing it. Here are a few we'd consider.

---

## WEBCAM TEST — `/webcam-test`

**Title:** Webcam Test – Check Your Camera Online (Free & Private)
**Meta description:** Check your webcam in seconds. See the live picture plus the real resolution and frame rate your camera delivers. Nothing is uploaded or recorded.

**H1:** Webcam Test

**Intro:** Click Start and allow camera access. You'll see your live picture, plus the resolution and frame rate your camera is actually delivering right now.

**Foutmeldingen:**
- *Toestemming geweigerd:* Your browser blocked the camera. Click the lock or camera icon in the address bar, set Camera to Allow, then reload the page.
- *Geen apparaat:* No camera found. Check that it's plugged in, or that the privacy shutter or camera key on your laptop isn't blocking it.
- *In gebruik:* Another app is using your camera. Close Zoom, Teams, Skype or any other video app and try again.
- *Niet ondersteund:* Your browser doesn't allow camera access here. Try the latest version of Chrome, Edge, Firefox or Safari.

### What the numbers mean
The resolution and frame rate shown are what your camera is sending to the browser right now, not what's printed on the box. They can be lower than advertised without anything being wrong.

The most common reason is light. In a dim room, a webcam keeps its shutter open longer to catch enough light, and that directly lowers the frame rate. A camera that does 30 frames per second in daylight can drop to 15 in the evening, and the video starts to look choppy. Plugging a webcam into a USB hub or a busy port can also limit the resolution it's able to send.

### Black screen or no camera found
Check the physical stuff first, because it's the cause more often than you'd think. Many laptops have a small sliding privacy shutter over the lens. Others have a key with a camera icon that switches the camera off entirely.

After that, close every other app that might be using the camera. On Windows, usually only one app can use the webcam at a time. If Teams is running in the background, your browser gets a black screen.

**Windows 10 and 11.** Open Settings > Privacy & security > Camera and make sure camera access is on, including access for desktop apps.

**macOS.** Open System Settings > Privacy & Security > Camera and switch your browser on. Then quit the browser completely with Cmd+Q and open it again.

On a work laptop, your IT department may have blocked the camera for certain apps. In that case, this test won't be able to fix it for you.

### Picture grainy, dark or blurry?
Light again, nine times out of ten. Webcam sensors are tiny. In a dim room the camera turns up its sensitivity to compensate, and that's where the grain comes from. Sit facing a window or a lamp. Light from behind you turns you into a silhouette.

Blurry or hazy? Wipe the lens. A laptop camera sits right where you grab the lid, so it collects fingerprints faster than you'd think.

Strange colours usually come from mixed lighting, like daylight on one side and a warm lamp on the other. The camera can't decide which one is "white". Use one type of light and the colours settle down.

### What happens with your video
Nothing leaves your device. The picture is shown by your browser and goes nowhere else. Snapshots are only created on your own device when you click the button, and you decide whether to save them.

**FAQ**
- **Is this webcam test safe?** Yes. Your video is only shown in your own browser. It isn't recorded, uploaded or stored, and the camera switches off when you click Stop or leave the page.
- **Why is my picture mirrored?** The preview is mirrored by default, like looking in a mirror, because that feels most natural. In most video call apps, others see you the right way round. You can switch mirroring off with the toggle.
- **Why is my frame rate lower than advertised?** Usually because of low light: the camera needs more time per frame to catch enough light. More light in the room almost always fixes it. A USB hub can also be the bottleneck.
- **Can I test the camera on my phone?** Yes. Open this page in your phone's browser, tap Start and allow access. If your phone has several cameras, you can switch between them in the dropdown.
- **My camera works here but not in Zoom or Teams. What now?** Check which camera is selected in that app's video settings. Also make sure the browser isn't still using it: stop this test or close the tab first.

**Affiliate-blok**
**Heading:** Built-in camera not good enough?
**Tekst:** Most laptop cameras are fine for a quick call, but they struggle in anything other than good light. An external webcam is one of the cheapest upgrades for how you look on video. These are worth a look.

---

## CLICK SPEED TEST — `/click-speed-test`

**Title:** Click Speed Test (CPS Test) – How Fast Can You Click?
**Meta description:** Test your clicks per second in 1, 5, 10 or 30 seconds. Track your best score, learn clicking techniques and find out if your mouse is double clicking.

**H1:** Click Speed Test

**Intro:** Pick a duration and start clicking in the box. The timer starts with your first click.

**Tekst in het klikvlak:** Click here to start
**Na afloop, beoordeling per CPS:**
- Onder 5: Warming up. Try again, you've got more in you.
- 5 tot 8: Right around average. Solid.
- 8 tot 11: Faster than most people. Nice.
- 11 tot 14: That's seriously quick.
- 14 en hoger: Either you've got a technique, or your mouse is double clicking. Read on below.

### What's a good score?
Most people clicking normally land somewhere between 6 and 8 clicks per second. Get above 10 and you're clearly faster than average. Beyond that, it's usually technique rather than raw finger speed.

The duration makes a big difference. On the 1-second test you can go all out, so scores come out high. On 10 or 30 seconds your hand gets tired and your number drops. The longer tests are a fairer measure of how fast you can keep it up, which is what counts in most games.

### Clicking techniques
**Jitter clicking.** You tense your forearm until your hand starts to vibrate and your finger taps along with it. Most people reach 10 to 14 CPS this way. It's tiring and puts real strain on your wrist, so don't do it for long.

**Butterfly clicking.** Two fingers take turns clicking the same button, usually index and middle finger. Easier to keep up than jitter clicking, and it can reach higher scores.

**Drag clicking.** You slide a finger across the mouse button so the friction makes it bounce very quickly. This can produce extreme numbers, but it depends heavily on the mouse. On some mice it simply doesn't work.

Whatever you try, take breaks. Some games and servers also limit or flag very high click speeds, so check the rules before you use these techniques there.

### Score suspiciously high?
If a single slow click sometimes counts as two, it's not you. It's your mouse. The switch under the button wears out over time and starts sending two signals for one press. It's one of the most common mouse faults, even on expensive gaming mice. Click slowly ten times and count along with the counter. If the numbers don't match, the switch is going.

**FAQ**
- **What does CPS mean?** Clicks per second: the number of times you click, divided by the number of seconds in the test.
- **What is the average CPS?** Most people clicking normally score between 6 and 8 CPS. Above 10 is fast, and with a technique like jitter or butterfly clicking you can go considerably higher.
- **Is my best score saved?** Yes, but only on this device and in this browser. We don't store anything on a server, so if you clear your browser data or switch devices, your best score starts from zero.
- **Does it work on a phone or tablet?** Yes. Tapping the box counts the same as clicking. Scores on touch screens are usually a bit lower than with a mouse.
- **Does my mouse affect my score?** A little. A light, responsive switch makes fast clicking easier, and for drag clicking the surface of the button matters a lot. But practice and technique make far more difference than the mouse itself.

**Affiliate-blok**
**Heading:** Mouse double clicking or wearing out?
**Tekst:** A worn switch won't fix itself, and it only gets worse. If your mouse registers clicks you didn't make, these are solid replacements for gaming and everyday use.

---

## HOMEPAGE — sectie "All tests"

**Heading:** All tests
**Intro:** Quick, free checks for the hardware you use every day. No downloads, no sign-up, and nothing leaves your browser.

**Kaarten:**
- **Screen Test:** Find dead pixels, stuck pixels and backlight bleed on any screen.
- **Mic Test:** See if your microphone picks you up, and hear how you actually sound.
- **Keyboard Test:** Press every key and spot the ones that don't work or type twice.
- **Webcam Test:** Check your camera's picture, resolution and real frame rate.
- **Click Speed Test:** Measure your clicks per second and see if your mouse double clicks.

---

## PRIVACYBELEID — toe te voegen sectie

**Heading:** Microphone, camera and keyboard tests

Our microphone, webcam and keyboard tests run entirely in your browser. Audio, video and keystrokes are processed on your own device and are never uploaded, recorded on our servers, or shared with anyone.

Your browser asks for permission before a test can use your microphone or camera. You can withdraw that permission at any time through the settings in your browser's address bar. The microphone and camera switch off as soon as you stop the test or leave the page.

A short recording made with the Mic Test, or a snapshot made with the Webcam Test, exists only in your browser's memory. It disappears when you refresh or close the page, unless you choose to download it yourself.

The Click Speed Test stores your best score in your browser's local storage, on your device only. You can remove it by clearing your browser data.

---

## 404-PAGINA (als die nog niet bestaat)

**Heading:** This page doesn't exist
**Tekst:** The link might be old, or there's a typo in the address. Here's what you can test instead:
[kaarten van alle tools]

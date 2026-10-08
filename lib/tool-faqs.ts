// lib/tool-faqs.ts - FAQ for each screen tool, rendered by GuideSection and
// mirrored word for word in its FAQPage JSON-LD. The hardware tests keep their
// FAQ in their own page file (see components/hardware/tool-page.tsx).

import type { Faq } from './tool-schema';

export const TOOL_FAQS: Record<string, Faq[]> = {
  'dead-pixel-test': [
    {
      question: 'What is the difference between a dead, stuck and hot pixel?',
      answer:
        'A dead pixel never lights up, so it shows as a black dot on every color. A stuck pixel has one or two subpixels that stay on, so it shows as a red, green, blue, cyan, magenta or yellow dot. A hot pixel is stuck on all three subpixels and shows as a white dot, most visible on black.',
    },
    {
      question: 'Can dead pixels be fixed?',
      answer:
        'A truly dead pixel is a hardware fault and cannot be repaired in software. Stuck pixels are different: they are lit but not responding, and rapidly flashing colors over them with the Dead Pixel Fixer sometimes gets them working again.',
    },
    {
      question: 'How many dead pixels are acceptable on a new monitor?',
      answer:
        'It depends on the manufacturer. Each brand publishes a pixel policy, often based on ISO 9241-307 classes, that says how many bright and dark pixel defects it accepts before replacing a panel. Some premium lines promise zero bright pixels, budget lines often allow a few. Your retailer\'s return window is usually more generous than the warranty, so test straight away.',
    },
    {
      question: 'Why should I run the test in full screen?',
      answer:
        'Without full screen, the browser bars and taskbar cover the top and bottom of the panel, and defects near the edges are easy to miss. Full screen also removes everything else from view so a single wrong-colored dot stands out.',
    },
    {
      question: 'I found a dot, but it moved when I wiped the screen. What was it?',
      answer:
        'Dust or a smudge on the surface. Pixel defects stay in exactly the same spot and look sharp from every angle. Clean the screen with a dry microfibre cloth before you test, and check any suspicious dot again afterwards.',
    },
    {
      question: 'Can I test a phone, tablet or TV?',
      answer:
        "Yes. Open this page in the device's browser and tap Start. For a TV, use its built-in browser or connect a laptop over HDMI and run the test in full screen on the TV.",
    },
  ],

  'white-screen': [
    {
      question: 'How do I make my whole screen white?',
      answer:
        "Click the white area or press F or Space. The page switches to full screen and hides the browser bars and taskbar. Press Esc to go back. On an iPhone, Safari doesn't let web pages go full screen, so the address bar stays visible.",
    },
    {
      question: 'Can a white screen fix a dead pixel?',
      answer:
        'No. A white screen only helps you find dead pixels. A dead pixel has no working subpixels, so nothing on the screen can switch it back on. If a dot is colored rather than black, it is a stuck pixel, and the Dead Pixel Fixer may help.',
    },
    {
      question: 'Why does my white screen look blue or yellow?',
      answer:
        "Usually because of a setting, not the panel. Night Light on Windows, Night Shift and True Tone on Apple devices, and the monitor's own color temperature preset all shift white towards yellow or blue. Turn them off before judging the white point.",
    },
    {
      question: 'Why are the edges darker than the middle?',
      answer:
        'Most LCD monitors are a little dimmer at the edges and corners, because of how the backlight is spread across the panel. A gentle fall-off is normal. A clearly darker band or patch that you also notice in everyday use is worth reporting while you can still return the monitor.',
    },
    {
      question: 'Is it bad to leave a white screen on for a long time?',
      answer:
        'On an LCD it does no harm. On an OLED, an evenly white image wears all pixels at the same rate, so it does not cause burn-in the way a static logo does, but it runs the panel at high power and heat. Keep sessions short and brightness moderate.',
    },
    {
      question: 'Can I use a white screen as a light?',
      answer:
        'Yes, a bright white screen makes a soft fill light for photos and video calls. For calls, the Video Call Light page adds warm and cool presets and a brightness slider, which usually looks more natural than pure white.',
    },
  ],

  'black-screen': [
    {
      question: "Why isn't my black screen completely black?",
      answer:
        'On an LCD monitor the backlight stays on behind the panel, and the liquid crystals cannot block all of it. Typical IPS panels reach a contrast of around 1000:1, so black looks dark grey in a dark room. VA panels get closer to black, and OLED screens switch pixels off completely.',
    },
    {
      question: 'I see a bright dot on the black screen. What is it?',
      answer:
        'A lit dot on black is a stuck or hot pixel: a subpixel that stays on when it should be off. Switch to the red, green and blue screens to see which color it is, then try the Dead Pixel Fixer on that spot.',
    },
    {
      question: 'What is the difference between backlight bleed and IPS glow?',
      answer:
        'Backlight bleed is light leaking at the edges, and it stays in the same place when you move your head. IPS glow is a haze in the corners that changes with your viewing angle, and it is a normal property of IPS panels. The Backlight Bleed Test explains how to tell them apart.',
    },
    {
      question: 'Does a black screen save power?',
      answer:
        'On an OLED screen, yes: black pixels are switched off and use almost no power. On an LCD the backlight stays on at the same brightness, so a black screen saves little or nothing. Turning the display off is always better.',
    },
    {
      question: 'Is some backlight bleed normal?',
      answer:
        'Yes. A small amount of light at the corners, visible only on a black screen in a dark room, is normal on most LCD monitors and usually not a warranty case. Bleed you notice in films or games in a normally lit room is a stronger reason to return the monitor.',
    },
    {
      question: 'How do I get out of the black screen?',
      answer:
        "Press Esc. On a touchscreen, tap the screen and use the exit button at the bottom. If the page doesn't respond, Alt+Tab (Windows) or Cmd+Tab (Mac) switches to another window.",
    },
  ],

  'color-screen': [
    {
      question: 'Which colors should I use to find dead pixels?',
      answer:
        'Red, green and blue each light only one subpixel, so together they check every subpixel on the panel. Add white to find dead pixels, which show as black dots, and black to find stuck or hot pixels, which show as bright dots.',
    },
    {
      question: 'What is the difference between a dead and a stuck subpixel?',
      answer:
        'A dead subpixel never lights, so it leaves a dark spot on its own color. A stuck subpixel is always lit, so it shows up as a colored dot on the other colors and on black. Stuck subpixels can sometimes be freed with the Dead Pixel Fixer.',
    },
    {
      question: 'Why does pure red look orange or neon on my monitor?',
      answer:
        'Wide-gamut monitors can show a deeper red than the sRGB standard most websites assume, so #FF0000 looks more saturated than intended. That is not a defect. Switch the monitor to its sRGB mode if colors look exaggerated in everyday use.',
    },
    {
      question: 'Can I use the green or blue screen for chroma key?',
      answer:
        'For small objects or hands in front of the screen, yes, and most editing apps will key it out. A monitor is too small and too reflective to replace a fabric green screen behind a person.',
    },
    {
      question: 'How do I get a custom color or a color image?',
      answer:
        'Choose Custom and pick any color, or type its hex code. The Download button saves the current color as a PNG at the resolution you set, for example 3840 x 2160 for a 4K background.',
    },
    {
      question: 'Can I link straight to one color?',
      answer:
        'Yes. Add ?color= to the address with red, green, blue, yellow, orange, pink or purple, for example /color-screen?color=green, and the page opens on that color.',
    },
  ],

  'brightness-test': [
    {
      question: 'What gamma should my monitor use?',
      answer:
        'Gamma 2.2 is the standard for Windows, macOS and the web, and it is the right choice for almost everyone. Gamma 2.4 is meant for watching or grading video in a dark room. If your monitor has a gamma setting, start at 2.2.',
    },
    {
      question: "Why can't I see the darkest steps?",
      answer:
        'Your black level is too low: brightness or black level is turned down too far, the gamma is set too high, or light in the room washes out the shadows. Raise the monitor brightness or black level setting until the first steps above black just become visible.',
    },
    {
      question: 'Why do the brightest steps all look the same?',
      answer:
        'The contrast setting is too high, so near-white shades are clipped to pure white. Lower the contrast until you can tell the top steps apart again.',
    },
    {
      question: 'What causes banding in a gradient?',
      answer:
        "Visible steps in a smooth gradient usually come from a 6-bit panel that fakes extra shades with dithering, from color profile or graphics driver adjustments that reduce the number of shades, or from compressed video. A little banding in very slow, dark gradients is normal even on good monitors.",
    },
    {
      question: 'How bright should my monitor be?',
      answer:
        'Match the room. A common target is around 100 to 150 nits for office work in a normally lit room, and about 120 nits for photo editing. A quick check: a white page on screen should look about as bright as a sheet of paper next to it.',
    },
    {
      question: 'Can this test calibrate my monitor?',
      answer:
        'It helps you set brightness, contrast and gamma by eye, which fixes the most common problems. Accurate calibration of color and white point needs a hardware colorimeter.',
    },
  ],

  'contrast-test': [
    {
      question: 'What contrast ratio does text need to be readable?',
      answer:
        'The WCAG accessibility guidelines ask for at least 4.5:1 between normal text and its background, and 3:1 for large text (about 24px, or 19px bold). The stricter AAA level asks for 7:1 for normal text.',
    },
    {
      question: "Is that the same as my monitor's contrast ratio?",
      answer:
        'No. The WCAG ratio is calculated from two colors and is the same on every screen. A monitor contrast ratio, such as 1000:1, describes how dark its black is compared with its white. A good monitor makes low-contrast text easier to read, but it does not change the WCAG result.',
    },
    {
      question: 'What is the difference between static and dynamic contrast?',
      answer:
        'Static contrast is measured with black and white on screen at the same time, and is the number that matters. Dynamic contrast compares a fully dark scene with a fully bright one after the monitor adjusts its backlight, which produces very large marketing figures that you never see in practice.',
    },
    {
      question: 'Can I check my own text and background colors?',
      answer:
        'Yes. Use the custom pair mode, enter the hex codes for your text and background, and the tool shows the contrast ratio and whether it passes AA and AAA.',
    },
    {
      question: 'How accurate is the color blindness simulation?',
      answer:
        'It approximates how protanopia, deuteranopia, tritanopia and achromatopsia change colors, which is enough to spot text or charts that rely on color alone. Real color vision varies from person to person, so treat it as a check, not a guarantee.',
    },
    {
      question: 'Why does text look fuzzy even with good contrast?',
      answer:
        'Fuzzy text usually comes from running the monitor below its native resolution, from display scaling in older apps, or from font smoothing settings such as ClearType on Windows. Set the native resolution first and run the ClearType tuner if text still looks soft.',
    },
  ],

  'backlight-bleed-test': [
    {
      question: 'Is backlight bleed a defect I can return the monitor for?',
      answer:
        "A small amount visible only on a black screen in a dark room is normal on most LCD monitors and usually isn't covered by warranty. Bleed visible during regular content in a normally lit room is a much stronger case for a return, so check your retailer's return window.",
    },
    {
      question: 'Can backlight bleed be fixed?',
      answer:
        'Not reliably. It comes from how the panel and backlight were assembled. Some people loosen the screws on the back panel or the bezel with mixed results, but it is not a dependable fix and can void the warranty.',
    },
    {
      question: 'Does every IPS monitor have glow?',
      answer:
        'Yes, to some degree. IPS glow comes from how IPS panels are built, not from a manufacturing fault. The amount varies by panel and viewing angle, but it cannot be removed entirely.',
    },
    {
      question: 'Do VA and OLED monitors have backlight bleed?',
      answer:
        'VA panels can show bleed and some clouding, but much less glow than IPS. OLED screens have no backlight at all, so they cannot have backlight bleed or glow. Light on a black OLED screen means stuck pixels or panel damage.',
    },
    {
      question: 'Why does my monitor look worse straight out of the box?',
      answer:
        'Panels can show more bleed when they are cold. Let the display run for 15 to 20 minutes and test again at a realistic brightness of 30 to 50 percent, not at maximum.',
    },
    {
      question: 'How do I photograph backlight bleed for a warranty claim?',
      answer:
        "Darken the room, hold the phone steady at your normal viewing distance and lower the exposure until the photo looks like what you see. Phone cameras exaggerate bleed at default settings, so add a short description of how visible it is in normal use.",
    },
  ],

  'response-time-test': [
    {
      question: "Can this tool tell me my monitor's response time in milliseconds?",
      answer:
        'No. Measuring milliseconds needs a high-speed camera or dedicated test hardware. This tool is a visual check for ghosting and overshoot, useful for spotting a real problem or comparing settings, not for verifying a spec sheet number.',
    },
    {
      question: 'I see ghosting. Is my monitor defective?',
      answer:
        "Usually not. Check the overdrive setting in the monitor's on-screen menu first, because it is the most common fixable cause. If ghosting stays at every overdrive level and looks much worse than on similar monitors, that points to a real panel problem.",
    },
    {
      question: 'Which overdrive setting should I use?',
      answer:
        'Usually the middle one, often called Normal or Fast. The lowest setting leaves a dark trail behind moving objects, the highest adds a bright halo (overshoot). Try each level with this test and keep the one where the moving block looks cleanest.',
    },
    {
      question: 'Why does the trail change when I change overdrive?',
      answer:
        'Overdrive briefly pushes extra voltage to the pixels so they change color faster. Too little and you get ghosting, too much and the pixels overshoot the target color, which shows as a halo in front of or behind the object.',
    },
    {
      question: 'Does a higher refresh rate fix ghosting?',
      answer:
        "It reduces motion blur, because each frame is shown for a shorter time, but it doesn't fix true ghosting. Ghosting comes from how fast the pixels themselves change color, which is a panel response time issue.",
    },
    {
      question: 'Why does the moving block look choppy?',
      answer:
        "The animation runs at your screen's refresh rate. If it stutters, check that your display is set to its highest refresh rate in the system display settings, close other heavy tabs, and plug in a laptop so it doesn't throttle.",
    },
  ],

  'dead-pixel-fixer': [
    {
      question: 'Can software repair a dead pixel?',
      answer:
        'No. A dead pixel has no working subpixels and stays black whatever the screen shows, so it needs a panel repair or replacement. Software can only help a stuck pixel: one that is lit in a single color and no longer responds.',
    },
    {
      question: 'How do I know whether my pixel is dead or stuck?',
      answer:
        'A stuck pixel shows a color, usually red, green or blue, and is easiest to see on a black screen. A dead pixel is a black dot that is most visible on white. Run the dead pixel test first if you are not sure.',
    },
    {
      question: 'How long should I run the fixer?',
      answer:
        'Start with 10 to 30 minutes in full screen, so the flashing covers the stuck pixel. If nothing changes, try another mode or a longer session. If the pixel still does not respond after a few sessions, it is unlikely to recover.',
    },
    {
      question: 'Which repair mode should I use?',
      answer:
        'Start with RGB, which cycles the three subpixel colors. RGB + White + Black adds full on and off states, and Random varies the pattern. Switch modes if you see no change after a session.',
    },
    {
      question: 'Can flashing colors damage my screen?',
      answer:
        'No. Changing colors quickly is normal work for a display, much like fast-moving video. The flashing can however trigger seizures in people with photosensitive epilepsy, so do not look at the screen while it runs if that may apply to you.',
    },
    {
      question: 'Is a stuck pixel permanent?',
      answer:
        'Not always. Some stuck pixels recover on their own after a while, some respond to the fixer, and some stay stuck for good. There is no way to tell in advance, so it is worth a try before you start a warranty claim.',
    },
    {
      question: 'Does it work on OLED screens, TVs and phones?',
      answer:
        "OLED screens can get stuck pixels too, and the fixer runs in any modern browser, including on phones, tablets and smart TVs. Whether a particular pixel responds varies from panel to panel.",
    },
    {
      question: "What if the fixer doesn't work?",
      answer:
        "Check your manufacturer's pixel policy and your retailer's return window. Many brands replace a monitor when bright pixels exceed their limit, and a retailer will often take a new monitor back without asking why.",
    },
  ],

  'zoom-lighting': [
    {
      question: 'Does a screen really work as a light for video calls?',
      answer:
        'Yes, in a dim room. A bright screen close to your face gives soft, even light from the front, and webcams look sharper once they no longer have to boost their gain. It is weaker than daylight or a ring light, so it works best as fill light.',
    },
    {
      question: 'Should I use a warm or a cool light?',
      answer:
        'Match the strongest other light in the room. Use warm in the evening under ordinary lamps, and daylight or cool during the day near a window, so the two light sources do not clash on your skin.',
    },
    {
      question: 'Which screen should I use as the light?',
      answer:
        'A second monitor, a tablet or a spare laptop placed just beside or behind your webcam works best. You can use your main screen in a pinch, but then the light covers whatever you were looking at.',
    },
    {
      question: 'Why does my face still look dark on camera?',
      answer:
        "Usually a bright window or lamp behind you. The webcam exposes for the brightest part of the picture, so your face drops into shadow. Turn so the window is in front of you, or move the light screen closer.",
    },
    {
      question: 'Will this drain my laptop battery?',
      answer:
        'A screen at full brightness uses noticeably more power, so plug in for long calls. On an OLED laptop, warm and dim settings use less power than bright cool white.',
    },
  ],
};

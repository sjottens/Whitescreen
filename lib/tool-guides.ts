// lib/tool-guides.ts - Guide content for all tools

export type ToolGuide = {
  whatIs: string;
  sections: Array<{
    title: string;
    items?: string[];
    description?: string;
  }>;
  tips: string[];
  shortcuts?: Array<{ key: string; description: string }>;
  proTip: string;
};

export const TOOL_GUIDES: Record<string, ToolGuide> = {
  // Test Tools
  'backlight-bleed-test': {
    whatIs:
      'Backlight bleed is light escaping around the edges or corners of an LCD panel where the backlight should be fully blocked by the liquid crystal layer - it shows up as bright patches or streaks against a black screen, usually worst in dark rooms. IPS glow is a different, related phenomenon specific to IPS panels: a soft haze near the corners caused by the IPS layer itself, not a defect, that changes intensity as your viewing angle changes. This tool fills your screen with pure black so both are easy to spot; the guide below explains how to tell them apart.',
    sections: [
      {
        title: 'Backlight Bleed vs. IPS Glow',
        items: [
          'Backlight bleed: sharp, localized bright spots or streaks that stay in the same place and shape as you move your head - a hardware defect, present on any LCD panel type (IPS, VA, TN)',
          'IPS glow: a broader, softer haze concentrated in the corners that shifts in shape or intensity as your viewing angle changes - a known characteristic of IPS panels, not a defect',
          'The quickest test: sit directly in front of the screen, then slowly move your head side to side. Light that moves or changes with your angle is glow. Light that stays fixed in place and shape is bleed.',
          'Some bleed is normal on almost every LCD monitor to a small degree - the question is how much, and whether it is visible during normal (non-black-screen) use.',
        ],
      },
      {
        title: 'How to Test Properly',
        items: [
          'Dim the room - backlight bleed is far more visible in low ambient light, which is also when it is most likely to bother you in practice (movies, gaming at night)',
          'Let the display run for at least 15-20 minutes before judging - panels can show more bleed when cold, especially in colder rooms',
          'Set brightness to a realistic level (30-50%), not maximum - bleed is easiest to see at low-to-mid brightness, but testing at 100% overstates how visible it will be in normal use',
          'View from a normal, centered seating distance first, then check corners up close for anything the fullscreen view didn\'t reveal',
        ],
      },
    ],
    tips: [
      'Check all four corners and edges systematically, not just the one that first catches your eye',
      'Photograph the screen from a fixed position if you plan to compare before/after a warranty exchange - phone cameras often exaggerate bleed, so use it for documentation, not diagnosis',
      'Re-test after the panel has fully warmed up; a monitor tested cold, straight out of the box, will often look worse than it does after 20 minutes',
      'Compare against a second, known-good display of the same model if you can - manufacturing variance means two units of the same monitor can differ',
    ],
    shortcuts: [
      { key: 'F', description: 'Toggle fullscreen mode' },
      { key: 'G', description: 'Toggle corner guide markers' },
      { key: 'Esc', description: 'Exit fullscreen' },
    ],
    proTip:
      'A small amount of bleed in the corners, visible only on a black screen in a dark room, is normal on most LCD monitors and is not usually a warranty case. Bleed that is visible during regular content (dark movie scenes, game loading screens) in a normally-lit room is a much stronger case for a return or exchange - document it and check your return window before it closes.',
  },

  'response-time-test': {
    whatIs:
      "This test moves a striped block across the screen so you can visually check for ghosting (a trailing smear behind moving objects) and motion blur. It's a visual check, not a measurement device - true pixel response time in milliseconds requires a high-speed camera or dedicated test hardware, which a browser cannot replicate. Use this to spot an obvious problem or compare settings, not to verify a manufacturer's millisecond spec.",
    sections: [
      {
        title: 'Ghosting vs. Motion Blur',
        items: [
          'Ghosting: a distinct, repeated trailing edge or double image behind a moving object - usually a pixel response time issue (the panel is too slow to fully switch color between frames)',
          'Motion blur: a smoother, more uniform smear across the whole moving object - common on any sample-and-hold display (most LCD/OLED monitors) and reduced by higher refresh rates, not just faster pixels',
          'Overshoot / inverse ghosting: a bright or dark halo that leads ahead of the moving object rather than trailing behind it - usually means the overdrive (OD) setting is too aggressive',
        ],
      },
      {
        title: 'What Actually Affects What You See',
        items: [
          'Overdrive (OD) setting in your monitor\'s on-screen menu - usually labeled Off/Normal/Fast/Extreme - trades ghosting for overshoot risk as you increase it',
          'Refresh rate vs. your GPU\'s actual frame rate - a 144Hz panel displaying a 60 FPS game will not look as smooth as the refresh rate alone suggests',
          'Panel technology - budget VA panels are typically the slowest for dark-transition ghosting; modern IPS and TN panels are usually faster, though this varies significantly by model and price tier',
        ],
      },
    ],
    tips: [
      'Test at a few different speeds - a monitor can look fine at slow speeds and still show ghosting at fast ones',
      'Try each overdrive setting in your monitor\'s menu while this test runs, and pick the one with the least visible ghosting and overshoot combined - most monitors ship with a sub-optimal default',
      'Compare against a phone or second monitor if you have one - it is easy to misjudge motion artifacts without a reference point',
      'A completely clean, trail-free result at high speed is not realistic on most LCD monitors - judge relative severity, not perfection',
    ],
    shortcuts: [
      { key: 'Space', description: 'Pause / resume motion' },
      { key: '1 / 2 / 3', description: 'Slow / medium / fast speed' },
      { key: 'F', description: 'Toggle fullscreen mode' },
    ],
    proTip:
      "If you see ghosting, check your monitor's overdrive/OD setting before assuming the panel is defective - this single setting is the most common fixable cause of visible ghosting, and it's free to change.",
  },

  'brightness-test': {
    whatIs:
      'A brightness test evaluates your monitor\'s ability to display different levels of brightness accurately. This tool helps you identify issues with monitor brightness uniformity, detect dead pixels, assess color accuracy, and measure contrast ratio performance. It\'s essential for professional color work, photo editing, and quality assurance.',
    sections: [
      {
        title: 'Test Modes Explained',
        items: [
          'Gray Ladder: Shows 11 gray levels (0-100%) to test brightness uniformity',
          'Gradient: Smooth transition from black to white to detect banding',
          'Bars: Separate bars of each brightness level for detailed comparison',
          'Flicker: Black/white flicker pattern to detect monitor flicker issues',
        ],
      },
      {
        title: 'What to Look For',
        items: [
          'Banding: Visible bands or stripes in gradients indicate poor color depth',
          'Brightness Shifts: Uneven brightness across the display suggests backlight issues',
          'Color Casts: Tints in gray levels may indicate color balance problems',
          'Dead/Stuck Pixels: Colored spots or dark areas in uniform displays',
        ],
      },
    ],
    tips: [
      'Ensure your monitor is fully warmed up (30+ minutes)',
      'Test in a darkened room to better see brightness differences',
      'View the screen at arm\'s length for optimal perception',
      'Use fullscreen mode (press F) for immersive testing',
      'View each gray level carefully and note any anomalies',
    ],
    shortcuts: [
      { key: 'F', description: 'Toggle fullscreen mode' },
      { key: 'Space', description: 'Start/stop auto-cycling (Gray Ladder mode)' },
      { key: 'Arrow Keys', description: 'Navigate between brightness levels' },
      { key: 'R', description: 'Reset to 50% gray level' },
    ],
    proTip:
      'For the most accurate brightness test results, adjust your monitor\'s brightness control to a comfortable viewing level, then use the Display Opacity slider to fine-tune the test display without affecting monitor settings.',
  },

  'contrast-test': {
    whatIs:
      'A contrast test evaluates your monitor\'s ability to distinguish between different brightness levels. This tool measures the contrast ratio, helps identify visibility issues, tests color accuracy, and detects problems with display uniformity. It\'s crucial for ensuring content is readable and colors are distinguishable.',
    sections: [
      {
        title: 'Test Modes Explained',
        items: [
          'Pattern: Standard contrast patterns to evaluate visibility',
          'Gradients: Smooth transitions to detect banding and gradation problems',
          'Grid: Checkerboard patterns to test color combination contrast',
          'Custom: User-defined colors to test specific contrast scenarios',
        ],
      },
      {
        title: 'What to Look For',
        items: [
          'Visibility Issues: Difficulty distinguishing foreground from background',
          'Color Blindness: Certain color combinations appearing the same or merged',
          'Banding: Visible bands in gradient contrasts suggest poor depth',
          'Uniformity: Uneven contrast across different areas of the screen',
        ],
      },
    ],
    tips: [
      'Warm up your monitor for at least 30 minutes before testing',
      'Test in a consistently lit environment without direct light on screen',
      'View from multiple angles to check for viewing angle contrast issues',
      'Compare results with calibrated reference displays if available',
      'Test with vision mode filters to check accessibility',
    ],
    shortcuts: [
      { key: 'F', description: 'Toggle fullscreen mode' },
      { key: 'Arrow Keys', description: 'Adjust contrast values' },
      { key: 'R', description: 'Reset to default values' },
    ],
    proTip:
      'For WCAG compliance testing, ensure at least 4.5:1 contrast ratio for text and 3:1 for graphics. Use the custom mode to test your specific color combinations and verify accessibility standards.',
  },

  'dead-pixel-test': {
    whatIs:
      'A dead pixel test helps identify non-functioning pixels on your display. Dead pixels appear as dark spots, while stuck pixels appear as colored spots. This tool cycles through colors to make any defective pixels highly visible. Important for quality assurance and warranty claims.',
    sections: [
      {
        title: 'Pixel Issues Explained',
        items: [
          'Dead Pixels: Black spots that don\'t display any color',
          'Stuck Pixels: Colored spots (usually red, green, or blue) that don\'t change',
          'Hot Pixels: Pixels that appear bright and change to other colors unexpectedly',
          'Dust Under Screen: Appears as dark spots but usually in specific locations',
        ],
      },
      {
        title: 'What to Look For',
        items: [
          'Dark spots on solid color backgrounds - indicates dead pixels',
          'Persistent colored dots - indicates stuck pixels',
          'Pixels that don\'t respond to color changes - defective pixels',
          'Clustered issues - may indicate manufacturing defects',
        ],
      },
    ],
    tips: [
      'Use each solid color for at least 10-15 seconds',
      'Test in a dark room with good eyesight for best results',
      'View from various angles and distances',
      'Take a photo with your phone to zoom in on suspicious areas',
      'Compare with known reference displays',
    ],
    shortcuts: [
      { key: 'F', description: 'Toggle fullscreen mode' },
      { key: 'Space', description: 'Start/stop auto-cycling colors (in fullscreen)' },
      { key: 'Arrow Keys', description: 'Previous / next test color (in fullscreen)' },
      { key: 'Esc', description: 'Exit fullscreen' },
    ],
    proTip:
      'Document any dead pixels with photos including the pixel location on screen. Most manufacturers have warranty policies that cover a small number of dead pixels (typically 0-8 depending on the brand). Keep your documentation for warranty claims.',
  },

  // Color Screen Tools
  'white-screen': {
    whatIs:
      'A full white screen (#FFFFFF) drives every red, green and blue subpixel at full power, so the whole panel is as bright as it can get. That makes it the best background for three checks: dead pixels, which show up as black or dark dots because none of their subpixels light; dust, smudges and scratches on the surface, which catch the light; and brightness uniformity, because a white field shows every darker corner, warmer patch or vertical band. It is also the easiest way to see whether your white point looks neutral, bluish or yellowish.',
    sections: [
      {
        title: 'What a White Screen Reveals',
        items: [
          'Dead pixels: a pixel with no working subpixels stays black. On white it is the most visible defect there is, even when it is only a fraction of a millimetre.',
          'Dust and debris: specks on top of the glass move or disappear when you wipe them. A speck that stays put after cleaning, and looks sharp at any viewing angle, is inside the panel.',
          'Brightness uniformity: edges or corners that are noticeably darker than the centre, or a gradient from one side to the other. Some fall-off of 10 to 20 percent is normal on LCD monitors and hard to see in daily use.',
          'Dirty screen effect and banding: faint vertical or horizontal stripes, or a blotchy texture, most visible when you move a white window slowly across the screen. Common on large TVs and VA panels.',
          'Color tint: one half of the screen looking slightly pink and the other slightly green is a uniformity problem in the backlight or panel, not a setting.',
        ],
      },
      {
        title: 'Cleaning Your Screen With It',
        items: [
          'Switch to white and full screen: every fingerprint and streak shows clearly against the bright background.',
          'Wipe gently: use a dry microfibre cloth first, then one lightly dampened with distilled water. Never spray liquid directly onto the screen.',
          'Avoid alcohol and glass cleaner: on matte and anti-glare coatings they can leave permanent marks. Check your manufacturer before using anything stronger than water.',
          'Check again on black: white shows dust and fingerprints, black shows streaks left behind by the cloth.',
        ],
      },
    ],
    tips: [
      'Set brightness to the level you normally use. At maximum, uniformity problems look worse than they are in practice; at minimum they hide.',
      'Let the monitor warm up for 15 to 20 minutes before judging uniformity or tint. The backlight changes slightly as it reaches working temperature.',
      'Sit straight in front of the screen at your normal distance. On IPS and VA panels the edges look darker from an angle even when the panel is fine.',
      'If you are unsure whether a dot is a dead pixel or dust, take a close-up photo, wipe the screen, and take another photo from the same spot.',
      'Avoid staring at a full white screen in a dark room for long. It is very bright and tiring for your eyes.',
    ],
    shortcuts: [
      { key: 'F / Space', description: 'Enter fullscreen' },
      { key: 'Esc', description: 'Exit fullscreen' },
      { key: 'Ctrl + S', description: 'Download a white PNG' },
    ],
    proTip:
      'White finds dead pixels but can hide stuck ones: a pixel stuck on red, green or blue still contributes to white and blends in. Run the black screen and the red, green and blue screens as well, or use the Dead Pixel Test, which cycles through all of them for you.',
  },

  'black-screen': {
    whatIs:
      'A full black screen (#000000) switches every subpixel off, so anything you still see is light the panel should not be producing. On an LCD monitor the backlight is always on behind the liquid crystals, which can never block it completely. That is why black is the test for backlight bleed, IPS glow, clouding and black level. It is also the best background for stuck and hot pixels: a subpixel that is permanently lit shows up as a bright red, green, blue or white dot on black. On an OLED screen, pixels really switch off, so black should look perfectly black and any lit pixel is a defect.',
    sections: [
      {
        title: 'What a Black Screen Reveals',
        items: [
          'Stuck and hot pixels: bright colored or white dots. These are the defects white screens miss, and the ones the Dead Pixel Fixer can sometimes repair.',
          'Backlight bleed: bright patches along the edges or in the corners that stay in the same place when you move your head. Caused by pressure or gaps in the panel assembly.',
          'IPS glow: a silvery or warm haze in the corners that changes with your viewing angle. A normal property of IPS panels, not a defect.',
          'Clouding: uneven, cloudy patches across the middle of the screen. Most common on large edge-lit LCD TVs.',
          'Black level: how grey black looks in a dark room. IPS panels typically reach a contrast of about 1000:1, VA panels 3000:1 or more, and OLED is effectively infinite.',
        ],
      },
      {
        title: 'Black Screens on OLED and Mini-LED',
        items: [
          'OLED: black should be completely dark, with no glow or bleed. Any dot of light is a stuck subpixel. A faint vertical line or tinted band can be an early sign of panel damage.',
          'Mini-LED and full-array local dimming: the backlight dims zone by zone, so a black screen may look perfect while a small bright object on black shows a halo (blooming). Test with a small white cursor on the black screen.',
          'Idle use: a black screen does not protect an OLED panel from burn-in better than turning the display off. Use the built-in pixel refresh and screen-off features for that.',
        ],
      },
    ],
    tips: [
      'Test in a dark room, but not with brightness at 100 percent. Maximum brightness exaggerates bleed far beyond what you will see in films or games.',
      'Give your eyes a minute to adapt to the dark before you judge glow and bleed.',
      'Move your head from side to side: light that changes shape is IPS glow, light that stays fixed is bleed.',
      'Phone cameras greatly exaggerate bleed and glow. Use photos to document a problem, not to decide whether it is one.',
      'Check the whole screen for small bright dots, including the edges hidden behind taskbars in normal use.',
    ],
    shortcuts: [
      { key: 'F / Space', description: 'Enter fullscreen' },
      { key: 'Esc', description: 'Exit fullscreen' },
      { key: 'Ctrl + S', description: 'Download a black PNG' },
    ],
    proTip:
      'If you find a bright dot on black, switch to the red, green and blue screens to see which subpixel is stuck, then try the Dead Pixel Fixer on that spot. For bleed, the Backlight Bleed Test adds corner markers and a near-black mode that make it easier to judge how serious it is.',
  },

  'color-screen': {
    whatIs:
      'Every pixel on an LCD or OLED screen is made of three subpixels: one red, one green and one blue. A full-screen primary color switches on only one of those three across the whole panel, which is why it is the most reliable way to find a single faulty subpixel. On pure red, a stuck green or blue subpixel shows up as a bright green or blue dot. A dead red subpixel shows up as a dark dot, because the red light at that spot is missing. White lights all three subpixels and black lights none, so those two screens can hide a defect that only affects one color channel. This page lets you switch between the primaries, the mixed colors and any custom color without leaving the page.',
    sections: [
      {
        title: 'What Each Color Reveals',
        items: [
          'Red, green and blue: each lights a single subpixel channel. Cycle through all three to check every subpixel on the panel. A dot that stays visible in all three is usually a dead pixel. A dot that only appears on one or two colors is a stuck subpixel, which can sometimes be revived.',
          'Yellow (red + green): useful for spotting a dead blue subpixel inside an otherwise bright area, and for checking yellow-green tint on cheaper panels.',
          'Pink, purple and orange: mixed colors that make tint and uniformity problems easier to see than pure primaries. A patch that looks more salmon than pink, or a purple that drifts toward blue at the edges, points to uneven color across the panel.',
          'Custom color: enter any hex value to match a brand color, a chroma-key shade or a color you are calibrating against.',
        ],
      },
      {
        title: 'Reading the Results',
        items: [
          'Color shifts toward the edges: common on IPS and VA panels viewed from an angle. Sit straight in front of the screen before judging uniformity.',
          'Clouding or blotches: visible as darker or lighter patches on green and blue especially. A mild amount is normal on large LCD panels, strong patches visible in normal content are worth a return.',
          'Oversaturated primaries: wide-gamut monitors show #FF0000 as a deeper red than an sRGB monitor does. That is the panel, not a defect. Switch the monitor to its sRGB mode if colors look neon in everyday use.',
          'Banding in mixed colors: steps in what should be a flat color usually mean a 6-bit panel with dithering, or a color profile that clips values.',
        ],
      },
      {
        title: 'Using the Screen as a Backdrop',
        items: [
          'Chroma key: a green or blue screen behind a small object or a hand can be keyed out in OBS, Premiere or DaVinci Resolve. A monitor is too small and too reflective to replace a fabric green screen behind a person.',
          'Fill light: a bright color on a large monitor adds a colored rim or fill light for photos and video calls. It is weak compared with a real light, so keep the screen close to the subject.',
          'Product photos and mockups: download the color as a PNG at the exact resolution you need, for example 3840 x 2160 for a 4K background.',
        ],
      },
    ],
    tips: [
      'Clean the screen first. Dust looks exactly like a dead pixel on a bright color, but it moves when you wipe it.',
      'Run through red, green, blue, then white and black. Together they check every subpixel in both its on and off state.',
      'Use full screen (F or Space) so browser bars and taskbar do not hide the edges of the panel.',
      'Look from about 30 to 50 cm, then lean in to check any spot you noticed. Use your phone camera zoom to confirm whether a dot is one subpixel or a whole pixel.',
      'Write down the position of any defect (for example "15 cm from the left, 4 cm from the top") before you exit full screen, so you can find it again or show it to support.',
      'If you are sensitive to flashing light, avoid switching rapidly between bright colors in a dark room.',
    ],
    shortcuts: [
      { key: 'F / Space', description: 'Enter fullscreen' },
      { key: 'Esc', description: 'Exit fullscreen' },
      { key: 'Ctrl + S', description: 'Download the current color as PNG' },
    ],
    proTip:
      'A stuck subpixel is lit in one color all the time, and a dead one never lights. Stuck subpixels can sometimes be freed by rapidly cycling colors over the spot with the Dead Pixel Fixer for 10 to 30 minutes. Dead pixels cannot be fixed in software, so check how many your manufacturer allows under its pixel policy before you start a warranty claim.',
  },

  'zoom-lighting': {
    whatIs:
      'A bright, evenly lit screen makes a surprisingly good soft fill light for video calls: it sits right in front of your face, it is diffuse, and you can change its color. This tool turns a second monitor, laptop or tablet into that light - pick a color temperature, set the brightness, and go fullscreen.',
    sections: [
      {
        title: 'Choosing a Color Temperature',
        items: [
          'Warm (~2700K): matches typical home bulbs and flatters skin tones in the evening',
          'Soft white (~4000K): a neutral middle ground that works in most rooms',
          'Daylight (~5500K): matches a window during the day, so light from both sides blends',
          'Cool (~6500K): matches most office LED panels and bright overcast daylight',
        ],
      },
      {
        title: 'Where to Put the Screen',
        items: [
          'Height: at or slightly above eye level - light from below looks unnatural',
          'Angle: 30-45 degrees off to one side gives shape to your face; straight on flattens it',
          'Distance: closer is brighter and softer; move it back if you see a bright reflection in glasses',
          'Background: keep the room a little darker than your face so the camera exposes for you',
        ],
      },
    ],
    tips: [
      'Match the preset to the strongest other light in the room so colors do not clash',
      'Turn the screen brightness itself up to maximum and use the slider to dim',
      'If you wear glasses, raise the light and tilt it slightly down to move the reflection out of frame',
      'Close other windows on the light screen so nothing else glows on your face',
    ],
    shortcuts: [
      { key: 'F', description: 'Toggle fullscreen mode' },
      { key: 'Space', description: 'Toggle fullscreen mode' },
      { key: 'Esc', description: 'Exit fullscreen' },
    ],
    proTip:
      'A laptop screen alone is rarely enough in a dark room, but combined with a window or a desk lamp on the other side it removes harsh shadows. Most webcams also look noticeably sharper once your face is well lit, because they no longer have to boost gain.',
  },
};

// lib/tool-guides.ts - Guide content for all tools (multilingual support via translations)

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
      { key: 'Space', description: 'Cycle through contrast patterns' },
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
      { key: 'Space', description: 'Cycle to next color' },
      { key: 'Arrow Keys', description: 'Navigate between test colors' },
      { key: 'R', description: 'Reset to first color' },
    ],
    proTip:
      'Document any dead pixels with photos including the pixel location on screen. Most manufacturers have warranty policies that cover a small number of dead pixels (typically 0-8 depending on the brand). Keep your documentation for warranty claims.',
  },

  // Color Screen Tools
  'white-screen': {
    whatIs:
      'A white screen test displays pure white (#FFFFFF) to test your monitor\'s brightness, color accuracy, and detect display issues. It\'s commonly used to check for backlight problems, dust on the screen, and overall display uniformity.',
    sections: [
      {
        title: 'Test Aspects',
        items: [
          'Brightness: Maximum brightness capability of your display',
          'Uniformity: Even brightness across the entire screen',
          'Dead Pixels: Colored spots on the white background',
          'Dust & Debris: Any particles visible on the screen',
        ],
      },
      {
        title: 'What to Look For',
        items: [
          'Bright spots or dark areas - backlight problems',
          'Colored tints or casts - white balance issues',
          'Grid patterns or mura effect - uneven backlighting',
          'Any spots or marks - dust or dead pixels',
        ],
      },
    ],
    tips: [
      'Dim your room lights to see any brightness issues more clearly',
      'Look at the screen from different angles',
      'Check all four corners and the center specifically',
      'Use this as a baseline before other color tests',
    ],
    proTip:
      'White screen test is ideal for initial quality checks. If you see significant uniformity issues on white, there may be underlying backlight or panel problems that warrant service.',
  },

  'black-screen': {
    whatIs:
      'A black screen test displays pure black (#000000) to check your monitor\'s ability to produce true blacks, detect light leakage, and identify backlight problems. Essential for evaluating display contrast and black level performance.',
    sections: [
      {
        title: 'Test Aspects',
        items: [
          'Black Level: Depth of black color (how dark true black appears)',
          'Light Leakage: Unwanted brightness from backlight in dark areas',
          'Uniformity: Even black color across the screen',
          'Glow: Halo effect around the edges (common in IPS panels)',
        ],
      },
      {
        title: 'What to Look For',
        items: [
          'Gray appearance - poor black level or backlight bleed',
          'Brighter edges - light leakage from backlight',
          'Uneven darkness - backlight uniformity issues',
          'Glow or halo around corners - typical of IPS technology',
        ],
      },
    ],
    tips: [
      'Perform this test in complete darkness for best results',
      'Let your eyes adjust to the darkness for 1-2 minutes',
      'Check all corners and edges carefully',
      'Compare with other monitors if available',
    ],
    proTip:
      'Some light leakage is normal on most displays. OLED and VA panels typically show better black levels than IPS, but have their own trade-offs. Use this test to understand your display\'s characteristics.',
  },

  'blue-screen': {
    whatIs:
      'A blue screen test displays pure blue to check color accuracy and detect color channel issues. Useful for identifying problems with the blue color reproduction and testing for monitor color balance.',
    sections: [
      {
        title: 'Test Aspects',
        items: [
          'Color Purity: True blue without tints from other colors',
          'Uniformity: Even blue color distribution',
          'Color Channel: Blue channel functionality',
          'Dead Pixels: Spots visible on solid blue background',
        ],
      },
      {
        title: 'What to Look For',
        items: [
          'Purple or reddish tint - red channel bleeding into blue',
          'Greenish tint - cyan shift indicating color balance issue',
          'Uneven color - color uniformity problem',
          'Spots or streaks - dead pixels or damage',
        ],
      },
    ],
    tips: [
      'Compare the blue tone with reference images',
      'Check if blue appears natural or artificially saturated',
      'Verify no other colors are mixing into the blue',
      'Use in combination with red and green tests for full color analysis',
    ],
    proTip:
      'Color issues on individual channels often indicate problems that would affect overall image quality in content. If blue appears wrong, your colors in photos and videos will likely be inaccurate.',
  },

  'red-screen': {
    whatIs:
      'A red screen test displays pure red to verify red color channel performance and detect color balance issues. Essential for color-critical work and identifying display problems.',
    sections: [
      {
        title: 'Test Aspects',
        items: [
          'Color Accuracy: Pure red without tints',
          'Channel Performance: Red channel functionality',
          'Uniformity: Even color distribution',
          'Saturation: Correct red saturation level',
        ],
      },
      {
        title: 'What to Look For',
        items: [
          'Orange or yellow tint - red mixed with yellow',
          'Pink or magenta tint - blue channel interference',
          'Dull or brownish - desaturation issues',
          'Uneven brightness - uniformity problems',
        ],
      },
    ],
    tips: [
      'Perform all three primary color tests (red, green, blue)',
      'Note the saturation level - too bright or dull?',
      'Check for any secondary colors mixing in',
      'Document results for color profiling needs',
    ],
    proTip:
      'Red is the most common color to have issues with on displays. Problems with red reproduction often indicate the display needs color calibration or has underlying hardware issues.',
  },

  'green-screen': {
    whatIs:
      'A green screen test displays pure green to evaluate green color channel performance. Helps identify color balance problems and ensure accurate color reproduction for professionals.',
    sections: [
      {
        title: 'Test Aspects',
        items: [
          'Color Purity: True green without mixed colors',
          'Channel Integrity: Green channel functionality',
          'Uniformity: Consistent green across display',
          'Saturation Level: Proper green intensity',
        ],
      },
      {
        title: 'What to Look For',
        items: [
          'Yellow tint - red channel mixing with green',
          'Cyan tint - blue channel mixing with green',
          'Gray appearance - insufficient saturation',
          'Uneven patches - uniformity or backlight issues',
        ],
      },
    ],
    tips: [
      'Use alongside red and blue for comprehensive color analysis',
      'Green is often the most balanced channel',
      'Check if green appears natural or artificial',
      'Useful for diagnosing color cast issues',
    ],
    proTip:
      'If red and blue look off but green appears correct, the issue is likely with those specific channels rather than overall monitor health. Consider professional calibration if doing color work.',
  },

  'yellow-screen': {
    whatIs:
      'A yellow screen test displays pure yellow to check color mixing and overall color balance. Yellow is composed of red and green, making it useful for testing multiple channels simultaneously.',
    sections: [
      {
        title: 'Test Aspects',
        items: [
          'Color Mixing: Red and green channel interaction',
          'Overall Balance: Combined channel performance',
          'Uniformity: Even yellow across the screen',
          'Saturation: Proper yellow intensity and vibrancy',
        ],
      },
      {
        title: 'What to Look For',
        items: [
          'Greenish yellow - red channel insufficient',
          'Orange-ish yellow - too much red',
          'Gray yellow - desaturation or backlight issue',
          'Uneven distribution - panel or backlight problems',
        ],
      },
    ],
    tips: [
      'Yellow issues often reveal red channel problems',
      'Compare warmth with white screen test',
      'Check uniformity carefully across all areas',
      'Use for quick color balance check',
    ],
    proTip:
      'Yellow is a good indicator of overall color balance. If yellow looks off, your display likely has color accuracy issues that will affect skin tones and natural colors in photos.',
  },

  'orange-screen': {
    whatIs:
      'An orange screen test displays pure orange to evaluate warm color rendering and detect color balance issues. Orange is useful for testing how well displays handle warm tones.',
    sections: [
      {
        title: 'Test Aspects',
        items: [
          'Warm Color Balance: Red and yellow tones',
          'Saturation: Orange intensity and vibrancy',
          'Uniformity: Even orange distribution',
          'Natural Appearance: Orange looks natural vs artificial',
        ],
      },
      {
        title: 'What to Look For',
        items: [
          'Red-heavy orange - insufficient yellow channel',
          'Yellow-heavy orange - excessive red channel',
          'Brown or muddy orange - saturation issues',
          'Uneven patches - backlight or panel problems',
        ],
      },
    ],
    tips: [
      'Orange is great for testing warm color accuracy',
      'Important for photography and video editing',
      'Check consistency with red and yellow screens',
      'Notice if orange looks natural or artificial',
    ],
    proTip:
      'How your monitor displays orange directly affects skin tone accuracy. If orange looks wrong, portrait photography and video will likely suffer from color casts.',
  },

  'pink-screen': {
    whatIs:
      'A pink screen test displays pure pink to evaluate color accuracy and detect color balance problems. Pink (composed of red and blue) helps identify issues with cool-warm color balance.',
    sections: [
      {
        title: 'Test Aspects',
        items: [
          'Red-Blue Balance: Interaction between warm and cool channels',
          'Saturation: Pink intensity and vibrancy',
          'Uniformity: Even pink distribution',
          'Hue Accuracy: Pink appears natural',
        ],
      },
      {
        title: 'What to Look For',
        items: [
          'Reddish pink - blue channel insufficient',
          'Purple-ish pink - too much blue',
          'Pale pink - saturation issues',
          'Uneven appearance - panel uniformity problems',
        ],
      },
    ],
    tips: [
      'Pink reveals red-blue balance issues',
      'Important for media that uses vibrant colors',
      'Compare with red and blue tests',
      'Check all screen areas carefully',
    ],
    proTip:
      'Pink colors are sensitive indicators of color balance. Problems with pink reproduction usually indicate the display needs calibration for professional color work.',
  },

  'purple-screen': {
    whatIs:
      'A purple screen test displays pure purple to check color mixing and cool-tone accuracy. Purple (composed of red and blue) is useful for testing how displays handle saturated colors.',
    sections: [
      {
        title: 'Test Aspects',
        items: [
          'Color Mixing: Red and blue channel balance',
          'Saturation: Purple vibrancy and depth',
          'Uniformity: Consistent purple across display',
          'Hue Accuracy: Purple appears true to specification',
        ],
      },
      {
        title: 'What to Look For',
        items: [
          'Blue-heavy purple - red channel weak',
          'Red-heavy purple (magenta) - blue channel insufficient',
          'Gray-purple - desaturation or backlight bleed',
          'Uneven coloring - backlight or panel defects',
        ],
      },
    ],
    tips: [
      'Purple is a key color for identifying balance issues',
      'Test in a well-lit room to see true colors',
      'Compare with reference purple images',
      'Part of comprehensive color testing routine',
    ],
    proTip:
      'Purple represents one of the most challenging colors for monitors to display accurately. Issues with purple often indicate the display needs professional color profiling.',
  },

  'zoom-lighting': {
    whatIs:
      'A zoom and lighting test helps evaluate your monitor\'s ability to maintain color and brightness consistency across different zoom levels and lighting conditions. Useful for testing viewing angles, brightness uniformity, and color stability.',
    sections: [
      {
        title: 'Test Modes',
        items: [
          'Zoom Test: Test display at various magnification levels',
          'Lighting Test: Simulate different ambient lighting conditions',
          'Angle Test: Check viewing angle performance',
          'Brightness Levels: Test at different brightness settings',
        ],
      },
      {
        title: 'What to Look For',
        items: [
          'Color Shift: Changes in color at different angles',
          'Brightness Fade: Decreased brightness at viewing angles',
          'Banding: Color banding at high zoom levels',
          'Artifacts: Display artifacts under different conditions',
        ],
      },
    ],
    tips: [
      'Test from extreme viewing angles for best results',
      'Zoom in to 100% to check pixel-level performance',
      'Simulate real-world lighting conditions',
      'Take note of how colors shift with angle',
    ],
    shortcuts: [
      { key: 'F', description: 'Toggle fullscreen mode' },
      { key: 'Space', description: 'Cycle through test patterns' },
      { key: '+/-', description: 'Adjust zoom level' },
      { key: 'R', description: 'Reset to default' },
    ],
    proTip:
      'IPS panels have better viewing angles than VA or TN, but all displays show some color shift. Extreme angles (>60°) may show noticeable color changes - this is usually normal depending on panel type.',
  },
};

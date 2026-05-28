#!/usr/bin/env python3
"""
Script to add missing translation keys to all languages
Run: python add_missing_translations.py
"""

import json

# Define all missing keys with English values (will be translated)
MISSING_KEYS = {
    # Special tools
    'tip_screen': 'Tip Screen',
    'tip_screen_desc': 'POS tipping screen for restaurants, cafes, and retail',
    'broken_screen': 'Broken Screen',
    'broken_screen_desc': 'Prank broken screen effect with sound and animation',
    'dvd_screensaver': 'DVD Screensaver',
    'dvd_screensaver_desc': 'Classic DVD screensaver animation nostalgic experience',
    
    # Use Cases & Labels (already in most languages)
    'use_cases': 'Use Cases',
    'display_testing': 'Display Testing',
    'screen_cleaning': 'Screen Cleaning',
    'dead_pixel_detection': 'Dead Pixel Detection',
    'contrast_testing': 'Contrast Testing',
    'screen_uniformity': 'Screen Uniformity',
    'color_accuracy': 'Color Accuracy',
    'video_effects': 'Video Effects',
    'chroma_key': 'Chroma Key',
    'video_production': 'Video Production',
    'streaming': 'Streaming',
    'creative_lighting': 'Creative Lighting',
    'video_call_lighting': 'Video Call Lighting',
    'professional_meetings': 'Professional Meetings',
    'monitor_calibration': 'Monitor Calibration',
    'brightness_testing': 'Brightness Testing',
    'gamma_verification': 'Gamma Verification',
    'accessibility_testing': 'Accessibility Testing',
    'wcag_compliance': 'WCAG Compliance',
    'color_vision_deficiency': 'Color Vision Deficiency',
    
    # Tool Layout
    'back_to_tools': 'Back to Tools',
    'how_to_use': 'How to Use',
    'features': 'Features',
    'related_tools': 'Related Tools',
    'keyboard_shortcuts': 'Keyboard Shortcuts',
    'step_1': 'Click the tool above or press the fullscreen button',
    'step_2': 'Press F, Space, or click the fullscreen icon',
    'step_3': 'Press ESC to exit fullscreen and return to this page',
    'step_4': 'Click Download to save as PNG or customize resolution',
    'fullscreen_mode': 'Fullscreen Mode',
    'exit_fullscreen': 'Exit Fullscreen',
    'download_shortcut': 'Download',
    
    # Feature Descriptions
    'feature_fullscreen_pure': 'Pure color full-screen display with no distractions',
    'feature_keyboard_shortcuts': 'Fullscreen mode with keyboard shortcuts (F, Space)',
    'feature_all_devices': 'Works on all devices - phones, tablets, desktops',
    'feature_download_png': 'Download as high-quality PNG in any resolution',
    'feature_free_no_registration': 'Free - no registration or subscriptions required',
    
    # Screen Display
    'screen_display_title': 'Resolution Settings',
    'screen_display_presets': 'Presets',
    'screen_display_width_label': 'Width (px)',
    'screen_display_height_label': 'Height (px)',
    'screen_display_click_to_fullscreen': 'Click to fullscreen or press F/Space',
    'screen_display_exit_fullscreen_hint': 'Exit Fullscreen (ESC)',
    'screen_display_fullscreen_btn': 'Fullscreen',
    'screen_display_download_btn': 'Download',
    'screen_display_copied_hint': 'Copied!',
    'screen_display_keyboard_hint': 'Press F or Space for fullscreen, ESC to exit',
}

# Manual translations for each language
TRANSLATIONS = {
    'nl': {  # Dutch
        'tip_screen': 'Tip Scherm',
        'tip_screen_desc': 'POS tipping scherm voor restaurants, cafés en retail',
        'broken_screen': 'Gebroken Scherm',
        'broken_screen_desc': 'Grappig gebroken schermeffect met geluid en animatie',
        'dvd_screensaver': 'DVD Screensaver',
        'dvd_screensaver_desc': 'Klassieke DVD screensaver animatie nostalgische ervaring',
        'use_cases': 'Gebruiksscenario\'s',
        'display_testing': 'Schermtest',
        'screen_cleaning': 'Schermreiniging',
        'dead_pixel_detection': 'Detectie van Dode Pixels',
        'contrast_testing': 'Contrasttest',
        'screen_uniformity': 'Schermuniformiteit',
        'color_accuracy': 'Kleurnauwkeurigheid',
        'video_effects': 'Video-effecten',
        'chroma_key': 'Chroma Key',
        'video_production': 'Videoproductie',
        'streaming': 'Streamen',
        'creative_lighting': 'Creatieve Verlichting',
        'video_call_lighting': 'Video Call Verlichting',
        'professional_meetings': 'Professionele Vergaderingen',
        'monitor_calibration': 'Monitor Kalibratie',
        'brightness_testing': 'Helderheidstest',
        'gamma_verification': 'Gamma Verificatie',
        'accessibility_testing': 'Toegankelijkheidstesten',
        'wcag_compliance': 'WCAG Compliance',
        'color_vision_deficiency': 'Kleurblindheid',
        'back_to_tools': 'Terug naar Gereedschappen',
        'how_to_use': 'Hoe te gebruiken',
        'features': 'Functies',
        'related_tools': 'Gerelateerde Gereedschappen',
        'keyboard_shortcuts': 'Toetsenbordsnelkoppelingen',
        'step_1': 'Klik op het gereedschap hierboven of druk op de volledig scherm knop',
        'step_2': 'Druk op F, Spatiebalk of klik op het volledig scherm pictogram',
        'step_3': 'Druk op ESC om volledig scherm af te sluiten en naar deze pagina terug te gaan',
        'step_4': 'Klik op Downloaden om als PNG op te slaan of resolutie aan te passen',
        'fullscreen_mode': 'Volledig Scherm Modus',
        'exit_fullscreen': 'Volledig Scherm Afsluiten',
        'download_shortcut': 'Downloaden',
        'feature_fullscreen_pure': 'Zuivere kleurenweergave op volledig scherm zonder afleiding',
        'feature_keyboard_shortcuts': 'Volledig schermmodus met toetsenbordsnelkoppelingen (F, Spatiebalk)',
        'feature_all_devices': 'Werkt op alle apparaten - telefoons, tablets, desktops',
        'feature_download_png': 'Download als PNG van hoge kwaliteit in elke resolutie',
        'feature_free_no_registration': 'Gratis - geen registratie of abonnementen vereist',
        'screen_display_title': 'Resolutie-instellingen',
        'screen_display_presets': 'Voorinstellingen',
        'screen_display_width_label': 'Breedte (px)',
        'screen_display_height_label': 'Hoogte (px)',
        'screen_display_click_to_fullscreen': 'Klik voor volledig scherm of druk op F/Spatiebalk',
        'screen_display_exit_fullscreen_hint': 'Volledig Scherm Afsluiten (ESC)',
        'screen_display_fullscreen_btn': 'Volledig Scherm',
        'screen_display_download_btn': 'Downloaden',
        'screen_display_copied_hint': 'Gekopieerd!',
        'screen_display_keyboard_hint': 'Druk op F of Spatiebalk voor volledig scherm, ESC om af te sluiten',
    },
}

print("Keys to add:", len(MISSING_KEYS))
print("Languages with translations:", list(TRANSLATIONS.keys()))
print("\nGenerate replacements for each language...")

for lang, translations in TRANSLATIONS.items():
    print(f"\n{lang.upper()}:")
    for key, value in sorted(translations.items()):
        print(f"  {key}: '{value}',")

// lib/keyboard-layouts.ts - Physical key positions for the Keyboard Test.
//
// Positions are in key units (1u = one letter key) and keyed by
// KeyboardEvent.code, which names the physical key regardless of the OS
// language layout. Static data, bundled with the test - no fetch.

export interface KeyDef {
  code: string;
  label: string;
  x: number;
  y: number;
  w?: number;
  h?: number;
  /** ISO Enter: tall key, narrower on its lower row. */
  isoEnter?: boolean;
}

export type LayoutName = 'ansi' | 'iso';

const row = (y: number, x: number, keys: Array<[string, string, number?]>): KeyDef[] => {
  const out: KeyDef[] = [];
  let cx = x;
  for (const [code, label, w = 1] of keys) {
    out.push({ code, label, x: cx, y, w });
    cx += w;
  }
  return out;
};

const letters = (codes: string) => codes.split('').map((c): [string, string] => [`Key${c}`, c]);

const FUNCTION_ROW: KeyDef[] = [
  { code: 'Escape', label: 'Esc', x: 0, y: 0 },
  ...row(0, 2, [['F1', 'F1'], ['F2', 'F2'], ['F3', 'F3'], ['F4', 'F4']]),
  ...row(0, 6.5, [['F5', 'F5'], ['F6', 'F6'], ['F7', 'F7'], ['F8', 'F8']]),
  ...row(0, 11, [['F9', 'F9'], ['F10', 'F10'], ['F11', 'F11'], ['F12', 'F12']]),
  ...row(0, 15.25, [['PrintScreen', 'PrtSc'], ['ScrollLock', 'ScrLk'], ['Pause', 'Pause']]),
];

const NUMBER_ROW: KeyDef[] = row(1.25, 0, [
  ['Backquote', '`'],
  ...'1234567890'.split('').map((d): [string, string] => [`Digit${d}`, d]),
  ['Minus', '-'],
  ['Equal', '='],
  ['Backspace', 'Backspace', 2],
]);

const NAV_CLUSTER: KeyDef[] = [
  ...row(1.25, 15.25, [['Insert', 'Ins'], ['Home', 'Home'], ['PageUp', 'PgUp']]),
  ...row(2.25, 15.25, [['Delete', 'Del'], ['End', 'End'], ['PageDown', 'PgDn']]),
  { code: 'ArrowUp', label: '↑', x: 16.25, y: 4.25 },
  ...row(5.25, 15.25, [['ArrowLeft', '←'], ['ArrowDown', '↓'], ['ArrowRight', '→']]),
];

const BOTTOM_ROW: KeyDef[] = row(5.25, 0, [
  ['ControlLeft', 'Ctrl', 1.25],
  ['MetaLeft', 'Win', 1.25],
  ['AltLeft', 'Alt', 1.25],
  ['Space', 'Space', 6.25],
  ['AltRight', 'Alt', 1.25],
  ['MetaRight', 'Win', 1.25],
  ['ContextMenu', 'Menu', 1.25],
  ['ControlRight', 'Ctrl', 1.25],
]);

const Z_KEYS: Array<[string, string, number?]> = [
  ...letters('ZXCVBNM'),
  ['Comma', ','],
  ['Period', '.'],
  ['Slash', '/'],
];

const ANSI_MAIN: KeyDef[] = [
  ...row(2.25, 0, [['Tab', 'Tab', 1.5], ...letters('QWERTYUIOP'), ['BracketLeft', '['], ['BracketRight', ']'], ['Backslash', '\\', 1.5]]),
  ...row(3.25, 0, [['CapsLock', 'Caps', 1.75], ...letters('ASDFGHJKL'), ['Semicolon', ';'], ['Quote', "'"], ['Enter', 'Enter', 2.25]]),
  ...row(4.25, 0, [['ShiftLeft', 'Shift', 2.25], ...Z_KEYS, ['ShiftRight', 'Shift', 2.75]]),
];

// ISO: tall Enter, an extra key (IntlBackslash) next to a short left Shift,
// and the Backslash code moves down next to Enter.
const ISO_MAIN: KeyDef[] = [
  ...row(2.25, 0, [['Tab', 'Tab', 1.5], ...letters('QWERTYUIOP'), ['BracketLeft', '['], ['BracketRight', ']']]),
  { code: 'Enter', label: 'Enter', x: 13.5, y: 2.25, w: 1.5, h: 2, isoEnter: true },
  ...row(3.25, 0, [['CapsLock', 'Caps', 1.75], ...letters('ASDFGHJKL'), ['Semicolon', ';'], ['Quote', "'"], ['Backslash', '#']]),
  ...row(4.25, 0, [['ShiftLeft', 'Shift', 1.25], ['IntlBackslash', '\\'], ...Z_KEYS, ['ShiftRight', 'Shift', 2.75]]),
];

export const BOARD_WIDTH = 18.25;
export const BOARD_HEIGHT = 6.25;

export const LAYOUTS: Record<LayoutName, KeyDef[]> = {
  ansi: [...FUNCTION_ROW, ...NUMBER_ROW, ...ANSI_MAIN, ...BOTTOM_ROW, ...NAV_CLUSTER],
  iso: [...FUNCTION_ROW, ...NUMBER_ROW, ...ISO_MAIN, ...BOTTOM_ROW, ...NAV_CLUSTER],
};

export const NUMPAD_WIDTH = 4;
export const NUMPAD_HEIGHT = 5;

export const NUMPAD: KeyDef[] = [
  ...row(0, 0, [['NumLock', 'Num'], ['NumpadDivide', '/'], ['NumpadMultiply', '*'], ['NumpadSubtract', '-']]),
  ...row(1, 0, [['Numpad7', '7'], ['Numpad8', '8'], ['Numpad9', '9']]),
  { code: 'NumpadAdd', label: '+', x: 3, y: 1, h: 2 },
  ...row(2, 0, [['Numpad4', '4'], ['Numpad5', '5'], ['Numpad6', '6']]),
  ...row(3, 0, [['Numpad1', '1'], ['Numpad2', '2'], ['Numpad3', '3']]),
  { code: 'NumpadEnter', label: 'Enter', x: 3, y: 3, h: 2 },
  { code: 'Numpad0', label: '0', x: 0, y: 4, w: 2 },
  { code: 'NumpadDecimal', label: '.', x: 2, y: 4 },
];

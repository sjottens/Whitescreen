// lib/media-errors.ts - Turns getUserMedia failures into the user-facing
// messages for the Mic and Webcam tests.

export type MediaErrorKind = 'denied' | 'notfound' | 'inuse' | 'unsupported';

export function classifyMediaError(error: unknown): MediaErrorKind {
  const name = error instanceof DOMException || error instanceof Error ? error.name : '';
  switch (name) {
    case 'NotAllowedError':
    case 'PermissionDeniedError':
      return 'denied';
    case 'NotFoundError':
    case 'DevicesNotFoundError':
    case 'OverconstrainedError':
      return 'notfound';
    case 'NotReadableError':
    case 'TrackStartError':
    case 'AbortError':
      return 'inuse';
    default:
      // SecurityError (insecure context / blocked by policy), TypeError, missing API
      return 'unsupported';
  }
}

/** False on plain http:// or in browsers without getUserMedia. */
export function canUseMedia(): boolean {
  return typeof window !== 'undefined' && window.isSecureContext && !!navigator.mediaDevices?.getUserMedia;
}

export const MIC_ERRORS: Record<MediaErrorKind, string> = {
  denied:
    'Your browser blocked the microphone. Click the lock or mic icon in the address bar, set Microphone to Allow, then reload the page.',
  notfound:
    "No microphone found. If you're using a headset or USB mic, unplug it, plug it back in and try again.",
  inuse:
    'Another app is using your microphone. Close Zoom, Teams, Discord or anything else that might have it open, then try again.',
  unsupported:
    "Your browser doesn't allow microphone access here. Try the latest version of Chrome, Edge, Firefox or Safari.",
};

export const CAMERA_ERRORS: Record<MediaErrorKind, string> = {
  denied:
    'Your browser blocked the camera. Click the lock or camera icon in the address bar, set Camera to Allow, then reload the page.',
  notfound:
    "No camera found. Check that it's plugged in, or that the privacy shutter or camera key on your laptop isn't blocking it.",
  inuse: 'Another app is using your camera. Close Zoom, Teams, Skype or any other video app and try again.',
  unsupported:
    "Your browser doesn't allow camera access here. Try the latest version of Chrome, Edge, Firefox or Safari.",
};

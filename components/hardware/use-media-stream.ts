// components/hardware/use-media-stream.ts - getUserMedia lifecycle shared by
// the Mic and Webcam tests: start on demand, switch device without a reload,
// list devices once permission is granted, and always stop every track on
// Stop, unmount and pagehide so the browser's mic/camera indicator goes off.

'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { canUseMedia, classifyMediaError, type MediaErrorKind } from '@/lib/media-errors';

type Kind = 'audio' | 'video';

export interface MediaStreamState {
  stream: MediaStream | null;
  devices: MediaDeviceInfo[];
  deviceId: string;
  error: MediaErrorKind | null;
  starting: boolean;
  start: (deviceId?: string) => Promise<void>;
  stop: () => void;
}

export function useMediaStream(
  kind: Kind,
  constraintsFor: (deviceId?: string) => MediaTrackConstraints
): MediaStreamState {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);
  const [deviceId, setDeviceId] = useState('');
  const [error, setError] = useState<MediaErrorKind | null>(null);
  const [starting, setStarting] = useState(false);

  const streamRef = useRef<MediaStream | null>(null);
  // Bumped on every start/stop, so a getUserMedia call that resolves after
  // the user pressed Stop (or left the page) is recognised as stale.
  const requestRef = useRef(0);
  const constraintsRef = useRef(constraintsFor);
  constraintsRef.current = constraintsFor;

  const release = useCallback(() => {
    requestRef.current += 1;
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
  }, []);

  const refreshDevices = useCallback(async () => {
    try {
      const all = await navigator.mediaDevices.enumerateDevices();
      setDevices(all.filter((d) => d.kind === (kind === 'audio' ? 'audioinput' : 'videoinput')));
    } catch {
      setDevices([]);
    }
  }, [kind]);

  const stop = useCallback(() => {
    release();
    setStream(null);
    setStarting(false);
  }, [release]);

  const start = useCallback(
    async (id?: string) => {
      setError(null);
      if (!canUseMedia()) {
        setError('unsupported');
        return;
      }
      setStarting(true);
      // Stop the old device first: many cameras can't be opened twice at once.
      release();
      setStream(null);
      const request = requestRef.current;
      try {
        const constraints = constraintsRef.current(id);
        const next = await navigator.mediaDevices.getUserMedia(kind === 'audio' ? { audio: constraints } : { video: constraints });
        if (request !== requestRef.current) {
          next.getTracks().forEach((track) => track.stop());
          return;
        }
        streamRef.current = next;
        setStream(next);
        const track = kind === 'audio' ? next.getAudioTracks()[0] : next.getVideoTracks()[0];
        setDeviceId(track?.getSettings().deviceId ?? id ?? '');
        // Device labels are only filled in once permission has been granted.
        await refreshDevices();
      } catch (err) {
        if (request === requestRef.current) setError(classifyMediaError(err));
      } finally {
        if (request === requestRef.current) setStarting(false);
      }
    },
    [kind, release, refreshDevices]
  );

  useEffect(() => {
    const onDeviceChange = () => {
      if (streamRef.current) refreshDevices();
    };
    const onPageHide = () => release();
    navigator.mediaDevices?.addEventListener?.('devicechange', onDeviceChange);
    window.addEventListener('pagehide', onPageHide);
    return () => {
      navigator.mediaDevices?.removeEventListener?.('devicechange', onDeviceChange);
      window.removeEventListener('pagehide', onPageHide);
      release();
    };
  }, [refreshDevices, release]);

  return { stream, devices, deviceId, error, starting, start, stop };
}

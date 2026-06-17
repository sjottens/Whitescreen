'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroThreeBackground() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mountNode = mountRef.current;
    if (!mountNode) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(mountNode.clientWidth, mountNode.clientHeight);
    mountNode.appendChild(renderer.domElement);

    const pointsGeometry = new THREE.BufferGeometry();
    const pointCount = 420;
    const positions = new Float32Array(pointCount * 3);

    for (let i = 0; i < pointCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 30;
      positions[i + 1] = (Math.random() - 0.5) * 16;
      positions[i + 2] = (Math.random() - 0.5) * 20;
    }

    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const pointsMaterial = new THREE.PointsMaterial({
      color: '#0ea5e9',
      size: 0.07,
      transparent: true,
      opacity: 0.45,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    scene.add(points);

    const mouse = new THREE.Vector2(0, 0);

    const onMouseMove = (event: MouseEvent) => {
      const bounds = mountNode.getBoundingClientRect();
      mouse.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
      mouse.y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;
    };

    const onResize = () => {
      if (!mountNode) return;
      camera.aspect = mountNode.clientWidth / mountNode.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountNode.clientWidth, mountNode.clientHeight);
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    let frameId = 0;
    const animate = () => {
      frameId = window.requestAnimationFrame(animate);

      if (!reduceMotion) {
        points.rotation.y += 0.0009;
        points.rotation.x += 0.00035;
        points.position.x += (mouse.x * 0.7 - points.position.x) * 0.03;
        points.position.y += (mouse.y * 0.35 - points.position.y) * 0.03;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      renderer.dispose();
      if (mountNode.contains(renderer.domElement)) {
        mountNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />;
}

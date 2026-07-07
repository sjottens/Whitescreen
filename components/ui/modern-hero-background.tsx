'use client';

import { useEffect, useRef } from 'react';
import type { PerspectiveCamera, Points, Scene, WebGLRenderer } from 'three';

interface ModernHeroBackgroundProps {
  className?: string;
}

export default function ModernHeroBackground({ className = '' }: ModernHeroBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<Scene | null>(null);
  const cameraRef = useRef<PerspectiveCamera | null>(null);
  const rendererRef = useRef<WebGLRenderer | null>(null);
  const particlesRef = useRef<Points | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    let frameId = 0;
    let destroy: (() => void) | undefined;
    let disposed = false;

    const init = async () => {
      const isMobile = window.innerWidth < 768;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const saveData = 'connection' in navigator && (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;

      // Skip heavy WebGL on mobile or constrained contexts
      if (isMobile || prefersReducedMotion || saveData) {
        return;
      }

      const [THREE, { default: gsap }] = await Promise.all([import('three'), import('gsap')]);
      if (disposed || !containerRef.current) {
        return;
      }

      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
      }
      const texture = new THREE.CanvasTexture(canvas);
      texture.magFilter = THREE.LinearFilter;
      texture.minFilter = THREE.LinearFilter;

      const scene = new THREE.Scene();
      sceneRef.current = scene;

      let width = window.innerWidth;
      let height = window.innerHeight;
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      const cameraZ = 50;
      camera.position.z = cameraZ;
      cameraRef.current = camera;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        precision: 'highp',
        powerPreference: 'high-performance',
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      renderer.domElement.style.display = 'block';
      renderer.domElement.style.width = '100%';
      renderer.domElement.style.height = '100%';
      renderer.domElement.style.margin = '0';
      renderer.domElement.style.padding = '0';
      containerRef.current.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      const particlesGeometry = new THREE.BufferGeometry();
      const particleCount = 1000;
      const posArray = new Float32Array(particleCount * 3);
      const fov = (camera.fov * Math.PI) / 180;
      const visibleHeight = 2 * Math.tan(fov / 2) * cameraZ;
      const visibleWidth = visibleHeight * (width / height);
      const fieldScaleX = visibleWidth * 0.9;
      const fieldScaleY = visibleHeight * 0.9;
      const fieldDepth = 100;

      for (let i = 0; i < particleCount * 3; i += 3) {
        posArray[i] = (Math.random() - 0.5) * fieldScaleX;
        posArray[i + 1] = (Math.random() - 0.5) * fieldScaleY;
        posArray[i + 2] = (Math.random() - 0.5) * fieldDepth;
      }

      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

      const particlesMaterial = new THREE.PointsMaterial({
        size: 3.5,
        color: 0x00dc82,
        map: texture,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.9,
        depthWrite: false,
        alphaTest: 0.001,
      });

      const particles = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particles);
      particlesRef.current = particles;

      const animate = () => {
        frameId = requestAnimationFrame(animate);
        if (particlesRef.current) {
          particlesRef.current.rotation.x += 0.0002;
          particlesRef.current.rotation.y += 0.0003;
        }
        renderer.render(scene, camera);
      };

      animate();

      const handleResize = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      };

      const handleMouseMove = (e: MouseEvent) => {
        if (!particlesRef.current) return;
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = -(e.clientY / window.innerHeight) * 2 + 1;
        gsap.to(particlesRef.current.rotation, {
          x: y * 0.3,
          y: x * 0.3,
          duration: 0.5,
          ease: 'power2.out',
        });
      };

      window.addEventListener('resize', handleResize);
      window.addEventListener('mousemove', handleMouseMove);

      destroy = () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
        cancelAnimationFrame(frameId);
        if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
          containerRef.current.removeChild(renderer.domElement);
        }
        particlesGeometry.dispose();
        particlesMaterial.dispose();
        texture.dispose();
        renderer.dispose();
      };
    };

    void init();

    return () => {
      disposed = true;
      destroy?.();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 -z-30 overflow-hidden hidden md:block ${className}`}
      style={{
        pointerEvents: 'none',
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
      }}
    />
  );
}

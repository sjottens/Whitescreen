'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

interface ModernHeroBackgroundProps {
  className?: string;
}

export default function ModernHeroBackground({ className = '' }: ModernHeroBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Detect if mobile
    const isMobile = window.innerWidth < 768;

    // Create circular particle texture
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // Create circular gradient
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.8)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
    }
    const texture = new THREE.CanvasTexture(canvas);

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup - use visualViewport for better mobile support
    const width = window.visualViewport?.width || window.innerWidth;
    const height = window.visualViewport?.height || window.innerHeight;
    const camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    );
    
    // Adjust camera position for mobile vs desktop
    // Mobile needs closer camera for better particle visibility
    camera.position.z = isMobile ? 35 : 50;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      precision: 'highp',
      powerPreference: isMobile ? 'low-power' : 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.setClearColor(0x000000, 0);
    
    // Ensure canvas doesn't cause horizontal scroll on mobile
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.margin = '0';
    renderer.domElement.style.padding = '0';
    renderer.domElement.style.touchAction = 'none';
    
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create particles with neon green color
    const particlesGeometry = new THREE.BufferGeometry();
    // Reduce particle count on mobile for better performance
    const particleCount = isMobile ? 400 : 1000;
    const posArray = new Float32Array(particleCount * 3);

    // Scale particle field based on viewport aspect ratio
    const fieldScale = isMobile ? 60 : 100;
    const fieldDepth = isMobile ? 80 : 100;

    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * fieldScale;
      posArray[i + 1] = (Math.random() - 0.5) * fieldScale;
      posArray[i + 2] = (Math.random() - 0.5) * fieldDepth;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Create material with neon green and circular texture
    const particlesMaterial = new THREE.PointsMaterial({
      size: isMobile ? 0.6 : 0.5,
      color: 0x00DC82,
      map: texture,
      sizeAttenuation: true,
      transparent: true,
      opacity: isMobile ? 0.95 : 0.9,
      depthWrite: false,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate particles - slower on mobile to reduce jank
      if (particlesRef.current) {
        particlesRef.current.rotation.x += isMobile ? 0.0001 : 0.0002;
        particlesRef.current.rotation.y += isMobile ? 0.00015 : 0.0003;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      const newWidth = window.visualViewport?.width || window.innerWidth;
      const newHeight = window.visualViewport?.height || window.innerHeight;
      const newIsMobile = newWidth < 768;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, newIsMobile ? 1.5 : 2));
    };

    window.addEventListener('resize', handleResize);

    // Mouse interaction for interactivity (desktop only - touch would be better for mobile)
    const handleMouseMove = (e: MouseEvent) => {
      if (!particlesRef.current || isMobile) return;

      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;

      gsap.to(particlesRef.current.rotation, {
        x: y * 0.3,
        y: x * 0.3,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 -z-30 overflow-hidden ${className}`}
      style={{ 
        pointerEvents: 'none',
        touchAction: 'none',
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
      }}
    />
  );
}

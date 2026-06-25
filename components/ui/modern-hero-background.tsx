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

    // Use actual window dimensions for reliable sizing
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    );
    
    // Adjust camera position for mobile vs desktop
    const cameraZ = isMobile ? 35 : 50;
    camera.position.z = cameraZ;
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
    
    // After appending, get actual dimensions and recalculate if needed
    const actualWidth = window.innerWidth;
    const actualHeight = window.innerHeight;
    const actualAspect = actualWidth / actualHeight;
    
    if (Math.abs(actualAspect - (width / height)) > 0.01) {
      width = actualWidth;
      height = actualHeight;
      camera.aspect = actualAspect;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
    
    rendererRef.current = renderer;

    // Create particles with neon green color
    const particlesGeometry = new THREE.BufferGeometry();
    // Reduce particle count on mobile for better performance
    const particleCount = isMobile ? 400 : 1000;
    const posArray = new Float32Array(particleCount * 3);

    // Calculate visible area at camera Z distance to prevent distortion
    const FOV = camera.fov * Math.PI / 180;
    const visibleHeight = 2 * Math.tan(FOV / 2) * cameraZ;
    const visibleWidth = visibleHeight * (width / height);
    
    // Scale particle field to fit camera view with padding
    const fieldScaleX = visibleWidth * 0.9;
    const fieldScaleY = visibleHeight * 0.9;
    const fieldDepth = isMobile ? 80 : 100;

    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * fieldScaleX;
      posArray[i + 1] = (Math.random() - 0.5) * fieldScaleY;
      posArray[i + 2] = (Math.random() - 0.5) * fieldDepth;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Create material with neon green and circular texture
    const particlesMaterial = new THREE.PointsMaterial({
      size: isMobile ? 2.5 : 2.0,
      color: 0x00DC82,
      map: texture,
      sizeAttenuation: true,
      transparent: true,
      opacity: isMobile ? 0.95 : 0.9,
      depthWrite: false,
      alphaTest: 0.001,
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
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, window.innerWidth < 768 ? 1.5 : 2));
    };

    window.addEventListener('resize', handleResize);

    // Handle zoom events via visualViewport
    const handleViewportResize = () => {
      const newWidth = window.visualViewport?.width || window.innerWidth;
      const newHeight = window.visualViewport?.height || window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleViewportResize);
    }

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
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleViewportResize);
      }
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

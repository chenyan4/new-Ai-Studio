import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const AngleThreeView = ({ previewUrl, rotateH, rotateV, distance }) => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const cubeRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const w = container.clientWidth || 1;
    const h = container.clientHeight || 1;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x222222);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const geometry = new THREE.PlaneGeometry(3, 3);
    const material = new THREE.MeshStandardMaterial({
      color: 0x444444,
      side: THREE.DoubleSide,
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    cubeRef.current = cube;

    const gridHelper = new THREE.GridHelper(20, 20, 0x444444, 0x333333);
    scene.add(gridHelper);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const pointLight = new THREE.DirectionalLight(0xffffff, 1);
    pointLight.position.set(5, 10, 7);
    scene.add(pointLight);

    // 添加坐标轴助手 (AxesHelper)
    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth || 1;
      const height = containerRef.current.clientHeight || 1;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      if (rendererRef.current && container.contains(rendererRef.current.domElement)) {
        container.removeChild(rendererRef.current.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  useEffect(() => {
    if (!cubeRef.current || !previewUrl) return;

    new THREE.TextureLoader().load(
      previewUrl,
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        const imageAspect = texture.image.width / texture.image.height;
        
        const cube = cubeRef.current;
        if (imageAspect > 1) {
          cube.scale.set(1, 1 / imageAspect, 1);
          cube.geometry.dispose();
          cube.geometry = new THREE.PlaneGeometry(3, 3 / imageAspect);
          cube.scale.set(1, 1, 1);
        } else {
          cube.scale.set(1, 1, 1);
          cube.geometry.dispose();
          cube.geometry = new THREE.PlaneGeometry(3 * imageAspect, 3);
          cube.scale.set(1, 1, 1);
        }

        const newMaterial = new THREE.MeshBasicMaterial({
          map: texture,
          side: THREE.DoubleSide,
        });
        
        if (cube.material.map) {
          cube.material.map.dispose();
        }
        cube.material.dispose();
        cube.material = newMaterial;
        cube.material.needsUpdate = true;
      },
      undefined,
      (err) => {
        console.error("Error loading texture:", err);
      }
    );
  }, [previewUrl]);

  useEffect(() => {
    if (!cameraRef.current) return;
    const camera = cameraRef.current;
    
    const phi = THREE.MathUtils.degToRad(90 - rotateV);
    const theta = THREE.MathUtils.degToRad(rotateH);

    camera.position.x = distance * Math.sin(phi) * Math.sin(theta);
    camera.position.y = distance * Math.cos(phi);
    camera.position.z = distance * Math.sin(phi) * Math.cos(theta);
    camera.lookAt(0, 0, 0);
  }, [rotateH, rotateV, distance]);

  return <div ref={containerRef} className="w-full h-full bg-[#222]"></div>;
};

export default AngleThreeView;

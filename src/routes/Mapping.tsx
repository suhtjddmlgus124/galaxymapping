import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import galaxies from "../db/galaxies";

interface StarData {
  ra: number; // Right Ascension in hours
  dec: number; // Declination in degrees
  distance: number; // Distance in arbitrary units
  name: string; // Star name for tooltip
  url: string; // Link to open on click
}

/**
 * GalaxyMap 컴포넌트
 * - 지구 텍스처 맵 + 구름 레이어
 * - OrbitControls로 회전/축소 기능
 * - 외부에서 좌표(RA/Dec/거리)를 입력받아 별 추가
 * - 별 클릭 시 링크 이동, Hover 시 이름 툴팁 표시
 */
const GalaxyMap: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 2;
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controls.enableZoom = true;

    // Light
    scene.add(new THREE.AmbientLight(0x333333));
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 3, 5);
    scene.add(dirLight);

    // Textures & Earth
    const loader = new THREE.TextureLoader();
    const earthGeometry = new THREE.SphereGeometry(0.5, 64, 64);
    const earthMaterial = new THREE.MeshPhongMaterial({
      map: loader.load(
        "https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg"
      ),
      bumpMap: loader.load(
        "https://threejs.org/examples/textures/earthbump1k.jpg"
      ),
      bumpScale: 0.05,
      specularMap: loader.load(
        "https://threejs.org/examples/textures/earthspec1k.jpg"
      ),
      specular: new THREE.Color(0x262626),
    });
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earthMesh);

    const cloudGeo = new THREE.SphereGeometry(0.503, 64, 64);
    const cloudMat = new THREE.MeshPhongMaterial({
      map: loader.load(
        "https://threejs.org/examples/textures/earthcloudmap.jpg"
      ),
      transparent: true,
      opacity: 0.4,
      depthWrite: false,
    });
    const cloudMesh = new THREE.Mesh(cloudGeo, cloudMat);
    scene.add(cloudMesh);

    // Group for Stars
    const starGroup = new THREE.Group();
    scene.add(starGroup);

    galaxies.forEach((galaxy) => {
      addStar({
        ra: galaxy.ra,
        dec: galaxy.dec,
        distance: galaxy.reportedDistance,
        name: galaxy.name,
        url: `/galaxy/${galaxy.id}/`
      })
    });
    // addStar({
    //   ra: 13.5, // 적경(RA) 시간 단위
    //   dec: 202.5, // 적위(Dec) 도 단위
    //   distance: 3.1, // 1000만광년 == 1
    //   name: "M51",
    //   url: "https://www.kasi.re.kr/kor/publication/post/photoGallery/4493",
    // });
    

    // Tooltip DOM
    const tooltip = document.createElement("div");
    tooltip.style.position = "absolute";
    tooltip.style.background = "rgba(0, 0, 0, 0.7)";
    tooltip.style.color = "#fff";
    tooltip.style.padding = "4px 8px";
    tooltip.style.borderRadius = "4px";
    tooltip.style.pointerEvents = "none";
    tooltip.style.display = "none";
    container.appendChild(tooltip);

    // Raycaster for interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // Convert RA/Dec/Distance -> Cartesian
    function sphericalToCartesian(
      ra: number,
      dec: number,
      distance: number
    ): THREE.Vector3 {
      const raRad = THREE.MathUtils.degToRad(ra * 15); // RA hours to degrees
      const decRad = THREE.MathUtils.degToRad(dec);
      const x = distance * Math.cos(decRad) * Math.cos(raRad);
      const y = distance * Math.sin(decRad);
      const z = distance * Math.cos(decRad) * Math.sin(raRad);
      return new THREE.Vector3(x, y, z);
    }

    // Add a single star
    function addStar(data: StarData) {
      const pos = sphericalToCartesian(data.ra, data.dec, data.distance);
      const geom = new THREE.SphereGeometry(0.03, 8, 8);
      const mat = new THREE.MeshBasicMaterial({ color: 0xffff00 });
      const star = new THREE.Mesh(geom, mat);
      star.position.copy(pos);
      star.userData = { name: data.name, url: data.url };
      starGroup.add(star);
    }

    // Example: Alpha Centauri
    // addStar({ ra: 14.660, dec: -60.835, distance: 1.34, name: 'Alpha Centauri', url: 'https://en.wikipedia.org/wiki/Alpha_Centauri' });

    // Event handlers
    const onPointerMove = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const hits = raycaster.intersectObjects(starGroup.children);
      if (hits.length > 0) {
        const obj = hits[0].object;
        tooltip.innerText = obj.userData.name;
        tooltip.style.left = e.clientX + 5 + "px";
        tooltip.style.top = e.clientY + 5 + "px";
        tooltip.style.display = "block";
      } else {
        tooltip.style.display = "none";
      }
    };
    const onClick = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const hits = raycaster.intersectObjects(starGroup.children);
      if (hits.length > 0) {
        const url = hits[0].object.userData.url;
        navigate(url);
      }
    };
    renderer.domElement.addEventListener("pointermove", onPointerMove);
    renderer.domElement.addEventListener("click", onClick);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      earthMesh.rotation.y += 0.0005;
      cloudMesh.rotation.y += 0.0006;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle Resize
    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.domElement.removeEventListener("pointermove", onPointerMove);
      renderer.domElement.removeEventListener("click", onClick);
      container.removeChild(renderer.domElement);
      container.removeChild(tooltip);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    />
  );
};

export default GalaxyMap;

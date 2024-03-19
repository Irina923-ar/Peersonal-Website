import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Animation3D = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer();

  // Load the GLTF model
  const loader = new GLTFLoader();
  loader.load("path/to/your/model.glb", (gltf) => {
    const model = gltf.scene;
    scene.add(model);
  });

  // Add lights, camera settings, etc.

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    // Perform animations, camera movements, etc.
    renderer.render(scene, camera);
  }
  animate();
};

export default Animation3D;

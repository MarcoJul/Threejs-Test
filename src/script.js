import "./style.css";
import * as THREE from "three";

const canvas = document.querySelector("canvas.webgl");

const scene = new THREE.Scene();

// OBJECT

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// SIZES

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};

window.addEventListener("resize", () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width / sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// CAMERA

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.z = 3;
camera.position.y = 2;
camera.position.x = 2;
scene.add(camera);
camera.lookAt(mesh.position);

// RENDERER

const renderer = new THREE.WebGLRenderer({
    canvas,
});

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.render(scene, camera);

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
    heigh: window.innerHeight,
};

// CAMERA

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.heigh, 0.1, 100);
camera.position.z = 3;
scene.add(camera);

// RENDERER

const renderer = new THREE.WebGLRenderer({
    canvas,
});

renderer.setSize(sizes.width, sizes.heigh);

renderer.render(scene, camera);

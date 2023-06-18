import * as THREE from 'three'
console.log(THREE);

const scene = new THREE.Scene();

const cubeGeo = new THREE.BoxGeometry(1, 1, 1); ///badan 1 ro bardar
const cubeMat = new THREE.MeshBasicMaterial({ color: 'blue' });
const cubeObj = new THREE.Mesh(cubeGeo, cubeMat);
scene.add(cubeObj);

const sizes = {
    width: 800,
    height: 600
}

const camera = new THREE.PerspectiveCamera(50, sizes.width / sizes.height); //play with fov 
camera.position.z = 3
camera.position.x = 1
camera.position.y = 0.5

scene.add(camera);

const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
    canvas
});

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)


import * as THREE from 'three'
const scene = new THREE.Scene();
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

//group
const container = new THREE.Group()
scene.add(container)
container.position.set(0, 1, -1)
// cubes
const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 'red' })
)
container.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 'blue' })
)
cube2.position.set(1.5, 0, 0)
container.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: '#00ff00' })
)
cube3.position.set(-1.5, 0, 0)
container.add(cube3)
//camera
const sizes = {
    width: 800,
    height: 600
}
const camera = new THREE.PerspectiveCamera(65, sizes.width / sizes.height);
camera.position.set(2, 2, 3)
camera.lookAt(new THREE.Vector3(0, 0, 0))
scene.add(camera);




//rendering 

const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
    canvas
});
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)


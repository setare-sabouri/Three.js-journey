import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { lightsList } from './lightsSys/lights'
import { house } from './objects/house'
import { graves } from './objects/graves'
import { ghostsCircle } from './objects/ghosts'
import gsap from 'gsap';


THREE.ColorManagement.enabled = false

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// axes
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

// lights

scene.add(lightsList.ambientLight, lightsList.moonLight, lightsList.doorLight)
scene.fog = lightsList.fog
scene.add(lightsList.ghost1, lightsList.ghost2, lightsList.ghost3)
// house + graves
scene.add(house, graves)

// Floor

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 2
camera.position.y = 5
camera.position.z = 10
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.outputColorSpace = THREE.LinearSRGBColorSpace
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor(0x23222a)
renderer.shadowMap.enabled = true
/**
 * SizeseE
 */

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})



const scaleGraves = () => {
    graves.children.forEach((grave, index) => {
        gsap.to(grave.scale, { duration: 1, x: 1.2, y: 1.2, z: 1.2, ease: 'power2.out', delay: index * 0.2 });
    });
};

const resetGraveScales = () => {
    graves.children.forEach((grave, index) => {
        gsap.to(grave.scale, { duration: 1, x: 1, y: 1, z: 1, ease: 'power2.out', delay: index * 0.2 });
    });
};

document.addEventListener('click', (event) => {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // Calculate normalized device coordinates (NDC) from screen coordinates
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Set the raycaster origin and direction based on mouse coordinates
    raycaster.setFromCamera(mouse, camera); // 'camera' is the THREE.Camera 

    // Check for intersections with the house object
    const intersects = raycaster.intersectObject(house, true);

    if (intersects.length > 0) {
        console.log('House clicked');
        scaleGraves();
        const animationDuration = 1;
        const animationDelay = graves.children.length * 0.2;
        gsap.delayedCall(animationDuration + animationDelay, resetGraveScales);
    }
});



/**
 * Animate
 */


const tick = () => {
    ghostsCircle()
    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()




import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

// Object blue
const BlueBuffgeometry = new THREE.BufferGeometry()
const BlueMaterial = new THREE.MeshBasicMaterial({
    color: 0x0000ff,
    wireframe: true
})
const count = 50 // 50ta safhe --- har safhe 3 noghte --- har noghte 3 attr xyz
const BluepositionsArray = new Float32Array(count * 3 * 3)

for (let i = 0; i < count * 3 * 3; i++) {
    BluepositionsArray[i] = (Math.random() - 0.5) * 4
}
const positionsBuffer = new THREE.BufferAttribute(BluepositionsArray, 3)

BlueBuffgeometry.setAttribute('position', positionsBuffer)

const Bluemesh = new THREE.Mesh(BlueBuffgeometry, BlueMaterial)
scene.add(Bluemesh)

// Object Red
const RedBuffGeometry = new THREE.BufferGeometry()
const RedMaterial = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    wireframe: true
})
const redPositionsArray = new Float32Array(count * 3 * 3)
for (let i = 0; i < count * 3 * 3; i++) {
    redPositionsArray[i] = (Math.random() - 0.5) * 3

}
const redPositionsBuffer = new THREE.BufferAttribute(redPositionsArray, 3)
RedBuffGeometry.setAttribute('position', redPositionsBuffer)
const RedMesh = new THREE.Mesh(RedBuffGeometry, RedMaterial)
scene.add(RedMesh)

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

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

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(0, 0, 3)
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// RendererE
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

//responsiveness

window.addEventListener('resize', () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

window.addEventListener('dblclick', () => {
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement

    if (!fullscreenElement) {
        if (canvas.requestFullscreen) {
            canvas.requestFullscreen()
        }
        else if (canvas.webkitRequestFullscreen) {
            canvas.webkitRequestFullscreen()
        }
    }
    else {
        if (document.exitFullscreen) {
            document.exitFullscreen()
        }
        else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen()
        }
    }
})
// Animate
const clock = new THREE.Clock()

const loop = () => {
    const elapsedTime = clock.getElapsedTime()
    controls.update()
    renderer.render(scene, camera)
    window.requestAnimationFrame(loop)
}

loop()
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import gsap from 'gsap'

//Debug

const gui = new dat.GUI()
const parameters = {
    blueColor: 0x0000ff,
    redColor: 0xff0000,
    spin: () => {
        gsap.to(bluemesh.rotation,
            {
                y: bluemesh.rotation.y + Math.PI * 2,
                duration: 1
            }
        )
    }
}
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

// Object blue
const blueBuffgeometry = new THREE.BufferGeometry()
const blueMaterial = new THREE.MeshBasicMaterial({
    color: 0x0000ff,
    wireframe: true
})
const count = 50 // 50ta safhe --- har safhe 3 noghte --- har noghte 3 attr xyz
const bluepositionsArray = new Float32Array(count * 3 * 3)

for (let i = 0; i < count * 3 * 3; i++) {
    bluepositionsArray[i] = (Math.random() - 0.5) * 2
}
const bluepositionsBuffer = new THREE.BufferAttribute(bluepositionsArray, 3)

blueBuffgeometry.setAttribute('position', bluepositionsBuffer)

const bluemesh = new THREE.Mesh(blueBuffgeometry, blueMaterial)
scene.add(bluemesh)

//Debug Blue object

gui.add(bluemesh.position, 'y')
    .min(-2)
    .max(2)
    .step(0.1)
    .name('Blue Y')
gui.addColor(parameters, 'blueColor')
    .onChange(() => {
        bluemesh.material.color.set(parameters.blueColor)
    })
    .name('Blue Color')
gui.add(parameters, 'spin')

// Object Red
const RedBuffGeometry = new THREE.BufferGeometry()
const RedMaterial = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    wireframe: true
})
const redPositionsArray = new Float32Array(count * 3 * 3)
for (let i = 0; i < count * 3 * 3; i++) {
    redPositionsArray[i] = (Math.random() - 0.5) * 2

}
const redPositionsBuffer = new THREE.BufferAttribute(redPositionsArray, 3)
RedBuffGeometry.setAttribute('position', redPositionsBuffer)
const redMesh = new THREE.Mesh(RedBuffGeometry, RedMaterial)
scene.add(redMesh)

//Debug red object

gui.add(redMesh.position, 'x')
    .min(-2)
    .max(2)
    .step(0.1)
    .name('Red X')
gui.add(redMesh, 'visible').name('Red visibility')
gui.add(redMesh.material, 'wireframe')
gui.addColor(parameters, 'redColor')
    .onChange(() => {
        redMesh.material.color.set(parameters.redColor)
    })
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

//Debug


loop()
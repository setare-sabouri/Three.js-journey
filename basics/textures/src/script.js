import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
//debug 
const gui = new dat.GUI()
// Scene
const scene = new THREE.Scene()
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

// textures
THREE.ColorManagement.enabled = false
const loadingManager = new THREE.LoadingManager()
loadingManager.onLoad = () => {
    console.log("on Load");
}
loadingManager.onProgress = () => {
    console.log("on progress");
}

loadingManager.onError = () => {
    console.log("on Error");
}
const textureLoader = new THREE.TextureLoader(loadingManager)
const textureWood = textureLoader.load('/textures/door/color.jpg')
const textureAlpha = textureLoader.load('/textures/door/alpha.jpg')
const textureHeight = textureLoader.load('/textures/door/height.jpg')
const textureMetalness = textureLoader.load('/textures/door/metalness.jpg')
const textureRougness = textureLoader.load('/textures/door/roughness.jpg')
const textureAmbient = textureLoader.load('/textures/door/ambientOcclusion.jpg')
const textureNormal = textureLoader.load('/textures/door/normal.jpg')
const textureMatcaps = textureLoader.load('/textures/matcaps/3.png')
const textureGrdiant = textureLoader.load('/textures/gradients/5.jpg')


/**
 * other objects
 */
//material 1 

// const shapesMaterial = new THREE.MeshBasicMaterial({
//     color: 0xffffff,
//     map: textureWood,
//     transparent: true,
//     alphaMap: textureAlpha,
//     // side: THREE.DoubleSide

// })

//material 2
// const shapesMaterial = new THREE.MeshNormalMaterial({
//     wireframe: true
// })

//material 3
// const shapesMaterial = new THREE.MeshMatcapMaterial({
//     matcap: textureMatcaps
// })

//material 4
// const shapesMaterial = new THREE.MeshDepthMaterial()

//material 5
// const shapesMaterial = new THREE.MeshLambertMaterial()

//material 6
// const shapesMaterial = new THREE.MeshPhongMaterial({
//     shininess: 100,
//     specular: new THREE.Color(0x00ff00)
// })

// material 7
// const shapesMaterial = new THREE.MeshToonMaterial({
//     gradientMap: textureGrdiant
// })
// textureGrdiant.minFilter = THREE.NearestFilter
// textureGrdiant.magFilter = THREE.NearestFilter
// textureGrdiant.generateMipmaps = false


//material 8

const shapesMaterial = new THREE.MeshStandardMaterial({
    map: textureWood,
    aoMap: textureAmbient,
    displacementMap: textureHeight
})
gui.add(shapesMaterial, 'metalness').min(0).max(1)
gui.add(shapesMaterial, 'roughness').min(0).max(1)
gui.add(shapesMaterial, 'aoMapIntensity').min(0).max(5)
// gui.add(shapesMaterial, 'displacementMap')



const sphere = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 16), shapesMaterial)
sphere.position.set(-3, 0, 0)
const plane = new THREE.Mesh(new THREE.PlaneGeometry(3, 3), shapesMaterial)
const torus = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.2, 16, 32), shapesMaterial)
torus.position.set(3, 0, 0)
scene.add(sphere, plane, torus)

// Canvas
const canvas = document.querySelector('canvas.webgl')

/**
 * Sizes
 */

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

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 3
camera.position.y = 2
camera.position.z = 3
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

//lights 
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

const pointLight = new THREE.PointLight(0xffffff, 0.5)
pointLight.position.set(2, 2, 2)
scene.add(pointLight)
/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.outputColorSpace = THREE.LinearSRGBColorSpace
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () => {
    const elapsedTime = clock.getElapsedTime()
    //shapes
    plane.rotation.z = 0.2 * elapsedTime
    torus.rotation.x = 0.2 * elapsedTime


    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
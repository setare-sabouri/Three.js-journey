import * as THREE from 'three'

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

export const textureList = {
    textureWood: textureLoader.load('/textures/door/color.jpg'),
    textureAlpha: textureLoader.load('/textures/door/alpha.jpg'),
    textureHeight: textureLoader.load('/textures/door/height.jpg'),
    textureMetalness: textureLoader.load('/textures/door/metalness.jpg'),
    textureRougness: textureLoader.load('/textures/door/roughness.jpg'),
    textureAmbient: textureLoader.load('/textures/door/ambientOcclusion.jpg'),
    textureNormal: textureLoader.load('/textures/door/normal.jpg')
}

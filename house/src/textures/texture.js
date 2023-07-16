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


export const wallTextures = {
    colorMap: textureLoader.load('/textures/bricks/color.jpg'),
    ambientMap: textureLoader.load('/textures/bricks/ambientOcclusion.jpg'),
    normalMap: textureLoader.load('/textures/bricks/normal.jpg'),
    roughnessMap: textureLoader.load('/textures/bricks/roughness.jpg')
}

export const grassTextures = {
    colorMap: textureLoader.load('/textures/grass/color.jpg'),
    ambientMap: textureLoader.load('/textures/grass/ambientOcclusion.jpg'),
    normalMap: textureLoader.load('/textures/grass/normal.jpg'),
    roughnessMap: textureLoader.load('/textures/grass/roughness.jpg')
}
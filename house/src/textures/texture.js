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

grassTextures.colorMap.repeat.set(5, 5)
grassTextures.colorMap.wrapS = THREE.RepeatWrapping
grassTextures.colorMap.wrapT = THREE.RepeatWrapping

grassTextures.ambientMap.repeat.set(5, 5)
grassTextures.ambientMap.wrapS = THREE.RepeatWrapping
grassTextures.ambientMap.wrapT = THREE.RepeatWrapping


grassTextures.normalMap.repeat.set(5, 5)
grassTextures.normalMap.wrapS = THREE.RepeatWrapping
grassTextures.normalMap.wrapT = THREE.RepeatWrapping


grassTextures.roughnessMap.repeat.set(5, 5)
grassTextures.roughnessMap.wrapS = THREE.RepeatWrapping
grassTextures.roughnessMap.wrapT = THREE.RepeatWrapping
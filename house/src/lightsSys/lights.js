import * as THREE from 'three'

export const lightsList = {
    ambientLight: new THREE.AmbientLight('#cbc9ee', 0.5),
    moonLight: new THREE.DirectionalLight('#1386d8', 0.4),
    doorLight: new THREE.PointLight(0x653920, 5),
    ghost1: new THREE.PointLight('#ff00ff', 2, 3),
    ghost2: new THREE.PointLight('#00ffff', 2, 3),
    ghost3: new THREE.PointLight('#ffff00', 2, 3),
    fog: new THREE.Fog('#5c5a6d', 1, 14)
}

lightsList.doorLight.position.set(0, 3, 2.9)

lightsList.moonLight.position.set(5, 5, 2)

lightsList.ghost1.position.set(5, 3, 4)

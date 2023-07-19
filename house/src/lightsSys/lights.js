import * as THREE from 'three'

export const lightsList = {
    ambientLight: new THREE.AmbientLight('#b9d5ff', 0.5),
    moonLight: new THREE.DirectionalLight('#ffaaaa', 0.12),
    doorLight: new THREE.PointLight(0xdd7d46, 1),
    ghost1: new THREE.PointLight('#ff00ff', 2, 3),
    ghost2: new THREE.PointLight('#00ffff', 2, 3),
    ghost3: new THREE.PointLight('#ffff00', 2, 3),
    fog: new THREE.Fog('#262837', 1, 15)
}

lightsList.doorLight.position.set(0, 3, 2.9)

lightsList.moonLight.position.set(4, 5, - 2)

lightsList.ghost1.position.set(0, 0.5, 0)

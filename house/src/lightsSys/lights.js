import * as THREE from 'three'

export const lightsList = {
    ambientLight: new THREE.AmbientLight('#b9d5ff', 0.5),
    moonLight: new THREE.DirectionalLight('#ffaaaa', 0.12),
    doorLight: new THREE.PointLight(0xdd7d46, 1),
    fog: new THREE.Fog('#262837', 1, 15)
}

lightsList.doorLight.position.set(0, 3, 2.9)

lightsList.moonLight.position.set(4, 5, - 2)


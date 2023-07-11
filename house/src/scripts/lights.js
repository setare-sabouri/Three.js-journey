import * as THREE from 'three'

export const lightsList = {
    ambientLight: new THREE.AmbientLight('#b9d5ff', 0.12),
    moonLight: new THREE.DirectionalLight('#ffaaaa', 0.12)
}

// lightsList.moonLight.position.set(4, 5, - 2)
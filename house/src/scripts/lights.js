import * as THREE from 'three'
import { gui } from './lilGui'
console.log(gui);

export const lightsList = {
    ambientLight: new THREE.AmbientLight('#ffffff', 0.5),
    moonLight: new THREE.DirectionalLight('#ffffff', 0.5)
}

lightsList.moonLight.position.set(4, 5, - 2)
import * as THREE from 'three'
import { textureList } from '../textures'

const count = 500 //particles number 

const positions = new Float32Array(count * 3) // Multiply by 3 because each position is composed of 3 values (x, y, z) ---array of count * 3

for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10
}


const particlesGeometry = new THREE.BufferGeometry()
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

export const particle = new THREE.Points(
    particlesGeometry,
    new THREE.PointsMaterial({
        color: 0xccff66,
        size: 0.5,
        sizeAttenuation: true,
        transparent: true,
        alphaMap: textureList.heartTextur,
        depthWrite: false,
        blending: THREE.AdditiveBlending
    })
)

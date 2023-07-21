import * as THREE from 'three'
import { textureList } from '../textures'

export const countParticles = 500 //particles number 

const positions = new Float32Array(countParticles * 3) // Multiply by 3 because each position is composed of 3 values (x, y, z) ---array of countParticles * 3
const colors = new Float32Array(countParticles * 3)

for (let i = 0; i < countParticles * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10
    colors[i] = Math.random()
}

export const particlesGeometry = new THREE.BufferGeometry()
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))


export const particle = new THREE.Points(
    particlesGeometry,
    new THREE.PointsMaterial({
        size: 0.5,
        sizeAttenuation: true,
        transparent: true,
        alphaMap: textureList.starTextur,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexColors: true
    })
)

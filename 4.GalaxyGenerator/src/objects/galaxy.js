import * as THREE from 'three'

export const galaxyParameters = {
    count: 50
}

let galaxyGeometry
let positions
let galaxyMaterial
let galaxy

const galaxyGenerator = () => {
    galaxyGeometry = new THREE.BufferGeometry()
    positions = new Float32Array(100 * 3)

    for (let i = 0; i < 100 * 3; i++) {
        const i3 = i * 3 // i3=x   i3+1=y   i3+2=z
        positions[i3 + 0] = (Math.random() - 0.5) * 10
        positions[i3 + 1] = (Math.random() - 0.5) * 10
        positions[i3 + 2] = (Math.random() - 0.5) * 10
    }
    galaxyGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    galaxyMaterial = new THREE.PointsMaterial({
        size: 0.2,
        sizeAttenuation: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending
    })
    galaxy = new THREE.Points(galaxyGeometry, galaxyMaterial)
}


const removeGalaxy = () => {
    galaxyGeometry.dispose()
    galaxyMaterial.dispose()
}

export const galaxyPack = {
    galaxyGenerator,
    removeGalaxy,
    galaxy
}


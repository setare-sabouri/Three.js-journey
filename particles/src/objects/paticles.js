import * as THREE from 'three'


export const particle = new THREE.Points(
    new THREE.SphereGeometry(2, 50, 20),
    new THREE.PointsMaterial({
        size: 0.05,
        sizeAttenuation: true
    })
)
import * as THREE from 'three'

const galaxyGenerator = () => {
    console.log("object");
}
const count = 500

const positions = new Float32Array(count * 3)

for (let i = 0; i < count * 3; i++) {
    const i3 = i * 3 // i3=x   i3+1=y   i3+2=z
    positions[i3 + 0] = (Math.random() - 0.5) * 10
    positions[i3 + 1] = (Math.random() - 0.5) * 10
    positions[i3 + 2] = (Math.random() - 0.5) * 10
}
const galaxyGeometry = new THREE.BufferGeometry()
galaxyGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
const galaxyMaterial = new THREE.PointsMaterial({
    color: 'red',
    size: 0.2,
    sizeAttenuation: true
})


export const galaxyPack = {
    galaxyGenerator,
    galaxy: new THREE.Points(galaxyGeometry, galaxyMaterial)
}


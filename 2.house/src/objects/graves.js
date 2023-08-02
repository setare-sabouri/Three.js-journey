import * as THREE from 'three'

export const graves = new THREE.Group()

const graveGeo = new THREE.BoxGeometry(1, 3, 0.3)
const graveMaterial = new THREE.MeshStandardMaterial({ color: 0x53463c })
const count = 50
const grave = Array(count)
for (let i = 0; i < count; i++) {
    grave[i] = new THREE.Mesh(graveGeo, graveMaterial)
    const angle = Math.random() * Math.PI * 2
    const radius = 5 + Math.random() * 4.5
    const x_Circle = Math.sin(angle) * radius
    const z_Circle = Math.cos(angle) * radius
    grave[i].rotation.y = (Math.random() - 0.5) * 0.9
    grave[i].rotation.z = (Math.random() - 0.5) * 0.2

    grave[i].position.set(x_Circle, 0, z_Circle)
    graves.add(grave[i])
}



export const updateGravesScaleY = (dataArray) => {
    if (!dataArray || dataArray.length === 0) return;

    const scaleYFactor = 0.5; // You can adjust this factor based on how much you want the graves to scale

    for (let i = 0; i < count; i++) {
        const scaleY = dataArray[i % dataArray.length] / 256 * scaleYFactor + 1; // Scale based on audio data
        grave[i].scale.y = scaleY;
    }
};
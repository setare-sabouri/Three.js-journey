import * as THREE from 'three'


export const house = new THREE.Group()


const walls = new THREE.Mesh(
    new THREE.BoxGeometry(5, 3, 5),
    new THREE.MeshStandardMaterial({ color: 0x00ff00 })
)
walls.position.y = 3 / 2

const roof = new THREE.Mesh(
    new THREE.ConeGeometry(5, 2, 4),
    new THREE.MeshStandardMaterial({ color: 0xff0000, wireframe: true })
)
roof.position.y = 1 + 3
roof.rotation.y = Math.PI / 4


const door = new THREE.Mesh(
    new THREE.PlaneGeometry(1.5, 2),
    new THREE.MeshStandardMaterial({ color: 0x0000ff })
)
door.position.z = 2.5 + 0.01
door.position.y = 1


const bushGeo = new THREE.SphereGeometry(1, 16, 16)
const bushMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 })
const count = 4
const bush = Array(count)

for (let i = 0; i < count; i++) {
    bush[i] = new THREE.Mesh(bushGeo, bushMaterial);
    house.add(bush[i])
}

bush[0].scale.set(0.5, 0.5, 0.5)
bush[0].position.set(-2, 0.2, 2.6)

bush[1].scale.set(0.25, 0.25, 0.25)
bush[1].position.set(-1.3, 0.1, 2.7)

bush[2].scale.set(0.5, 0.5, 0.5)
bush[2].position.set(1.3, 0.2, 2.5)

bush[3].scale.set(0.3, 0.3, 0.3)
bush[3].position.set(2, 0.1, 2.5)


house.add(walls, roof, door)
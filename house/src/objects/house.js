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
house.add(door)
house.add(walls, roof)
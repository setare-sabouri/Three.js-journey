import * as THREE from 'three'


export const house = new THREE.Group()


const walls = new THREE.Mesh(
    new THREE.BoxGeometry(4, 3, 4),
    new THREE.MeshStandardMaterial({ color: 0x00ff00 })
)
walls.position.y = 3 / 2

const roof = new THREE.Mesh(
    new THREE.ConeGeometry(3.5, 2, 4),
    new THREE.MeshStandardMaterial({ color: 0xff0000 })
)
roof.position.y = 1 + 3
roof.rotation.y = Math.PI / 4
house.add(walls, roof)
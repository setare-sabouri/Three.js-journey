import * as THREE from 'three'
import { textureList, wallTextures, grassTextures } from '../textures/texture'
import gsap from 'gsap';
import { graves } from './graves';

export const house = new THREE.Group()


const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(30, 30, 100, 100),
    new THREE.MeshStandardMaterial({
        map: grassTextures.colorMap,
        aoMap: grassTextures.ambientMap,
        normalMap: grassTextures.normalMap,
        roughness: grassTextures.roughnessMap,
        displacementMap: grassTextures.height,
        displacementScale: 0.5,
    })
)


floor.geometry.setAttribute('uv2', new THREE.Float32BufferAttribute(floor.geometry.attributes.uv.array, 2))
floor.rotation.x = - Math.PI * 0.5
floor.position.y = 0.1

const walls = new THREE.Mesh(
    new THREE.BoxGeometry(5, 3, 5),
    new THREE.MeshStandardMaterial({
        map: wallTextures.colorMap,
        aoMap: wallTextures.ambientMap,
        normalMap: wallTextures.normalMap,
        roughness: wallTextures.roughnessMap
    })
)
walls.geometry.setAttribute('uv2', new THREE.Float32BufferAttribute(walls.geometry.attributes.uv.array, 2))
walls.position.y = 3 / 2

const roof = new THREE.Mesh(
    new THREE.ConeGeometry(5, 2, 4),
    new THREE.MeshStandardMaterial({ color: 0xbb0000 })
)
roof.position.y = 1 + 3
roof.rotation.y = Math.PI / 4


const door = new THREE.Mesh(
    new THREE.PlaneGeometry(1.9, 2.2, 100, 100),
    new THREE.MeshStandardMaterial({
        map: textureList.textureWood,
        transparent: true,
        alphaMap: textureList.textureAlpha,
        aoMap: textureList.textureAmbient,
        displacementMap: textureList.textureHeight,
        displacementScale: 0.1,
        normalMap: textureList.textureNormal,
        roughness: textureList.textureRougness,
        side: THREE.DoubleSide,
        // metalness: textureList.textureMetalness,

    })
)
door.geometry.setAttribute('uv2', new THREE.Float32BufferAttribute(door.geometry.attributes.uv.array, 2))
door.position.z = 2.5 + 0.01
door.position.y = 1

house.userData.isClickable = true;

export const houseElement = document.createElement('div');
houseElement.classList.add('interactive-object');
document.body.appendChild(houseElement);


const scaleGraves = () => {
    graves.children.forEach((grave, index) => {
        gsap.to(grave.scale, { duration: 1, x: 1.2, y: 1.2, z: 1.2, ease: 'power2.out', delay: index * 0.2 });
    });
};

const resetGraveScales = () => {
    graves.children.forEach((grave, index) => {
        gsap.to(grave.scale, { duration: 1, x: 1, y: 1, z: 1, ease: 'power2.out', delay: index * 0.2 });
    });
};

houseElement.addEventListener('click', () => {
    console.log('House clicked');
    scaleGraves(); // Scale all the graves

    const animationDuration = 1; // Duration of the scale animation
    const animationDelay = graves.children.length * 0.2; // Delay after which resetGraveScales will be called
    gsap.delayedCall(animationDuration + animationDelay, resetGraveScales);

})








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


house.add(floor, walls, roof, door)
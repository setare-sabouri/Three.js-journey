import * as THREE from 'three'
const clock = new THREE.Clock()
import { lightsList } from '../lightsSys/lights'


export const ghostsCircle = () => {
    const elapsedTime = clock.getElapsedTime()

    lightsList.ghost1.position.x = Math.cos(elapsedTime * 0.9) * 6 //first=speed , second= radius
    lightsList.ghost1.position.z = Math.sin(elapsedTime * 0.9) * 6
    lightsList.ghost1.position.y = Math.sin(elapsedTime * 4)


    lightsList.ghost2.position.x = Math.cos(-elapsedTime * 1.2) * 5 //blue
    lightsList.ghost2.position.z = Math.sin(-elapsedTime * 1.2) * 8 + Math.sin(elapsedTime) * 6
    lightsList.ghost2.position.y = Math.sin(-elapsedTime * 5) + 1.5


    lightsList.ghost3.position.x = Math.cos(elapsedTime * 1.5) * 8 //yellow
    lightsList.ghost3.position.z = Math.sin(elapsedTime * 1.5) * 8
    lightsList.ghost3.position.y = Math.sin(elapsedTime * 2) + Math.sin(elapsedTime * 4) + 1.5


}
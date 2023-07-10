import * as dat from 'lil-gui'
import { lightsList } from './lights'

export const gui = new dat.GUI()



/* ----------lights----------- */

gui.add(lightsList.ambientLight, 'intensity').min(0).max(1).step(0.001).name('ambient light intensity')
gui.add(lightsList.moonLight, 'intensity').min(0).max(1).step(0.001).name('Drctnal light intensity')
gui.add(lightsList.moonLight.position, 'x').min(- 5).max(5).step(0.001).name('Drctnal light X')
gui.add(lightsList.moonLight.position, 'y').min(- 5).max(5).step(0.001).name('Drctnal light Y')
gui.add(lightsList.moonLight.position, 'z').min(- 5).max(5).step(0.001).name('Drctnal light Z')



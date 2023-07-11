import * as dat from 'lil-gui'
import { lightsList } from './lights'


/* ----------lights----------- */

const guiLights = new dat.GUI({ name: 'kkk' })
guiLights.domElement.style.right = '0%'

guiLights.add(lightsList.ambientLight, 'intensity').min(0).max(1).step(0.001).name('ambient light intensity')
guiLights.add(lightsList.moonLight, 'intensity').min(0).max(1).step(0.001).name('Drctnal light intensity')
guiLights.add(lightsList.moonLight.position, 'x').min(- 5).max(5).step(0.001).name('Drctnal light X')
guiLights.add(lightsList.moonLight.position, 'y').min(- 5).max(5).step(0.001).name('Drctnal light Y')
guiLights.add(lightsList.moonLight.position, 'z').min(- 5).max(5).step(0.001).name('Drctnal light Z')


/* ----------Bushes----------- */

const guiBushes = new dat.GUI()
guiBushes.domElement.style.right = '20%'

// guiBushes.add()
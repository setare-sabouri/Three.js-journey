import * as dat from 'lil-gui'
import { lightsList } from './lights'
const guiLights = new dat.GUI()

guiLights.domElement.style.right = '0%'
const parameters = {
    doorColor: 0xa5836f,
    fogColor: 0x5c5a6d
}

guiLights.add(lightsList.ambientLight, 'intensity').min(0).max(1).step(0.001).name('ambient light intensity')
guiLights.add(lightsList.moonLight, 'intensity').min(0).max(1).step(0.001).name('moon light intensity')


guiLights.addColor(parameters, 'doorColor')
    .onChange(() => {
        lightsList.doorLight.color.set(parameters.doorColor)
    })
    .name('Door light')


guiLights.addColor(parameters, 'fogColor')
    .onChange(() => {
        lightsList.fog.color.set(parameters.fogColor)
    })
    .name('Fog')



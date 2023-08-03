import * as dat from 'lil-gui'
import { house } from './house'
import { count, grave } from './graves'
const guiObjs = new dat.GUI()
guiObjs.domElement.style.right = '20%'

const parameters = {
    roofColor: 0xa5836f,
    graveColor: 0xaaaaaa
}

guiObjs.add(house.children[5], 'visible').name('walls')
guiObjs.add(house.children[6], 'visible').name('roof')


guiObjs.addColor(parameters, 'roofColor')
    .onChange(() => {
        house.children[6].material.color.set(parameters.roofColor)
    })
    .name('roof color')



guiObjs.addColor(parameters, 'graveColor')
    .onChange(() => {
        for (let i = 0; i < count; i++) {
            grave[i].material.color.set(parameters.graveColor);
        }
    })
    .name('grave color');
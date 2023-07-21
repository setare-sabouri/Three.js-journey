import * as dat from 'lil-gui'
import { galaxyPack, galaxyParameters } from '../objects/galaxy'

const gui = new dat.GUI()

const text = () => {
    console.log(galaxyParameters.count);
}
gui.add(galaxyParameters, 'count').min(100).max(1000).step(50).onFinishChange(galaxyPack.updateGalaxy)
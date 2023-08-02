import * as dat from 'lil-gui'
import { galaxyParameters } from '../objects/galaxy'
import { updateGalaxy } from '../script'
const gui = new dat.GUI()


gui.add(galaxyParameters, 'count').min(50).max(1000).step(50).onFinishChange(updateGalaxy)
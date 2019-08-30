import * as THREE from 'three'
import * as Lib from './lib'
import { range , map ,reverse } from '@juan-utils/functions'

const scene = new THREE.Scene();
const aspect = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera( 75 , aspect , 0.1 , 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
camera.position.z = 5;
camera.position.y = 0

const head = [
    Lib.vector(0,10),
    Lib.vector(0.3,9.9),
    Lib.vector(0.5,9.5),
    Lib.vector(0.3,9.1),
    Lib.vector(0.05,9),
]

const torso = map(x => {
    return Lib.vector( 0.1 + ((2**x) - 1)*0.4 , 8.8 - x )
})

const body = [
    Lib.vector(0.55,8.8),
    Lib.vector(0.2,8.8),
    Lib.vector(0.2,8.8),
    ...torso(range(0,2,0.5)),
    Lib.vector(0.2, 7.2),
    Lib.vector(0.83, 7.2),
    Lib.vector(0.83, 7),
    Lib.vector(0, 7),
]

const points = [ ...head , ...body ].map( x => x.add(
    Lib.vector(0,-9)
) );



const material = Lib.createColoredMaterial("#aaaaaa");
const pawn = Lib.createLatheGeometryMesh(material , reverse(points))
const line = Lib.getWire(pawn)


//scene.add(line)
scene.add(pawn)

const control = {};

function render() {
    requestAnimationFrame( render );
    renderer.render( scene, camera );
}
render();
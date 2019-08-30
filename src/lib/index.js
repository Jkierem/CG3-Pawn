import * as THREE from 'three';

export const getWire = (mesh) => {
    const line = new THREE.LineSegments( new THREE.WireframeGeometry( mesh.geometry ))
    line.material.depthTest = false;
    line.material.opacity = 0.25;
    line.material.transparent = true;
    return line
}

export const createLatheGeometryMesh = (material,points) => {
    const geometry = new THREE.LatheGeometry(
        points, 30, 0, 2* Math.PI
    );
    return new THREE.Mesh(geometry,material);
}

export const createColoredMaterial = (color) => new THREE.MeshBasicMaterial({ visible: true });

export const createNormalMaterialMesh = (geometry) => {
    const material = new THREE.MeshNormalMaterial();
    return new THREE.Mesh(geometry,material);
}

export const createNormalBox = ({ x , y , z }) => {
    const geometry = new THREE.BoxGeometry(x,y,z);
    return createNormalMaterialMesh(geometry);
}

export const createNormalSphere = (sphereData) => {
    const { r , wSegments = 24 , hSegments = 24 } = sphereData;
    const geometry = new THREE.SphereGeometry( r , wSegments , hSegments);
    return createNormalMaterialMesh(geometry);
}

export const createContainer = (...objs) => {
    const cont = new THREE.Object3D();
    if( objs.length > 0 ){
        cont.add(...objs);
    }
    return cont;
}

export const vector = (...args) => new THREE.Vector2(...args)
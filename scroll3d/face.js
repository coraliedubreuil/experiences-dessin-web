const section = document.querySelector("section.face"); //se place dans la classe .face de mon html


// ici création de la scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({alpha : true, antialias : true}); 
renderer.setSize( window.innerWidth, window.innerHeight );
section.appendChild( renderer.domElement );


// ici lumière ambiente
const ambient = new THREE.AmbientLight(0x404040);
scene.add( ambient );
// ici lumière dirigée
const light = new THREE.DirectionalLight(0xffffff); //sa couleur
light.position.set(0, 0, 8); //sa position
scene.add( light ); //ajout à la scene


const loader = new THREE.TextureLoader()


// ici choix d'une forme
const geometry = new THREE.SphereGeometry( 5, 30, 20, 5 ); //parametres de ma forme
const material = new THREE.MeshLambertMaterial( {  //texture de ma forme
    map: loader.load("dessin.png") //ajoute une image comme texture
} );
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere ); //ajoute la sphere à la forme


camera.position.z = 18; //position camera, distance


let currentTimeline = window.pageYOffset / 3000;
let aimTimeline = window.pageYOffset / 3000;

// ici animation de la forme
function animate() {
    requestAnimationFrame( animate );

    currentTimeline += (aimTimeline - currentTimeline) * 0.1; //adoucir animation

    const rx = currentTimeline * Math.PI * 2;
    const ry = currentTimeline;

    sphere.rotation.set(rx, 0, 0);

    renderer.render( scene, camera );
}
animate();


window.addEventListener("scroll", function(){
    aimTimeline = window.pageYOffset / 3000;
})
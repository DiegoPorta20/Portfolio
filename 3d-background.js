// Fondo 3D con Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('bg-canvas'),
    antialias: true,
    alpha: true
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

// Crear geometría de partículas
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 1500;
const posArray = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 100;
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

// Material de partículas
const particlesMaterial = new THREE.PointsMaterial({
    size: 0.08,
    color: 0x667eea,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
});

const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

// Crear cubos flotantes con efecto glassmorphism
const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
const cubes = [];

for (let i = 0; i < 8; i++) {
    const material = new THREE.MeshPhongMaterial({
        color: i % 2 === 0 ? 0x667eea : 0x764ba2,
        transparent: true,
        opacity: 0.3,
        emissive: i % 2 === 0 ? 0x667eea : 0x764ba2,
        emissiveIntensity: 0.2
    });
    
    const cube = new THREE.Mesh(cubeGeometry, material);
    
    cube.position.x = Math.random() * 40 - 20;
    cube.position.y = Math.random() * 40 - 20;
    cube.position.z = Math.random() * 40 - 20;
    
    cube.rotation.x = Math.random() * Math.PI;
    cube.rotation.y = Math.random() * Math.PI;
    
    cubes.push(cube);
    scene.add(cube);
}

// Iluminación
const pointLight = new THREE.PointLight(0x667eea, 1);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight2 = new THREE.PointLight(0x764ba2, 1);
pointLight2.position.set(-5, -5, -5);
scene.add(pointLight2);

// Variables para el movimiento del mouse
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
});

// Animación
function animate() {
    requestAnimationFrame(animate);
    
    // Rotar partículas
    particlesMesh.rotation.y += 0.0005;
    particlesMesh.rotation.x += 0.0002;
    
    // Animar cubos
    cubes.forEach((cube, index) => {
        cube.rotation.x += 0.002 + index * 0.0002;
        cube.rotation.y += 0.003 + index * 0.0002;
        
        // Movimiento flotante
        cube.position.y += Math.sin(Date.now() * 0.001 + index) * 0.003;
    });
    
    // Movimiento de cámara con el mouse
    camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
    camera.position.y += (mouseY * 5 - camera.position.y) * 0.05;
    camera.lookAt(scene.position);
    
    renderer.render(scene, camera);
}

animate();

// Responsive
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Efecto de scroll en la cámara
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    camera.position.z = 30 + scrollY * 0.01;
    camera.rotation.x = scrollY * 0.0002;
});

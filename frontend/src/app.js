import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';  // 👈 Import OrbitControls

export const initThreeScene = () => {
    // Camera
    const camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.set(0, 1.5, 5);

    // Scene
    const scene = new THREE.Scene();
    let mixer;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('container3d').appendChild(renderer.domElement);

    // OrbitControls 
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; 
    controls.dampingFactor = 0.05;
    controls.target.set(0, 1.5, 0);  
    controls.update();

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xaeb6bf, 3);
    scene.add(ambientLight);

    const topLight = new THREE.DirectionalLight(0xe8daef, 2);
    topLight.position.set(5, 5, 5);
    scene.add(topLight);

    const pointLight = new THREE.PointLight(0xfcf3cf, 5, 20);
    scene.add(pointLight);

    // Load Michi Model
    const loader = new GLTFLoader();
    loader.load(
        'michi_bot.glb',
        function (gltf) {
            const michi = gltf.scene;
            michi.scale.set(225, 225, 225);
            michi.position.y = 1;
            scene.add(michi);

            // Animation
            mixer = new THREE.AnimationMixer(michi);
            if (gltf.animations.length > 0) {
                mixer.clipAction(gltf.animations[0]).play();
            }

            // Emissive glow for certain parts
            michi.traverse((child) => {
                if (child.isMesh && child.material?.name === 'mat_michi') {
                    const glowingParts = [
                        'Cannon_I_mat_michi_0',
                        'Cannon_D_mat_michi_0',
                        'Wing_Up_I_mat_michi_0',
                        'Wing_Up_D_mat_michi_0',
                        'Head_Prop_mat_michi_0'
                    ];
                    if (glowingParts.includes(child.name)) {
                        child.material.emissive = new THREE.Color(0xffffff);
                        child.material.emissiveIntensity = 10;
                        child.material.needsUpdate = true;
                    }
                }
            });
        },
        undefined,
        function (error) {
            console.error('GLTF load error:', error);
        }
    );

    // Animation loop
    const reRender3d = () => {
        requestAnimationFrame(reRender3d);
        controls.update(); 
        renderer.render(scene, camera);
        if (mixer) mixer.update(0.004);
    };
    reRender3d();
};

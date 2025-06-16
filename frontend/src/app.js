import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap'; // 

export const initThreeScene = () => {
    // Camera
    const camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.set(0.5, 1.5, 4);

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
    controls.enableZoom = false;
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

    const arrPositionModel = [
        {
            id: "home",
            position: { x: 0, y: 1, z: 0.5 },
            rotation: { x: 0, y: 0, z: 0 },
            scale: { x: 375, y: 375, z: 375 }
        },
        {
            id: "about",
            position: { x: -12.5, y: 1, z: 0.5 },
            rotation: { x: 0, y: 0.8, z: 0 },
            scale: { x: 400, y: 400, z: 400 }
        },
        {
            id: "projects",
            position: { x: 0, y: -3, z: 0.5 },
            rotation: { x: -0.2, y: 0, z: 0 },
            scale: { x: 220, y: 220, z: 220 }
        },
        {
            id: "contact",
            position: { x: -0.5, y: -1.5, z: -5 },
            rotation: { x: -0.25, y: 0, z: 0 },
            scale: { x: 200, y: 200, z: 200 }
        }
    ];
    let michi;
    let lastSection;
    const modelMove = () => {
        const sections = document.querySelectorAll('.section');
        let currentSection;

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 3) {
                currentSection = section.id;
            }
        });

        if (!currentSection || currentSection === lastSection) return;
        lastSection = currentSection;

        const data = arrPositionModel.find(val => val.id === currentSection);
        if (data && michi) {
            gsap.to(michi.position, {
                ...data.position,
                duration: 3,
                ease: "power1.out"
            });
            gsap.to(michi.scale, {
                ...data.scale,
                duration: 2,
                ease: "power1.out"
            });
            gsap.to(michi.rotation, {
                ...data.rotation,
                duration: 2,
                ease: "power1.out"
            });

            if (currentSection === "home") {
                gsap.to(camera.position, {
                    z: 10,
                    duration: 2.5,
                    ease: 'power2.out',
                    onUpdate: () => controls.update()
                });
            } else if (currentSection === "contact") {
                gsap.to(camera.position, {
                    z: 5,
                    duration: 2.5,
                    ease: 'power2.out',
                    onUpdate: () => controls.update()
                });
            } else {
                gsap.to(camera.position, {
                    z: 20,
                    duration: 2.5,
                    ease: 'power2.out',
                    onUpdate: () => controls.update()
                });
            }
        }
    };


    // Load Michi Model
    const loader = new GLTFLoader();
    loader.load(
        'michi_bot.glb',
        function (gltf) {
            michi = gltf.scene;
            michi.scale.set(210, 210, 210);
            michi.position.y = 1;
            michi.position.z = 0.5;
            scene.add(michi);



            // Animation mixer
            mixer = new THREE.AnimationMixer(michi);
            if (gltf.animations.length > 0) {
                mixer.clipAction(gltf.animations[0]).play();
            }

            modelMove();

            // Emissive glow
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
            window.addEventListener('scroll', modelMove);
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
    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        
    });


    reRender3d();
};
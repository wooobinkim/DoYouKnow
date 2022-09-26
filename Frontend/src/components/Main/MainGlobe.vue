<template>
  <div class="canvas-container">
    
    <!-- <div class="moon-background"></div>
    <div class="sun-background"></div> -->
  </div>
</template>

<script>
import {
  // DoubleSide,
  PCFSoftShadowMap,
  MeshPhysicalMaterial,
  TextureLoader,
  FloatType,
  PMREMGenerator,
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Color,
  ACESFilmicToneMapping,
  sRGBEncoding,
  Mesh,
  SphereGeometry,
  Vector2,
  DirectionalLight,
  Clock,
  Vector3,
  PlaneGeometry,
  Group,
  Raycaster,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
// import { useRouter } from "vue-router";

export default {
  setup() {
    // const router = useRouter();
    // const canvas = document.querySelector('.canvas-container')
    const scene = new Scene();
    const camera = new PerspectiveCamera(
      45,
      innerWidth / innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 15, 30); // 지구 크기 조정

    const renderer = new WebGLRenderer({ antialias: true, alpha: true, });
    renderer.setSize(1200, 563); // 캔버스 사이즈 때문에 조정함
    renderer.toneMapping = ACESFilmicToneMapping;
    renderer.outputEncoding = sRGBEncoding;
    renderer.physicallyCorrectLights = true;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = PCFSoftShadowMap;
    document.body.appendChild(renderer.domElement);
    

    const sunLight = new DirectionalLight(
      new Color("#FFFFFF").convertSRGBToLinear(),
      3.5
    );
    sunLight.position.set(10, 20, 10);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 512;
    sunLight.shadow.mapSize.height = 512;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 100;
    sunLight.shadow.camera.left = -10;
    sunLight.shadow.camera.bottom = -10;
    sunLight.shadow.camera.top = 10;
    sunLight.shadow.camera.right = 10;
    scene.add(sunLight);

    const moonLight = new DirectionalLight(
      new Color("#77ccff").convertSRGBToLinear(),
      0
    );
    moonLight.position.set(-10, 20, 10);
    moonLight.castShadow = true;
    moonLight.shadow.mapSize.width = 512;
    moonLight.shadow.mapSize.height = 512;
    moonLight.shadow.camera.near = 0.5;
    moonLight.shadow.camera.far = 100;
    moonLight.shadow.camera.left = -10;
    moonLight.shadow.camera.bottom = -10;
    moonLight.shadow.camera.top = 10;
    moonLight.shadow.camera.right = 10;
    scene.add(moonLight);

    // orbitcontrols
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.dampingFactor = 0.05;
    controls.enableDamping = true;
    controls.enableZoom = false;

    let mousePos = new Vector2(0, 0);

    (async function () {
      let pmrem = new PMREMGenerator(renderer);
      let envmapTexture = await new RGBELoader()
        .setDataType(FloatType)
        .loadAsync("texture/4k.hdr");

      //globetexture
      let envMap = pmrem.fromEquirectangular(envmapTexture).texture;
      let textures = {
        bump: await new TextureLoader().loadAsync("texture/earthbump.jpg"),
        map: await new TextureLoader().loadAsync("texture/earthsample4.jpg"),
        spec: await new TextureLoader().loadAsync("texture/earthspec.jpg"),
        planeTrailMask: await new TextureLoader().loadAsync("texture/mask.png"),
      };

      //globe
      let sphere = new Mesh(
        new SphereGeometry(10.5, 70, 70),
        new MeshPhysicalMaterial({
          map: textures.map,
          roughnessMap: textures.spec,
          bumpMap: textures.bump,
          bumpScale: 0.05,
          envMap,
          envMapIntensity: 0.4,
          sheen: 1,
          sheenRoughness: 0.75,
          sheenColor: new Color("#ff8a00").convertSRGBToLinear(),
          clearcoat: 0.5,
        })
      );
      console.log(sphere, "=========");
      sphere.sunEnvIntensity = 0.4;
      sphere.moonEnvIntensity = 0.1;
      sphere.rotation.y += Math.PI * 1.25;
      sphere.receiveShadow = true;
      scene.add(sphere);

      let plane = (await new GLTFLoader().loadAsync("texture/scene.glb")).scene
        .children[0];

      // marker model
      let marker = (await new GLTFLoader().loadAsync("texture/pointer.glb"))
        .scene.children[0];
      marker.scale.set(0.05, 0.05, 0.05);
      marker.position.set(0, 0, 20);
      scene.add(marker);
      let marker1 = (await new GLTFLoader().loadAsync("texture/pointer.glb"))
        .scene.children[0];
      marker1.scale.set(0.05, 0.05, 0.05);
      marker1.position.set(0, 0, 18);
      scene.add(marker1);

      // marker event =======================================================================
      // TODO: object - id 로 접근, parmas로 분기처리
      const pointer = new Vector2();
      const raycaster = new Raycaster();
      const onMouseMove = (e) => {
        pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
        pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(pointer, camera);
        const intersects = raycaster.intersectObjects(scene.children);

        if (intersects.length >= 2) {
          // router.push({ name: "DataLab" });

          console.log(intersects, "뭐임?");
          console.log(intersects[0].object.id, "id임?");
        }
      };
      window.addEventListener("click", onMouseMove);
      // 절대 수정하지 마세용 ==================================================

      // plane model
      let planesData = [
        makePlane(plane, textures.planeTrailMask, envMap, scene),
        makePlane(plane, textures.planeTrailMask, envMap, scene),
        makePlane(plane, textures.planeTrailMask, envMap, scene),
        makePlane(plane, textures.planeTrailMask, envMap, scene),
        makePlane(plane, textures.planeTrailMask, envMap, scene),
      ];

      let clock = new Clock();

      renderer.setAnimationLoop(() => {
        let delta = clock.getDelta();
        // scene.rotation.y += delta * 0.05;

        controls.update();
        renderer.render(scene, camera);

        planesData.forEach((planeData) => {
          let plane = planeData.group;

          plane.position.set(0, 0, 0);
          plane.rotation.set(0, 0, 0);
          plane.updateMatrixWorld();

          planeData.rot += delta;
          plane.rotateOnAxis(planeData.randomAxis, planeData.randomAxisRot); // random axis
          plane.rotateOnAxis(new Vector3(0, 1, 0), planeData.rot); // y-axis rotation
          plane.rotateOnAxis(new Vector3(0, 0, 1.1), planeData.rad); // this decides the radius
          plane.translateY(planeData.yOff);
          plane.rotateOnAxis(new Vector3(1, 0, 0), +Math.PI * 0.5);
        });

        renderer.autoClear = false;
        // renderer.render(ringsScene, ringsCamera);
        renderer.autoClear = true;
      });
    })();

    function nr() {
      return Math.random() * 2 - 1;
    }

    function makePlane(planeMesh, trailTexture, envMap, scene) {
      let plane = planeMesh.clone();
      plane.scale.set(0.001, 0.001, 0.001);
      plane.position.set(0, 0, 0);
      plane.rotation.set(0, 0, 0);
      plane.updateMatrixWorld();

      plane.traverse((object) => {
        if (object instanceof Mesh) {
          object.material.envMap = envMap;
          object.sunEnvIntensity = 1;
          object.moonEnvIntensity = 0.3;
          object.castShadow = true;
          object.receiveShadow = true;
        }
      });

      let trail = new Mesh(
        new PlaneGeometry(1, 2),
        new MeshPhysicalMaterial({
          envMap,
          envMapIntensity: 3,

          roughness: 0.4,
          metalness: 0,
          transmission: 1,

          transparent: true,
          opacity: 1,
          alphaMap: trailTexture,
        })
      );
      trail.sunEnvIntensity = 3;
      trail.moonEnvIntensity = 0.7;
      trail.rotateX(Math.PI);
      trail.translateY(1.1);

      let group = new Group();
      group.add(plane);
      group.add(trail);

      scene.add(group);

      return {
        group,
        yOff: 10.5 + Math.random() * 1.0,
        rot: Math.PI * 2, // just to set a random starting point
        rad: Math.random() * Math.PI * 0.45 + Math.PI * 0.05,
        randomAxis: new Vector3(nr(), nr(), nr()).normalize(),
        randomAxisRot: Math.random() * Math.PI * 2,
      };
    }

    window.addEventListener("mousemove", (e) => {
      let x = e.clientX - innerWidth * 0.5;
      let y = e.clientY - innerHeight * 0.5;

      mousePos.x = x * 0.0003;
      mousePos.y = y * 0.0003;
    });
  },
};
</script>

<style>
.sun-background {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgb(255 219 158), rgb(253 243 220));
  opacity: 1;
}
.moon-background {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(313deg, #0b1a2b, #3a6291 111%);
  opacity: 1;
}
canvas {
  position: absolute;
  top: 200px;
  right: 50px;
  z-index: 1;
}
</style>

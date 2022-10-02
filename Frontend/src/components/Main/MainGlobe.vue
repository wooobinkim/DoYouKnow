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
import { onMounted } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    // const canvas = document.querySelector('.canvas-container')
    const scene = new Scene();
    const camera = new PerspectiveCamera(
      45,
      innerWidth / innerHeight,
      0.1,
      1000
    );

    camera.position.set(0, 15, 30); // model camera set
    const renderer = new WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(innerWidth, innerHeight); // 캔버스 사이즈 때문에 조정함

    renderer.toneMapping = ACESFilmicToneMapping;
    renderer.outputEncoding = sRGBEncoding;
    renderer.physicallyCorrectLights = true;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = PCFSoftShadowMap;
    onMounted(() => {
      document.querySelector(".globe-area").appendChild(renderer.domElement);
    });

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
    controls.enablePan = false;

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
      sphere.sunEnvIntensity = 0.4;
      sphere.moonEnvIntensity = 0.1;
      sphere.rotation.y += Math.PI * 1.25;
      sphere.receiveShadow = true;
      scene.add(sphere);

      let plane = (await new GLTFLoader().loadAsync("texture/scene.glb")).scene
        .children[0];

      // marker model
      // us
      let marker = (await new GLTFLoader().loadAsync("texture/pointer.glb"))
        .scene.children[0];
      marker.scale.set(0.05, 0.05, 0.05);
      marker.position.set(-5, 6, -8);
      scene.add(marker);
      // uk
      let marker1 = (await new GLTFLoader().loadAsync("texture/pointer.glb"))
        .scene.children[0];
      marker1.scale.set(0.05, 0.05, 0.05);
      marker1.position.set(-6, 8.5, 3.5);
      scene.add(marker1);
      // jp
      let marker2 = (await new GLTFLoader().loadAsync("texture/pointer.glb"))
        .scene.children[0];
      marker2.scale.set(0.05, 0.05, 0.05);
      marker2.position.set(8.5, 7, 1);
      scene.add(marker2);
      // vi
      let marker3 = (await new GLTFLoader().loadAsync("texture/pointer.glb"))
        .scene.children[0];
      marker3.scale.set(0.05, 0.05, 0.05);
      marker3.position.set(8.5, 3, 7);
      scene.add(marker3);
      // ind
      let marker4 = (await new GLTFLoader().loadAsync("texture/pointer.glb"))
        .scene.children[0];
      marker4.scale.set(0.05, 0.05, 0.05);
      marker4.position.set(10, 0, 5.5);
      scene.add(marker4);
      // br
      let marker5 = (await new GLTFLoader().loadAsync("texture/pointer.glb"))
        .scene.children[0];
      marker5.scale.set(0.05, 0.05, 0.05);
      marker5.position.set(-10.5, -2.5, -4);
      scene.add(marker5);

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
          if (intersects[0].object.id == 53) {
            alert(intersects[0].object.id + "미국클릭");
            const nation = 1;
            store.dispatch("setNation", { nation });
            store.dispatch("getNationRate", { nation });
            router.push({
              name: "DatalabView",
            });
          }
          if (intersects[0].object.id == 59) {
            alert(intersects[0].object.id + "영국클릭");
            const nation = 2;
            store.dispatch("setNation", { nation });
            store.dispatch("getNationRate", { nation });
            router.push({
              name: "DatalabPage",
              // query: { nation: 2 },
            });
          }
          if (intersects[0].object.id == 65) {
            alert(intersects[0].object.id + "일본클릭");
            const nation = 3;
            store.dispatch("setNation", { nation });
            store.dispatch("getNationRate", { nation });
            router.push({
              name: "DatalabPage",
            });
          }
          if (intersects[0].object.id == 71) {
            alert(intersects[0].object.id + "베트남클릭");
            const nation = 4;
            store.dispatch("setNation", { nation });
            store.dispatch("getNationRate", { nation });
            router.push({
              name: "DatalabPage",
            });
          }
          if (intersects[0].object.id == 77) {
            alert(intersects[0].object.id + "인도네시아클릭");
            const nation = 5;
            store.dispatch("setNation", { nation });
            store.dispatch("getNationRate", { nation });
            router.push({
              name: "DatalabPage",
            });
          }
          if (intersects[0].object.id == 83) {
            alert(intersects[0].object.id + "브라질클릭");
            const nation = 6;
            store.dispatch("setNation", { nation });
            store.dispatch("getNationRate", { nation });
            router.push({
              name: "DatalabPage",
            });
          }
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
        scene.rotation.y += delta * 0.05;

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
  /* position: absolute;
  top: 20%;
  right: 15%; */
  z-index: 3;
}
</style>

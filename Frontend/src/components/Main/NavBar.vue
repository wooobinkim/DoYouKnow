<template>
  <!-- <div class="navbar">
    <router-link to="/" class="nav-img">
      <img class="nav-logo" src="../../assets/logo.png" />
    </router-link>
    <div class="nav-menu">
      <router-link to="/datalab" class="nav-menu-item">데이터랩</router-link>
      <router-link to="/game" class="nav-menu-item">더많이더적게</router-link>
      <router-link to="/DYKC" class="nav-menu-item">명예의전당</router-link>
    </div>
  </div> -->
  <div class="navbar-container">
    <img src="@/assets/logo.png" class="logo" @click.prevent="moveSlide(0)">
    <div class="menu-container">
      <div class="background-one" >
        <div class="link-container">
          <a class="link-one" @click.prevent="moveSlide(1)">DataLab</a>
        </div>
      </div>
      <div class="background-two link-container">
        <a class="link-two" @click.prevent="moveSlide(2)">Hall Of Fame</a>
      </div>
      <div class="background-three link-container">
        <a class="link-three" @click.prevent="moveSlide(3)">Game</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    swiper: Object,
  },

  setup(props){
    const moveSlide = (index) => {
      props.swiper.slideTo(index, 1000, false)
    }

    return {
      moveSlide,
    }
  }
};
</script>

<style scoped>
/* .nav-img {
  margin: 0;
}
.navbar {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
  position: fixed;
}
.nav-logo {
  border: 0;
  width: 5vw;
  height: auto;
  margin: 10px 0 0 10px;
} */
/* 
.nav-menu {
  display: flex;
  font-size: 2em;
  margin: 0 30px;
} */

/* .nav-menu-item {
  margin: 0 10px;
  font-weight: bold;
  text-decoration: none;
  position: relative;
  padding: 6px 12px;
}

.nav-menu-item::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 4px;
  background: #f1c40f;
  transition: all 0.5s ease-out;
}

.nav-menu-item:hover::after {
  width: 80%;
} */
.logo {
  border: 0;
  width: 5vw;
  height: auto;
  margin: 10px 0 0 10px;
}

body {
  margin: 0;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
}
.navbar-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
  position: fixed;
}
.menu-container {
  display: flex;
  margin: 0 3% 0 0;
  
}

.background-one {
  /* background-color: #151515; */
  background-color: transparent;
}

.background-two {
  /* background-color: #151515; */
  background-color: transparent;
}

.background-three {
  background-color: transparent;
}

.link-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
  z-index: 0;
  margin: 0 30px;
  
}

a {
  font-family: "Bungee", cursive;
  font-size: 2.5em;
}

.link-one {
  color: #53d9d1;
  transition: color 1s cubic-bezier(0.32, 0, 0.67, 0);
  line-height: 1em;
}

.link-one:hover {
  color: #111;
  transition: color 1s cubic-bezier(0.33, 1, 0.68, 1);

  /* Thanks Chris Coyier, you got my back always. https://css-tricks.com/different-transitions-for-hover-on-hover-off/ */
}

.link-one::before {
  content: "";
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background-color: #53d9d1;

  clip-path: circle(0% at 50% calc(50%));
  transition: clip-path 1s cubic-bezier(0.65, 0, 0.35, 1);
}

.link-one:hover::before {
  clip-path: circle(100% at 50% 50%);
}

.link-one::after {
  content: "";
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background-color: #151515;

  clip-path: polygon(
    40% 0%,
    60% 0%,
    60% 0%,
    40% 0%,
    40% 100%,
    60% 100%,
    60% 100%,
    40% 100%
  );

  /*
  Didn't look consistently awesome enough
  across different viewing widths.
  clip-path: polygon(
    50% 50%,
    50% 50%,
    50% 50%,
    50% 50%,
    50% 50%,
    50% 50%,
    50% 50%,
    50% 50%,
    50% 50%,
    50% 50%,
    50% 50%,
    50% 50%,
    50% 50%,
    50% 50%,
    50% 50%,
    50% 50%,
    50% 50%,
    50% 50%,
    50% 50%,
    50% 50%,
    50% 50%,
    50% 50%
  );
  */
  transition: clip-path 1s cubic-bezier(0.65, 0, 0.35, 1);
}

.link-one:hover::after {
  /*
  clip-path: polygon(
    20% 45%,
    10% 40%,
    30% 30%,
    40% 35%,
    60% 35%,
    70% 30%,
    90% 40%,
    80% 45%,
    60% 35%,
    40% 35%,
    20% 45%,
    20% 55%,
    10% 60%,
    30% 70%,
    40% 65%,
    60% 65%,
    70% 70%,
    90% 60%,
    80% 55%,
    60% 65%,
    40% 65%,
    20% 55%
  );
  */
  clip-path: polygon(
    40% 10%,
    60% 10%,
    60% 35%,
    40% 35%,
    40% 90%,
    60% 90%,
    60% 65%,
    40% 65%
  );
}

.link-two {
  color: #f27b9b;
  transition: color 1s cubic-bezier(0.32, 0, 0.67, 0);
}

.link-two:hover {
  color: #111;
  transition: color 1s cubic-bezier(0.33, 1, 0.68, 1);
}

.link-two::before {
  content: "";
  position: absolute;
  z-index: -2;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  clip-path: polygon(
    0% -20%,
    100% -30%,
    100% -10%,
    0% 0%,
    0% 130%,
    100% 120%,
    100% 100%,
    0% 110%
  );
  background-color: #f27b9b;

  transition: clip-path 1s cubic-bezier(0.25, 1, 0.5, 1);
}

.link-two:hover::before {
  clip-path: polygon(
    0% 10%,
    100% 0%,
    100% 20%,
    0% 30%,
    0% 100%,
    100% 90%,
    100% 70%,
    0% 80%
  );
}

.link-two::after {
  content: "";
  position: absolute;
  z-index: -1;
  width: 5ch;
  height: 5ch;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%) rotate(0deg) scale(0);
  transition: transform 1s ease;

  background-color: #f27b9b;
}

.link-two:hover::after {
  transform: translate(50%, -50%) rotate(135deg) scale(1);
}

.link-three {
  color: #eb7132;
}

.link-three::after {
  content: "";
  position: absolute;
  z-index: 2;
  width: 50%;
  height: 100%;
  top: 0%;
  left: 0%;
  transform: translate(0, -50%) scaleY(0);
  transition: transform 1s ease;
  mix-blend-mode: difference;

  clip-path: polygon(
    20% 60%,
    100% 60%,
    100% 40%,
    20% 40%,
    20% 0%,
    60% 0%,
    60% 20%,
    20% 20%
  );

  background-color: #eb7132;
}

.link-three:hover::after {
  transform: translate(0, 0%) scaleY(1);
}

.link-three::before {
  content: "";
  position: absolute;
  z-index: 2;
  width: 50%;
  height: 100%;
  bottom: 0%;
  right: 0%;
  transform: translate(0, 50%) scaleY(0);
  transition: transform 1s ease;
  mix-blend-mode: difference;

  clip-path: polygon(
    80% 40%,
    0% 40%,
    0% 60%,
    80% 60%,
    80% 100%,
    40% 100%,
    40% 80%,
    80% 80%
  );

  background-color: #eb7132;
}

.link-three:hover::before {
  transform: translate(0%, 0%) scaleY(1);
}

</style>

<template>
  <div class="bg">
    <video muted autoplay loop>
      <source src="../../assets/DYKC/intro.mp4" type="video/mp4">
    </video>

    <div class="title">
      <h1>DoYouKnow</h1>
      <h1>Club</h1>
    </div>
    <button class="button" @mouseover="mouseover" @click="Award()">
      <img :src="pictureHover" @mouseover="hover = true" @mouseleave="hover = false"/>
    </button>
  </div>
</template>

<script>
export default {
  name: 'VideoTest',
  data(){
    return {
      picture1: require("../../assets/DYKC/trophy2.png"),
      picture2: require("../../assets/DYKC/trophy.png"),
      hover: false
    }
  },
  methods: {
    Award() {
      this.$router.push('/awardintro');
    }
  },
  computed: {
    pictureHover () {
      if (this.hover == true) {
        return this.picture1
      } else {
        return this.picture2
      }
    }
  }
}
</script>

<style scoped>
  video {
    position: fixed; right: 0; bottom: 0;
    min-width: 100%; min-height: 100%;
    width: auto; height: auto; z-index: -100;
    background-size: cover;
  }
  .bg {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
  }
  .title {
    color: bisque;
    font-size: xx-large;
    text-align : center;
    margin-top : 6rem;
  }
  .button{
    background-color: unset;
    border: 0;
    outline: 0;
    margin: 3rem;
  }
</style>
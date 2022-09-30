<template>
  <div class="bg">
    <video muted autoplay loop>
      <source src="../../assets/DYKC/intro.mp4" type="video/mp4">
    </video>

    <div>
      <img class="img" src="../../assets/DYKC/leftleaf.png" style="transform: rotate(339deg);">
    </div>
    <div class="main">
      <div class="title">
        <h1>DoYouKnow</h1>
        <h1>Club</h1>
      </div>
      <button class="button" @click="Award()">
        <img class="btn_img" src="../../assets/DYKC/trophy.png"/>
      </button>
    </div>
    <div>
      <img class="img" src="../../assets/DYKC/rightleaf.png" style="transform: rotate(21deg);">
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    Award() {
      this.$router.push('/awardintro');
    }
  },
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
      flex-direction: row;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
  }
  .main{
    display: flex;
    flex-direction: column;
  }
  .title {
    color: bisque;
    font-size: xx-large;
    text-align : center;
    margin-top : 6rem;
    margin-bottom: 3rem;
  }
  .button{
    background-color: unset;
    border: 0;
    outline: 0;
    margin: 3rem;
  }
  .img{
    width: 10rem;
    height: auto;
    margin: 3rem
  }
  .btn_img:hover{
    transform: scale(1.2);
  }
</style>
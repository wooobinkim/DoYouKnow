<template>
 <div>
    <video id="videoPlay" @ended="endedPlaying" autoplay defaultPlaybackRate="2" muted>
        <source src="../../assets/DYKC/awardintro.mp4" type="video/mp4">
    </video>
 </div> 
</template>

<script>

export default {
  name: "AwardIntroView",
  methods: {
    endedPlaying() {
      this.$router.push('/award');
    },
  },
}
</script>

<style scoped>
  video {
    position: fixed; right: 0; bottom: 0;
    min-width: 100%; min-height: 100%;
    width: 100vw; height: auto; z-index: -100;
    background-size: cover;
  }
</style>

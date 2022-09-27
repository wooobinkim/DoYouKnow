<template>
  <div class="APIscene">
    <iframe
      width="100%"
      height="100%"
      :src="`https://www.youtube.com/embed/${urlword}`"
      >
    </iframe>  
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return{
      keyword: '',
      youtube: [],
      selectedYoutube: null,
      urlword:'',
    }
  },
  mounted(){
    this.setKeyword();
  },
  methods:{
    setKeyword(){
      const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY
      const API_URL = 'https://www.googleapis.com/youtube/v3/search'
      this.keyword = 'sg워너비'+'해외반응'

      const config = {
        params:{
          key: API_KEY,
          part: 'snippet',
          type: 'video',
          chart : 'mostPopular',
          maxResults : 1,
          q: this.keyword,
        }
      }
      axios.get(API_URL, config)
        .then(response => {
          this.youtube = response.data.items
          this.selectedYoutube = this.youtube[0]      
          this.urlword = this.selectedYoutube.id.videoId
           
        })
    },  
  },
}

</script>

<style scoped>
  .APIscene{
    position: fixed;
    top: 2.5rem;
    background-color: gray;
    width: 90%;
    height: 75%;
    transform: translate(5%, 5%);
  }
</style>
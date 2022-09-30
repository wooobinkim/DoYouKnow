<template>
  <div class="APIscene" style="overflow:auto;">
    <div class="twitter_box" v-for="(item, index) in twitter" :key="index">
      <img src="../../assets/DYKC/twitter_mark.png" alt="">
      <div class="pull">
        <p class="content">
          {{ item.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    props: ["name", "status"],

    data(){
      return {
      }
    },
    computed: {
      ...mapGetters(['twitter', 'translate'])
    },
    methods: {
      ...mapActions(['fetchTwitter', 'fetchTranslate']),
    },
    created() {
      this.fetchTwitter(this.name);
      this.fetchTranslate(this.name);
    },
  }
</script>

<style scoped>
  .APIscene{
    position: fixed;
    top: 2.5rem;
    border-radius: 8px;
    background-color: white;
    width: 90%;
    height: 80%;
    transform: translate(5%, 5%);
  } 
  
  .APIscene::-webkit-scrollbar {
    width: 10px;
  }
  .APIscene::-webkit-scrollbar-track {
    background-color: transparent;
  }
  .APIscene::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: rgb(153, 152, 152);
  }
  .APIscene::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }

  .twitter_box{
    display: flex;
    margin-top: 5%;
    margin-bottom: 5%;
    height: 5rem;
    width: 100%;
    justify-content: space-around;
    align-items: center;
  }
  img{
    margin: 1rem;
    width: auto;
    height: 3rem;
  }
  .pull {
    position:relative;
    margin-right: 2%;
    padding: 0.5rem; 
    width:85%;
    height:90%; 
    color: black; 
    border-radius: 10px; 
    background-color: #ffdfae5c;
  }
  .pull:after {
    content:""; 
    position: absolute;
    top: 18%;
    right: 100%;
    border-right: 30px solid #ffdfae5c;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
  }
  .content{
    font-size: 1rem;
    text-align : left;
    margin-top: 0;
  }
</style>
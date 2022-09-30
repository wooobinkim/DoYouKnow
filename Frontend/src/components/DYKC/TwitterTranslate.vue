<template>
  <div class="twitter_box" >
    <img src="../../assets/DYKC/twitter_mark.png" alt="">
    <div class="pull">
      <p class="content" v-show="trans==false">
        {{twitter.content}}
      </p>
      <p class="content" v-show="trans==true">
        {{ment}}
      </p>
    </div>
    <div @click="twittertranslate()">
      <img src="../../assets/DYKC/translateicon.png" class="translatebtn">
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    props: ["twitter", "index", "name"],
    data(){
      return {
        trans : false,
        ment : [],
        keyword: this.name,
        num: this.index,
      }
    },
    mounted(){
      this.setKeyword();
    },
    methods:{
      setKeyword(){
        const API_URL = `https://j7b208.p.ssafy.io/api2/pytranslate/usually/${this.keyword}/${this.num}/`
        axios.get(API_URL)
          .then(res => {
            this.ment = res.data
          })
      },  
      twittertranslate(){
        if (this.trans == true){
          this.trans = false;
        } else {
          this.trans = true;
        }
      },
    },
  }
</script>

<style scoped>
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
  .translatebtn{
    width: 2rem;
    height: auto;
    margin-left: 0;
  }
  .translatebtn:hover{
    transform: scale(1.1);
  }
  .pull {
    position:relative;
    padding: 0.5rem; 
    width:80%;
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
<template>
  <div class="black-bg" v-if="youtube == true" @click="youtubeClose($event)">
    <div class="white-bg">
      <h1 style="text-align : center; font-size: xx-large;">Title</h1>
      <YoutubeCardmodal/>
      <button class="close">close</button>
    </div>
  </div>

  <div class="black-bg" v-if="twitter == true" @click="twitterClose($event)">
    <div class="white-bg">
      <h1 style="text-align : center; font-size: xx-large;">Title</h1>
      <TwitterCardmodal/>
      <button class="close">close</button>
    </div>
  </div>

  <video class="videoPlay" muted autoplay loop>
      <source src="../../assets/DYKC/award.mp4" type="video/mp4">
  </video>

  <div v-if="youtube===false && twitter===false">
    <audio id="myAudio" autoplay loop onloadstart="this.volume=0.2">
      <source src="../../assets/DYKC/BGM.mp3" type="audio/mp3">
    </audio>
  </div>

  <div v-show="youtube===false && twitter===false">
    <DYKCNav/>
    <div>
      <div v-show="isShowing===true">
        <img class="soundbtn" src="../../assets/DYKC/soundon.png" @click="sound()" >
      </div>
      <div v-show="isShowing===false">
        <img class="soundbtn" src="../../assets/DYKC/soundoff.png" @click="sound()">
      </div>
    </div>

    <div class="main">
      <ul class="category">
        <li>
          <button v-if="keyword==='운동선수'" style="background-size: 100% 100%;background-image: linear-gradient(transparent 90%, rgb(248, 205, 7) 20%);" @click="changeKeyword('운동선수')">운동선수</button>
          <button v-else @click="changeKeyword('운동선수')">운동선수</button>

        </li>
        <li>
          <button v-if="keyword==='드 라 마'" style="background-size: 100% 100%;background-image: linear-gradient(transparent 90%, rgb(248, 205, 7) 20%);" @click="changeKeyword('드 라 마')">드 라 마</button>
          <button v-else @click="changeKeyword('드 라 마')">드 라 마</button>
        </li>
        <li>
          <button v-if="keyword==='영    화'" @click="changeKeyword('영    화')" style="letter-spacing:15px; background-size: 100% 100%;background-image: linear-gradient(transparent 90%, rgb(248, 205, 7) 20%);">영      화</button>
          <button v-else @click="changeKeyword('영    화')" style="letter-spacing:15px;">영      화</button>
        </li>
        <li>
          <button v-if="keyword==='연 예 인'" style="background-size: 100% 100%;background-image: linear-gradient(transparent 90%, rgb(248, 205, 7) 20%);" @click="changeKeyword('연 예 인')">연 예 인</button>
          <button v-else @click="changeKeyword('연 예 인')">연 예 인</button>
        </li>
      </ul>

      <div class="content">
        <div class="title">{{ keyword }}</div>
        
        <div class="scene">
          <label class="card-wrap">
              <input type="checkbox" class="flipcard">
              <div class="card">
                <div class="front card-face">
                    <img src="https://source.unsplash.com/random" alt="" class="card-photo">
                    <div id="front-content">
                      <h2 style="margin:0.5rem;">가나</h2>
                      <p>100회</p>
                    </div>
                </div>
                <div class="back card-face">
                  <h1>가나</h1>
                  <p class="card__body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <footer class="social">
                    <button class="btn btn__phone" @click="openYoutubeModal"></button>
                    <button class="btn btn__email" @click="openTwitterModal"></button>
                  </footer>
                </div>
              </div>
          </label>
          <label class="card-wrap">
              <input type="checkbox" class="flipcard">
              <div class="card">
                <div class="front card-face">
                    <img src="https://source.unsplash.com/random" alt="" class="card-photo">
                    <div id="front-content">
                      <h2 style="margin:0.5rem;">가나다</h2>
                      <p>100회</p>
                    </div>
                </div>
                <div class="back card-face">
                  <h1>가나다</h1>
                  <p class="card__body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <footer class="social">
                    <button class="btn btn__phone" @click="openYoutubeModal"></button>
                    <button class="btn btn__email" @click="openTwitterModal"></button>
                  </footer>
                </div>
              </div>
          </label>
          <label class="card-wrap">
              <input type="checkbox" class="flipcard">
              <div class="card">
                <div class="front card-face">
                    <img src="https://source.unsplash.com/random" alt="" class="card-photo">
                    
                    <div id="front-content">
                      <h2 style="margin:0.5rem;">가나다라</h2>
                      <p>100회</p>
                    </div>
                </div>
                <div class="back card-face">
                  <h1>가나다라</h1>
                  <p class="card__body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <footer class="social">
                    <button class="btn btn__phone" @click="openYoutubeModal"></button>
                    <button class="btn btn__email" @click="openTwitterModal"></button>
                  </footer>
                </div>
              </div>
          </label>
      </div>

      </div>
    </div>
  </div> 

</template>

<script>
import DYKCNav from '@/components/DYKC/DYKCNav.vue'
import YoutubeCardmodal from '@/components/DYKC/YoutubeCardmodal.vue'
import TwitterCardmodal from '@/components/DYKC/TwitterCardmodal.vue'

export default {
  name: "AwardView",
  components:{
    DYKCNav,
    YoutubeCardmodal,
    TwitterCardmodal
  },
  data(){
      return{
        isShowing : true,
        youtube : false,
        twitter: false,
        keyword : "운동선수",
      }
    },
  methods: {
    sound() {
      this.isShowing = !this.isShowing
    },
    changeKeyword(event){
      this.keyword = event;
    },
    openYoutubeModal(){
      this.youtube = true;
    },
    openTwitterModal(){
      this.twitter = true;
    },
    youtubeClose(event){
      if(event.target.classList.contains('black-bg')||event.target.classList.contains('close')){
        this.youtube = false;
      } else if (event.target.classList.contains('white-bg')){
        this.youtube = true;
      }
    },
    twitterClose(event){
      if(event.target.classList.contains('black-bg')||event.target.classList.contains('close')){
        this.twitter = false;
      } else if (event.target.classList.contains('white-bg')){
        this.twitter = true;
      }
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
  .soundbtn{
    width: 3rem;
    height: auto;
    display: flex;
    margin-left: auto;
    margin-right: 5rem;
  }
  .main{
    display: flex;
  }
  .category{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-left: 2rem;
    text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa,
    0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa;
  }
  ul{
    list-style:none;
    font-weight: bold;
  }
  li > button {
    all: unset;
    display: flex;
    justify-content: space-evenly;
    width: 8rem;
    color: white;
    font-size: 2rem;
    font-weight: bold;
    border: 0;
    padding: 0;
    position: relative;
  }

  li > button::after {
    content:"";
    position: absolute;
    bottom: 0;
    left:50%;
    transform: translateX(-50%);
    width: 0;
    height: 4px;
    background: #f1c40f;
    transition: all .5s ease-out;
  }

  li > button:hover::after {
    width: 8rem;
  }
  .content{
    flex: 1;
  }
  .title{
    text-align : center;
    font-weight: bold;
    font-size: 3.5rem;
    color: white;
    text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px rgb(230, 29, 230, 0.712),
    0 0 82px rgba(230, 29, 230, 0.712), 0 0 92px rgb(230, 29, 230, 0.712), 0 0 102px rgb(230, 29, 230, 0.712), 0 0 151px rgb(230, 29, 230, 0.712);
  }

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .input {
      position: absolute;
  }

  .scene {
      width: 80%;
      max-width: 100%;
      min-height: 80%;
      margin: auto;
      padding: 40px 30px;
  }

  .card-wrap {
      display: block;
      width: 300px;
      max-width: 100%;
      height: 400px;
      margin: 0 auto;
      margin-bottom: 15px;
  }

  .card, .front, .back, .card-photo{
      width: 100%;
      height: 100%;
  }

  .card-face {
      position: absolute;
      backface-visibility: hidden;
  }

  .card {
      position: relative;
      transform-style: preserve-3d;
      transition: transform 1s, box-shadow .4s;
      box-shadow: 0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149);
      border-radius: 10px;
  }
   .card-photo {
    object-fit: fill;
    border-radius: 10px;
    opacity: 1;
    transition: 0.3s;
  }
  .front:hover #front-content{
      opacity: 1;
  }
  #front-content{
    width: 300px;
    text-align: center;
    position: absolute;
    font-size: xx-large;
    top: 35%;
    left: 0%;
    opacity: 0;
    transition: 0.3s;
    color: white;
  }
  

  .back {
      background-color: white;
      transform: rotateY( 180deg );
      text-align: center;
      color: darkgray;
      border-radius: 10px;
      font-family: 'Raleway', sans-serif;
      font-weight: 600;
  }
  .back h1 {
    margin-top: 2rem;
  }
  .back p {
      margin: 0;
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translate(-50%, -50%);
  }
  .flipcard {
      opacity: 0;
  }
  input:checked + .card {
      transform: rotateY( 180deg );
  }
  @media screen and (min-width: 960px) {
    .scene {
        display: flex;
        justify-content: space-around;
    }
  }
  a {
    text-decoration: none;
    color: var(--color-link);
  }
  a:hover {
    color: var(--color-link-hover);
  }

  footer.social {
    display: grid;
    justify-items: center;
    grid-column-gap: 3em;
    grid-template-columns: 1fr 1fr;
    border-bottom-left-radius: 1em;
    border-bottom-right-radius: 1em;
    margin-top: 1rem;
    top: 75%;
    left: 22.5%;
    position: absolute;
  }
  .btn {
    position: relative;
    width: 4em;
    height: 4em;
    border-radius: 50vh;
    background: #0099ff;
    border: 0;
    outline: 0;
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;
    margin : 5px;
  }
  .social .btn::before {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -45%);
    transform: translate(-50%, -45%);
    color: white;
    font-size: 2em;
    margin-right: 0.5em;
  }
  .icon::before,
  .icon::after,
  .btn::before {
    display: inline-block;
    font-weight: 700;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
  }

  .btn:hover {
    -webkit-box-shadow: inset 0 0 10px 0 white, 0 0 10px 0 #0099ff,
      0 0 20px 0 #0099ff, 0 0 30px 0 #0099ff;
    box-shadow: inset 0 0 10px 0 white, 0 0 10px 0 #0099ff, 0 0 20px 0 #0099ff,
      0 0 30px 0 #0099ff;
    border: 1px solid white;
    -webkit-transform: rotate(360deg) scale(1.2);
    transform: rotate(360deg) scale(1.2);
  }
  .btn:hover::before {
    font-family: Raleway, sans-serif;
    font-weight: 900;
    font-size: 1em;
    color: white;
    text-shadow: 0 0 3px #003b62;
  }

  .btn:active {
    background-color: #6dc5ff;
  }

  .btn__phone::before {
    content: url("../../assets/DYKC/youtube.png");
  }
  .btn__phone:hover::before {
    content: "YOUTUBE";
  }

  .btn__email::before {
    content: url("../../assets/DYKC/twitter.png");
  }
  .btn__email:hover::before {
    content: "TWITTER";
  }
  .black-bg {
    width: 100%; height:100%;
    background: rgba(0,0,0,0.6);
  }
  .white-bg {
    width: 100%; background: white;
    border-radius: 8px;
    padding: 20px;
    position: relative;
    top: 50%;
    left: 50%;
    width: 80vw;
    height: 80vh;
    transform: translate(-50%, -50%);
  }
  .close{
    position: absolute;
    cursor: pointer;
    border:none;
    background: #6667AB;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    padding: 5px 15px;
    bottom: 2vh;
    right: 35vw;
    width: 10rem;
    height: 7vh;
    font-size: x-large;
  }
  .close:hover{
    color:white;
    font-weight: bold;
    transform: scale(1.1);
    transition: all 0.5s;
  }
</style>

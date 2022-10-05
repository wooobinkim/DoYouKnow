<template>
<div class="tts-container">
    <div class="wrapper">
        <div class="slide-group">
            <div @click="Speak()" class="bubble">
                <em></em>
                <template v-if="this.getTTS"><p><span>{{this.getTTS.replace("?", "")}}?</span></p></template>
                <!-- <template v-else><p><span>bubble left text </span></p></template> -->
                <em></em>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import { useStore } from "vuex";
import { mapGetters, mapActions } from "vuex";
export default {
    setup(){
        const store = useStore();

        const Speak = function Speak() {
            let lang = null;
            if(store.getters.getConditionNation == 1) {lang="en-US"}
            if(store.getters.getConditionNation == 2) {lang="en-UK"}
            if(store.getters.getConditionNation == 3) {lang="ja-JP"}
            if(store.getters.getConditionNation == 4) {lang="vi-VN"}
            if(store.getters.getConditionNation == 5) {lang="id-ID"}
            if(store.getters.getConditionNation == 6) {lang="pt-BR"}

            let utterThis = new SpeechSynthesisUtterance(store.getters.getTTS+"?");
            utterThis.voice = speechSynthesis.getVoices()[8];
            utterThis.lang = lang;
            window.speechSynthesis.speak(utterThis);
        };
        return {store,Speak};
    },
    computed: {
    ...mapGetters([
      "getCurrentRank",
      "getConditionNation",
      "getGraphKeyword",
      "getCurrentTrans",
      "getTTS"
    ]),
  },
  methods: {
    ...mapActions(["getTranslateKeyword", "TTSTranslate"]),
  },
  watch: {
    getCurrentRank: function(keyword){
        let nation = null;
    //   let lang = null;
      if(this.store.getters.getConditionNation == 1) {nation="en"}
      if(this.store.getters.getConditionNation == 2) {nation="en"}
      if(this.store.getters.getConditionNation == 3) {nation="ja"}
      if(this.store.getters.getConditionNation == 4) {nation="vi"}
      if(this.store.getters.getConditionNation == 5) {nation="id"}
      if(this.store.getters.getConditionNation == 6) {nation="pt"}

      const condition = {
          keyword : keyword+" 아세요",
          nation : nation
      }
      this.store.dispatch("TTSTranslate",  condition );

    //   let utterThis = new SpeechSynthesisUtterance(this.store.getters.getTTS+"?");
    //   utterThis.voice = speechSynthesis.getVoices()[8];
    //   utterThis.lang = lang;
    //   window.speechSynthesis.speak(utterThis);
       
    },
  },
};
</script>

<style scoped>
.tts-container{
    position: float;
}

* {margin:0; padding:0; box-sizing:border-box;}


.wrapper {width:100%;}
.slide-group {height:100%; /*animation:slideup 5s infinite linear;*/ }

@keyframes slideup {
  0% {transform:translateY(0%);}
  100% {transform:translateY(-100%);}
}
.bubble {position:relative;}
.bubble.right {text-align:right;}
.bubble.center {text-align:center;}

.bubble p {
  display:inline-block; 
  position:relative;
}
.bubble p span {
  display:inline-block;
  background:#FBFCFF;
  padding:10px 30px 15px;
  border-radius:400px;
  box-shadow:inset -3px -3px 8px rgba(0, 0, 0, 0.3);
  filter:drop-shadow(3px 3px 5px rgba(0, 0, 0, 20%));
  z-index:2;
  font-size:20px;
}
.bubble p::before {
  content:'';
  width: 49px;
  height: 19px;
  position:absolute;
  bottom:-18px;
  left:75%;
  transform:translateX(-50%);
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='49px' height='19px'%3E%3Cimage x='0px' y='0px' width='49px' height='19px' xlink:href='data:img;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAATCAQAAACT8S2qAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfmCRUQDB21ixdGAAACU0lEQVQ4y62VO2sWQRSGn7ls0BBjEIOoTSBeQEkwIaaSeGuMKGJjKzYWlvkb4g+QoIWIFhaiCNqIl0bFCF5A01kpYmEaNTuzM3Msdve75UI+Ps9hYXaZnWfO+56dVe9QKBQajRKFbtzVaaqrTIUCFHUIkYjHkeMpiCQltIbFyhYgSwOyVZ1Uw2mn2qV2qz16nx5SGDQJg2CqhetNqAZCIehy7OWq3GETeRtCgloSQH4291cuoXboQ3FKT+sZM2SwGGyFauJAGgDgCjegvQZQC/Wg+agFpFFooyfMGXPejlvqNA3RhEiBY5nl5DZ7H9dGdEYTpFFoDGbMXMou2m0ZGRZbeQORgGOZPOb9hQ9IB0SvQUAQEolEIBDwuE9uLh/J5/IfOQ5PIJKQqlqLMWa/XmVBc5mNhNTp0+t0XaJMk7XPSCTS9/RSVry7plCrSaeqJrZke7P5vqMZGQaNqsTKv+Wj3gVim1gbrKJZDSQE+SW35I8cE9NaJ4OyJK86veiiis5aMuzhvrvZaGk9RAr8bzfuvxaVS7K+3eu5EollA7zNJ/PbDkdBRNCYAXvTaotuOQO6FKodJSSX7suHdCQNSiUjI2h5JtUc1QuiXFBIyKLMS79MiS6xzMhHWWwgu/ei05fyHLOYA+aaOaWBRPwbToQ3dWd17UWnWKn6MP1nP+tm/UJBJPXziLH6qOwJUTsSy27CP/HT/lzxPpK285SDJaRHRLOWRCRQSPEwTIbT8XkclhcyJf8HUWJqSCRIeByOp4l0Tx5wtke7V4ai9U/CgFzgyz+FYyTNc6r0WAAAAABJRU5ErkJggg=='/%3E%3C/svg%3E"); 
  /* no-repeat top center; */
  filter:drop-shadow(3px 3px 5px rgba(0, 0, 0, 20%));
}
.bubble.right p::before {transform:translateX(-50%) rotateY(180deg);}
.bubble.center p::before {}
.bubble em {display:inline-block; font-size:30px; color:#fff; position:relative;}
.bubble p::after {
  position:absolute;
  /* filter: drop-shadow(5px 7px 3px rgba(0, 0, 0, 30%)); */
  transform-origin:center;
}
.bubble p::after {
  /* content:url("https://dyk.s3.ap-northeast-2.amazonaws.com/gookbon1.png"); */
  content:"";
  background-image: url("https://dyk.s3.ap-northeast-2.amazonaws.com/gookbon1.png");
  background-size:80px 80px;
  width:80px;
  height:80px;
  left:60%;
  top:80%;
  font-size:80px;
  transform:rotate(-30deg);
  z-index:2;
  animation: rotate 20s linear infinite;
  margin: 35px;
}
@keyframes rotate {
  0% {transform:rotate(0deg);}
  100% {transform:rotate(360deg)}
}
@keyframes rotate2 {
  0% {transform:rotate(0deg);}
  100% {transform:rotate(-360deg)}
}

.bubble:nth-child(1) {margin-left:8%; margin-top:7px;}
</style>

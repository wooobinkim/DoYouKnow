<template>
  <!-- <div style="overflow: auto; width: auto; height: 320px;" >
    <ul class="uiui">
      <li v-for="news in test.getRelatedKeywordNews" :key="news">
      <a :href=news.url target="_blank">
        <h3>{{ news.title }}</h3>
        <p>{{ ((news.publishedAt.split("T"))[0].split("-"))[0] }}.
        {{ ((news.publishedAt.split("T"))[0].split("-"))[1] }}.
        {{ ((news.publishedAt.split("T"))[0].split("-"))[2] }}</p>
      </a>
      </li>
    </ul>
  </div> -->


  <div class="center">
  <div class="property-card">
    <a href="#">
      <div class="property-image">
        <div class="property-image-title">
          <!-- Optional <h5>Card Title</h5> If you want it, turn on the CSS also. -->
        </div>
      </div></a>
    <div class="property-description">
      <h5> Card Title </h5>
      <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard.</p>
    </div>
    <a href="#">
      <div class="property-social-icons">
        <!-- I would usually put multipe divs inside here set to flex. Some people might use Ul li. Multiple Solutions -->
      </div>
    </a>
  </div>
  <div class="property-card">
    <a href="#">
      <div class="property-image">
        <div class="property-image-title">
          <!-- Optional <h5>Card Title</h5> If you want it, turn on the CSS also. -->
        </div>
      </div></a>
    <div class="property-description">
      <h5> Card Title </h5>
      <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard.</p>
    </div>
    <a href="#">
      <div class="property-social-icons">
        <!-- I would usually put multipe divs inside here set to flex. Some people might use Ul li. Multiple Solutions -->
      </div>
    </a>
  </div>
</div>
</template>

<script>
  import { computed } from "vue";
  import { useStore } from "vuex";
  import { mapGetters, mapActions } from 'vuex';
  export default {
     methods: {
    ...mapActions(["relatedkeywordnews"]),
    },
    computed:{
      ...mapGetters(["getCurrentRank", "getRelatedKeywordNews"])
    },
    watch:{
      getCurrentRank: function(){
        // 키워드 그 나라 언어로 번역 후에 넘겨주어야함.. 근데 번역이 안된다..!~!
        this.relatedkeywordnews([this.test.getCondition, this.test.getCurrentRank]);
      },

    },
    setup() {
      const store = useStore();
      const test = computed(() => store.getters);

      return { test };
    }
  };
  </script>
  
<style>
body
{
  background-color:#f2f2f2;
  font-family: 'RobotoDraft', 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
}

*
{
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

h5
{
  margin:0px;
  font-size:1.4em;
  font-weight:700;
}

p
{
  font-size:12px;
}

.center
{
  /* height:100vh;
  width:100%; */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* End Non-Essential  */

.property-card
{
  height:18em;
  width:14em;
  margin: 0.5em;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
  -ms-flex-direction:column;
  flex-direction:column;
  position:relative;
  /* -webkit-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1); */
  border-radius:16px;
  overflow:hidden;
  /* -webkit-box-shadow:  15px 15px 27px #e1e1e3, -15px -15px 27px #ffffff;
  box-shadow:  15px 15px 27px #e1e1e3, -15px -15px 27px #ffffff; */
}
/* ^-- The margin bottom is necessary for the drop shadow otherwise it gets clipped in certain cases. */

/* Top Half of card, image. */

.property-image
{
  height:6em;
  width:14em;
  /* padding:1em 2em; */
  
  position:Absolute;
  top:0px;
  -webkit-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  background-image:url('https://cdn.photographylife.com/wp-content/uploads/2017/01/What-is-landscape-photography.jpg');
  background-size:cover;
  background-repeat:no-repeat;
}

/* Bottom Card Section */

.property-description
{
  background-color: #FAFAFC;
  height:12em;
  width:14em;
  position:absolute;
  bottom:0em;
  -webkit-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  padding: 0.5em 1em;
  text-align:center;
}

/* Social Icons */

.property-social-icons
{
  width:1em;
  height:1em;
  background-color:black;
  position:absolute;
  bottom:1em;
  left:1em;
  -webkit-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
}

/* Property Cards Hover States */

.property-card:hover .property-description
{
  height:0em;
  padding:0px 1em;
  margin: 0.5em;
}
.property-card:hover .property-image
{
  height:18em;
}

.property-card:hover .property-social-icons
{
  background-color:white;
}

.property-card:hover .property-social-icons:hover
{
  background-color:blue;
  cursor:pointer;
}




.property-image-title
{
text-align:center;
position:Relative;
top:30%;
opacity:0;
transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
color:black;
font-size:1.2em;
margin: 0.5em;
}

.property-card:hover .property-image-title
{
opacity:1;
}


</style>

  <!-- <style scoped>
    .news-container {
  /* width: 20rem; */
  /* height: 16rem; */
  background: white;
  margin-left: 1rem;
  margin-top: 1rem;
  margin-right: 1.5rem;
  border-radius: 15px;
}
div {
  /* margin: 20px; */
}
 
.uiui {
    display: block;
    list-style-type: disc;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 15px;
}
 
/* h3 {
  font: bold 20px/1.5 Helvetica, Verdana, sans-serif;
} */
 
li img {
  float: left;
  margin: 15px 15px 0 3px;
}
 
li p {
  float: right;
  margin: 0 10px 0 0;
  font: 200 12px/1.5 Georgia, Times New Roman, serif;
}
 
li {
  padding: 0px;
  overflow: auto;
}
 
li:hover {
  background: #eee;
  cursor: pointer;
}
a { 
  text-decoration: none;
  color: black; 
}
  </style>
   -->

<template>
  <div style="overflow: auto; width: auto; height: 320px;" >
    <ul class="uiui">
      <!-- <li v-for="news in test.getRelatedKeywordNews" :key="news">{{ news.title }}</li> -->
      <li v-for="news in test.getRelatedKeywordNews" :key="news">
      <a :href=news.url target="_blank">
        <img :src=news.urlToImage width="80">
        <h3>{{ news.title }}</h3>
        <p>{{ ((news.publishedAt.split("T"))[0].split("-"))[0] }}.
        {{ ((news.publishedAt.split("T"))[0].split("-"))[1] }}.
        {{ ((news.publishedAt.split("T"))[0].split("-"))[2] }}</p>
      </a>
      </li>
    </ul>

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
  
  <style scoped>
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
  

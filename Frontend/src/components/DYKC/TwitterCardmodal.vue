<template>
  <div class="APIscene">
    <p class="content" v-for="(item, index) in cardback" :key="index">
      {{ item.content }}
    </p>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    props: ["name"],
    computed: {
      ...mapGetters(['cardback'])
    },
    methods: {
      ...mapActions(['fetchBackcard']),
    },
    created() {
      this.fetchBackcard(this.name);
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
  .content{
    font-size: 1rem;
    text-align : center;
  }
</style>
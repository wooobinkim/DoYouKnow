<template>
  <div class="total-container">
      <div class="nation-total">
        <template v-if="this.getNationRate">
          총 데이터량
          {{ this.getNationRate.nationCount.toLocaleString("ko-KR") }}개
        </template>
      </div>
      <div class="nation-percentage">
        <template v-if="this.getNationRate">
          전체의 {{ this.getNationRate.nationRate }}%
        </template>
      </div>

    </div>

</template>

<script>
import { mapGetters, useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
  computed: {
    ...mapGetters(["getConditionNation", "getNation", "getNationRate"]),
  },
  watch: {
    getConditionNation: function (nation) {
      this.store.dispatch("getNationRate", { nation });
    },
  },
};
</script>



<style>
.total-container {
  display: flex;
  margin-top: 3.8rem;
  margin-right: 2rem;
  width: 184px;
  height: 65px;
}
.nation-total {
  background: #f5f5f5;
  width: 20rem;
  height: 4rem;
  border-radius: 35px;
  /* box-shadow: 3px 3px 4px gray; */
  text-align: center;
  line-height: 4rem;
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 1.5rem;
}
.nation-percentage {
  background: #f5f5f5;
  width: 20rem;
  height: 4rem;
  border-radius: 35px;
  /* box-shadow: 3px 3px 4px gray; */
  text-align: center;
  line-height: 4rem;
  font-size: 1.5rem;
  font-weight: bold;
}
.data-container {
  display: flex;
}

/* .data-container {
  display: flex;
  margin-left: 1.5rem;
}
.total {
  width: 250px;
  height: 30px;
  background: white;
  opacity: 71%;
  border-radius: 30px;
}
.percentage {
  margin-left: 1rem;
  width: 100px;
  height: 30px;
  background: white;
  opacity: 71%;
  border-radius: 30px;
} */
</style>

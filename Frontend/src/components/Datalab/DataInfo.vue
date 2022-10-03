<template>
  <div>
    <div class="data-container">
      <div class="total">
        해당 국가데이터량
        {{ data.nationRate }}
      </div>
      <div class="percentage">데이터비율:</div>
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    // getNationRate
    //SET_NATIONRATE getNationRate
    const store = useStore();
    let data = reactive({
      nationId: computed(() => store.getters["getConditionNation"]),
      nationRate: computed(() => store.getters["getNationRate"]),
    });
    const getNationId = function () {
      let nation = data.nationId;
      store.dispatch("getNationRate", { nation });
    };
    getNationId();

    return {
      data,
    };
  },
};
</script>

<style>
.data-container {
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
}
</style>

import { createStore } from "vuex";

import { datalab } from "@/store/modules/datalab";
import { dykc } from "@/store/modules/dykc";

export default createStore({
  modules: { datalab, dykc },
});

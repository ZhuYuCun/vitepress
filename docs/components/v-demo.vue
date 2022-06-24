<template>
  <div>
    {{ title }}
    <div>
      这是导入的自定义页面
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  components: {},
  setup() {
    const state = reactive({
      title: "标题demo"
    });
    return { ...toRefs(state) };
  },
  methods: {}
});
</script>
<template>
  <div>
    {{ title }}
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  components: {},
  setup() {
    const state = reactive({
      title: "404"
    });
    return { ...toRefs(state) };
  },
  methods: {}
});
</script>
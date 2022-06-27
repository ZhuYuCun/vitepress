<template>
  <div>
    <Layout>
        <template #doc-before>
          666
        </template>
        <div class="content-wrap">
          <Content/>
        </div>
        <template #doc-after>
          777
        </template>
    </Layout>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import Theme from 'vitepress/dist/client/theme-default'

export default defineComponent({
  components: {
    Layout: Theme.Layout
  },
  setup() {
    const state = reactive({
      title: "标题"
    });
    return { ...toRefs(state) };
  },
  mounted() {
    console.log('123', Theme);
    // console.log('layout', Theme.Layout);
    // console.log('$frontmatter', this.$frontmatter);
  },
  methods: {}
});
</script>

<style scoped>
  .content-wrap{
    width: 500px;
  }
  .debug{
    display: none !important;
  }
</style>
<template>
  <div>
    <Layout>
        <template #aside-top>
          My custom sidebar top content
        </template>
        <!-- <Content/> -->
    </Layout>
  </div>
  <!-- <div>
    <h2>1234234123</h2>
    <Content/>
  </div> -->
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
    console.log('layout', Theme.Layout);
    console.log('$frontmatter', this.$frontmatter);
  },
  methods: {}
});
</script>
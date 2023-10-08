<!--
 * @Description: 
 * @Author: 唐健峰
 * @Date: 2023-10-08 14:36:56
 * @LastEditors: ${author}
 * @LastEditTime: 2023-10-08 17:07:33
-->
<template>
  <div>
    <NLoadingBarProvider>
      <router-view />
    </NLoadingBarProvider>
  </div>
</template>
<script lang="ts">
import { mapMutations } from "vuex";
import { mapState } from 'vuex';
import { NLoadingBarProvider, NConfigProvider } from "naive-ui";
import { ElLoading } from 'element-plus';
export default {
  name: "App",
  components: {
    NLoadingBarProvider,
    NConfigProvider
  },

  data() {
    return {
      loadingInstance: null as any
    }
  },

  computed: {
  },
  beforeMount() {
  },
  mounted() {
  },
  watch: {
  },
  methods: {
  },
};
</script>
<style scoped></style>
<template>
  <div>
    <el-menu
      class="sidebar-el-menu header-menu"
      :default-active="onRoutes"
      background-color="#324157"
      text-color="#bfcbd9"
      mode="horizontal"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <el-menu-item v-for="(item, index) in items" :index="item.index" :key="item.index" v-permiss="item.permiss">
        <el-icon>
          <component :is="item.icon"></component>
        </el-icon>
        <template #title>{{ item.title }}</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { items } from './menu'
import { useSidebarStore } from '../store/sidebar'
import { useRoute } from 'vue-router'
const route = useRoute()
const sidebar = useSidebarStore()

const onRoutes = computed(() => {
  return route.path
})

const data = reactive({})
onMounted(() => {
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
})
</script>
<style scoped lang="scss">
.header-menu {
  height: 70px;
}
</style>

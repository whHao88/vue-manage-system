<template>
  <el-menu
    class="sidebar-el-menu header-menu"
    :default-active="onRoutes"
    background-color="#324157"
    text-color="#bfcbd9"
    active-text-color="#20a0ff"
    unique-opened
    router
  >
    <el-menu-item v-for="(item, index) in subs" :index="item.index" :key="item.index" v-permiss="item.permiss">
      <el-tooltip placement="right">
        <template #content>
          {{ item.title }}
        </template>
        <el-icon v-if="sidebar.collapse && item.icon">
          <component :is="item.icon"></component>
        </el-icon>
      </el-tooltip>
      <div v-if="!sidebar.collapse" class="link">
        <el-icon v-if="item.icon" class="icon">
          <component :is="item.icon"></component>
        </el-icon>
        <span>{{ item.title }}</span>
      </div>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
interface IItems {
  index: string
  title: string
  permiss: string
  icon?: string
  subs?: IItems[]
}
import { PropType, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useSidebarStore } from '../store/sidebar'
const route = useRoute()

defineProps({
  subs: {
    type: Array as PropType<IItems[]>,
    default: () => [],
  },
})

const sidebar = useSidebarStore()
const onRoutes = computed(() => {
  return route.path
})
</script>

<style scoped lang="scss">
.sidebar {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
.linkCover {
  width: 250px;
}
.collapse-linkCover {
  width: 65px;
}
.link {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  //   color: #333;
  //   border-bottom: 1px solid #ddd;
  .icon {
    margin-right: 10px;
  }
}
</style>

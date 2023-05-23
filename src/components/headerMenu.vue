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
      <el-menu-item
        v-for="(item, index) in items"
        :index="item.index"
        :key="item.index"
        v-permiss="item.permiss"
        :class="{ 'is-active': isSubMenuActive(item) }"
        class="menuItem"
      >
        <el-icon>
          <component :is="item.icon"></component>
        </el-icon>
        <template #title>
          <span class="title">{{ item.title }}</span>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { items } from './menu'
import { useRoute } from 'vue-router'
const route = useRoute()

const onRoutes = computed(() => {
  return route.path
})

const isSubMenuActive = item => {
  if (item.subs) {
    return item.subs.some(sub => {
      return sub.index === route.path
    })
  }
  return false
}
</script>
<style scoped lang="scss">
.header-menu {
  // height: 70px;
  .menuItem {
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .title {
      margin-top: -10px;
    }
  }
}
</style>

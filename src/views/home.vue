<template>
  <v-header />
  <v-sidebar v-if="onRoutes.subs" :subs="onRoutes.subs" />
  <div class="content-box" :class="{ 'content-collapse': sidebar.collapse, 'content-noSub': !onRoutes.subs }">
    <v-tags :subs="onRoutes.subs"></v-tags>
    <div class="content">
      <router-view v-slot="{ Component }">
        <transition name="move" mode="out-in">
          <keep-alive :include="tags.nameList">
            <component :is="Component"></component>
          </keep-alive>
        </transition>
      </router-view>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useSidebarStore } from '../store/sidebar'
import { useTagsStore } from '../store/tags'
import vHeader from '../components/header.vue'
import vSidebar from '../components/sidebar.vue'
import vTags from '../components/tags.vue'
import { useRouter, useRoute } from 'vue-router'
import { items } from '../components/menu'
const router = useRouter()
const route = useRoute()

const onRoutes = computed(() => {
  const path = route.path
  for (let i = 0; i < items.length; i++) {
    if (items[i].subs) {
      for (let j = 0; j < items[i].subs.length; j++) {
        if (items[i].subs[j].index === path) {
          return items[i]
        }
      }
    } else {
      if (items[i].index === path) {
        return items[i]
      }
    }
  }
  return items[0]
})

const sidebar = useSidebarStore()
const tags = useTagsStore()
</script>

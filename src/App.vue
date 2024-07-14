<template>
  <div class="theme-light">
    <!-- start notice-bar -->
    <TopNoticeBar class="sticky w-full top-0 z-10" />
    <!-- start main -->
    <main class="flex justify-center">
      <div class="main-block flex relative container text-md3-surface-variant-100 pl-4 mr-16">
        <NavColumn class="sticky top-8" />
        <Content class="col-span-6 bg-white pl-8 flex-1" />
      </div>
      <SideBar />
    </main>
  </div>
  <!-- <footer class="footer">Footer</footer> -->
</template>

<script setup>
import TopNoticeBar from './components/TopNoticeBar.vue'
import NavColumn from './components/NavColumn.vue'
import Content from './components/Content.vue'
import SideBar from './components/SideBar.vue'
</script>

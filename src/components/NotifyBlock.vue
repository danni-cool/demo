<template>
  <div class="flex p-4 rounded text-sm font-light border border-solid" :class="{
    'bg-slate-100': !warn,
    'border-slate-200': !warn,
    'bg-yellow-100': warn,
    'text-md3-error-100': warn,
    'border-red-100': warn
  }">
    <md-icon v-if="!warn" class="text-base mr-2 -mt-[0.1rem]">help_center</md-icon>
    <md-icon v-if="warn" class="text-base mr-2">warning</md-icon>
    <div class="flex items-center flex-1 justify-between">
      <div>
        <div class="text-base font-bold">
          <slot name="title"></slot>
        </div>
        <div class="opacity-80">
          <slot></slot>
        </div>
      </div>
      <div v-if="showBtn" class="flex items-center">
        <md-outlined-button class="outline-btn bg-white px-2">Learn more</md-outlined-button>
        <md-icon class="text-lg ml-2">close</md-icon>
      </div>
    </div>

  </div>
</template>

<script setup>
defineProps({
  warn: { type: Boolean, default: false },
  showBtn: { type: Boolean, defualt: false }
})
</script>

<style scoped>
.text-btn {
  --_label-text-color: #545969;
  --_container-shape-start-start: 0.5rem;
  --_container-shape-start-end: 0.5rem;
  --_container-shape-end-start: 0.5rem;
  --_container-shape-end-end: 0.5rem;
  --_container-color:white;
}

</style>
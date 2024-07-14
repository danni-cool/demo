<template>
  <md-outlined-icon-button class="outline-btn" :class="{
    'size-6': square,
  }">
      <md-icon class="text-md3-primary-100">{{ iconName }}</md-icon>
  </md-outlined-icon-button>
</template>

<script setup>
defineProps({
  iconName: { type: String, default: 'add' },
  square: { type: Boolean, default: false },
})
</script>
<template>
  <div class="flex items-center py-1 px-1 w-44 hover:bg-md3-secondary-container-100 hover:cursor-pointer hover:rounded duration-300 ease-in-out"
    :class="{ 'text-md3-primary-container-100 cursor-pointer': current }">
    <md-icon class="opacity-80  mr-2" :class="[className, size]">{{ icon }}</md-icon><span class="text-sm"
      :class="{ 'font-medium': bold || current }">{{ name }}</span>
  </div>
</template>

<script setup>
defineProps({
  name: { type: String, default: 'home' },
  className: { type: String, default: 'text-lg' },
  icon: { type: String, default: 'storefront' },
  bold: { type: Boolean, default: false },
  current: { type: Boolean, default: false },
  size: {type: String, default: 'text-base'}
})

</script>
<template>
  <span class="rounded-xl risk-status  text-[10px] size-5 inline-flex items-center justify-center text-md3-error-100">{{
    value }}</span>
  <span v-if="!noText" class="pl-2" :class="{ [`${fontCls}`]: fontCls, 'text-md3-primary-container-100': !fontCls }">Normal</span>
</template>

<script setup>
defineProps({
  fontCls: { type: String, default: '' },
  value: { type: Number, default: 55 },
  noText: { type: Boolean, default: false }
})

</script>

<style scoped>
.risk-status {
  background: #fcedb9
}
</style>
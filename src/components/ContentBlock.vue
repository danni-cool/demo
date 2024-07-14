<template>
  <div class="content-block-wrap pb-2 mb-12" :class="{'my-divide-b': extraDivideBottom}">
    <div class="title-area flex justify-between items-center my-divide-b">
      <div class="part-left">
        <slot name="title">
          <h3 class="title text-black opacity-90">{{ title }}</h3>
        </slot>
      </div>

      <div class="part-right">
        <slot name="btns"></slot>
      </div>
    </div>
    <div class="block-content mt-2">
      <slot></slot>
    </div>

  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: 'New Block Title' },
  extraDivideBottom: { type: Boolean, default: false }
})
</script>
<template>
  <v-dialog v-model="props.modelValue" :attach="true" :scrim="false" :width="width"
    :style="{ '--style-top': styleTop, '--style-left': styleLeft }">
    <v-card>
      <h1>hello world</h1>
    </v-card>

  </v-dialog>
</template>

<script setup>
import { ref, computed } from 'vue'
const props = defineProps({
  modelValue: { type: Boolean },
  width: { type: Number, default: 200 },
  top: { type: Number, default: 0 },
  left: { type: Number, default: 0 }
})

const styleLeft = computed(() => `${props.left}px`)
const styleTop = computed(() => `${props.top}px`)

</script>

<style scoped>
:deep(.v-overlay__content) {
  top: var(--style-top);
  left: var(--style-left);
  margin: 0 !important;
  /** reset the container's size and align to 0,0 in window */
}
</style>

<template>
  <div class="float-dialog-wrap" @click="toggleDialog">
    <span ref="slotWrap">
      <slot></slot>
    </span>
    <div>
      <v-dialog  v-model="modelVisible" :attach="attach" :scrim="false" :width="width" :height="height"
        :style="{ '--style-top': styleTop, '--style-left': styleLeft }">
        <v-card ref="vDialogContent">
          <h1>{{ content }}</h1>
        </v-card>
      </v-dialog>
    </div>
  </div>

</template>

<script setup>
import { calcDialogPosition } from './index.js'
import { ref, reactive, computed, defineEmits, onMounted, nextTick, watch } from 'vue'

const $emits = defineEmits(['update:modelValue', 'update:top', 'update:left'])
const props = defineProps({
  modelValue: { type: Boolean },
  width: { type: Number, default: 200 },
  height: {type: Number, default: 200},
  top: { type: Number, default: 0 },
  left: { type: Number, default: 0 },
  content: { type: String, default: 'hello world' },
  attach: { type: [String, Boolean], default: true }
})
const modelVisible = ref(false)
const slotWrap = ref(null)
const vDialogContent = ref(null)
const slotElSizeObj = reactive({ width: 0, height: 0, left: 0, top: 0 })
const dialogContentSizeObj = reactive({ width: 0, height: 0 })
const topOffset = ref(props.top)
const leftOffset = ref(props.left)
const styleLeft = computed(() => `${leftOffset.value}px`)
const styleTop = computed(() => `${topOffset.value}px`)

watch(props.left, (newVal, oldVal) => {
  topOffset.value = newVal
})

watch(props.top, (newVal, oldVal) => {
  leftOffset.value = newVal
})

onMounted(() => {
  const { width, height, left, top } = slotWrap.value.getBoundingClientRect()
  slotElSizeObj.height = height
  slotElSizeObj.width = width
  slotElSizeObj.top = top
  slotElSizeObj.left = left
})

function toggleDialog() {
  modelVisible.value = !modelVisible.value
  $emits('update:modelValue', modelVisible.value)

  if (modelVisible.value) {
    nextTick(() => {
      const dialogContentEl = vDialogContent.value.$el
      dialogContentSizeObj.width = dialogContentEl.offsetWidth
      dialogContentSizeObj.height = dialogContentEl.offsetHeight
      const { left, top } = calcDialogPosition(slotElSizeObj, dialogContentSizeObj)
      topOffset.value = top
      leftOffset.value = left
      $emits('update:top', top)
      $emits('update:left', left)
    })
  }
}

</script>

<style scoped>
:deep(.v-overlay__content) {
  top: var(--style-top);
  left: var(--style-left);
  margin: 0 !important;
  /** reset the container's size and align to 0,0 in window */
}
</style>

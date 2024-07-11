<template>
  <div class="float-dialog-wrap" @click.capture="toggleDialog">
    <span ref="slotWrap">
      <slot><!-- slot for element control  --></slot>
    </span>
    <div>
      <v-dialog v-model="modelVisible" :attach="attach" :scrim="false" :persistent="manual" :width="width"
        :height="height" :style="{ '--style-top': styleTop, '--style-left': styleLeft }">
        <div ref="vDialogContent" :id="defaultSetting.contentElId">
          <!-- slot for display custom component -->
          <slot name="content">
            <v-card>
              <h1>{{ content }}</h1>
            </v-card>
          </slot>
        </div>
      </v-dialog>
    </div>
  </div>

</template>

<script setup>
import { calcDialogPosition, defaultSetting } from './index.js'
import { toRefs, ref, reactive, computed, defineEmits, onMounted, nextTick, watch, defineExpose } from 'vue'

defineExpose({_setRelPosition})
const $emits = defineEmits(['update:modelValue'])
const props = defineProps({
  manual: { type: Boolean, default: false },
  modelValue: { type: Boolean },
  width: { type: [Number, String], default: 200 },
  height: { type: [Number, String], default: 'initial' },
  content: { type: String, default: 'hello world' },
  attach: { type: [String, Boolean], default: true },
  offsetLeft: { type: Number, default: 0 },
  offsetTop: { type: Number, default: 0 },
})

const {offsetTop, offsetLeft, modelValue } = toRefs(props)
const modelVisible = ref(false)
const globalCreated = ref(false)
const slotWrap = ref(null)
const vDialogContent = ref(null)
const slotElSizeObj = reactive({ width: 0, height: 0, left: 0, top: 0 })
const dialogContentSizeObj = reactive({ width: 0, height: 0 })
const topVal = ref(0)
const leftVal = ref(0)
const styleLeft = computed(() => `${leftVal.value}px`)
const styleTop = computed(() => `${topVal.value}px`)

watch(offsetTop, (newVal) => {
  topVal.value = newVal
})
watch(offsetLeft, (newVal) => {
  leftVal.value = newVal
})
watch(modelValue, (newVal) => {
  modelVisible.value = newVal
})

onMounted(() => {
  !globalCreated.value && _setRelPosition()
})

function toggleDialog(e) {
  if (props.manual && modelVisible.value) return

  if (globalCreated.value) return

  modelVisible.value = !modelVisible.value
  $emits('update:modelValue', modelVisible.value)

  if (modelVisible.value) {
    nextTick(() => {
      const dialogContentEl = vDialogContent.value
      dialogContentSizeObj.width = dialogContentEl.offsetWidth
      dialogContentSizeObj.height = dialogContentEl.offsetHeight
      const { left, top } = calcDialogPosition(slotElSizeObj, {
        width: dialogContentSizeObj.width,
        height: dialogContentSizeObj.height,
        offsetTop: props.offsetTop,
        offsetLeft: props.offsetLeft
      })
      topVal.value = top
      leftVal.value = left
    })
  }
}


function _setRelPosition(obj) {

  let width, height, left, top
  if (obj) {
    ({ top, left, width, height } = obj)
    globalCreated.value = true
  } else {
    ({ width, height, left, top } = slotWrap.value.getBoundingClientRect())
  }

  slotElSizeObj.height = height
  slotElSizeObj.width = width
  slotElSizeObj.top = top
  slotElSizeObj.left = left
}
</script>

<style scoped>
:deep(.v-overlay__content) {
  top: var(--style-top);
  left: var(--style-left);
  margin: 0 !important;
  /** reset the container's size and align to 0,0 in window */
  max-width: initial !important;
  /** allow props width with higher priority */

}
</style>

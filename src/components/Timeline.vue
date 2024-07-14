<template>
  <ul c>
    <li v-for="(item, index) in listData" :key="index" class="pl-8 relative mb-4" :class="{ 
      current: (step >= index) && (type !== 'complex'),
      'complex': type === 'complex'
    }">
      <div class="timeline-area absolute left-0" :class="{
        '-top-1': type === 'complex'
      }">
        <md-icon v-if="item.icon" class="text-sm timeline-icon opacity-50">{{ item.icon }}</md-icon>
        <span v-else class="bg-slate-400 rounded-full size-1.5 inline-block ml-2 -mt-2"></span>
      </div>

      <div v-if="type === 'simple'">
        <div class="text-sm">{{ item.text }}</div>
        <div class="text-xs opacity-40">{{ item.time }}</div>
      </div>

      <div v-else-if="type === 'complex'" class="cursor-pointer p-3 pr-10 w-80 box-border rounded border border-solid " :class="{
        'border-md3-primary-container-100': item.current,
        'border-slate-200': !item.current
      }">
        <div class="text-sm opacity-90">{{ item.text }}</div>
        <div class="text-xs opacity-40 mt-2">{{ item.time }}</div>
      </div>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  type: { type: String, default: 'simple' },
  listData: { type: Object, default: {} },
  step: { type: Number, default: 0 }
})
</script>

<style lang="less" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  &.complex {
    &:not(:last-child):before {
      top: 16px;
    }
  }
  &:not(:last-child):before {
    position: absolute;
    left: 11px;
    top: 20px;
    content: '';
    height: 100%;
    width: 1px;
    z-index: 1;
    box-shadow: inset 1px 0 #94a3b8;
  }
}

.current {
  .timeline-icon {
    color: rgb(63, 164, 13);
    opacity: 1;
  }
}
</style>
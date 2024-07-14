<template>
  <table class="w-full">
    <thead class="my-divide-b-2">
      <tr class="text-xs text-black text-opacity-80">
        <td>RISK</td>
        <td>AMOUNT</td>
        <td>SOURCE TYPE</td>
        <td>CUSTOMER</td>
        <td>DEVICE</td>
        <td>DEVICE IP ADDRESS</td>
        <td>DATE</td>
      </tr>
    </thead>
    <tbody>
      <tr class="my-divide-b" v-for="(item, index) in listData" :key="index">
        <td> <RiskStatus :value="item.risk" noText/></td>
        <td class="text-nowrap"><span class="text-md3-primary-container-100 text-sm inline-block w-12 text-right cursor-pointer hover:text-black">{{ item.amount
            }}</span><span class="pointer-events-none"><md-filter-chip selected label="Succeeded" class="filter-chip ml-2"></md-filter-chip></span></td>
        <td><div class="text-nowrap flex items-center bg-orange-400 bg-opacity-20 rounded px-1"><svg class="SVGInline-svg SVGInline--cleaned-svg SVG-svg" height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path fill="#F6F9FC" fill-rule="nonzero" d="M1 12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8Z"></path><path fill="#E6EBF1" fill-rule="nonzero" d="M1 12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8Zm-1 0V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2Z"></path><path fill="#1A1F71" d="M0 5V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0Zm5 2h6a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2Z"></path><path fill="#F7B600" d="M0 11v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1H0Z"></path></g></svg><span class="text-sm ml-2">•••• 4242</span></div></td>
        <td><div class="text-sm bg-orange-400 bg-opacity-20 rounded px-1 w-16 pr-6">{{ item.customer }}</div></td>
        <td>{{ item.device }}</td>
        <td class="text-sm opacity-50 flex items-center">{{ item.ipAddress }}<md-icon class="text-xs">info</md-icon></td>
        <td class="text-sm">{{ item.date }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { reactive } from 'vue'
import RiskStatus from './RiskStatus.vue'

const listData = reactive([{
  risk: 50,
  amount: '$20.00',
  sourceType: 'bankCard',
  customer: 'FENGMIN SUN',
  device: '',
  ipAddress: 'Unknown',
  date: 'Apr 11, 11:51AM',
}, {
  risk: 10,
  amount: '$8.00',
  sourceType: 'bankCard',
  customer: 'FENGMIN SUN',
  device: '',
  ipAddress: 'Unknown',
  date: 'Apr 11, 11:51AM',
}])
</script>

<style lang="less" scoped>
thead {
  td {
    padding: 0 1rem;
    padding-bottom: 0.75rem
  }
}

tbody {
  td {
    padding: 0.2rem 1rem 0.5rem 1rem;
    vertical-align: top;
  }
}

.filter-chip {
  height: 1.5rem;
}
</style>
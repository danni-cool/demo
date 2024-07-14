<template>
  <ul class="flex list-none pl-0 w-full flex-wrap flex-col" :class="heightCls">
    <li class="mb-2 flex-shrink-0" v-for="(item, index) in data" :key="index" :class="{
    'w-6/12': col === 2,
    'w-full': col === 1,
    'flex justify-between mb-1': contentAlignR
  }">
      <span class="table-cell text-sm opacity-70 w-48" :class="{
    'text-xs': contentAlignR,
  }">
        <span class="inline-block" :class="{
          'max-w-[10.5rem]' :contentAlignR,
          'max-w-[9.8rem]' :!contentAlignR
        }">{{ item.title }}</span></span>
      <span class="table-cell text-sm opacity-80 align-top" :class="{
    'text-right text-xs': contentAlignR
  }">
        <span class="flex items-center">
          <span
            :class="{ 'opacity-50': item.emptyStyle, 'text-md3-primary-container-100 hover:text-black cursor-pointer': item.highlightStyle, }">{{
    item.detail }}</span>
          <span v-if="item.canEdit"
            class="inline-flex items-center ml-2 text-md3-primary-container-100 hover:text-black cursor-pointer">
            <md-icon class="text-sm">edit_square</md-icon>Edit
          </span>
          <span v-else-if="item.infoTag" class="inline-flex items-center cursor-pointer">
            <md-icon class="text-xs opacity-50">info</md-icon>
          </span>
          <span v-else-if="item.isCountry" class="inline-flex items-center cursor-pointer ml-2">
            <svg class="SVGInline-svg SVGInline--cleaned-svg SVG-svg" height="16" width="16"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <g fill="none" fill-rule="evenodd">
                <path fill="#E25950" fill-rule="nonzero"
                  d="M14 14H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z"></path>
                <path fill="#F6F9FC" fill-rule="nonzero"
                  d="M0 11h16v1H0v-1Zm14 3H2a2 2 0 0 1-1.732-1h15.464A2 2 0 0 1 14 14ZM0 9h16v1H0V9Zm8-2h8v1H8V7Zm0-2h8v1H8V5Zm0-2h7.723c.171.295.277.634.277 1H8V3Z">
                </path>
                <path fill="#E25950" fill-rule="nonzero"
                  d="M14 14H2a2 2 0 0 1-2-2V8h1v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H8V2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z"
                  opacity="0.1"></path>
                <path fill="#43458B" fill-rule="nonzero" d="M0 8V3.714C0 2.768.796 2 1.778 2H8v6H0Z"></path>
                <path fill="#FFF" fill-rule="nonzero"
                  d="M7.026 5.501a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM5.518 5a.5.5 0 1 1-.038-1 .5.5 0 0 1 .038 1Zm-.492.501a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM3.518 5a.5.5 0 1 1-.038-1 .5.5 0 0 1 .038 1Zm-.492.501a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm4-2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-1.507 1.5a.5.5 0 1 1-.038-.999.5.5 0 0 1 .038 1Zm.014 1A.5.5 0 1 1 1.57 7a.5.5 0 0 1-.037-1Zm2 0A.5.5 0 1 1 3.57 7a.5.5 0 0 1-.037-1Zm2 0A.5.5 0 1 1 5.57 7a.5.5 0 0 1-.037-1Z">
                </path>
                <path fill="#FFF"
                  d="M6.533 7a.5.5 0 1 1 .037 1 .5.5 0 0 1-.037-1Zm-2 0a.5.5 0 1 1 .037 1 .5.5 0 0 1-.037-1Zm-2 0a.5.5 0 1 1 .037 1 .5.5 0 0 1-.037-1ZM.482 7a.5.5 0 1 1 .036 1 .5.5 0 0 1-.036-1Zm0-2a.5.5 0 1 1 .036 1 .5.5 0 0 1-.036-1Zm0-2a.5.5 0 1 1 .036 1 .5.5 0 0 1-.036-1Zm1-1a.5.5 0 1 1 .036 1 .5.5 0 0 1-.036-1Zm2 0a.5.5 0 1 1 .036 1 .5.5 0 0 1-.036-1Zm2 0a.5.5 0 1 1 .036 1 .5.5 0 0 1-.036-1Zm2 0a.5.5 0 1 1 .036 1 .5.5 0 0 1-.036-1Zm0 2a.5.5 0 1 1 .036 1 .5.5 0 0 1-.036-1Zm0 2a.5.5 0 1 1 .036 1 .5.5 0 0 1-.036-1Z"
                  opacity="0.5"></path>
              </g>
            </svg>
          </span>
        </span>
      </span>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  data: { type: Array, default: [] },
  heightCls: { type: String, default: '' },
  col: { type: String, default: '2' },
  contentAlignR: { type: Boolean, default: false }
})
</script>
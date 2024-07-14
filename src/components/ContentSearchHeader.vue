<template>
  <div class="sticky flex justify-between py-4 top-8 -ml-3 bg-white/[0.98] z-20">
      <md-filled-text-field placeholder="Search" class="flex-1 search-bar">
        <md-icon class="text-lg" slot="leading-icon">search</md-icon>
      </md-filled-text-field>

    <div>
      <span class="text-btn text-sm font-medium align-top leading-9">Developers</span>
      <span class="ml-6 inline-flex items-center text-sm font-medium align-top leading-9">
        <span class="mr-2">Test Mode</span><md-switch class="switch-btn"/></span>
      <md-icon-button class="size-8 mt-0.5 mr-2">
        <md-icon>contact_support</md-icon>
      </md-icon-button>
      <md-icon-button class="size-8 mt-0.5 mr-2">
        <md-icon>notifications_unread</md-icon>
      </md-icon-button>
      <md-icon-button class="size-8 mt-0.5 mr-2">
        <md-icon>settings</md-icon>
      </md-icon-button>
      <md-icon-button class="size-8 mt-0.5">
        <md-icon>add</md-icon>
      </md-icon-button>
    </div>
  </div>
</template>

<style scoped>
.search-bar {
  max-width: 564px;
  height: 36px;
  padding-right: 30px;
  --_container-shape-start-start: 0.5rem;
  --_container-shape-start-end: 0.5rem;
  --_container-shape-end-start: 0.5rem;
  --_container-shape-end-end: 0.5rem;
  --_top-space: 0px;
  --_bottom-space: 0px;
  --_container-color:#fff;
  --md-filled-text-field-focus-active-indicator-color:transparent;
  --md-filled-field-disabled-active-indicator-color:transparent;
  --_active-indicator-height:0;
  --_focus-active-indicator-height:0;
  --_hover-active-indicator-height:0;
}

.text-btn {
  --_container-shape-start-start: 0.5rem;
  --_container-shape-start-end: 0.5rem;
  --_container-shape-end-start: 0.5rem;
  --_container-shape-end-end: 0.5rem;
  --_label-text-color: #545969;
  --_container-height: 36px;
}

.tone-btn {
  --_container-height: 23px;
  /* --_container-shape-start-start: 999rem;
  --_container-shape-start-end: 999rem;
  --_container-shape-end-start: 999rem;
  --_container-shape-end-end: 999rem; */
}

.switch-btn {
  transform: scale(65%);
  transform-origin: left;
}
</style>
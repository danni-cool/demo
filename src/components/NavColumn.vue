<template>
  <nav class="flex flex-col nav-gradient-bar overflow-hidden">
    <div class="relative z-10 mt-4 mb-4">
      <MenuItem name="DanielTest" class="w-26 mt-1" bold />
    </div>

      <div class="relative z-10 overflow-y-auto scroll-bar-fix flex-1 pr-2">
        <div class="pt-4">
          <MenuItem size="text-xl" name="Home" icon="home" />
          <MenuItem size="text-xl" name="Payments" icon="wallet" current />
          <MenuItem size="text-xl" name="Balances" icon="balance" />
          <MenuItem size="text-xl" name="Customers" icon="Group" />
          <MenuItem size="text-xl" name="Billing" icon="request_quote" />
          <MenuItem size="text-xl" name="More" icon="more_horiz" />
        </div>

        <div class="mt-8 mb-12">
          <div class="text-xs px-2 opacity-70 mb-1">Shortcuts</div>
          <MenuItem size="text-base" name="Tax" icon="schedule" />
          <MenuItem size="text-base" name="Quotes" icon="schedule" />
          <MenuItem size="text-base" name="Terminal" icon="schedule" />
          <MenuItem size="text-base" name="Radar" icon="schedule" />
          <MenuItem size="text-base" name="Invoices" icon="schedule" />
        </div>
      </div>

  </nav>
</template>

<script setup>
import MenuItem from './MenuItem.vue'

</script>

<style lang="less" scoped>
.scroll-bar-fix {
  scrollbar-gutter: stable;
}

.nav-gradient-bar {
  &::before {
    position: absolute;
    right: 0;
    margin-top: 96px;
    content: "";
    height: 100%;
    width: 100vw;
    background-image: linear-gradient(270deg, rgb(249, 250, 252), white 100px);
  }
  &::after {
    position:absolute;
    top: 96px;
    right:0;
    content:"";
    width: 100%;
    height: 80px;
    background-image: linear-gradient(white, transparent);
  }
}

nav {
  height: calc(100vh - 2rem)
}
</style>
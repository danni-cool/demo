<template>
  <v-app>
    <v-navigation-drawer image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg" theme="dark" permanent>
      <template v-slot:prepend>
        <div class="pa-2">
          <v-btn block @click="openDialog($event)">
            Show Dialog1
          </v-btn>
        </div>
      </template>
      <v-list nav>
        <v-list-item v-for="i in 9">
          <div class="pa-2">
            <v-btn @click="openDialog($event)"> Show Dialog List{{ i }}</v-btn>
          </div>
        </v-list-item>

      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block @click="openDialog($event)">
            Show Dialog2
          </v-btn>
        </div>
      </template>

    </v-navigation-drawer>
    <v-main>
      <v-card class="h-100">
        <iframe src="/iframe.html" id="iframe" class="w-100 h-100"></iframe>
      </v-card>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { toggleDialog, fixPosition } from '@/components/LocalDialog/index.js'
const iframeElMap = new Map()

//accept position data from iframe element
onMounted(() => {
  window.addEventListener('message', toggleDialogFromIframe)
  window.addEventListener('resize', onResizeAdjustDialog, { passive: true })
})

async function openDialog(e, data) {
  let top, left, width, height, id

  if (e === 'iframeEl') {
    ({ top, left, width, height, id } = data)
    await toggleDialog({ id, relativeElPos: { top, left, width, height } })

    // click event from vue element
  } else {
    // 1. find relative btn className include v-btn
    let targetEl = e.target
    while (targetEl && !Array.from(targetEl.classList).includes('v-btn')) {
      targetEl = targetEl.parentElement
    }

    // create a dialog or find the last created dialog
    const id = targetEl.dataset.dialogId
    let { top, left, width, height } = targetEl.getBoundingClientRect()


    const { isNew, dialogId } = await toggleDialog({ id, relativeElPos: { top, left, width, height } })

    isNew && (targetEl.dataset['dialogId'] = dialogId)
  }

  return id
}

function toggleDialogFromIframe(e) {
  if (e.data?.key === "_vue-devtools-send-message") return

  const data = JSON.parse(e.data)
  const iframeLeft = document.querySelector('#iframe').getBoundingClientRect().left

  openDialog("iframeEl", { ...data, left: data.left + iframeLeft })
  const iframeEl = document.querySelector('#iframe').contentWindow.document.querySelector(`[data-dialog-id="${data.id}"]`)
  iframeElMap.set(data.id, { iframeEl, iframeLeft })
}

function onResizeAdjustDialog() {
  fixPosition({
    fixedElPrefix: 'dialog-iframe',
    callback: (vNode, key) => {
      const { iframeEl, iframeLeft } = iframeElMap.get(key)
      if (iframeEl && vNode.component.props.modelValue === true) {
        vNode.component.props.left = iframeEl.getBoundingClientRect().left + iframeLeft
      }
    }
  })
}

</script>


<style></style>

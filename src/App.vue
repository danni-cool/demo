<template>
  <v-app>
    <v-navigation-drawer image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg" theme="dark" permanent>
      <template v-slot:prepend>
        <div class="pa-2">
          <LocalDialog>
            <v-btn block>
              Dialog(simplest usage)
            </v-btn>
          </LocalDialog>
        </div>
      </template>
      <v-list nav>
        <v-list-item v-for="(i, key) in 9">
          <div class="pa-2">
            <LocalDialog v-if="i === 1" :key="key"
              :content="`You can flexibly customize your text, twice click for hidden`">
              <v-btn>Dialog(custom text)</v-btn>
            </LocalDialog>

            <LocalDialog v-if="i === 2" :key="key" :content="`It's an example with custom size`" :width="400"
              :height="200">
              <v-btn>Dialog(custom size)</v-btn>
            </LocalDialog>

            <LocalDialog v-if="i === 3" :key="key" :content="`It's an example that dialog is teleported to body`"
              :attach="false" :width="400">
              <v-btn>Dialog(append to body)</v-btn>
            </LocalDialog>

            <LocalDialog v-if="i === 4" :key="key" :content="`It's an example with custom offset`" :offset-left="220"
              :offset-top="-100">
              <v-btn>Dialog(custom offset)</v-btn>
            </LocalDialog>

            <LocalDialog v-if="i === 5" :key="key">
              <v-btn>Dialog(slot component)</v-btn>
              <template #content>
                <v-card title="Dialog">
                  <v-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </v-card-text>
                </v-card>
              </template>
            </LocalDialog>

            <LocalDialog v-if="i === 6" v-model="visible" :key="key" manual>
              <v-btn>Dialog(manually close)</v-btn>
              <template #content>
                <v-card title="Dialog">
                  <v-card-text>
                    you can only close dialog by click 【close dialog】button,

                    for configuration, just use v-model + prop (manual) to programmly control it
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn text="Close Dialog" @click="visible = false"></v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </LocalDialog>

          </div>
        </v-list-item>

      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block @click="open">
            Dialog(Dynamic component)
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
import { ref, onMounted, onUnmounted, getCurrentInstance } from 'vue'
const visible = ref(false)
const iframeElMap = new Map()
const { showDialog, fixPosition } = getCurrentInstance().appContext.config.globalProperties

onMounted(() => {
  window.addEventListener('message', openFromIframe)
  window.addEventListener('resize', () => {
    fixPosition({
      fixedElPrefix: 'dialog-custom',
      callback: (vNode, key) => {
        const { iframeEl, iframeLeft } = iframeElMap.get(key)
        if (iframeEl && vNode.component.props.modelValue === true) {
          vNode.component.props.offsetLeft = iframeEl.getBoundingClientRect().left + iframeLeft
        }
      }
    })
  }, { passive: true })
})

async function open(e) {
  showDialog({ element: e.currentTarget })
}

async function openFromIframe(e) {
  if (e.data?.key === "_vue-devtools-send-message") return

  const data = JSON.parse(e.data)
  const iframeLeft = document.querySelector('#iframe').getBoundingClientRect().left

  await showDialog({
    id: data.id,
    relativeElPos: {
      ...data,
      left: data.left + iframeLeft
    }
  })

  const iframeEl = document.querySelector('#iframe').contentWindow.document.querySelector(`[data-dialog-id="${data.id}"]`)
  iframeElMap.set(data.id, { iframeEl, iframeLeft })
}
</script>


<style></style>

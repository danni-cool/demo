import { h,createVNode, render } from 'vue'
import LocalDialog from './index.vue'
let i = 0

export default async function (option) {
  const wrapEl = document.createElement('div')
  wrapEl.id = `dialog-${i++}`
  document.querySelector('#app').append(wrapEl)

  let vNode = createVNode(LocalDialog, {
    ...option,
    modelValue: true
  });
  //hack & fix: Error: [Vuetify] Could not find defaults instance
  vNode.appContext = window.app._context

  render(vNode, wrapEl)
}



import { h, createVNode, render, nextTick } from 'vue'
import LocalDialog from './index.vue'

const map = new Map()
let count = 0
export const defaultSetting = {
  dialogOffsetGap: 20,
  dialogOffsetLeft: 0,
  contentElId: 'vDialogContent'
}

/**
 * Vue global install method
 */
export default {
  install: app => {
    app.config.globalProperties['showDialog'] = showDialog
    app.config.globalProperties['fixPosition'] = fixPosition
  }
}


/**
 * the main function
 * @param { object } obj {id, relativeElPos: {width, height, left, top}}
 */
export async function showDialog(obj = {}) {
  let top, left, width, height, id, relativeElPos
  const element = obj.element

  // vue element click event
  if (element instanceof HTMLElement) {
    id = element.dataset.dialogId;
    relativeElPos = element.getBoundingClientRect()
  }

  // element from custom position(iframe)
  if (!element && obj.relativeElPos) {
    id = obj.id
    relativeElPos = obj.relativeElPos
  }

  const vNodeCached = map.get(id)

  // dialog is created already, calculate position to display.
  if (vNodeCached) {
    updateDialogPosAndToggle(vNodeCached.component, relativeElPos)
    return { isNew: false, dialogId: id }
  }

  // create a new dialog and set to cache
  const { dialogId, vNode } = createDialog(relativeElPos, id)
  map.set(dialogId, vNode)

  if (element) {
    element.dataset['dialogId'] = dialogId
  }
}

/**
 * method callback for fixing Element Position when resizing window
 * @param { string } fixedElPrefix
 * @param { function } callback
 */
export function fixPosition({ fixedElPrefix, callback }) {
  map.forEach((v, k) => {
    if (k.indexOf(fixedElPrefix) > -1) {
      callback && callback(v, k)
    }
  })
}

/**
 * create a container and append the dialog to it.
 * @param {object} relativeElPos {width,height,left,top}
 * @param {string} preOrderedId if you emit id, I'll use it, otherwise I'll create it automatically.
 * @returns {dialogid, vNode}
 */
function createDialog(relativeElPos, preOrderedId) {
  const dialogId = preOrderedId || `dialog-${count++}`
  const wrapEl = document.createElement('div')
  wrapEl.id = dialogId
  document.body.append(wrapEl)

  let vNode = createVNode(LocalDialog);

  //hack & fix: Error: [Vuetify] Could not find defaults instance
  vNode.appContext = window.app._context
  render(vNode, wrapEl)

  updateDialogPosAndToggle(vNode.component, relativeElPos)

  return {
    dialogId,
    vNode
  }
}

/**
 * switch display of dialog and recalculate it's position.
 * @param {vNode} component
 * @param {object} relativeElPos {width,height,left,top}
 */
function updateDialogPosAndToggle(component, relativeElPos) {
  const isDialogShow = component.props.modelValue

  if (isDialogShow) {
    component.props.modelValue = false
    return
  }

  component.exposed._setRelPosition(relativeElPos)
  component.props.modelValue = true

  nextTick(() => {
    // fix: teleport element is a textNode, use parentElement to find proper Element.
    const el = component.ctx.$el.parentElement.querySelector(`#${defaultSetting.contentElId}`)
    // console.log(el)
    const { top, left } = calcDialogPosition(
      relativeElPos,
      {
        width: el.offsetWidth,
        height: el.offsetHeight
      })

    component.props.offsetLeft = left
    component.props.offsetTop = top
  })
}

/**
 * the core algorithm of calculating the proper position of dialog
 * @param {Object} relativeElPos
 * @param {Object} elPosition
 * @returns {top, left}
 */
export function calcDialogPosition(relativeElPos, dialogElPos) {
  const dialogOffsetLeft = dialogElPos.offsetLeft || 0
  const dialogOffsetTop = dialogElPos.offsetTop || 0
  const winH = document.body.clientHeight
  const winW = document.body.clientWidth
  const { top: relTop, left: relLeft, width: relWidth, height: relHeight } = relativeElPos
  const { width: dialogWidth, height: dialogHeight } = dialogElPos
  let left = relLeft + defaultSetting.dialogOffsetLeft + dialogOffsetLeft
  let top = relTop + relHeight + defaultSetting.dialogOffsetGap + dialogHeight + dialogOffsetTop

  //1. The remaining space allows the dialog box to be displayed below
  if (top <= winH) {
    top = top - dialogHeight
  } else {
    top = relTop - defaultSetting.dialogOffsetGap - dialogHeight
  }

  return {
    top,
    left
  }
}

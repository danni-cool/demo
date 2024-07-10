import { h, createVNode, render, nextTick } from 'vue'
import LocalDialog from './index.vue'

const map = new Map()
let count = 0
let defaultSetting = {
  dialogOffsetGap: 20,
  dialogOffsetLeft: 0
}

export function fixPosition({fixedElPrefix, callback}) {
  map.forEach((v,k)=> {
    if(k.indexOf(fixedElPrefix) > -1) {
      callback && callback(v,k)
    }
  })
}

export async function toggleDialog({ id, relativeElPos } = {}) {
  const vNodeCached = map.get(id)

  // dialog is created already, calculate position to display.
  if (vNodeCached) {
    updateDialogPosAndToggle(vNodeCached.component, relativeElPos)
    return {isNew: false, dialogId:id }
  }

  // create a new dialog and set to cache
  const { dialogId, vNode } = createDialog(relativeElPos, id)
  map.set(dialogId, vNode)

  return {isNew: true, dialogId}
}

/**
 * create and append a new dialog to #app container
 * @param {*} option
 * @returns
 */
function createDialog(relativeElPos, predeterminedId) {
  const dialogId = predeterminedId || `dialog-${count++}`
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

function updateDialogPosAndToggle(component, relativeElPos) {
  const isDialogShow = component.props.modelValue

  if (isDialogShow) {
    component.props.modelValue = false
    return
  }

  component.props.modelValue = true

  nextTick(() => {
    // fix: teleport element is a textNode, use parentElement to find proper Element.
    const el = component.ctx.$el.parentElement.querySelector('.v-overlay__content')
    const { top, left } = calcDialogPosition(
      relativeElPos,
      {
        width: el.offsetWidth,
        height: el.offsetHeight
      })

    component.props.left = left
    component.props.top = top
  })
}

/**
 * calculate the proper position of dialog
 * @param {Object} elPosition
 */
function calcDialogPosition(relativeElPos, dialogElPos) {
  // console.table({ relativeElPos, dialogElPos })
  const winH = document.body.clientHeight
  const winW = document.body.clientWidth
  const { top: relTop, left: relLeft, width: relWidth, height: relHeight } = relativeElPos
  const { width: dialogWidth, height: dialogHeight } = dialogElPos
  let left = relLeft + defaultSetting.dialogOffsetLeft
  let top = relTop + relHeight + defaultSetting.dialogOffsetGap + dialogHeight

  //1. The remaining space allows the dialog box to be displayed below
  if(top <= winH) {
    top = top - dialogHeight
  } else {
    top = relTop - defaultSetting.dialogOffsetGap - dialogHeight
  }

  return {
    top,
    left
  }
}

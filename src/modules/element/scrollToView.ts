const isClient = typeof window !== 'undefined'

const COMPLETE = 'COMPLETE'
const CANCELED = 'CANCELED'

function requestAnimation(task: any) {
  if (isClient && 'requestAnimationFrame' in window) {
    return window.requestAnimationFrame(task)
  }

  setTimeout(task, 16)
}

function setElementScroll(element: any, x: any, y: any) {
  if (element === window) {
    element.scrollTo(x, y)
  } else {
    element.scrollLeft = x
    element.scrollTop = y
  }
}

function getTargetScrollLocation(target: any, parent: any, align: any) {
  if (!isClient) return
  const targetPosition = target.getBoundingClientRect()
  let parentPosition:any = null
  let x:any = null
  let y:any = null
  let differenceX:any = null
  let differenceY:any = null
  let targetWidth:any = null
  let targetHeight:any = null
  const leftAlign = align && align.left != null ? align.left : 0.5
  const topAlign = align && align.top != null ? align.top : 0.5
  const leftOffset = align && align.leftOffset != null ? align.leftOffset : 0
  const topOffset = align && align.topOffset != null ? align.topOffset : 0
  const leftScalar = leftAlign
  const topScalar = topAlign

  if (parent === window) {
    targetWidth = Math.min(targetPosition.width, window.innerWidth)
    targetHeight = Math.min(targetPosition.height, window.innerHeight)
    x =
      targetPosition.left +
      window.pageXOffset -
      window.innerWidth * leftScalar +
      targetWidth * leftScalar
    y =
      targetPosition.top +
      window.pageYOffset -
      window.innerHeight * topScalar +
      targetHeight * topScalar
    x -= leftOffset
    y -= topOffset
    differenceX = x - window.pageXOffset
    differenceY = y - window.pageYOffset
  } else {
    targetWidth = targetPosition.width
    targetHeight = targetPosition.height
    parentPosition = parent.getBoundingClientRect()
    const offsetLeft =
      targetPosition.left - (parentPosition.left - parent.scrollLeft)
    const offsetTop =
      targetPosition.top - (parentPosition.top - parent.scrollTop)
    x = offsetLeft + targetWidth * leftScalar - parent.clientWidth * leftScalar
    y = offsetTop + targetHeight * topScalar - parent.clientHeight * topScalar
    x = Math.max(Math.min(x, parent.scrollWidth - parent.clientWidth), 0)
    y = Math.max(Math.min(y, parent.scrollHeight - parent.clientHeight), 0)
    x -= leftOffset
    y -= topOffset
    differenceX = x - parent.scrollLeft
    differenceY = y - parent.scrollTop
  }

  return {
    x,
    y,
    differenceX,
    differenceY,
  }
}

function animate(parent: any) {
  requestAnimation(function () {
    const scrollSettings = parent.scrollOption
    if (!scrollSettings) {
      return
    }

    const location: any = getTargetScrollLocation(
      scrollSettings.target,
      parent,
      scrollSettings.align,
    )
    const time = Date.now() - scrollSettings.startTime
    const timeValue = Math.min((1 / scrollSettings.time) * time, 1)

    if (time > scrollSettings.time + 20) {
      setElementScroll(parent, location.x, location.y)
      parent.scrollOption = null
      return scrollSettings.end(COMPLETE)
    }

    const easeValue = 1 - scrollSettings.ease(timeValue)

    setElementScroll(
      parent,
      location.x - location.differenceX * easeValue,
      location.y - location.differenceY * easeValue,
    )

    animate(parent)
  })
}

function transitionScrollTo(
  target: any,
  parent: any,
  settings: any,
  callback: any,
) {
  const idle = !parent.scrollOption
  const lastSettings = parent.scrollOption
  const now = Date.now()
  let endHandler: any = {}

  if (lastSettings) {
    lastSettings.end(CANCELED)
  }

  function end(endType: any) {
    parent.scrollOption = null
    if (parent.parentElement && parent.parentElement.scrollOption) {
      parent.parentElement.scrollOption.end(endType)
    }
    callback(endType)
    parent.removeEventListener('touchstart', endHandler)
  }

  parent.scrollOption = {
    startTime: lastSettings ? lastSettings.startTime : Date.now(),
    target,
    time: settings.time + (lastSettings ? now - lastSettings.startTime : 0),
    ease: settings.ease,
    align: settings.align,
    end,
  }

  endHandler = end.bind(null, CANCELED)
  parent.addEventListener('touchstart', endHandler)

  if (idle) {
    animate(parent)
  }
}

function defaultIsScrollable(element: any) {
  if (!isClient) return
  return (
    element === window ||
    ((element.scrollHeight !== element.clientHeight ||
        element.scrollWidth !== element.clientWidth) &&
      getComputedStyle(element).overflow !== 'hidden')
  )
}

function defaultValidTarget() {
  return true
}



/**
 * @name 滚动到目标元素
 * @prop {number} time 滚动时间
 * @prop {Function} ease 滚动 ease
 * @prop {Object} align 滚动对齐
 * @prop {Function} validTarget 验证目标
 * @prop {Function} isScrollable 滚动是否可滚动
 */
interface ISettings {
  time?: number
  ease?: any
  align?: any
  validTarget?: any
  isScrollable?: any
}


/**
 * @name 滚动到目标元素
 * @group 元素
 * @param {HTMLElement} target 目标元素
 * @param {Object} settings 配置项
 * @param  {Function} callback 回调
 * @example
 * ```ts
 *  scrollToView(document.querySelector('#target'), {
 *    time:1000,
 *     align: {
 *         top:  0 : 0.5, // 视图比例 0 to 1, 默认 0.5 (center)
 *         topOffset:  80 : 0 // 视图偏移 pixels to offset top alignment
 *     }
 *  })
 * ```
 */
export const scrollToView=  (target: any, settings?: ISettings | null, callback?: any)=> {
  if (!target) {
    return
  }

  if (typeof settings === 'function') {
    callback = settings
    settings = null
  }

  if (!settings) {
    settings = {}
  }

  settings.time = Number.isNaN(settings.time) ? 1000 : settings.time
  settings.ease =
    settings.ease ||
    function (v: any) {
      return 1 - Math.pow(1 - v, v / 2)
    }

  let parent = target.parentElement
  let parents = 0

  function done(endType: any) {
    parents -= 1
    if (!parents && callback) {
      callback(endType)
    }
  }

  const validTarget = settings.validTarget || defaultValidTarget
  const isScrollable = settings.isScrollable

  while (parent) {
    if (
      validTarget(parent, parents) &&
      (isScrollable
        ? isScrollable(parent, defaultIsScrollable)
        : defaultIsScrollable(parent))
    ) {
      parents += 1
      transitionScrollTo(target, parent, settings, done)
    }

    parent = parent.parentElement

    if (!parent) {
      return
    }

    if (parent.tagName === 'BODY') {
      parent = window
    }
  }
}

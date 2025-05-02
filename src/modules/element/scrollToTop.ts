const isClient = typeof window !== 'undefined'

function requestAnimation(task: any) {
  if (isClient && 'requestAnimationFrame' in window) {
    return window.requestAnimationFrame(task)
  }
  setTimeout(task, 16)
  return null
}

/**
 * @name 滚动到顶部
 * @group 元素
 * @param {HTMLElement} el 滚动的元素
 * @param {Object} settings 配置项
 * @param  {Function} callback 回调
 * @example
 * ```ts
 *  scrollToTop(document.querySelector('#target'), {
 *    to:20,  // 滚动至距离  
 *    time:1000, //滚动时间，单位：毫秒
 *  })
 * ```
 */
export const scrollToTop = function (el: any, settings: any, callback?: any) {
  if (!el) {
    return
  }
  if (typeof settings === 'function') {
    callback = settings
    settings = null
  }

  if (!settings) {
    settings = {}
  }

  settings.time = Number.isNaN(settings.time) ? 500 : settings.time

  const from = el.scrollTop
  const to = settings.to || 0

  const difference = Math.abs(from - to)
  const step = Math.ceil((difference / settings.time) * 50)

  function scroll(start: any, end: any, _step: any) {
    if (start === end) {
      callback && callback()
      return
    }

    let d = start + _step > end ? end : start + _step
    if (start > end) {
      d = start - _step < end ? end : start - _step
    }

    el.scrollTop = d
    requestAnimation(() => scroll(d, end, _step))
  }
  scroll(from, to, step)
}

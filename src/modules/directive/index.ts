import type { App } from 'vue'
import { dragDirective } from './drag'
import { lazyDirective } from './lazy'

/**
 * @name 自定义指令插件
 * @group 自定义指令
 * @example
 * ```ts
 *  main.ts
 *  import { directive } from 'hmp-utils'
 *  app.use(directive)
 * ```
 */
export const directive = {
  install(app: App) {
    dragDirective(app)
    lazyDirective(app)
  },
}

export {
  dragDirective,
  lazyDirective,
}
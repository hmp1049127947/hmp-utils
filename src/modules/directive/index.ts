import type { App } from 'vue'
import { dragDirective } from './drag'
import { lazyDirective } from './lazy'

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
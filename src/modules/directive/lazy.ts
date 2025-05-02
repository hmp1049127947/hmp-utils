 const setupLazy = {
  mounted(el: any, binding: any) {
    const { value } = binding
    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      if (isIntersecting) {
        el.src = value
        observer.disconnect()
      }
    })
    observer.observe(el)
  },
}

 /**
  * @name 自定义图片懒加载指令
  * @group 自定义指令
  * @example
  * ```ts
  *  main.ts
  *  import { directive } from 'hmp-utils'
  *  app.use(directive)
  * ```
  * ```vue
  *  <img v-lazy="url链接" alt="" />
  * ```
  */
export const lazyDirective = (app: any) => {
  app.directive('lazy', setupLazy)
}

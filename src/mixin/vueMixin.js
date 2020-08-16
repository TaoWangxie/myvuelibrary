export default {
    install(Vue) {
        Vue.mixin({
          methods: {
            vuwShow() {
              console.log("全局混入");
            }
        }
        })
      }
}
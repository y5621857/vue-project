import Vue from 'vue';
import router from './router/index';

Vue.config.productionTip = false;

// 创建 Vue 实例
new Vue({
  el: '#app',
  data: function data() {
    return {
      transitionName: 'slide'
    };
  },

  router: router, // 在vue实例配置中，用router
  watch: {
    // 监视路由，参数为要目标路由和当前页面的路由
    '$route': function $route(to, from) {
      var toDepth = to.path.substring(0, to.path.length - 2).split('/').length;
      // 官方给出的例子为 const toDepth = to.path.split('/').length 由于现在只有两个路由路径'/'和'/detail'
      // 按照官方给的例子，这两个路由路径深度都为 2 ，所以，这里稍作调整，不知道有什么不妥
      // 但目前在这个demo中能正常运行，如果知道更好的方法，欢迎留言赐教
      var fromDepth = from.path.substring(0, from.path.length - 2).split('/').length;
      this.transitionName = toDepth < fromDepth ? 'slide_back' : 'slide';
      // 根据路由深度，来判断是该从右侧进入还是该从左侧进入
    }
  }
});

//# sourceMappingURL=main-compiled.js.map
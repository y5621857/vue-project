import Vue from 'vue';
import Router from 'vue-router';

// 导入 views 下的 Home.vue
import Home from '../views/Home';
import Detail from '../views/Detail';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    component: Home
  }, {
    path: '/detail',
    component: Detail
  }]
});

//# sourceMappingURL=index-compiled.js.map
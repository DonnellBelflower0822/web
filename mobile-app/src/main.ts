import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

router.afterEach((to, from) => {
  const { depth: toDepth } = to.meta as { depth: number; };
  const { depth: fromDepth } = from.meta as { depth: number; };
  to.meta.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
});
createApp(App).use(store).use(router).mount('#app');

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from '../store';
import pinia from '../lib/pinia';
import compsUi from '../lib/compsUi';
import vueI18n from '../lib/vueI18n';
import vRemixicon, { icons } from '../lib/vRemixicon';
import vueToastification from '../lib/vue-toastification';
import '../assets/css/tailwind.css';
import '../assets/css/fonts.css';
import '../assets/css/style.css';
import '../assets/css/flow.css';

createApp(App)
  .use(router)
  .use(store)
  .use(compsUi)
  .use(pinia)
  .use(vueI18n)
  .use(vueToastification)
  .use(vRemixicon, icons)
  .mount('#app');

if (module.hot) module.hot.accept();

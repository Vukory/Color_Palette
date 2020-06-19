import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('capitalize', (value) => {
  if (!value)
    return '';

  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});

Vue.filter('paintbrush', (value) => {
  return `🖌 ${value}`;
});

Vue.directive('highlight', (el, binding, vnode) => {
  el.addEventListener('mouseenter', () => {
    el.style.fontWeight = "bold";
  });

  el.addEventListener('mouseleave', () => {
    el.style.fontWeight = "initial";
  });
});

new Vue({
  render: h => h(App),
}).$mount('#app')

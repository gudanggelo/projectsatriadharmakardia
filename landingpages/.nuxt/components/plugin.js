import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  NuxtLogo: () => import('../..\\components\\NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c)),
  LayoutsFooter: () => import('../..\\components\\layouts\\Footer.vue' /* webpackChunkName: "components/layouts-footer" */).then(c => wrapFunctional(c.default || c)),
  LayoutsHeader: () => import('../..\\components\\layouts\\Header.vue' /* webpackChunkName: "components/layouts-header" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}

import { wrapFunctional } from './utils'

export { default as NuxtLogo } from '../..\\components\\NuxtLogo.vue'
export { default as LayoutsFooter } from '../..\\components\\layouts\\Footer.vue'
export { default as LayoutsHeader } from '../..\\components\\layouts\\Header.vue'

export const LazyNuxtLogo = import('../..\\components\\NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const LazyLayoutsFooter = import('../..\\components\\layouts\\Footer.vue' /* webpackChunkName: "components/layouts-footer" */).then(c => wrapFunctional(c.default || c))
export const LazyLayoutsHeader = import('../..\\components\\layouts\\Header.vue' /* webpackChunkName: "components/layouts-header" */).then(c => wrapFunctional(c.default || c))

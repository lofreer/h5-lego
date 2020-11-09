export default {
  // 通用组件
  'comp-bottom-menu': () => import('@/components/general/bottom-menu'),
  'comp-text': () => import('@/components/general/text'),
  'comp-image': () => import('@/components/general/image'),
  'comp-form': () => import('@/components/general/form'),
  'comp-floor-menu': () => import('@/components/general/floor-menu'),
  'comp-grid-menu': () => import('@/components/general/grid-menu'),
  'comp-timeout': () => import('@/components/general/timeout'),
  'comp-empty': () => import('@/components/general/empty'),

  // 样式模块
  'comp-scroll-left': () => import('@/components/swiper/scroll-left'),
  'comp-swiper-banner': () => import('@/components/swiper/swiper-banner'),

  'comp-horizontal-list': () => import('@/components/list/horizontal-list'),
  'comp-vertical-list': () => import('@/components/list/vertical-list'),

  'comp-page-faq': () => import('@/components/pageModule/page-faq'),
  'comp-page-intro': () => import('@/components/pageModule/page-intro'),
  'comp-page-paragraph': () => import('@/components/pageModule/page-paragraph'),
  'comp-page-title': () => import('@/components/pageModule/page-title'),

  'comp-news-marquee': () => import('@/components/animate/news-marquee'),


}

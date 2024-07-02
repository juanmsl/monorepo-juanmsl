export const GUIDE_ROUTES = [
  { label: 'guide-about', path: '/docs/' },
  { label: 'guide-installation', path: '/docs/installation/' },
  { label: 'guide-setup', path: '/docs/setup/' },
];

export const CONTEXTS_ROUTES = [
  { label: 'context-fetch', path: '/docs/context/fetch/' },
  { label: 'context-form', path: '/docs/context/form/' },
  { label: 'context-icon', path: '/docs/context/icon/' },
  { label: 'context-theme', path: '/docs/context/theme/' },
];

export const COMPONENTS_ROUTES = [
  { label: 'component-accordion', path: '/docs/component/accordion/' },
  { label: 'component-button', path: '/docs/component/button/' },
  { label: 'component-flip-card', path: '/docs/component/flip-card/' },
  { label: 'component-form', path: '/docs/component/form/' },
  { label: 'component-hover-card', path: '/docs/component/hover-card/' },
  { label: 'component-image', path: '/docs/component/image/' },
  { label: 'component-infinity-scroll', path: '/docs/component/infinity-scroll/' },
  { label: 'component-line', path: '/docs/component/line/' },
  { label: 'component-modal', path: '/docs/component/modal/' },
  { label: 'component-pdf-viewer', path: '/docs/component/pdf-viewer/' },
  { label: 'component-table', path: '/docs/component/table/' },
  { label: 'component-tabs', path: '/docs/component/tabs/' },
  { label: 'component-tag', path: '/docs/component/tag/' },
  { label: 'component-tooltip', path: '/docs/component/tooltip/' },
  { label: 'component-typography', path: '/docs/component/typography/' },
];

export const HOOKS_ROUTES = [
  { label: 'hook-use-async', path: '/docs/hook/use-async/' },
  { label: 'hook-use-classnames', path: '/docs/hook/use-classnames/' },
  { label: 'hook-use-constant', path: '/docs/hook/use-constant/' },
  { label: 'hook-use-debounce', path: '/docs/hook/use-debounce/' },
  { label: 'hook-use-dimensions', path: '/docs/hook/use-dimensions/' },
  { label: 'hook-use-event-listener', path: '/docs/hook/use-event-listener/' },
  { label: 'hook-use-file-reader', path: '/docs/hook/use-file-reader/' },
  { label: 'hook-use-hover', path: '/docs/hook/use-hover/' },
  { label: 'hook-use-in-view', path: '/docs/hook/use-in-view/' },
  { label: 'hook-use-input-handlers', path: '/docs/hook/use-input-handlers/' },
  { label: 'hook-use-media-query', path: '/docs/hook/use-media-query/' },
  { label: 'hook-use-modal-in-container', path: '/docs/hook/use-modal-in-container/' },
  { label: 'hook-use-mouse-position', path: '/docs/hook/use-mouse-position/' },
  { label: 'hook-use-on-click-outside-ref', path: '/docs/hook/use-on-click-outside-ref/' },
  { label: 'hook-use-online-status', path: '/docs/hook/use-online-status/' },
  { label: 'hook-use-render-count', path: '/docs/hook/use-render-count/' },
  { label: 'hook-use-safe-dispatch', path: '/docs/hook/use-safe-dispatch/' },
  { label: 'hook-use-scroll', path: '/docs/hook/use-scroll/' },
  { label: 'hook-use-state-history', path: '/docs/hook/use-state-history/' },
  { label: 'hook-use-toggle', path: '/docs/hook/use-toggle/' },
  { label: 'hook-use-toggle-values', path: '/docs/hook/use-toggle-values/' },
  { label: 'hook-use-viewport', path: '/docs/hook/use-viewport/' },
];

export const ASIDE_ITEMS = [
  {
    label: 'guide',
    items: GUIDE_ROUTES,
  },
  {
    label: 'components',
    items: COMPONENTS_ROUTES,
  },
  {
    label: 'contexts',
    items: CONTEXTS_ROUTES,
  },
  {
    label: 'hooks',
    items: HOOKS_ROUTES,
  },
];

export const REDIRECT_URL = GUIDE_ROUTES[0].path;

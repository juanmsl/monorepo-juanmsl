import { lazy } from 'react';

const Home = lazy(() => import('@pages').then(module => ({ default: module.Home })));

export const GUIDE_ROUTES = [
  { label: 'guide-about', Component: Home, path: '/' },
  { label: 'guide-installation', Component: Home, path: '/installation' },
  { label: 'guide-setup', Component: Home, path: '/setup' },
];

export const CONTEXTS_ROUTES = [
  { label: 'context-fetch', Component: Home, path: '/context/fetch' },
  { label: 'context-form', Component: Home, path: '/context/form' },
  { label: 'context-icon', Component: Home, path: '/context/icon' },
  { label: 'context-theme', Component: Home, path: '/context/theme' },
];

export const COMPONENTS_ROUTES = [
  { label: 'component-accordion', Component: Home, path: '/component/accordion' },
  { label: 'component-button', Component: Home, path: '/component/button' },
  { label: 'component-flip-card', Component: Home, path: '/component/flip-card' },
  { label: 'component-form', Component: Home, path: '/component/form' },
  { label: 'component-hover-card', Component: Home, path: '/component/hover-card' },
  { label: 'component-image', Component: Home, path: '/component/image' },
  { label: 'component-infinity-scroll', Component: Home, path: '/component/infinity-scroll' },
  { label: 'component-line', Component: Home, path: '/component/line' },
  { label: 'component-modal', Component: Home, path: '/component/modal' },
  { label: 'component-pdf-viewer', Component: Home, path: '/component/pdf-viewer' },
  { label: 'component-table', Component: Home, path: '/component/table' },
  { label: 'component-tabs', Component: Home, path: '/component/tabs' },
  { label: 'component-tag', Component: Home, path: '/component/tag' },
  { label: 'component-tooltip', Component: Home, path: '/component/tooltip' },
  { label: 'component-typography', Component: Home, path: '/component/typography' },
];

export const HOOKS_ROUTES = [
  { label: 'hook-use-async', Component: Home, path: '/hook/use-async' },
  { label: 'hook-use-classnames', Component: Home, path: '/hook/use-classnames' },
  { label: 'hook-use-constant', Component: Home, path: '/hook/use-constant' },
  { label: 'hook-use-debounce', Component: Home, path: '/hook/use-debounce' },
  { label: 'hook-use-dimensions', Component: Home, path: '/hook/use-dimensions' },
  { label: 'hook-use-event-listener', Component: Home, path: '/hook/use-event-listener' },
  { label: 'hook-use-file-reader', Component: Home, path: '/hook/use-file-reader' },
  { label: 'hook-use-hover', Component: Home, path: '/hook/use-hover' },
  { label: 'hook-use-in-view', Component: Home, path: '/hook/use-in-view' },
  { label: 'hook-use-input-handlers', Component: Home, path: '/hook/use-input-handlers' },
  { label: 'hook-use-media-query', Component: Home, path: '/hook/use-media-query' },
  { label: 'hook-use-modal-in-container', Component: Home, path: '/hook/use-modal-in-container' },
  { label: 'hook-use-mouse-position', Component: Home, path: '/hook/use-mouse-position' },
  { label: 'hook-use-on-click-outside-ref', Component: Home, path: '/hook/use-on-click-outside-ref' },
  { label: 'hook-use-online-status', Component: Home, path: '/hook/use-online-status' },
  { label: 'hook-use-render-count', Component: Home, path: '/hook/use-render-count' },
  { label: 'hook-use-safe-dispatch', Component: Home, path: '/hook/use-safe-dispatch' },
  { label: 'hook-use-scroll', Component: Home, path: '/hook/use-scroll' },
  { label: 'hook-use-state-history', Component: Home, path: '/hook/use-state-history' },
  { label: 'hook-use-toggle', Component: Home, path: '/hook/use-toggle' },
  { label: 'hook-use-toggle-values', Component: Home, path: '/hook/use-toggle-values' },
  { label: 'hook-use-viewport', Component: Home, path: '/hook/use-viewport' },
];

export const ROUTES = [...GUIDE_ROUTES, ...CONTEXTS_ROUTES, ...COMPONENTS_ROUTES, ...HOOKS_ROUTES];

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

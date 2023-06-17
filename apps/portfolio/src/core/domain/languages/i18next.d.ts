import 'i18next';
import { EN } from './en.ts';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: typeof EN;
  }
}

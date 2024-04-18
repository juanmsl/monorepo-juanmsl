import ReactGA, { EventArgs } from 'react-ga';
import TagManager from 'react-gtm-module';

import { ENV } from '@core/env';

ReactGA.initialize(ENV.GOOGLE_ANALYTICS);
TagManager.initialize({
  gtmId: ENV.GOOGLE_TAG_MANAGER,
});

enum GACategory {
  WEB_VITALS = 'Web Vitals',
  JS_DEPENDENCIES = 'JS Dependencies',
  CV_DOWNLOAD = 'CV Downloaded',
  SOCIAL_VISITED = 'Social network visited',
}

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

const sendToGA = ({ id, name, value, delta }) => {
  ReactGA.ga('event', name, {
    event_category: GACategory.WEB_VITALS,
    event_label: id,
    value: delta,
    nonInteraction: true,
    metric_id: id,
    metric_value: value,
    metric_delta: delta,
  });
};

type EventArguments = EventArgs & {
  category: GACategory;
};

export const GA = {
  pageView: (page: string) => ReactGA.pageview(page),
  event: (event: EventArguments) => ReactGA.event(event),
  webVitals: () => reportWebVitals(sendToGA),
  gtag: (...args: Array<unknown>) => ReactGA.ga(...args),
  error: (message: string, fatal: boolean = false) =>
    ReactGA.exception({
      description: message,
      fatal: fatal,
    }),
  categories: GACategory,
};

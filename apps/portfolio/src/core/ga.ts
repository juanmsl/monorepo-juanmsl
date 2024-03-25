import { ENV } from '@core/env';
import ReactGA, { EventArgs } from 'react-ga';

ReactGA.initialize(ENV.GOOGLE_ANALYTICS);

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

const sendToGA = ({ id, name, value }) => {
  ReactGA.ga('event', name, {
    event_category: 'Web Vitals',
    event_label: id,
    value: Math.round(name === 'CLS' ? value * 1000 : value),
    nonInteraction: true,
  });
};

enum GACategory {
  JS_DEPENDENCIES = 'JS Dependencies',
  CV_DOWNLOAD = 'CV Downloaded',
  SOCIAL_VISITED = 'Social network visited',
}

type EventArguments = EventArgs & {
  category: GACategory;
};

export const GA = {
  pageView: (page: string) => ReactGA.pageview(page),
  event: (event: EventArguments) => ReactGA.event(event),
  webVitals: () => reportWebVitals(sendToGA),
  categories: GACategory,
};

import { ENV } from '@core/env';
import ReactGA, { EventArgs } from 'react-ga';

ReactGA.initialize(ENV.GOOGLE_ANALYTICS, {
  debug: process.env.environment !== 'production',
});

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
  categories: GACategory,
};

import { ENV } from '@core/env';
import { GA4ReactResolveInterface } from 'ga-4-react/dist/models/gtagModels';
import { useLocation } from 'react-router-dom';
import GA4React, { useGA4React } from 'ga-4-react';
import React, { useEffect } from 'react';

const sendToGA =
  (ga: GA4ReactResolveInterface) =>
  ({ id, name, value }) => {
    ga.gtag('event', name, {
      event_category: 'Web Vitals',
      // id unique to current page load
      event_label: id,
      // values must be integers
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      // avoids affecting bounce rate
      nonInteraction: true,
    });
  };

type InitializeGATrackerProps = {
  children: React.ReactNode;
};

export const ga4react = new GA4React(ENV.GOOGLE_ANALYTICS);

export const GATracker = ({ children }: InitializeGATrackerProps) => {
  const ga4React = useGA4React();
  const location = useLocation();

  useEffect(() => {
    if (ga4React) {
      ga4React.pageview(location.pathname + location.search);
      sendToGA(ga4React);

      if (window.performance) {
        ga4react.gtag('event', 'timing_complete', {
          name: 'load',
          value: Math.round(performance.now()),
          event_category: 'JS Dependencies',
        });
      }
    }
  }, [ga4React, location]);

  return children;
};

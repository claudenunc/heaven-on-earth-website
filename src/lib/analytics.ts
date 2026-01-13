import { track } from '@vercel/analytics';

type EventName =
  | 'lighthouse_checkin_start'
  | 'lighthouse_checkin_complete'
  | 'the_cure_page_visit'
  | 'signup_start'
  | 'signup_complete'
  | 'contact_form_submit'
  | 'pilot_interest';

type EventProperties = Record<string, string | number | boolean | null>;

export const trackEvent = (name: EventName, properties?: EventProperties) => {
  // Track with Vercel Analytics
  track(name, properties);

  // Future GA4 / Data Layer integration
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: name,
      ...properties,
      timestamp: new Date().toISOString(),
    });
  }
};

// Add type definition for window.dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}

/* eslint-disable */

// Packages
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import { getAnalytics } from '@firebase/analytics';
import { getPerformance } from '@firebase/performance';
import { datadogRum } from '@datadog/browser-rum'

// Local Utilities
import firebase from '../util/firebase';

// Styles
import { Theme } from '@carbon/react';
import '../styles/app.scss';

// Components
import NavHeader from '../components/layout/NavHeader';

// Initialize App
function MarshmallowApp({ Component, pageProps }) {
  useEffect(() => {
    // Initialize Datadog
    datadogRum.init(process.env.datadogConfig);
    datadogRum.startSessionReplayRecording();
    // Initialize Firebase
    getAnalytics(firebase);
    getPerformance(firebase);
    TagManager.initialize({ gtmId: process.env.gtmId });
  }, []);

  // Return App
  return (
    <Theme theme="g90">
      <header>
        <NavHeader />
      </header>
      <main>
        <Component {...pageProps} />
      </main>
    </Theme>
  )
}

export default MarshmallowApp;

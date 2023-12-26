/* eslint-disable */

// Packages
import { useEffect } from 'react';
import { getAnalytics } from '@firebase/analytics';
import { getPerformance } from '@firebase/performance';

// Local Firebase App
import firebase from '../util/firebase';

// Styles
import { Theme } from '@carbon/react';
import '../styles/app.scss';

// Components
import NavHeader from '../components/layout/NavHeader';

// Initialize App
function MarshmallowApp({ Component, pageProps }) {
  useEffect(() => {
    // Initialize Firebase
    getAnalytics(firebase);
    getPerformance(firebase);
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

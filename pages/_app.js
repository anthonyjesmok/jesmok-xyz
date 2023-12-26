/* eslint-disable */

// Packages
import { useEffect } from 'react';
import { getAnalytics } from '@firebase/analytics';
import { getPerformance } from '@firebase/performance';

// Local Firebase App
import firebase from '../util/firebase';

// Styles
import '../styles/app.scss';

// Components
import NavHeader from '../components/layout/header/NavHeader.tsx';
import { Content } from '@carbon/react';

// Initialize App
function MarshmallowApp({ Component, pageProps }) {
  useEffect(() => {
    // Initialize Firebase
    getAnalytics(firebase);
    getPerformance(firebase);
  }, []);

  // Return App
  return (
    <>
      <NavHeader />
      <Content>
        <Component {...pageProps} />
      </Content>
    </>
  )
}

export default MarshmallowApp;

import '../styles/globals.scss';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import NavigationBar from '../components/NavigationBar';
import FooterBar from '../components/FooterBar';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps, router }) {
  return (
    <div className="duration-100">
      <NavigationBar />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Layout router={router}>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
      <FooterBar />
    </div>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
};

export default MyApp;

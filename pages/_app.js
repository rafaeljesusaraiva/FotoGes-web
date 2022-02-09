import '../styles/globals.scss';
import PropTypes from 'prop-types';

function MyApp({ Component, pageProps }) {
  // Integração do template (components/Layout.js) ou página simples
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;

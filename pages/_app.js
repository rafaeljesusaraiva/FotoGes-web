import '../styles/globals.scss';
import PropTypes from 'prop-types';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import { AnimatePresence } from 'framer-motion';
import NavigationBar from '../components/NavigationBar';
import FooterBar from '../components/FooterBar';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps, router }) {
  return (
    <div className="duration-100">
      {/* INFORMAÇÃO SEO */}
      <DefaultSeo {...SEO} />
      {/* MENU NAVEGAÇÃO - PERSISTENTE */}
      <NavigationBar />
      {/* CONTEÚDO GERAL */}
      <AnimatePresence exitBeforeEnter>
        <Layout router={router}>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
      {/* MENU RODAPÉ - PERSISTENTE */}
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

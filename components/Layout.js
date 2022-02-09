import PropTypes from 'prop-types';
import NavigationBar from './NavigationBar';
import FooterBar from './FooterBar';

export default function Layout({ children }) {
  return (
    <>
      <NavigationBar />
      <main>{children}</main>
      <FooterBar />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

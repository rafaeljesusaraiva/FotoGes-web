import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Layout = ({ children, router }) => (
  <motion.div
    key={router.route}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ type: 'linear' }}
    className="flex flex-col items-start w-full h-full"
  >
    {children}
  </motion.div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  router: PropTypes.object.isRequired,
};

export default Layout;

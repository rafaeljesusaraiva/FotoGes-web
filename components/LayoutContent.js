import PropTypes from 'prop-types';

export default function LayoutContent({ children }) {
  return (
    <div className="px-4 min-h-screen">
      <div className="container mx-auto">{children}</div>
    </div>
  );
}

LayoutContent.propTypes = {
  children: PropTypes.node.isRequired,
};

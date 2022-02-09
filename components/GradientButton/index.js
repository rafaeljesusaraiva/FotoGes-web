import PropTypes from 'prop-types';

import style from './style.module.scss';
import Link from 'next/link';

export default function GradientButton({ linkTo, className, children }) {
  return (
    <Link href={linkTo} passHref>
      <div
        className={
          'text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 focus:ring-blue-800 select-none cursor-pointer ' +
          style.gradientButton +
          ' ' +
          className
        }
      >
        <span>{children}</span>
      </div>
    </Link>
  );
}

GradientButton.propTypes = {
  linkTo: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

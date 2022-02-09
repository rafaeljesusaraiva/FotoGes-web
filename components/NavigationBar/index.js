import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import GradientButton from '../GradientButton';
import MainLogo from '../MainLogo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MenuIcon from './MenuIcon';
import customStyles from './style.module.scss';

import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config.js';
const fullConfig = resolveConfig(tailwindConfig);

function NavButton({ linkTo, children }) {
  const router = useRouter();

  const classSelected =
    'text-color md:text-color-primary bg-color-primary-dark md:bg-transparent';
  const classSimple =
    'text-color border-b border-gray-700 md:border-transparent md:hover:bg-transparent hover:bg-gray-700';

  return (
    <li>
      <Link href={linkTo} passHref>
        <div
          className={
            (router.pathname == linkTo ? classSelected : classSimple) +
            ' block py-2 pr-4 pl-3 md:p-0 hover:md:border-color-primary-light select-none cursor-pointer'
          }
        >
          {children}
        </div>
      </Link>
    </li>
  );
}

NavButton.propTypes = {
  linkTo: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default function NavigationBar() {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const setNavigationToggle = () => setNavigationOpen(!navigationOpen);
  const setNavigationHidden = () => setNavigationOpen(false);

  useEffect(() => {
    const xTrigger = window.matchMedia(
      '(max-width: ' + fullConfig.theme.screens.md + ')'
    );
    xTrigger.addEventListener('change', () => setNavigationHidden);
    return () =>
      xTrigger.removeEventListener('change', () => setNavigationHidden);
  }, []);

  return (
    <nav
      className={
        'border-gray-200 px-4 py-6 rounded fixed top-0 left-0 w-full z-50 ' +
        customStyles.navbarGradient
      }
    >
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" passHref className="cursor-pointer">
          <div className="flex cursor-pointer">
            <MainLogo />
            <span className="self-center text-lg font-semibold whitespace-nowrap text-white">
              FotoGes
            </span>
          </div>
        </Link>
        <div className="flex md:order-2">
          <GradientButton linkTo="/login">Registar / Entrar</GradientButton>
          <button
            onClick={() => setNavigationToggle()}
            type="button"
            className="inline-flex items-center p-2 rounded-lg md:hidden focus:outline-none active:ring-2 active:ring-gray-600 text-gray-400 bg-color-canvas"
            aria-controls="mobile-menu-4"
            aria-expanded="false"
          >
            <span className="sr-only">Abrir Menu</span>
            <MenuIcon isOpened={navigationOpen} />
          </button>
        </div>
        <div
          className={
            'justify-between items-center w-full mt-4 md:mt-0 md:flex md:w-auto md:order-1 bg-color-canvas md:bg-transparent ' +
            (navigationOpen ? '' : 'hidden')
          }
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:font-medium">
            <NavButton linkTo="/">Início</NavButton>
            <NavButton linkTo="/servicos">Serviços</NavButton>
            <NavButton linkTo="/pesquisar">Pesquisar Fotógrafo</NavButton>
            <NavButton linkTo="/sobre">Sobre</NavButton>
          </ul>
        </div>
      </div>
    </nav>
  );
}

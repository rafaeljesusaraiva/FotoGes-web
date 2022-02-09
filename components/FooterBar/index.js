import { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import MainLogo from '../MainLogo';

function CollumnLink({ linkTo, children }) {
  return (
    <Link href={linkTo} passHref>
      <div className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 dark:text-white cursor-pointer">
        {children}
      </div>
    </Link>
  );
}
CollumnLink.propTypes = {
  linkTo: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

function SendIcon() {
  return (
    <svg
      className="text-white hover:text-gray-200"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.8934 7.39673L14.8884 7.39457L1.54219 1.9166C1.42993 1.87011 1.30778 1.85187 1.18666 1.86353C1.06554 1.87519 0.949225 1.91637 0.848125 1.9834C0.741311 2.05266 0.653573 2.14711 0.592805 2.25826C0.532037 2.36941 0.500145 2.49376 0.5 2.62013V6.12357C0.50006 6.29633 0.561019 6.46366 0.67237 6.59671C0.783722 6.72976 0.938491 6.82021 1.11 6.85246L8.38906 8.18438C8.41767 8.18974 8.44348 8.20482 8.46205 8.22701C8.48062 8.2492 8.49078 8.2771 8.49078 8.30591C8.49078 8.33472 8.48062 8.36263 8.46205 8.38481C8.44348 8.407 8.41767 8.42208 8.38906 8.42744L1.11031 9.75936C0.938851 9.79153 0.784092 9.88185 0.67269 10.0148C0.561288 10.1477 0.500219 10.3149 0.5 10.4876V13.9917C0.499917 14.1124 0.530111 14.2312 0.587871 14.3374C0.645632 14.4437 0.729152 14.5341 0.830938 14.6006C0.953375 14.6811 1.09706 14.7241 1.24406 14.7243C1.34626 14.7242 1.4474 14.7039 1.54156 14.6646L14.8875 9.21787L14.8934 9.21509C15.0731 9.13869 15.2262 9.01185 15.3337 8.85025C15.4413 8.68866 15.4986 8.49941 15.4986 8.30591C15.4986 8.11241 15.4413 7.92316 15.3337 7.76157C15.2262 7.59997 15.0731 7.47313 14.8934 7.39673Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function FooterBar() {
  const [newsletterEmail, setNewsletterEmail] = useState('');

  return (
    <div className="px-4">
      <div className="mx-auto container py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 gap-4">
          <div className="flex flex-col flex-shrink-0">
            <div className="text-white flex">
              <MainLogo />
              <span className="self-center text-lg font-semibold whitespace-nowrap text-white">
                FotoGes
              </span>
            </div>
            <p className="text-sm leading-none mt-4 text-white">
              Copyright © 2022 FotoGes
            </p>
            <p className="text-sm leading-none mt-4 text-white">
              Todos os direitos reservados
            </p>
          </div>
          <div className="sm:ml-0 ml-8 flex flex-col">
            <h2 className="text-base font-semibold leading-4 text-white">
              O Projeto
            </h2>
            <CollumnLink linkTo="/sobre">Sobre</CollumnLink>
            <CollumnLink linkTo="/blog">Blog</CollumnLink>
            <CollumnLink linkTo="/servicos">Serviços</CollumnLink>
            <CollumnLink linkTo="/contactos">Contactos</CollumnLink>
          </div>
          <div className="flex flex-col">
            <h2 className="text-base font-semibold leading-4 text-gray-800 dark:text-white">
              Suporte
            </h2>
            <CollumnLink linkTo="/suporte/politica-privacidade">
              Política de Privacidade
            </CollumnLink>
            <CollumnLink linkTo="/suporte/termos-e-condicoes">
              Termos e Condições
            </CollumnLink>
          </div>
          {/* Full Screen Newsletter Widget */}
          <div className="mt-10 lg:block hidden">
            <label className="text-xl font-medium leading-5 text-white">
              Recebe Atualizações
            </label>
            <div className="cursor-pointer flex items-center justify-between border border-white mt-4">
              <input
                type="text"
                className="text-base leading-4 p-4 w-full focus:outline-none text-white placeholder-white border-white bg-color-canvas"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Insere o teu Email"
              />
              <button
                aria-label="send"
                className="mx-4 fill-current text-gray-800 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              >
                {SendIcon()}
              </button>
            </div>
          </div>
        </div>
        {/* Smaller Screen Newsletter Widget */}
        <div className="mt-10 lg:hidden">
          <label className="text-xl font-medium leading-5 text-white">
            Recebe Atualizações
          </label>
          <div className="flex items-center justify-between border border-white mt-4">
            <input
              type="text"
              className="text-base leading-4 p-4 relative z-0 w-full focus:outline-none text-white placeholder-white border-white bg-color-canvas"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Insere o teu Email"
            />
            <button
              aria-label="send"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer mx-4 relative z-40"
            >
              {SendIcon()}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

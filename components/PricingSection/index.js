import './style.module.scss';
import { useState } from 'react';
import currencyFormatter from '../../utils/currencyFormatter';

const fillerInfo = [
  {
    name: 'Básico',
    discretion: 'Todos os básicos para começar!',
    price: {
      monthly: 0,
      annually: 0,
    },
    features: ['1 Template de Contrato', '1 Pack de Preços', 'Albúns Simples'],
  },
  {
    name: 'Avançado',
    discretion: 'O melhor para o fotógrafo que quer otimizar o seu workflow.',
    price: {
      monthly: 9.99,
      annually: 9.99 * 12 - 9.89,
    },
    features: [
      '5 Templates de Contratos',
      '4 Packs de Preços',
      'Integração de Extras',
      'Álbuns Personalizados',
      'Envio de Portfolio',
    ],
  },
  {
    name: 'Profissional',
    discretion:
      'Funcionalidades avançadas para os profissionais que requerem o controlo total.',
    price: {
      monthly: 19.99,
      annually: 19.99 * 12 - 39.89,
    },
    features: [
      'Contratos Ilimitados',
      'Packs Ilimitados',
      'Integrações Externas',
      'Importação pelo LR',
      'Inventário e Avisos',
      'Seguimentos por Email',
    ],
  },
];

export default function PricingSection() {
  const [currentPlan, setCurrentPlan] = useState('monthly');
  let switchPlan = () => {
    setCurrentPlan(currentPlan == 'monthly' ? 'annually' : 'monthly');
  };

  return (
    <main className="mx-4 my-16">
      <div className="text-center">
        <h1 className="mb-4 text-2xl font-normal md:text-3xl lg:text-4xl">
          Os nossos <span className="font-semibold">planos</span> para o teu{' '}
          <span className="font-semibold">uso</span>
        </h1>
        <p className="text-sm font-normal text-gray-400">
          Se preferes deixar a manutenção de servidores connosco, verifica os
          planos que temos disponíveis, seja para iniciantes ou para
          profissionais!
        </p>
        <p className="text-sm font-normal text-gray-400 mt-1">
          Tens sempre a opção de hospedar a versão <i>open-source</i> com todas
          as funcionalidades, visita-a no nosso{' '}
          <a
            className="underline"
            href="https://github.com/rafaeljesusaraiva"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          !
        </p>
      </div>

      {/*  Plan switch  */}
      <div className="flex items-center justify-center mt-10 space-x-4">
        <span className="text-base font-medium">Mensalmente</span>
        <button
          className="relative rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => switchPlan()}
        >
          <div className="w-16 h-8 transition bg-indigo-500 rounded-full shadow-md outline-none"></div>
          <div
            className={
              'absolute inline-flex items-center justify-center w-6 h-6 transition-all duration-200 ease-in-out transform bg-white rounded-full shadow-sm top-1 left-1 ' +
              (currentPlan == 'monthly' ? 'translate-x-0' : 'translate-x-8')
            }
          ></div>
        </button>
        <span className="text-base font-medium">Anualmente</span>
      </div>

      {/* Plans */}
      <div className="flex flex-col items-center justify-center mt-16 space-y-8 lg:flex-row lg:items-stretch lg:space-x-8 lg:space-y-0">
        {fillerInfo.map((plan, indexPlan) => {
          return (
            <section
              className="flex flex-col w-full max-w-sm p-12 space-y-6 bg-color-canvas-secondary rounded-lg shadow-md"
              key={'plan-' + indexPlan}
            >
              {/* Preço */}
              <div className="flex-shrink-0">
                <span
                  className={
                    'text-4xl font-medium tracking-tight ' +
                    (indexPlan == 1 ? 'text-color-primary' : '')
                  }
                >
                  {currentPlan == 'monthly'
                    ? currencyFormatter(plan.price.monthly)
                    : currencyFormatter(plan.price.annually)}
                </span>
                <span className="text-gray-400">
                  {currentPlan == 'monthly' ? ' /mês' : ' /ano'}
                </span>
              </div>

              {/* Descrição */}
              <div className="flex-shrink-0 pb-6 space-y-2 border-b">
                <h2 className="text-2xl font-normal">{plan.name}</h2>
                <p className="text-sm text-gray-400">{plan.discretion}</p>
              </div>

              {/* Funcionalidades */}
              <ul className="flex-1 space-y-4">
                {plan.features.map((feature, indexFeature) => {
                  return (
                    <li
                      className="flex items-start"
                      key={'feature-' + indexFeature}
                    >
                      <svg
                        className="w-6 h-6 text-green-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-3 text-base font-medium">
                        {feature}
                      </span>
                    </li>
                  );
                })}
              </ul>

              {/* Botão */}
              <div className="flex-shrink-0 pt-4">
                <button
                  type="button"
                  className={
                    'inline-flex items-center justify-center w-full max-w-xs px-4 py-2 transition-colors border rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 ' +
                    (indexPlan == 1
                      ? ' bg-color-canvas text-white hover:bg-color-primary-dark'
                      : 'hover:bg-color-primary-dark hover:text-white')
                  }
                >
                  {plan.name}
                </button>
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}

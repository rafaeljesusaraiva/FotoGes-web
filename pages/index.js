// import styles from '../styles/Home.module.css'
import Layout from '../components/Layout';
import Image from 'next/image';
import GradientButton from '../components/GradientButton';

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen relative flex flex-col justify-center	">
        {/* Title */}
        <div className="px-4 z-10">
          <div className="container mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold md:w-9/12 lg:w-9/12">
              Plataforma de Gestão de Estúdio
            </h1>
            <h2 className="text-1xl lg:text-2xl leading-7 mt-2 ml-4">
              Uma solução <i>código aberto</i> feita por fotógrafos, para
              fotógrafos
            </h2>
          </div>
        </div>
        {/* Fundo Principal */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Image
            src="/main-background.jpeg"
            layout="fill"
            objectFit="cover"
            className="brightness-50"
          />
        </div>
      </div>
      <div className="px-4 min-h-screen">
        <div className="container mx-auto">
          Bloco para mostrar o pacote gratuito
          <br></br>
          Exemplo de funcionalidade (gestão clientes)
          <br></br>
          Exemplo de funcionalidade (gestão de pagamentos)
          <br></br>
          Exemplo de funcionalidade (gestão de pagamentos)
          <br></br>
          Resumo geral das funcionalidades
          <br></br>
          Integrações
          <br></br>
          <div className="text-center my-16">
            <h1 className="mb-4 text-2xl font-normal md:text-3xl lg:text-4xl">
              Os nossos <span className="font-semibold">planos</span> para o teu{' '}
              <span className="font-semibold">uso</span>
            </h1>
            <p className="text-sm font-normal text-gray-400">
              Se preferes deixar a manutenção de servidores connosco, verifica
              os planos que temos disponíveis, seja para iniciantes ou para
              profissionais!
            </p>
            <p className="text-sm font-normal text-gray-400 mt-1">
              Tens sempre a opção de hospedar a versão <i>open-source</i> com
              todas as funcionalidades, visita-a no nosso{' '}
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
            <GradientButton
              linkTo="/servicos"
              className="mt-8 mr-auto md:mr-auto mx-auto max-w-max px-8 md:px-12"
            >
              Ver Planos
            </GradientButton>
          </div>
        </div>
      </div>
    </>
  );
}

// Integração do template
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

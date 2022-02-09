import Layout from '../components/Layout';
import LayoutContent from '../components/LayoutContent';
import PricingSection from '../components/PricingSection';

export default function Servicos() {
  return (
    <div className="pt-10">
      <PricingSection />
    </div>
  );
}

// Integração do template
Servicos.getLayout = function getLayout(page) {
  return (
    <Layout>
      <LayoutContent>{page}</LayoutContent>
    </Layout>
  );
};

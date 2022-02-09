import LayoutContent from '../components/LayoutContent';
import PricingSection from '../components/PricingSection';

export default function Servicos() {
  return (
    <div className="mt-14 w-full">
      <LayoutContent>
        <PricingSection />
      </LayoutContent>
    </div>
  );
}

// Integração do template
Servicos.getLayout = function getLayout(page) {
  return <LayoutContent>{page}</LayoutContent>;
};

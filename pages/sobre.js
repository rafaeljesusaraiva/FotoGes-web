import LayoutContent from 'components/LayoutContent';
import TeamSection from 'components/TeamSection';

export default function Sobre() {
  return (
    <div className="mt-24 w-full">
      <LayoutContent>
        <TeamSection />
      </LayoutContent>
    </div>
  );
}

// Integração do template
Sobre.getLayout = function getLayout(page) {
  return <LayoutContent>{page}</LayoutContent>;
};

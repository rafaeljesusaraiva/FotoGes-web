import LayoutContent from 'components/LayoutContent';
import IconLoupe from 'components/Icon/Loupe';

export default function Pesquisar() {
  return (
    <div className="mt-24 w-full">
      <LayoutContent>
        <div className="flex relative ">
          <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
            <IconLoupe />
          </span>
          <input
            type="text"
            id="email-with-icon"
            className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            name="email"
            placeholder="Your email"
          />
        </div>
      </LayoutContent>
    </div>
  );
}

// Integração do template
Pesquisar.getLayout = function getLayout(page) {
  return <LayoutContent>{page}</LayoutContent>;
};

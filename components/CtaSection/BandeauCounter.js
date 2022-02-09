export default function CtaBandeauCounter() {
  return (
    <section className="bg-indigo-800">
      <div className="container mx-auto grid grid-cols-2 gap-8 md:grid-cols-4 py-8 text-center">
        <div>
          <h5 className="text-5xl font-bold text-white">
            <span className="inline text-white">2179</span>
            <span className="text-indigo-200">+</span>
          </h5>
          <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">
            Cups of coffee
          </p>
        </div>
        <div>
          <h5 className="text-5xl font-bold text-white">
            <span className="inline text-white">13</span>
            <span className="text-indigo-200">+</span>
          </h5>
          <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">
            Ongoing contracts
          </p>
        </div>
        <div>
          <h5 className="text-5xl font-bold text-white">
            <span className="inline text-white">31</span>
            <span className="text-indigo-200">+</span>
          </h5>
          <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">
            Finished projects
          </p>
        </div>
        <div>
          <h5 className="text-5xl font-bold text-white">
            <span className="inline text-white">3</span>
            <span className="text-indigo-200">+</span>
          </h5>
          <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">
            Years in business
          </p>
        </div>
      </div>
      <div className="w-52 mx-auto mt-4 p-4 flex">
        <button
          type="button"
          className="py-2 px-4  bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        >
          Join
        </button>
      </div>
    </section>
  );
}

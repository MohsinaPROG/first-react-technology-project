const Banner = () => {
  return (
    <section id="home" className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 lg:px-8 lg:py-24">

        {/* Left */}
        <div>
          <h1 className="text-9xl font-extrabold leading-tight text-gray-900 md:text-5xl">
            Build Your Ideal
            <br />
            <span className="gradient-text">
              Development Stack
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-6 text-gray-500">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits your
            next project.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#technologies"
              className="gradient-button rounded-md px-5 py-3 text-xs font-semibold shadow-sm"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="rounded-md border border-gray-300 px-5 py-3 text-xs font-semibold text-gray-700 hover:bg-gray-50"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <img
            src="/assets/banner-stack.png"
            alt="Development technology stack"
            className="w-full max-w-md object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;
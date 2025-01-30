function About() {
  return (
    <>
      <div className="pb-12">
        <div className="mx-auto max-w-2xl mt-8 mb-16 lg:text-center">
          <h2 className="text-base/7 font-semibold text-gray-600 dark:text-zinc-400">
            What is Fedilinks
          </h2>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-zinc-100 sm:text-3xl lg:text-balance">
            Fediverse trends in one place
          </p>
          <p className="mt-5 text-lg/8 text-gray-700 dark:text-zinc-200">
            Fedilinks combines trending stories from multiple networks into one
            convenient feed.
          </p>
        </div>

        <div>
          <h3 className="mb-6 text-base text-gray-900 dark:text-zinc-100">
            Changelog &amp; Things
          </h3>
        </div>

        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4 text-blue-800 dark:text-blue-300"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                />
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Launch V0
              <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3">
                Latest
              </span>
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Released on January 28th, 2024
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quod
              voluptatum exercitationem vero necessitatibus enim. Vel sunt eos,
              hic autem placeat deleniti dicta explicabo nostrum unde illo
              voluptatem accusantium magnam.
            </p>
          </li>
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4 text-blue-800 dark:text-blue-300"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                />
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              V0
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              January 20th, 2025
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi id eum molestias sequi optio vel ipsa placeat
              blanditiis, dolore assumenda, nesciunt consequatur sint
              consequuntur magnam molestiae, cumque ab veniam unde!
            </p>
          </li>
          <li className="ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4 text-blue-800 dark:text-blue-300"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                />
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Concept Exploration
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              January 15th, 2025
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              <a
                href="https://mastodon.social/@mstrlaw"
                target="_blank"
                className="text-blue-800 underline"
              >
                Lawrence
              </a>{' '}
              and{' '}
              <a
                href="https://mastodon.social/@mathieu_giquel"
                target="_blank"
                className="text-blue-800 underline"
              >
                Mathieu
              </a>{' '}
              discuss the problem of many stories tranding across the federated
              web but we can't easily check those when using a standard client.
            </p>
          </li>
        </ol>
      </div>
    </>
  );
}

export default About;

function About() {
  return (
    <>
      <div className="pb-12">
        <div className="mx-auto max-w-2xl mt-8 mb-16 lg:text-center">
          <h2 className="text-base/7 font-semibold text-gray-600 dark:text-zinc-400">
            What is Fedilinks
          </h2>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-zinc-100 sm:text-3xl lg:text-balance">
            Fediverse trending links in one place.
          </p>
          <p className="mt-5 text-lg text-gray-700 dark:text-zinc-200">
            See all trending links from multiple Mastodon instances. A
            convenient way to discover all the cool things different communities
            are sharing.
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
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 text-blue-800 dark:text-blue-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                />
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              V0.5
              <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3">
                Latest
              </span>
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              March 19th, 2025
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Implements an RSS providing the same content from the web app at{' '}
              <a href="https://rss.fedilinks.com/" target="_blank">
                https://rss.fedilinks.com/
              </a>
              . Updated once per hour.
            </p>
          </li>
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 text-blue-800 dark:text-blue-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                />
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              V0.4
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              February 18th, 2025
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Introduces a new endpoint to list links per insert date instead of
              ranking score.
            </p>
          </li>
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 text-blue-800 dark:text-blue-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                />
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              V0.3
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              February 18th, 2025
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Adds ability to load more entries as user scrolls down the UI.
            </p>
          </li>
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 text-blue-800 dark:text-blue-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                />
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              V0.2
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              February 3rd, 2025
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Tweak to the ranking algorithm. Links now rank based on recent
              usage and recency: more recent and frequently used links rank
              higher. Added other instances with larger use base to include
              broader diversity of links.
              <br />
              <br />
              As of now servers include:
            </p>
            <ul className="pl-2 text-gray-500 dark:text-gray-400">
              <li>
                <a className="underline" href="https://ai.wiki">
                  ai.wiki
                </a>
              </li>
              <li>
                <a className="underline" href="https://aus.social">
                  aus.social
                </a>
              </li>
              <li>
                <a className="underline" href="https://floss.social">
                  floss.social
                </a>
              </li>
              <li>
                <a className="underline" href="https://hachyderm.io">
                  hachyderm.io
                </a>
              </li>
              <li>
                <a className="underline" href="https://infosec.exchange">
                  infosec.exchange
                </a>
              </li>
              <li>
                <a className="underline" href="https://mas.to">
                  mas.to
                </a>
              </li>
              <li>
                <a className="underline" href="https://masto.ai">
                  masto.ai
                </a>
              </li>
              <li>
                <a className="underline" href="https://mastodon.ie">
                  mastodon.ie
                </a>
              </li>
              <li>
                <a className="underline" href="https://mastodon.online">
                  mastodon.online
                </a>
              </li>
              <li>
                <a className="underline" href="https://mastodon.scot">
                  mastodon.scot
                </a>
              </li>
              <li>
                <a className="underline" href="https://mastodon.sdf.org">
                  mastodon.sdf.org
                </a>
              </li>
              <li>
                <a className="underline" href="https://mastodon.world">
                  mastodon.world
                </a>
              </li>
              <li>
                <a className="underline" href="https://mastodon.social">
                  mastodon.social
                </a>
              </li>
              <li>
                <a className="underline" href="https://mstdn.ca">
                  mstdn.ca
                </a>
              </li>
              <li>
                <a className="underline" href="https://mstdn.party">
                  mstdn.party
                </a>
              </li>
              <li>
                <a className="underline" href="https://mstdn.social">
                  mstdn.social
                </a>
              </li>
              <li>
                <a className="underline" href="https://sfba.social">
                  sfba.social
                </a>
              </li>
              <li>
                <a className="underline" href="https://social.vivaldi.net">
                  social.vivaldi.net
                </a>
              </li>
              <li>
                <a className="underline" href="https://tech.lgbt">
                  tech.lgbt
                </a>
              </li>
              <li>
                <a className="underline" href="https://techhub.social">
                  techhub.social
                </a>
              </li>
              <li>
                <a className="underline" href="https://universeodon.com">
                  universeodon.com
                </a>
              </li>
            </ul>
          </li>
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 text-blue-800 dark:text-blue-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                />
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              V0.1
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              January 20th, 2025
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              First version of the aggregator launched: a simple web app and a
              Go server just showing the top trending links for a handful or
              instances. Ranking is merely by top "use". Links are retrieved
              every hour per server instance.
            </p>
          </li>
          <li className="ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 text-blue-800 dark:text-blue-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
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

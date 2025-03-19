import { useState } from 'react';
import { NavLink } from 'react-router';

const Navigation = () => {
  const [visible, setVisible] = useState(false);

  const toggleMenu = () => {
    setVisible(!visible);
  };

  return (
    <header className="bg-zinc-50 dark:bg-zinc-900">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <NavLink to="/" className="flex justify-center -m-1.5 p-1.5">
            <img
              className="h-6 w-auto dark:invert"
              src="/icon.svg"
              alt="Fedilinks Logo"
            />
            <span className="dark:text-white font-semibold ml-2">
              Fedilinks
            </span>
          </NavLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 cursor-pointer"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        {visible && (
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm/6 font-semibold text-gray-900">
              Features
            </a>
            <a href="#" className="text-sm/6 font-semibold text-gray-900">
              Marketplace
            </a>
            <a href="#" className="text-sm/6 font-semibold text-gray-900">
              Company
            </a>
          </div>
        )}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <NavLink
            to="https://rss.fedilinks.com/feed.xml"
            target="_blank"
            className="text-sm/6 font-semibold text-gray-900 dark:text-white mr-2"
          >
            RSS
          </NavLink>
          <NavLink
            to="/about"
            className="text-sm/6 font-semibold text-gray-900 dark:text-white"
          >
            About
          </NavLink>
        </div>
        {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div> */}
      </nav>
      {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
      {visible && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
          <div className="fixed inset-0 z-10"></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-zinc-50 dark:bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <NavLink
                to="/"
                className="sm:hidden flex justify-center -m-1.5 p-1.5"
              >
                <img
                  className="h-6 w-auto dark:invert"
                  src="/icon.svg"
                  alt="Fedilinks Logo"
                />
                <span className="dark:text-white font-semibold ml-2">
                  Fedilinks
                </span>
              </NavLink>
              <div></div>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-white cursor-pointer"
                onClick={toggleMenu}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <NavLink
                    to="https://rss.fedilinks.com/feed.xml"
                    target="_blank"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 dark:text-white"
                  >
                    RSS
                  </NavLink>
                  <NavLink
                    to="/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 dark:text-white"
                  >
                    About
                  </NavLink>
                </div>
                {/* <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;

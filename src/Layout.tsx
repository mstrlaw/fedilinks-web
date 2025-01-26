import { Outlet } from 'react-router';
import Navigation from './components/Navigation';

const Layout = () => {
  return (
    <>
      <div className="flex h-full">
        <div className="fixed inset-0 flex justify-center px-4 lg:px-8">
          <div className="flex w-full md:max-w-3xl">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
          </div>
        </div>
        <div className="relative flex justify-center w-full">
          <div className="w-full md:max-w-3xl">
            <div className="pb-4">
              <Navigation />
            </div>
            <main className="px-8">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;

import './App.css';
import Navigation from './components/Navigation';
import Listing from './components/Listing';

function App() {
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
            {/* <header className="pt-8 pb-4 px-8">
              <h1 className="text-3xl font-semibold dark:text-white">
                Fedilinks
              </h1>
              <h3 className="dark:text-white">
                Trendings links from Mastodon instances.
              </h3>
            </header> */}
            <main className="px-8">
              <Listing />
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

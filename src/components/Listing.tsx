import { useState, useEffect } from 'react';
import { parse } from 'psl';

const Listing = () => {
  const [entries, setEntries] = useState<Any>([]);

  useEffect(() => {
    const API = 'https://fedilinks.sinacosa.com/v1';
    // const endpoint = '/list_links?limit=10&offset=0'
    const endpoint = '/list_ranked_links?limit=10&offset=0';

    fetch(`${API}${endpoint}`)
      .then((response) => response.json())
      .then(({ links }) => {
        // console.log(links);
        setEntries([...links]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const formatDate = (date: string) => {
    const d = new Date(date);
    return d.toLocaleDateString();
  };

  const formatSource = (source: string) => {
    const urlObject = new URL(source);
    return parse(urlObject.hostname).domain;
  };

  return (
    <>
      {entries.map((entry: object) => {
        return (
          <article
            key={entry.id}
            className="overflow-hidden rounded-lg mb-8 border border-gray-50/10"
          >
            <a href={entry.url} target="_blank">
              <img
                alt=""
                src={entry.image}
                className="h-56 w-full object-cover"
              />
            </a>

            <div className="p-4 sm:p-6">
              <div className="flex mb-2">
                <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset">
                  {formatSource(entry.source)}
                </span>
                <div className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium">
                  <time
                    dateTime={entry.updated_at}
                    className="block text-xs text-gray-400"
                  >
                    {formatDate(entry.updated_at)}
                  </time>
                </div>
              </div>

              <a href={entry.url} target="_blank">
                <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
                  {entry.title}
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 dark:text-gray-400">
                {entry.description}
              </p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Listing;

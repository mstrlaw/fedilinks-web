import { useState, useEffect } from 'react';
import { IEntry } from '../common/types';
import Entry from './Entry';

const Listing = () => {
  const [entries, setEntries] = useState<IEntry[]>([]);

  useEffect(() => {
    let offset: number = 0;
    const API = import.meta.env.VITE_SERVER_API;
    const endpoint = `/list_ranked_links?limit=20&offset=${offset}`;

    // Get latest entries
    fetch(`${API}${endpoint}`)
      .then((response) => response.json())
      .then(({ links_with_usage }) => {
        // console.log(links_with_usage);
        setEntries([...links_with_usage]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      {entries.map((entry: IEntry) => {
        return <Entry key={entry.id} entry={entry} />;
      })}
    </>
  );
};

export default Listing;

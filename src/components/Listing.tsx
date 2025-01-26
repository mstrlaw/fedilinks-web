import { useState, useEffect } from 'react';
import { IEntry } from '../common/types';
import Entry from './Entry';

const Listing = () => {
  const [entries, setEntries] = useState<IEntry[]>([]);

  useEffect(() => {
    const API = 'https://fedilinks.sinacosa.com/v1';
    const endpoint = '/list_links?limit=10&offset=0';
    // const endpoint = '/list_ranked_links?limit=10&offset=0';

    // Get latest entries
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

  return (
    <>
      {entries.map((entry: IEntry) => {
        return <Entry key={entry.id} entry={entry} />;
      })}
    </>
  );
};

export default Listing;

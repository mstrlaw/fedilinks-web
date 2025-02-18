import { useState, useEffect } from 'react';
import { useIntersectionObserver } from '@uidotdev/usehooks';
import { IEntry } from '../common/types';
import { getEntries } from '../common/api';
import Listing from '../components/Listing';

function Feed() {
  const [offset, setOffset] = useState(0);
  const [entries, setEntries] = useState<IEntry[]>([]);

  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: '0px',
  });

  useEffect(() => {
    if (!entry?.isIntersecting) {
      return;
    }

    const newOffset = 20 + offset;
    setOffset(newOffset);

    const getData = async () => {
      const data = await getEntries({ offset }).catch((err) => {
        console.log('Error retrieving entries');
        throw new Error(err);
      });

      setEntries((prevEntries) => [
        ...prevEntries,
        ...data.data.links_with_usage,
      ]);
    };

    getData();
  }, [entry?.isIntersecting]);

  return (
    <>
      <Listing entries={entries} />
      <div ref={ref} className="h-32 w-full"></div>
    </>
  );
}

export default Feed;

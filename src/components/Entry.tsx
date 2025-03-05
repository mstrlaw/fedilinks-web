import { parse } from 'tldts';
import { Blurhash } from 'react-blurhash';
import { IEntry } from '../common/types';
import { useEffect, useRef, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';

interface Props {
  entry: IEntry;
}

const height: number = 224;
let width: number = 0;

const Entry = ({ entry }: Props) => {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    width = ref.current ? ref.current.offsetWidth : 0;
    // eslint-disable-next-line
  }, [ref.current]);

  const formatDate = (date: string) => {
    const d = new Date(date);
    return d.toLocaleDateString();
  };

  const formatTimeAgo = (date: string) => {
    return formatDistanceToNow(new Date(date), { addSuffix: true });
  };

  const formatSource = (source: string) => {
    return parse(source).domain;
  };

  return (
    <article
      ref={ref}
      className="overflow-hidden rounded-lg mb-8 border border-gray-200/80 dark:border-gray-50/10"
    >
      <div className="flex w-full"></div>
      <div className="relative">
        <a
          href={entry.url}
          target="_blank"
          title="Click to open link in new tab"
        >
          <div className="relative">
            <div
              className={`absolute transition-opacity duration-200 ease-in ${
                imageVisible ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <Blurhash
                hash={entry.blurhash}
                width={width}
                height={height}
                resolutionX={32}
                resolutionY={32}
                punch={1}
              />
            </div>
          </div>
          <img
            alt={entry.image_description}
            src={entry.image}
            className={`h-56 w-full object-cover opacity-0 ${
              imageVisible && 'opacity-100'
            }`}
            onLoad={() => setImageVisible(true)}
          />
        </a>
        <div className="absolute w-full bottom-0 p-4">
          <a
            href={entry.source}
            target="_blank"
            className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-700/10 ring-inset"
          >
            {formatSource(entry.source)}
          </a>
          {/* <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-700/10 ring-inset ml-2">
            {entry.uses} uses
          </span> */}
        </div>
      </div>

      <div className="px-4 pb-4">
        <div className="my-2">
          <p className="text-xs font-medium inline text-gray-800 dark:text-gray-400">
            <time
              title={formatDate(entry.published_at)}
              dateTime={entry.published_at}
            >
              {formatTimeAgo(entry.published_at)}
            </time>
            &nbsp;by&nbsp;
            <span className="text-xs">{entry.provider_name}</span>
          </p>
        </div>

        <a href={entry.url} target="_blank">
          <h3 className="mt-1 text-lg text-gray-900 dark:text-white">
            {entry.title}
          </h3>
        </a>

        <p className="line-clamp-3 mt-1 text-sm/relaxed text-gray-700 dark:text-gray-300">
          {entry.description}
        </p>
      </div>
    </article>
  );
};

export default Entry;

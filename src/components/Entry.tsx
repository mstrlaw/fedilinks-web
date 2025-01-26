import { parse } from 'tldts';
import { Blurhash } from 'react-blurhash';
import { IEntry } from '../common/types';
import { useEffect, useRef, useState } from 'react';

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

  const formatSource = (source: string) => {
    return parse(source).domain;
  };

  return (
    <article
      ref={ref}
      className="overflow-hidden rounded-lg mb-8 border border-gray-50/10"
    >
      <a href={entry.url} target="_blank">
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
};

export default Entry;

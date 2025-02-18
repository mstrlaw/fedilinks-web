import { IEntry } from '../common/types';
import Entry from './Entry';

interface Props {
  entries: IEntry[];
}

const Listing = ({ entries }: Props) => {
  return (
    <>
      {entries.map((entry) => {
        return <Entry key={entry.id} entry={entry} />;
      })}
    </>
  );
};

export default Listing;

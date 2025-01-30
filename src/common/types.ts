interface IEntry {
  id: string;
  title: string;
  description: string;
  url: string;
  image: string;
  image_description: string;
  blurhash: string;
  source: string;
  provider_name: string;
  updated_at: string;
  publised_at: string;
  uses: string;
}

export type {
  IEntry,
}
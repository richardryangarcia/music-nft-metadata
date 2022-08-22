export type FormattedName = `${string} - ${string}`; // <artist> — <title>
export type ISO8601Date = `${number}-${number}-${number}`; // YYYY-MM-DD
export type MetadataVersions = "music-nft-20220222";

export type Attributes = {
  artist: string;
  project?: string;
  bpm?: number;
  key?: string;
  genre?: string;
  recordLabel?: string;
  license?: string;
};

export type Artwork = {
  uri: string; // ipfs://<CID>
  mimeType: string;
  nft?: string; // caip19 (ref)
};

export type Project = {
  title: string;
  artwork: Artwork;
  description?: string;
  type?: string;
  originalReleaseDate?: ISO8601Date;
  recordLabel?: string;
  publisher?: string;
  upc?: string;
};

export type Visualizer = {
  uri: string; // ipfs://<CID>
  mimeType: string;
  nft?: string; // caip19 (ref)
};

export type Lyrics = {
  text: string;
  nft?: string; // caip19 (ref)
};

export type Credit = {
  name: string;
  collaboratorType?: string;
};

export type OpenSeaStandardValues = {
  image: string;
  name: FormattedName;
  external_url: string;
  animation_url: string;
  attributes: Attributes;
};

export type RequiredValues = {
  version: MetadataVersions;
  title: string;
  artist: string;
  duration: number;
  mimeType: string;
  trackNumber: number;
  losslessAudio: string;
  artwork: Artwork;
};

export type OptionalValues = {
  description?: string;
  genre?: string;
  tags?: string[];
  bpm?: number;
  key?: string; // open key notation (e.g. 6a)
  isrc?: string;
  locationCreated?: string;
  originalReleaseDate?: ISO8601Date;
  recordLabel?: string;
  publisher?: string;
  lyrics?: Lyrics;
  credits?: Credit[];
  project?: Project;
  visualizer?: Visualizer;
};

export type MusicNftMetadataSchema = RequiredValues &
  OptionalValues &
  OpenSeaStandardValues;

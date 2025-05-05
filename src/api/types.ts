/**
 * Represents a Track search result from Deezer API.
 */
export type TrackSearchResult = {
  /** The track's Deezer id */
  id: number;
  /** True if the track is readable in the player for the current user */
  readable: boolean;
  /** The track's full title */
  title: string;
  /** The track's short title */
  title_short: string;
  /** The track version */
  title_version: string;
  /** The URL of the track on Deezer */
  link: string;
  /** The track's duration in seconds */
  duration: number;
  /** The track's Deezer rank */
  rank: number;
  /** Whether the track contains explicit lyrics */
  explicit_lyrics: boolean;
  /** The URL of track's preview file (first 30 seconds) */
  preview: string;
  /** The artist of the track */
  artist: Artist;
  /** The album the track belongs to */
  album: Album;
};

/**
 * Represents a Track object from the Deezer API.
 */
export interface Track {
  /** The track's Deezer ID */
  id: number;

  /** True if the track is readable in the player for the current user */
  readable: boolean;

  /** The track's full title */
  title: string;

  /** The track's short title */
  title_short: string;

  /** The track version */
  title_version: string;

  /** The track unseen status */
  unseen: boolean;

  /** The track ISRC code */
  isrc: string;

  /** The URL of the track on Deezer */
  link: string;

  /** The share link of the track on Deezer */
  share: string;

  /** The track's duration in seconds */
  duration: number;

  /** The position of the track in its album */
  track_position: number;

  /** The track's album disk number */
  disk_number: number;

  /** The track's Deezer rank */
  rank: number;

  /** The track's release date (YYYY-MM-DD) */
  release_date: string;

  /** Whether the track contains explicit lyrics */
  explicit_lyrics: boolean;

  /** Explicit content lyrics rating (0: Not Explicit, 1: Explicit, 2: Unknown, 3: Edited, 6: No Advice Available) */
  explicit_content_lyrics: number;

  /** Explicit cover rating (0: Not Explicit, 1: Explicit, 2: Unknown, 3: Edited, 6: No Advice Available) */
  explicit_content_cover: number;

  /** The URL of the track's preview file (first 30 seconds) */
  preview: string;

  /** Beats per minute */
  bpm: number;

  /** Signal strength */
  gain: number;

  /** List of ISO country codes where the track is available */
  available_countries: string[];

  /** An alternative readable track if the current track is not readable */
  alternative?: Track;

  /** List of contributors on the track */
  contributors: Artist[];

  /** MD5 hash of the image */
  md5_image: string;

  /** Track token for media service */
  track_token: string;

  /** The artist object */
  artist: Artist;

  /** The album object */
  album: Album;
}

/**
 * Represents an Artist object from the Deezer API.
 */
export interface Artist {
  id: number;
  name: string;
  link: string;
  share: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  nb_album: number;
  nb_fan: number;
  radio: boolean;
  tracklist: string;
  role?: string;
}

/**
 * Represents an Album object from the Deezer API.
 */
export interface Album {
  /** The album's Deezer id */
  id: number;
  /** The album title */
  title: string;
  /** The URL of the album's cover */
  cover: string;
  /** The URL of the album's cover in size small */
  cover_small: string;
  /** The URL of the album's cover in size medium */
  cover_medium: string;
  /** The URL of the album's cover in size big */
  cover_big: string;
  /** The URL of the album's cover in size xl */
  cover_xl: string;
}

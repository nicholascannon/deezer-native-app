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

/**
 * Represents a chart track item from Deezer.
 */
export type ChartTrack = {
  /** The track's Deezer id */
  id: number;
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
  /** The URL of the track's preview file (first 30 seconds) */
  preview: string;
  /** The position of the track in the charts */
  position: number;
  /** The artist object */
  artist: ChartArtistBasic;
  /** The album object */
  album: ChartAlbumBasic;
};

/**
 * Represents a chart album item from Deezer.
 */
export type ChartAlbum = {
  /** The Deezer album id */
  id: number;
  /** The album title */
  title: string;
  /** The URL of the album on Deezer */
  link: string;
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
  /** The record type of the album (EP / ALBUM / etc.) */
  record_type: string;
  /** Whether the album contains explicit lyrics */
  explicit_lyrics: boolean;
  /** The position of the album in the charts */
  position: number;
  /** The artist object */
  artist: ChartArtistBasic;
};

/**
 * Represents a chart artist item from Deezer.
 */
export type ChartArtist = {
  /** The artist's Deezer id */
  id: number;
  /** The artist's name */
  name: string;
  /** The URL of the artist on Deezer */
  link: string;
  /** The URL of the artist picture */
  picture: string;
  /** The URL of the artist picture in size small */
  picture_small: string;
  /** The URL of the artist picture in size medium */
  picture_medium: string;
  /** The URL of the artist picture in size big */
  picture_big: string;
  /** The URL of the artist picture in size xl */
  picture_xl: string;
  /** True if the artist has a smart radio */
  radio: boolean;
  /** The position of the artist in the charts */
  position: number;
};

/**
 * Represents a chart playlist item from Deezer.
 */
export type ChartPlaylist = {
  /** The playlist's Deezer id */
  id: number;
  /** The playlist's title */
  title: string;
  /** Whether the playlist is public */
  public: boolean;
  /** The URL of the playlist on Deezer */
  link: string;
  /** The URL of the playlist's cover */
  picture: string;
  /** The URL of the playlist's cover in size small */
  picture_small: string;
  /** The URL of the playlist's cover in size medium */
  picture_medium: string;
  /** The URL of the playlist's cover in size big */
  picture_big: string;
  /** The URL of the playlist's cover in size xl */
  picture_xl: string;
  /** The position of the playlist in the charts */
  position: number;
  /** The user object (creator of the playlist) */
  user: ChartUser;
};

/**
 * Represents a chart podcast item from Deezer.
 */
export type ChartPodcast = {
  /** The podcast's Deezer id */
  id: number;
  /** The podcast's title */
  title: string;
  /** The podcast's description */
  description: string;
  /** Whether the podcast is available */
  available: boolean;
  /** The number of podcast's fans */
  fans: number;
  /** The URL of the podcast on Deezer */
  link: string;
  /** The share link of the podcast on Deezer */
  share: string;
  /** The URL of the podcast's cover */
  picture: string;
  /** The URL of the podcast's cover in size small */
  picture_small: string;
  /** The URL of the podcast's cover in size medium */
  picture_medium: string;
  /** The URL of the podcast's cover in size big */
  picture_big: string;
  /** The URL of the podcast's cover in size xl */
  picture_xl: string;
  /** The position of the podcast in the charts */
  position: number;
};

/**
 * Basic artist details used in nested objects.
 */
export type ChartArtistBasic = {
  /** The artist's Deezer id */
  id: number;
  /** The artist's name */
  name: string;
  /** The URL of the artist on Deezer */
  link: string;
  /** The URL of the artist picture */
  picture: string;
  /** The URL of the artist picture in size small */
  picture_small: string;
  /** The URL of the artist picture in size medium */
  picture_medium: string;
  /** The URL of the artist picture in size big */
  picture_big: string;
  /** The URL of the artist picture in size xl */
  picture_xl: string;
  /** True if the artist has a smart radio */
  radio: boolean;
};

/**
 * Basic album details used in nested objects.
 */
export type ChartAlbumBasic = {
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
};

/**
 * Represents a user (playlist creator).
 */
export type ChartUser = {
  /** The user's Deezer id */
  id: number;
  /** The user's name */
  name: string;
};

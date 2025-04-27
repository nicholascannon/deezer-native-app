/**
 * Represents a Track object from Deezer API.
 */
export type Track = {
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
  artist: {
    /** The artist's Deezer id */
    id: number;
    /** The artist's name */
    name: string;
    /** The URL of the artist on Deezer */
    link: string;
    /** The URL of the artist's picture */
    picture: string;
    /** The URL of the artist's picture in small size */
    picture_small: string;
    /** The URL of the artist's picture in medium size */
    picture_medium: string;
    /** The URL of the artist's picture in big size */
    picture_big: string;
    /** The URL of the artist's picture in xl size */
    picture_xl: string;
    /** Number of albums the artist has */
    nb_album: number;
    /** Number of fans the artist has */
    nb_fan: number;
    /** True if the artist has a smart radio */
    radio: boolean;
    /** API link to the artist’s top tracks */
    tracklist: string;
    /** Whether the artist is selected for tracking */
    type: string; // assuming type: "artist"
  };
  /** The album the track belongs to */
  album: {
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
};

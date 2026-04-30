export interface Album {
  title: string;
  year: number;
  spotifyAlbumId?: string; // for embed
  bandcampUrl?: string;
  appleMusicUrl?: string;
  description?: string;
}

export const discography: Album[] = [
  {
    title: 'Chaos Will Reign',
    year: 2023,
    description:
      'Heavier riffs, intricate compositions. Critically praised across the metal underground.',
  },
  {
    title: 'Obliterate the Weak',
    year: 2020,
    description: 'Debut full-length. Raw, uncompromising old-school death metal.',
  },
];

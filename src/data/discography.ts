export interface Album {
  title: string;
  year: number;
  spotifyAlbumId?: string;
  bandcampUrl?: string;
  appleMusicUrl?: string;
  description?: string;
}

export const discography: Album[] = [
  {
    title: 'Chaos Will Reign',
    year: 2023,
    spotifyAlbumId: '4OW41m3Iy7Y71oHkJBas40',
    description:
      'Heavier riffs, intricate compositions. Critically praised across the metal underground.',
  },
  {
    title: 'Obliterate the Weak',
    year: 2020,
    spotifyAlbumId: '51yR1QpLDen7ItPqSU11Cy',
    description: 'Debut full-length. Raw, uncompromising old-school death metal.',
  },
];

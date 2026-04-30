export interface Show {
  date: string;          // ISO 8601 e.g. '2026-06-05T19:10:00+02:00'
  city: string;
  country: string;       // ISO country name
  venue: string;
  ticketUrl?: string;
  festival?: string;     // optional festival name
  soldOut?: boolean;
}

// Full schedule — past shows are filtered out automatically by ShowsList,
// but kept here so the Bio/Press pages can render the band's gig history.
export const shows: Show[] = [
  // === Upcoming ===
  {
    date: '2026-06-05T19:10:00+02:00',
    city: 'Slavičín',
    country: 'Czechia',
    venue: 'Army Park',
    festival: 'HARD Karpaty Fest 2026',
    ticketUrl: 'https://www.hardkarpatyfest.cz/',
  },
  {
    date: '2026-06-13T20:00:00+02:00',
    city: 'Hauptmannsgrün',
    country: 'Germany',
    venue: 'Festivalgelände',
    festival: 'Chronical Moshers Open Air 2026',
    ticketUrl: 'https://www.chronical-moshers.de/',
    soldOut: true,
  },

  // === Past ===
  {
    date: '2025-07-26T09:30:00+02:00',
    city: 'Steenwijk',
    country: 'Netherlands',
    venue: 'Stationsplein 1',
    festival: 'Stonehenge Festival 2025',
  },
  {
    date: '2025-06-21T17:30:00+02:00',
    city: 'Protzen',
    country: 'Germany',
    venue: 'Festivalgelände Lüchfelderstraße',
    festival: 'Protzen Open Air 2025',
  },
  {
    date: '2025-01-04T20:00:00+01:00',
    city: 'Zwolle',
    country: 'Netherlands',
    venue: 'Hedon Grote Zaal',
  },
  {
    date: '2020-02-28T20:00:00+01:00',
    city: 'Umeå',
    country: 'Sweden',
    venue: 'House of Metal',
    festival: 'House of Metal 2020',
  },
];

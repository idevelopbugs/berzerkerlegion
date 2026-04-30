export const site = {
  name: 'Berzerker Legion',
  tagline: 'International Death Metal',
  domain: 'berzerkerlegion.com',
  url: 'https://berzerkerlegion.com',
  foundingDate: '2016',
  genre: 'Death Metal',
  description:
    'Berzerker Legion is an international death metal band formed in 2016 by members of Hypocrisy, Asphyx, Dark Funeral and Vader. Old-school brutality, solid harmonies, relentless energy.',
} as const;

export const social = {
  spotify: 'https://open.spotify.com/artist/72MD4qOT5kUc5FMZ8eqxkX',
  youtube: 'https://www.youtube.com/@berzerkerlegion6477',
  instagram: 'https://www.instagram.com/berzerker_legion',
  facebook: 'https://www.facebook.com/berzerkerlegion',
  linktree: 'https://linktr.ee/berzerkerlegion',
} as const;

// Email kept split so the literal string never appears as a single token in source.
// Used by ObfuscatedEmail.astro to render anti-spambot markup.
export const bookingEmailParts = {
  user: ['legion', 'berzerker'],
  domain: 'gmail',
  tld: 'com',
} as const;

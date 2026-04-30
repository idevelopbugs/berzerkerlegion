export interface Member {
  name: string;
  role: string;
  formerOf?: string[];
}

export const members: Member[] = [
  { name: 'Harris Sopovic', role: 'Vocals, Bass' },
  { name: 'Tomas Elofsson', role: 'Guitar' },
  { name: 'Alwin Zuur', role: 'Guitar' },
];

export const formerBands = ['Hypocrisy', 'Asphyx', 'Dark Funeral', 'Vader'];

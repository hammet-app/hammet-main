export interface Photo {
  src: string;
  venue: string;
}
const venues = [
  'FUTO',
  'FUTO',
  'FUTO',
  'UNILAG',
  'UNILAG',
  'FUTO',
  'UNILAG',
  'UNILAG',
  '',
  'FUTO',
  'UNILAG',
  'UNILAG',
  'FUTO',
  'UNILAG',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
];
/** 24 event photos in /public/assets/gallery */
export const PHOTOS: Photo[] = venues.map((v, i) => ({
  src: `/assets/gallery/g${String(i + 1).padStart(2, '0')}.jpg`,
  venue: v,
}));
/** Photos used by the rotating page background (indexes into PHOTOS). */
export const BG_INDEXES = [0, 3, 6, 8, 19, 14];
export const caption = (p: Photo) =>
  p.venue ? `Konoha Financial Conference · ${p.venue}` : 'Konoha Financial Conferences';

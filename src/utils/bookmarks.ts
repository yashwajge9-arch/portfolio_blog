// Helper for bookmarking videos and articles in the app (persisted in localStorage)

const BOOKMARKS_KEY = 'alexvance_bookmarks';

export interface BookmarkItem {
  id: string;
  type: 'video' | 'post';
  title: string;
  subtitle: string;
  url: string;
  thumbnail: string;
  savedAt: number;
}

export const getBookmarks = (): BookmarkItem[] => {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(BOOKMARKS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const isBookmarked = (id: string): boolean => {
  const all = getBookmarks();
  return all.some((item) => item.id === id);
};

export const toggleBookmark = (item: Omit<BookmarkItem, 'savedAt'>): boolean => {
  if (typeof window === 'undefined') return false;
  try {
    const all = getBookmarks();
    const existingIndex = all.findIndex((b) => b.id === item.id);
    let updated: BookmarkItem[];
    let nowSaved = false;

    if (existingIndex >= 0) {
      updated = all.filter((b) => b.id !== item.id);
      nowSaved = false;
    } else {
      updated = [{ ...item, savedAt: Date.now() }, ...all];
      nowSaved = true;
    }

    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('bookmarks-updated'));
    return nowSaved;
  } catch {
    return false;
  }
};

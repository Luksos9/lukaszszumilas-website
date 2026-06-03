import { en } from './en';
import { pl } from './pl';

export const defaultLang = 'en' as const;
export const languages = { en: 'English', pl: 'Polski' } as const;
export type Lang = keyof typeof languages;

/** BCP-47 codes used for <html lang>, og:locale, hreflang. */
export const localeCodes: Record<Lang, string> = { en: 'en', pl: 'pl' };
export const ogLocales: Record<Lang, string> = { en: 'en_US', pl: 'pl_PL' };

const dict: Record<Lang, Record<string, unknown>> = { en, pl };

/** Detect the active language from a URL's first path segment. */
export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split('/').filter(Boolean)[0];
  return seg && seg in languages ? (seg as Lang) : defaultLang;
}

function lookup(obj: Record<string, unknown>, path: string): unknown {
  return path.split('.').reduce<unknown>((o, k) => (o == null ? o : (o as Record<string, unknown>)[k]), obj);
}

/** Translator with English fallback for missing keys. */
export function useTranslations(lang: Lang) {
  return function t<T = string>(path: string): T {
    const v = lookup(dict[lang], path);
    return (v !== undefined ? v : lookup(dict[defaultLang], path)) as T;
  };
}

/**
 * Rewrite an internal path for a target language.
 * Default lang => no prefix; others => `/<lang>` prefix. Hashes and external
 * URLs (http, mailto) are preserved/untouched. Honors trailing-slash routing.
 */
export function localizePath(path: string, lang: Lang): string {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  const [rawPath, hash] = path.split('#');
  const segs = (rawPath.startsWith('/') ? rawPath : '/' + rawPath).split('/').filter(Boolean);
  if (segs[0] && segs[0] in languages) segs.shift();
  let base = '/' + segs.join('/');
  if (base !== '/' && !base.endsWith('/')) base += '/';
  const localized = lang === defaultLang ? base : '/' + lang + base;
  return hash ? `${localized}#${hash}` : localized;
}

/** The equivalent path of the current page in another language (picker + hreflang). */
export function getAltPath(currentPath: string, lang: Lang): string {
  return localizePath(currentPath, lang);
}

/**
 * Locale-stripped paths that have a non-default-locale version built.
 * Grows as more pages are translated (Phase 2+). Keep entries trailing-slashed.
 */
export const translatedPaths = new Set<string>([
  '/', '/contact/', '/case-studies/', '/about/', '/services/',
]);

/** Strip a leading locale segment, returning the canonical (default-locale) path. */
export function stripLocale(path: string): string {
  const segs = (path || '/').split('/').filter(Boolean);
  if (segs[0] && segs[0] in languages) segs.shift();
  let p = '/' + segs.join('/');
  if (p !== '/' && !p.endsWith('/')) p += '/';
  return p;
}

export function isTranslated(path: string): boolean {
  return translatedPaths.has(stripLocale(path.split('#')[0]));
}

/**
 * Localize a nav/link href, but only point at a non-default locale when that page
 * actually exists in it; otherwise fall back to the (always-present) English page.
 */
export function localizeForNav(path: string, lang: Lang): string {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  if (lang === defaultLang) return localizePath(path, defaultLang);
  return isTranslated(path) ? localizePath(path, lang) : localizePath(path, defaultLang);
}

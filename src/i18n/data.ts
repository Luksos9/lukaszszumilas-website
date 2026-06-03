import type { Lang } from './ui';
import { defaultLang, localizeForNav } from './ui';
import { pl } from './pl';
import { primaryNav, footerNav } from '../data/nav';
import { services as servicesEn } from '../data/services';
import { problems as problemsEn } from '../data/problems';
import { caseStudies as caseStudiesEn } from '../data/caseStudies';
import { framework as frameworkEn } from '../data/framework';

type Dict = Record<string, string>;
const navPl = pl.nav as unknown as Dict;
const titlesPl = pl.footerTitles as unknown as Dict;
const itemsPl = pl.footerItems as unknown as Dict;
const servicesPl = pl.services as unknown as Record<string, { title?: string; tagline?: string; flow?: string[] }>;
const problemsPl = pl.problems as unknown as Record<string, { title: string; body: string; outcome: string }>;
const severityPl = pl.severity as unknown as Dict;
const caseStudiesPl = pl.caseStudies as unknown as Record<
  string,
  { sector: string; title: string; situation: string; action: string; outcome: string }
>;
const frameworkPl = pl.framework as unknown as Record<string, { title: string; body: string }>;

/** Primary nav with localized labels + localized internal hrefs. */
export function getPrimaryNav(lang: Lang) {
  return primaryNav.map((item) => ({
    ...item,
    label: lang !== defaultLang && navPl[item.href] ? navPl[item.href] : item.label,
    href: item.external ? item.href : localizeForNav(item.href, lang),
  }));
}

/** Footer columns with localized titles, labels, and internal hrefs. */
export function getFooterNav(lang: Lang) {
  return footerNav.map((col) => ({
    title: lang !== defaultLang && titlesPl[col.title] ? titlesPl[col.title] : col.title,
    items: col.items.map((it) => ({
      ...it,
      label: lang !== defaultLang && itemsPl[it.href] ? itemsPl[it.href] : it.label,
      href: it.external ? it.href : localizeForNav(it.href, lang),
    })),
  }));
}

/** Services with localized title/tagline/flow (structure kept from src/data). */
export function getServices(lang: Lang) {
  if (lang === defaultLang) return servicesEn;
  return servicesEn.map((s) => {
    const o = servicesPl[s.anchor] || {};
    return {
      ...s,
      title: o.title ?? s.title,
      tagline: o.tagline ?? s.tagline,
      flow: (o.flow as typeof s.flow) ?? s.flow,
    };
  });
}

/** Problems ledger; adds localized `severityLabel` (English `severity` kept for logic). */
export function getProblems(lang: Lang) {
  return problemsEn.map((p) => {
    if (lang === defaultLang) return { ...p, severityLabel: p.severity as string };
    const o = problemsPl[p.icon] || ({} as Partial<(typeof problemsEn)[number]>);
    return {
      ...p,
      title: o.title ?? p.title,
      body: o.body ?? p.body,
      outcome: o.outcome ?? p.outcome,
      severityLabel: severityPl[p.severity] ?? p.severity,
    };
  });
}

/** Operations Improvement Loop steps with localized title/body. */
export function getFramework(lang: Lang) {
  if (lang === defaultLang) return frameworkEn;
  return frameworkEn.map((s) => {
    const o = frameworkPl[String(s.n)] || {};
    return { ...s, title: o.title ?? s.title, body: o.body ?? s.body };
  });
}

/** Case studies with localized copy. */
export function getCaseStudies(lang: Lang) {
  if (lang === defaultLang) return caseStudiesEn;
  return caseStudiesEn.map((c) => {
    const o = caseStudiesPl[c.title] || {};
    return {
      ...c,
      sector: o.sector ?? c.sector,
      title: o.title ?? c.title,
      situation: o.situation ?? c.situation,
      action: o.action ?? c.action,
      outcome: o.outcome ?? c.outcome,
    };
  });
}

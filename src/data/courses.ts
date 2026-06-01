export interface Course {
  code: string;
  title: string;
  blurb: string;
  /** Outbound link to the course (Lucky X product site). */
  url: string;
}

/**
 * Featured Lucky X courses surfaced on the personal site. The personal site
 * does NOT duplicate the catalog — these link OUT to luckyx.dev / Udemy.
 * TODO(confirm): swap each url for the exact per-course deep link.
 */
export const featuredCourses: Course[] = [
  {
    code: 'CIS-DF',
    title: 'CIS · Data Foundations (CMDB / CSDM)',
    blurb:
      'The flagship. 400+ questions with sourced explanations for the Data Foundations exam.',
    url: 'https://luckyx.dev',
  },
  {
    code: 'CAD',
    title: 'Certified Application Developer',
    blurb: 'Scripting, scoped apps, and the platform APIs the CAD exam actually tests.',
    url: 'https://luckyx.dev',
  },
  {
    code: 'CIS-ITSM',
    title: 'Implementation Specialist · ITSM',
    blurb: 'Incident, Problem, Change, and the configuration questions that trip people up.',
    url: 'https://luckyx.dev',
  },
];

export const teachingStats = {
  students: '10,000+',
  rating: '4.6',
  courses: '18',
  questions: '4,800+',
};

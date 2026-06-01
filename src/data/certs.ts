export interface Cert {
  code: string;
  name: string;
  group: 'servicenow' | 'ai';
}

/**
 * Representative certifications. Lukasz holds 17 ServiceNow certifications,
 * each passed on the first attempt. These are the headline ones plus the
 * AI track.
 */
export const certs: Cert[] = [
  { code: 'CSA', name: 'Certified System Administrator', group: 'servicenow' },
  { code: 'CAD', name: 'Certified Application Developer', group: 'servicenow' },
  { code: 'CIS-ITSM', name: 'Implementation Specialist, ITSM', group: 'servicenow' },
  { code: 'CIS-Discovery', name: 'Implementation Specialist, Discovery', group: 'servicenow' },
  { code: 'CIS-HRSD', name: 'Implementation Specialist, HR Service Delivery', group: 'servicenow' },
  { code: 'CIS-DF', name: 'Data Foundations (CMDB / CSDM)', group: 'servicenow' },
  { code: 'AI Agents', name: 'ServiceNow AI Agents (micro-certification)', group: 'ai' },
  { code: 'Now Assist', name: 'ServiceNow Now Assist / AI Solutions', group: 'ai' },
  { code: 'CCA-F', name: 'Anthropic Claude fundamentals (in progress)', group: 'ai' },
];

export const certStats = {
  total: '17',
  passedFirstTry: 'every one, first attempt',
};

export interface ValueStreamStage {
  stage: string;
  ai: string;
}

/**
 * Where AI actually helps along the operational value stream. Each stage of
 * how work flows, paired with the AI assist that earns its place there.
 */
export const valueStream: ValueStreamStage[] = [
  { stage: 'Knowledge', ai: 'Knowledge search' },
  { stage: 'Requests', ai: 'AI-assisted routing' },
  { stage: 'Approvals', ai: 'Automated classification' },
  { stage: 'Workflows', ai: 'Suggested responses' },
  { stage: 'Resolution', ai: 'Workflow automation' },
];

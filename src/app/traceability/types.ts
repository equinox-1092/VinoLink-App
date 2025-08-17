// src/app/traceability/types.ts
export type EventStatus = 'DRAFT' | 'IN_PROGRESS' | 'COMPLETED' | 'FAILED';

export interface Document {
  id: string;
  name: string;
  type: string;
  url: string;
  uploadedAt: string;
  uploadedBy: string;
}

export interface EventParameter {
  name: string;
  value: string | number;
  unit?: string;
  isOutOfRange?: boolean;
  minValue?: number;
  maxValue?: number;
}

export interface TimelineEvent {
  id: string;
  type: string;
  title: string;
  timestamp: string;
  operator: {
    id: string;
    name: string;
    role: string;
  };
  status: EventStatus;
  parameters: EventParameter[];
  documents: Document[];
  notes?: string;
  location?: string;
  batchId?: string;
  plot?: string;
  metadata?: Record<string, any>;
}
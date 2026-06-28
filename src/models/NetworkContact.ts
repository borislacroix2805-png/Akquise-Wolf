export type NetworkStatus =
  | 'neu'
  | 'erstkontakt'
  | 'nicht_erreicht'
  | 'kontakt_hergestellt'
  | 'wiedervorlage'
  | 'kooperation'
  | 'kein_interesse'
  | 'archiv';

export type NetworkCategory =
  | 'architekt'
  | 'makler'
  | 'energieberater'
  | 'dachdecker'
  | 'elektriker'
  | 'solarteur'
  | 'hausverwaltung'
  | 'bauunternehmen'
  | 'kommune'
  | 'industrie'
  | 'gewerbe'
  | 'sonstige';

export interface NetworkHistory {
  id: string;
  date: string;
  action: string;
  note?: string;
  userId?: string;
}

export interface NetworkContact {
  id: string;

  company: string;
  contact: string;

  category: NetworkCategory;
  status: NetworkStatus;

  phone?: string;
  mobile?: string;
  email?: string;
  website?: string;

  street?: string;
 zip?: string;
  city?: string;
  country?: string;

  recommendationSource?: string;

  owner?: string;

  nextAction?: string;
  nextContact?: string;
  lastContact?: string;

  tags: string[];

  notes: string[];

  history: NetworkHistory[];

  createdAt: string;
  updatedAt: string;
}

export const networkStatusLabels: Record<NetworkStatus, string> = {
  neu: 'Neu',
  erstkontakt: 'Erstkontakt',
  nicht_erreicht: 'Nicht erreicht',
  kontakt_hergestellt: 'Kontakt hergestellt',
  wiedervorlage: 'Wiedervorlage',
  kooperation: 'Kooperation',
  kein_interesse: 'Kein Interesse',
  archiv: 'Archiv',
};

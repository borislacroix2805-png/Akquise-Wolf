export type Area = 'kunden' | 'netzwerk';
export type LeadStatus = 'Neu'|'Anrufen'|'Nicht erreicht 1'|'Nicht erreicht 2'|'Nicht erreicht 3'|'Mail 1 gesendet'|'Mail 2 gesendet'|'Termin'|'Angebot'|'Nachfassen'|'Gewonnen'|'Verloren'|'Kontakt hergestellt'|'Kennenlerntermin'|'Aktiver Partner'|'Archiv';
export type Priority='Niedrig'|'Mittel'|'Hoch'|'Sofort';
export type UserRole='Admin'|'Teamleiter'|'Vertrieb'|'Netzwerk';
export interface User { id:string; name:string; role:UserRole; avatar:string; }
export interface Lead { id:string; area:Area; company:string; contact:string; role?:string; phone:string; mobile?:string; email:string; website?:string; street?:string; zip?:string; city:string; category:string; source:string; owner:string; status:LeadStatus; priority:Priority; note:string; nextAction:string; dueDate:string; attempts:number; createdAt:string; updatedAt:string; }
export interface SessionStats { calls:number; reached:number; appointments:number; notReached:number; contacts:number; startedAt:string|null; }
